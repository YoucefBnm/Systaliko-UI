import { WavyBlock, WavyBlockItem } from '@/registry/blocks/wavy-block';

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
    <div className="w-full overflow-hidden">
      <WavyBlock className="flex flex-col justify-start items-start gap-6">
        {titles.map((title, index) => (
          <WavyBlockItem key={title} index={index}>
            <h2 className=" text-[7.3vw] font-bold leading-none tracking-tighter uppercase whitespace-nowrap">
              {title}
            </h2>
          </WavyBlockItem>
        ))}
      </WavyBlock>
    </div>
  );
}
