import { Button } from '@/components/ui/button';
import {
  CustomCursor,
  useSetCursorVariant,
} from '@/__registry__/custom-cursor/default';
import { MapPinIcon } from 'lucide-react';

export function CustomCursorDemo() {
  const {
    handleCustomStyle,
    setCursorVariant,
    cursorChildren,
    cursorVariant,
    setCursorChildren,
    resetCursorChildren,
    resetStyle,
  } = useSetCursorVariant();

  return (
    <div className="container flex justify-between gap-12 flex-wrap items-center py-12 px-6 min-h-svh">
      <CustomCursor variant={cursorVariant} cursorChildren={cursorChildren} />
      <div className="flex flex-1 flex-col gap-4 items-start">
        <h1
          className="text-5xl tracking-tight font-semibold"
          onMouseEnter={() => {
            setCursorChildren(null);
            setCursorVariant({
              mixBlendMode: 'difference',
              backgroundColor: 'red',
              scale: 5,
              borderRadius: '50%',
            });
          }}
          onMouseLeave={() => {
            resetCursorChildren();
            resetStyle();
          }}
        >
          Custom Cursor with multiple{' '}
          <span className="text-indigo-500">animation variants</span>.
        </h1>
        <p className="text-sm max-w-prose">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          doloremque, ipsam excepturi ratione aliquid assumenda, esse, in
          inventore quos nihil possimus reprehenderit. Facere nihil, qui illo
          corrupti corporis commodi animi excepturi? Neque amet a ipsam?
        </p>

        <div className="flex gap-4">
          <Button
            onMouseEnter={() => handleCustomStyle({ scale: 0.4 })}
            onMouseLeave={resetStyle}
            className="bg-indigo-500 text-white"
            size="lg"
          >
            Hover Me
          </Button>
          <Button
            variant={'link'}
            onMouseEnter={() => {
              setCursorVariant('reset');
              setCursorChildren(
                <div className="w-40 h-60 relative pointer-events-none">
                  <img
                    src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="tokyo"
                    className="rounded-md object-cover"
                  />
                </div>,
              );
            }}
            onMouseLeave={() => {
              setCursorVariant({});
              resetCursorChildren();
            }}
            className="text-indigo-500"
            size="lg"
          >
            Visit Tokyo
          </Button>
        </div>
      </div>

      <div
        className="relative w-2/3 md:w-1/3"
        onMouseLeave={() => {
          setCursorChildren(<div className="rounded-full bg-black size-5" />);
          setCursorVariant({});
        }}
        onMouseEnter={() => {
          setCursorVariant({});
          setCursorChildren(
            <Button className="text-white" variant={'link'} size="lg">
              <MapPinIcon />
              Visit Tokyo
            </Button>,
          );
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="tokyo"
          className="rounded-md size-full object-cover"
        />
      </div>
    </div>
  );
}
