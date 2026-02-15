import { Globe, GlobeGlow, GlobePin, GlobeSvg } from '@/registry/blocks/globe';

export function GlobeDemo() {
  return (
    <div className="w-full">
      <Globe>
        <GlobeGlow className="bg-background/50" />
        <GlobeSvg>
          <GlobePin x={280} y={100} />
          {/* Europe */}
          <GlobePin x={640} y={80} />
          {/* Asia */}
          <GlobePin x={900} y={120} />
        </GlobeSvg>
      </Globe>
    </div>
  );
}
