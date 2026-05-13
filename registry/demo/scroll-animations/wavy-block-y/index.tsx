import {
  WavyBlock,
  WavyBlockItem,
} from '@/registry/scroll-animations/wavy-block';

const IMAGES = [
  'https://images.unsplash.com/photo-1554797589-7241bb691973?q=80&w=280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1679581858563-3c808d23f0fc?w=280&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1695047034607-c07de67875ab?q=80&w=280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1666043380189-eaa385e15cad?w=280&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
];

export function WavyBlockYDemo() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <WavyBlock
        offset={['start end', 'end start']}
        className="flex h-[160vh] items-center justify-center gap-2 py-16"
      >
        {IMAGES.map((imageUrl, index) => (
          <WavyBlockItem
            axis="y"
            key={index}
            index={index}
            config={{
              baseAmplitude: 120,
              frequency: 42,
              progressScale: 2,
              phaseShiftDeg: 0,
            }}
            className="h-[300px] max-w-[200px] overflow-hidden rounded-2xl ring shadow-xs ring-ring/50"
          >
            <img
              className="size-full object-cover"
              src={imageUrl}
              alt="tokyo"
            />
          </WavyBlockItem>
        ))}
      </WavyBlock>
    </div>
  );
}
