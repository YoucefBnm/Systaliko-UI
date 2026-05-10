'use client';

import { cn } from '@/lib/utils';
import React from 'react';
export type ShaderColor = string;

interface BaseShaderProps extends React.ComponentPropsWithRef<'canvas'> {
  colors?: [ShaderColor, ShaderColor, ShaderColor];
  intensity?: number;
  density?: number;
  className?: string;
}

export interface GradientShaderProps extends BaseShaderProps {
  animate?: boolean;
}

export interface HurricaneShaderProps extends BaseShaderProps {
  background?: ShaderColor;
  speed?: number;
}

function resolveColor(
  raw: string,
  contextEl: Element,
): [number, number, number] {
  let color = raw.trim();

  if (color.startsWith('var(')) {
    const varName = color.slice(4, -1).trim();
    color = getComputedStyle(contextEl).getPropertyValue(varName).trim();
  }

  const rgbMatch = color.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
  if (rgbMatch) {
    return [
      parseInt(rgbMatch[1], 10) / 255,
      parseInt(rgbMatch[2], 10) / 255,
      parseInt(rgbMatch[3], 10) / 255,
    ];
  }

  const hex = color.replace('#', '');
  const full =
    hex.length === 3
      ? hex
          .split('')
          .map((c) => c + c)
          .join('')
      : hex;
  return [
    parseInt(full.slice(0, 2), 16) / 255,
    parseInt(full.slice(2, 4), 16) / 255,
    parseInt(full.slice(4, 6), 16) / 255,
  ];
}

function compileShader(
  gl: WebGL2RenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('[shader] Compile error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function linkProgram(
  gl: WebGL2RenderingContext,
  vsSrc: string,
  fsSrc: string,
): WebGLProgram | null {
  const vs = compileShader(gl, gl.VERTEX_SHADER, vsSrc);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, fsSrc);
  if (!vs || !fs) return null;
  const prog = gl.createProgram();
  if (!prog) return null;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error('[shader] Link error:', gl.getProgramInfoLog(prog));
    gl.deleteProgram(prog);
    return null;
  }
  return prog;
}

const QUAD = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);

const GRADIENT_VS = /* glsl */ `#version 300 es
in vec4 a_position;
out vec2 v_uv;

void main() {
  v_uv = a_position.xy * 0.5 + 0.5;
  gl_Position = a_position;
}
`;

const GRADIENT_FS = /* glsl */ `#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 fragColor;

uniform float u_time;
uniform vec2  u_resolution;
uniform vec3  u_color1;
uniform vec3  u_color2;
uniform vec3  u_color3;
// ─── new ───────────────────────────────────────────
uniform float u_intensity; // scales wave amplitude & noise brightness (0–2)
uniform float u_density;   // scales noise grain frequency (0–2)
// ───────────────────────────────────────────────────

// Bayer 4×4 matrix for ordered dithering
const mat4 bayer = mat4(
   0.0/64.0, 32.0/64.0,  8.0/64.0, 40.0/64.0,
  48.0/64.0, 16.0/64.0, 56.0/64.0, 24.0/64.0,
  12.0/64.0, 44.0/64.0,  4.0/64.0, 36.0/64.0,
  60.0/64.0, 28.0/64.0, 52.0/64.0, 20.0/64.0
);

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float bayerDither(vec2 fragCoord) {
  int x = int(mod(fragCoord.x, 4.0));
  int y = int(mod(fragCoord.y, 4.0));
  return bayer[x][y];
}

void main() {
  vec2 uv        = v_uv;
  vec2 fragCoord = uv * u_resolution;
  float timeShift = u_time * 0.25;

  // Wave patterns — amplitude scaled by u_intensity
  float waveAmp = 0.15 * u_intensity;
  float wave1 = sin(uv.x * 3.0 + timeShift)        * cos(uv.y * 2.0 + timeShift * 0.8);
  float wave2 = sin(uv.y * 2.5 - timeShift * 0.6)  * cos(uv.x * 3.5 - timeShift);
  float wave3 = sin((uv.x + uv.y) * 2.0 + timeShift * 1.2);
  float wavePattern = (wave1 + wave2 + wave3) * waveAmp;

  // Animated diagonal gradient
  vec2 gradientDir = vec2(
    cos(timeShift * 0.4) * 0.8 + sin(timeShift * 0.3) * 0.5,
    sin(timeShift * 0.4) * 0.8 + cos(timeShift * 0.3) * 0.5
  );
  float gradientValue = dot(uv - 0.5, gradientDir) + 0.5;

  // Pulsing radial component
  float radial = length(uv - vec2(
    0.5 + sin(timeShift * 0.3) * 0.2,
    0.5 + cos(timeShift * 0.4) * 0.2
  ));
  radial *= (0.8 + sin(timeShift * 0.5) * 0.3);
  gradientValue = mix(gradientValue, radial, 0.4);

  // Wave distortion + slow drift — both scaled by u_intensity
  gradientValue += wavePattern;
  gradientValue += sin(u_time * 0.2 + uv.x * 2.0) * waveAmp;
  gradientValue += cos(u_time * 0.15 + uv.y * 2.5) * waveAmp;
  gradientValue  = clamp(gradientValue, 0.0, 1.0);

  // Smooth three-color blend
  float t1 = smoothstep(0.0, 0.5, gradientValue);
  vec3 blend1 = mix(u_color1, u_color2, t1);
  float t2 = smoothstep(0.3, 1.0, gradientValue);
  vec3 finalColor = mix(blend1, u_color3, t2);

  // Noise grain — frequency scaled by u_density, brightness by u_intensity
  float noiseScale = 200.0 * u_density;
  float noiseValue  = noise(uv * noiseScale + u_time * 0.05) * (0.015 * u_intensity);
  finalColor += noiseValue;

  // Bayer dither — strength scaled by u_intensity
  float ditherValue = bayerDither(fragCoord) - 0.5;
  finalColor += ditherValue * (0.004 * u_intensity);

  // Subtle gamma lift
  finalColor = pow(finalColor, vec3(0.95));

  fragColor = vec4(finalColor, 1.0);
}
`;

