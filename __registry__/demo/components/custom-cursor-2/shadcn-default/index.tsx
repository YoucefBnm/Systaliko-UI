'use client';

import {
  CustomCursor,
  useCustomCursor,
} from '@/__registry__/components/custom-cursor/shadcn-default';

function CustomCursor2Content() {
  const { setCursorStyle, setCursorChildren, containerRef } = useCustomCursor();
  const defaultCursorStyle =
    'border border-foreground min-w-5 min-h-5 rounded-full bg-none';
  const handleMouseLeave = () => {
    setCursorChildren(<div className={defaultCursorStyle} />);
    setCursorStyle({ border: 'none', borderRadius: 0 });
  };
  const handleProjectCursor = () => {
    setCursorChildren(
      <div className="bg-foreground/80 text-center border-none text-white aspect-square rounded-full p-4">
        View <br /> Project
      </div>,
    );
  };

  const handleVideoCursor = () => {
    setCursorChildren(
      <div className="shadow overflow-hidden rounded-sm aspect-video w-64">
        <video
          className="relative z-10  max-h-full max-w-full "
          src="https://videos.pexels.com/video-files/8086711/8086711-uhd_2560_1440_25fps.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>,
    );
  };

  return (
    <div
      ref={containerRef}
      className="container relative flex justify-center gap-12 flex-wrap items-center py-12 px-6 min-h-svh"
    >
      <CustomCursor className={defaultCursorStyle} />

      <div className="flex flex-wrap justify-evenly items-center gap-8">
        <div
          className="h-[450px] rounded overflow-hidden shadow"
          onMouseEnter={handleProjectCursor}
          onMouseLeave={handleMouseLeave}
        >
          <img
            width={401}
            height={602}
            alt="project"
            src="https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="max-h-full h-auto w-full"
          />
        </div>
        <div
          className="h-[450px] rounded overflow-hidden shadow"
          onMouseEnter={handleVideoCursor}
          onMouseLeave={handleMouseLeave}
        >
          <img
            width={430}
            height={602}
            alt="asimo robot"
            src="https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="max-h-full h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
export function CustomCursor2Demo() {
  return (
    <CustomCursor.Provider>
      <CustomCursor2Content />
    </CustomCursor.Provider>
  );
}
