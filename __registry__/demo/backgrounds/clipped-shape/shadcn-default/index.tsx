import { Polygon } from '@/__registry__/backgrounds/clipped-shape/shadcn-default';

export function ClippedShapeDemo() {
  return (
    <div className="w-full relative p-6  place-content-center">
      <Polygon
        className="flex flex-col justify-between bg-primary text-white py-6 px-8 relative w-[450px] h-[280px]"
        borderColor="border-yellow-500"
        clipHeight={40}
        withBorder
      >
        <h1 className="text-right text-6xl tracking-tighter text-yellow-500">
          +100
        </h1>
        <h2 className="max-w-[10ch] text-wrap  text-4xl font-semibold capitalize tracking-tight">
          Created Websites
        </h2>
      </Polygon>
    </div>
  );
}