const DEFAULT_GRADIENT_COLORS: [string, string, string] = [
  '#8C59D9', // soft purple
  '#D973A6', // soft pink
  '#73A6F2', // soft blue
];

export function ShaderGradient({
  colors = DEFAULT_GRADIENT_COLORS,
  animate = true,
  intensity = 1,
  density = 1,
  className,
  ...props
}: GradientShaderProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const safeIntensity = Math.max(0, intensity);
  const safeDensity = Math.max(0.01, density);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', {
      alpha: false,
      antialias: true,
      powerPreference: 'high-performance',
    });
    if (!gl) {
      console.error('[GradientShader] WebGL2 not supported');
      return;
    }

    const program = linkProgram(gl, GRADIENT_VS, GRADIENT_FS);
    if (!program) return;
    gl.useProgram(program);

    const posLoc = gl.getAttribLocation(program, 'a_position');
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, QUAD, gl.STATIC_DRAW);
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uColor1 = gl.getUniformLocation(program, 'u_color1');
    const uColor2 = gl.getUniformLocation(program, 'u_color2');
    const uColor3 = gl.getUniformLocation(program, 'u_color3');
    const uIntensity = gl.getUniformLocation(program, 'u_intensity');
    const uDensity = gl.getUniformLocation(program, 'u_density');

    const [c1, c2, c3] = colors.map((c) => resolveColor(c, canvas));
    gl.uniform3f(uColor1, ...c1);
    gl.uniform3f(uColor2, ...c2);
    gl.uniform3f(uColor3, ...c3);
    gl.uniform1f(uIntensity, safeIntensity);
    gl.uniform1f(uDensity, safeDensity);

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = Math.floor(canvas.clientWidth * dpr);
      const h = Math.floor(canvas.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
        gl.uniform2f(uResolution, w, h);
      }
    };
    handleResize();

    const ro = new ResizeObserver(() => {
      handleResize();
      if (!animate) renderFrame(0);
    });
    ro.observe(canvas);

    let rafId = 0;

    const renderFrame = (ts: number) => {
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uTime, ts * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    if (animate) {
      const loop = (ts: number) => {
        renderFrame(ts);
        rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);
    } else {
      renderFrame(0);
    }

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      gl.deleteBuffer(buf);
      gl.deleteVertexArray(vao);
      gl.deleteProgram(program);
    };
  }, [colors, animate, safeIntensity, safeDensity]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('block size-full', className)}
      {...props}
    />
  );
}

const PARTICLE_VS = /* glsl */ `#version 300 es
precision highp float;

in vec2  a_position;
in vec3  a_color;
in float a_size;
in float a_alpha;

out vec3  v_color;
out float v_alpha;

uniform vec2  u_resolution;
uniform float u_dpr;

void main() {
  vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
  gl_Position = vec4(clip * vec2(1.0, -1.0), 0.0, 1.0);
  gl_PointSize = a_size * u_dpr * 1.8;
  v_color = a_color;
  v_alpha = a_alpha;
}
`;

