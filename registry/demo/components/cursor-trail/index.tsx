import { CursorTrail } from '@/registry/components/cursor-trail';
import { PawPrintIcon } from 'lucide-react';

export function CursorTrailDemo() {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <div className="overflow-hidden relative border bg-card text-card-foreground w-[200px] aspect-square grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1 justify-center text-center items-center">
        <CursorTrail pixelSize={24} fadeDuration={1500} className="size-full">
          <PawPrintIcon className="stroke-0 fill-current" />
        </CursorTrail>
        <span className="inline text-2xl">😺</span>
      </div>

      <div className="overflow-hidden relative border bg-card text-card-foreground w-[200px] aspect-square grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1 justify-center text-center items-center">
        <CursorTrail
          pixelSize={14}
          fadeDuration={500}
          pixelClassName="bg-blue-700"
          className="size-full"
        />
        <span className="inline text-2xl">◾️</span>
      </div>

      <div className="overflow-hidden relative border bg-card text-card-foreground w-[200px] aspect-square grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1 justify-center text-center items-center">
        <CursorTrail
          pixelSize={12}
          fadeDuration={500}
          pixelClassName="bg-current rounded-full"
          className="size-full aspect-square"
        />
        <span className="inline text-2xl">🛟</span>
      </div>
    </div>
  );
}
