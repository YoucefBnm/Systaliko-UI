import {
  ScrollAnimation,
  ScrollScale,
  ScrollTranslate,
} from '@/__registry__/blocks/scroll-animation/shadcn-default';

export const ScrollAnimationScaleDemo = () => {
  return (
    <ScrollAnimation>
      <ScrollTranslate className="h-dvh  py-8 px-6 flex justify-center items-center">
        <ScrollScale
          className="overflow-hidden rounded-4xl shadow"
          scaleRange={[0.4, 1]}
        >
          <img
            src="https://images.unsplash.com/photo-1608501078713-8e445a709b39?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="tokyo"
            className="max-w-full max-h-full"
          />
        </ScrollScale>
      </ScrollTranslate>
    </ScrollAnimation>
  );
};
