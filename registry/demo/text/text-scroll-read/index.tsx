import {
  ClipText,
  TextScrollRead,
  TextScrollReadWrap,
} from '@/registry/text/text-scroll-read';

export function TextScrollReadDemo() {
  return (
    <div className="relative min-h-screen px-6 md:px-12">
      <TextScrollRead>
        <TextScrollReadWrap className="h-screen my-12 place-content-center md:w-4/5 mx-auto">
          <ClipText className="text-3xl md:text-4xl font-bold tracking-wide leading-normal uppercase ">
            multidisciplinary creative studio specializing in brand strategy,
            product design, and digital experiences.
          </ClipText>
        </TextScrollReadWrap>
      </TextScrollRead>
    </div>
  );
}
