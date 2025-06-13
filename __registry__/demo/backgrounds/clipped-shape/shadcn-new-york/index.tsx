import {
  ClippedShape,
  ClippedShapeBg,
  ClippedShapeBorder,
} from '@/__registry__/backgrounds/clipped-shape/shadcn-new-york';

export function ClippedShapeDemo() {
  return (
    <div className="w-full relative p-6  place-content-center">
      <ClippedShape
        clipHeight={40}
        className="text-secondary w-96 h-64 flex flex-col justify-between py-4 px-6"
      >
        <ClippedShapeBg className="bg-primary" />
        <ClippedShapeBorder className="bg-yellow-500" />

        <h2 className="text-4xl block text-right font-semibold tracking-tighter">
          +100
        </h2>

        <h3 className="text-3xl font-semibold max-w-[8ch]">Website Created</h3>
      </ClippedShape>
    </div>
  );
}