const PARTICLE_FS = /* glsl */ `#version 300 es
precision highp float;

in vec3  v_color;
in float v_alpha;
out vec4 fragColor;

void main() {
  vec2  coord = gl_PointCoord - vec2(0.5);
  float dist  = length(coord);

  float alpha = (1.0 - smoothstep(0.0, 0.5, dist)) * v_alpha;
  alpha = pow(alpha, 1.3);

  float core = 1.0 - smoothstep(0.0, 0.2, dist);
  vec3 finalColor = mix(v_color, vec3(1.0), core * 0.4);

  if (alpha <= 0.01) discard;
  fragColor = vec4(finalColor * alpha, alpha); // pre-multiplied alpha
}
`;

const FADE_VS = /* glsl */ `#version 300 es
precision highp float;
in vec2 a_position;
void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
`;

const FADE_FS = /* glsl */ `#version 300 es
precision highp float;
uniform vec3 u_background;
out vec4 fragColor;
void main() { fragColor = vec4(u_background, 0.25); }
`;

class Particle {
  x = 0;
  y = 0;
  angle = 0;
  radius = 0;
  radiusVel = 0;
  angularVel = 0;
  spiralSpeed = 0;
  r = 0;
  g = 0;
  b = 0;
  size = 0;
  life = 0;
  maxLife = 0;
  layer = 0;

  constructor(
    width: number,
    height: number,
    colors: [number, number, number][],
    sizeMultiplier: number,
    speedMultiplier: number,
  ) {
    this.spawn(width, height, colors, sizeMultiplier, speedMultiplier);
  }

  spawn(
    width: number,
    height: number,
    colors: [number, number, number][],
    sizeMultiplier: number,
    speedMultiplier: number,
  ) {
    this.angle = Math.random() * Math.PI * 2;
    this.radius = Math.random() * 80 + 20;
    this.x = width / 2 + Math.cos(this.angle) * this.radius;
    this.y = height / 2 + Math.sin(this.angle) * this.radius;
    this.layer = Math.random();

    // Pick a resolved color
    const [r, g, b] = colors[Math.floor(Math.random() * colors.length)];
    this.r = r;
    this.g = g;
    this.b = b;

    if (this.layer < 0.4) {
      // Inner rays — larger, faster
      this.size = (Math.random() * 3 + 5) * sizeMultiplier;
      this.radiusVel = (Math.random() * 50 + 70) * speedMultiplier;
      this.angularVel = (Math.random() * 1.8 + 1.8) * speedMultiplier;
      this.spiralSpeed = (Math.random() * 0.25 + 0.25) * speedMultiplier;
      this.maxLife = Math.random() * 1.5 + 2;
    } else {
      // Outer swirl — smaller, slower
      this.size = (Math.random() * 2 + 2) * sizeMultiplier;
      this.radiusVel = (Math.random() * 30 + 40) * speedMultiplier;
      this.angularVel = (Math.random() * 2.2 + 1.2) * speedMultiplier;
      this.spiralSpeed = (Math.random() * 0.35 + 0.2) * speedMultiplier;
      this.maxLife = Math.random() * 2.5 + 2;
    }
    this.life = this.maxLife;
  }
}

const DEFAULT_HURRICANE_COLORS: [string, string, string] = [
  '#00f2fe',
  '#4facfe',
  '#ffd700',
];
const DEFAULT_BACKGROUND = '#0a0a0a';
const BASE_PARTICLE_COUNT = 100;

