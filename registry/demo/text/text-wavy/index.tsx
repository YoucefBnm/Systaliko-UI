import { TextWavy } from '@/registry/text/text-wavy';

export function TextWavyDemo() {
  return (
    <div className="flex justify-center items-center size-full">
      <TextWavy
        delayTime={1}
        colors={['rgba(0,0,0,0.5)', 'black', 'rgba(0,0,0,0.5)']}
        fontSizes={['16px', '20px', '16px']}
        className="uppercase  tracking-wider"
        text={"Let's create a wave effect"}
      />
    </div>
  );
}
