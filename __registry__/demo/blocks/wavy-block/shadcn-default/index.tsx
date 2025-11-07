import {
  WavyBlock,
  WavyBlockItem,
} from '@/__registry__/blocks/wavy-block/shadcn-default';

const titles = [
  'Flexible',
  'Animated',
  'Customizable',
  'Optimized',
  'Lightweight',
  'Responsive',
  'UI Blocks',
];

export function WavyBlockDemo() {
  return (
    <div className="max-w-6xl">
      <WavyBlock className="flex flex-col justify-start items-start gap-6">
        {titles.map((title, index) => (
          <WavyBlockItem key={title} index={index}>
            <h2 className=" text-[5.3vw] font-bold leading-none tracking-tighter uppercase whitespace-nowrap">
              {title}
            </h2>
          </WavyBlockItem>
        ))}
      </WavyBlock>
    </div>
  );
}