export function ShaderHurricane({
  colors = DEFAULT_HURRICANE_COLORS,
  background = DEFAULT_BACKGROUND,
  intensity = 1,
  density = 1,
  speed = 0.2,
  className,
  ...props
}: HurricaneShaderProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const safeIntensity = Math.max(0, intensity);
  const safeDensity = Math.max(0.1, density);
  const safeSpeed = Math.max(0, speed);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', {
      alpha: false,
      antialias: false,
      depth: false,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance',
    });
    if (!gl) {
      console.error('[HurricaneShader] WebGL2 not supported');
      return;
    }

    const particleProg = linkProgram(gl, PARTICLE_VS, PARTICLE_FS);
    const fadeProg = linkProgram(gl, FADE_VS, FADE_FS);
    if (!particleProg || !fadeProg) return;

    const pLoc = {
      position: gl.getAttribLocation(particleProg, 'a_position'),
      color: gl.getAttribLocation(particleProg, 'a_color'),
      size: gl.getAttribLocation(particleProg, 'a_size'),
      alpha: gl.getAttribLocation(particleProg, 'a_alpha'),
      resolution: gl.getUniformLocation(particleProg, 'u_resolution'),
      dpr: gl.getUniformLocation(particleProg, 'u_dpr'),
    };
    const fLoc = {
      position: gl.getAttribLocation(fadeProg, 'a_position'),
      background: gl.getUniformLocation(fadeProg, 'u_background'),
    };

    const quadBuf = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
    gl.bufferData(gl.ARRAY_BUFFER, QUAD, gl.STATIC_DRAW);

    const resolvedColors = colors.map((c) => resolveColor(c, canvas)) as [
      number,
      number,
      number,
    ][];

    const bgColor = resolveColor(background, canvas);
    const isMobile = window.innerWidth < 768;
    const baseCount = isMobile ? BASE_PARTICLE_COUNT / 2 : BASE_PARTICLE_COUNT;
    const particleCount = Math.round(baseCount * safeDensity);

    const particles = Array.from(
      { length: particleCount },
      () =>
        new Particle(
          window.innerWidth,
          window.innerHeight,
          resolvedColors,
          safeIntensity,
          safeSpeed,
        ),
    );

    const STRIDE = 7;
    const particleData = new Float32Array(particleCount * STRIDE);
    const particleBuf = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, particleBuf);
    gl.bufferData(gl.ARRAY_BUFFER, particleData.byteLength, gl.DYNAMIC_DRAW);

    let width = canvas.clientWidth;
    let height = canvas.clientHeight;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(bgColor[0], bgColor[1], bgColor[2], 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
    };
    const ro = new ResizeObserver(handleResize);
    ro.observe(canvas);
    handleResize();

    const scroll = { velocity: 0 };
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      scroll.velocity = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    let rafId = 0;
    let lastTime = performance.now();

    const render = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      scroll.velocity *= 0.95;
      const scrollBoost = Math.abs(scroll.velocity) * 0.05;
      const cx = width / 2;
      const cy = height / 2;
      const maxRadius = Math.max(width, height) * 0.7;

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.radius += p.radiusVel * dt * (1 + scrollBoost * 0.5);
        p.angle += p.angularVel * dt * (1 + scrollBoost * 0.3);
        p.angle += p.spiralSpeed * (p.radius / 100) * dt;
        p.x = cx + Math.cos(p.angle) * p.radius;
        p.y = cy + Math.sin(p.angle) * p.radius;
        p.life -= dt;

        if (p.life <= 0 || p.radius > maxRadius) {
          p.spawn(width, height, resolvedColors, safeIntensity, safeSpeed);
        }

        const lifePct = p.life / p.maxLife;
        const alpha = Math.min(1, lifePct * 3) * Math.min(1, (1 - lifePct) * 5);
        const off = i * STRIDE;
        particleData[off + 0] = p.x;
        particleData[off + 1] = p.y;
        particleData[off + 2] = p.r;
        particleData[off + 3] = p.g;
        particleData[off + 4] = p.b;
        particleData[off + 5] = p.size;
        particleData[off + 6] = alpha;
      }

      gl.useProgram(fadeProg);
      gl.uniform3f(fLoc.background, bgColor[0], bgColor[1], bgColor[2]);
      gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
      gl.enableVertexAttribArray(fLoc.position);
      gl.vertexAttribPointer(fLoc.position, 2, gl.FLOAT, false, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      gl.useProgram(particleProg);
      gl.bindBuffer(gl.ARRAY_BUFFER, particleBuf);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, particleData);

      const stride4 = STRIDE * 4;
      gl.enableVertexAttribArray(pLoc.position);
      gl.enableVertexAttribArray(pLoc.color);
      gl.enableVertexAttribArray(pLoc.size);
      gl.enableVertexAttribArray(pLoc.alpha);
      gl.vertexAttribPointer(pLoc.position, 2, gl.FLOAT, false, stride4, 0);
      gl.vertexAttribPointer(pLoc.color, 3, gl.FLOAT, false, stride4, 2 * 4);
      gl.vertexAttribPointer(pLoc.size, 1, gl.FLOAT, false, stride4, 5 * 4);
      gl.vertexAttribPointer(pLoc.alpha, 1, gl.FLOAT, false, stride4, 6 * 4);

      gl.uniform2f(pLoc.resolution, width, height);
      gl.uniform1f(pLoc.dpr, Math.min(window.devicePixelRatio || 1, 2));

      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.drawArrays(gl.POINTS, 0, particleCount);

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      gl.deleteProgram(particleProg);
      gl.deleteProgram(fadeProg);
      gl.deleteBuffer(quadBuf);
      gl.deleteBuffer(particleBuf);
    };
  }, [colors, background, safeIntensity, safeDensity, safeSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('size-full touch-none', className)}
      {...props}
    />
  );
}
