import {
  ScrollAnimation,
  ScrollTranslateX,
  ScrollTranslateY,
} from '@/registry/blocks/scroll-animation';

export function ScrollAnimationTranslateXDemo() {
  return (
    <ScrollAnimation>
      <ScrollTranslateY className="h-dvh py-8 px-6 place-content-center">
        <ScrollTranslateX className=" w-full">
          <h1 className="text-5xl not-first:font-bold tracking-tight uppercase">
            Crafting websites
          </h1>
        </ScrollTranslateX>
        <ScrollTranslateX xRange={[0, -150]} className=" w-full text-right">
          <h1 className="text-primary text-4xl font-bold tracking-tight uppercase">
            in no time
          </h1>
        </ScrollTranslateX>
      </ScrollTranslateY>
    </ScrollAnimation>
  );
}
