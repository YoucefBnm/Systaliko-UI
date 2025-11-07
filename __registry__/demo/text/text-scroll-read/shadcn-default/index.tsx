import {
  ClipText,
  TextScrollRead,
  TextScrollReadWrap,
} from '@/__registry__/text/text-scroll-read/shadcn-default';

export function TextScrollReadDemo() {
  return (
    <div className="relative min-h-screen px-6 md:px-12">
      <TextScrollRead>
        <TextScrollReadWrap className="h-screen my-12 place-content-center md:w-4/5 mx-auto">
          <ClipText className="text-3xl md:text-4xl font-bold leading-normal uppercase bg-[linear-gradient(-90deg,rgba(0,0,0,0.05)_50%,rgb(0,0,0)_50%)]">
            multidisciplinary creative studio specializing in brand strategy,
            product design, and digital experiences.
          </ClipText>
        </TextScrollReadWrap>
      </TextScrollRead>
    </div>
  );
}
