import { TextWavy } from '@/registry/text/text-wavy';

export function TextWavyDemo() {
  return (
    <div className="flex justify-center items-center size-full">
      <TextWavy
        delayTime={1}
        fontSizes={['16px', '20px', '16px']}
        fontWeights={[500, 700, 500]}
        className="uppercase tracking-wider"
        text={"Let's create a wave effect"}
      />
    </div>
  );
}
