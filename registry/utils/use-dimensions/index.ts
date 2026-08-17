'use client';
import { useEffect, useState } from 'react';

export function useDimensions(ref: React.RefObject<HTMLElement | null>) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    resizeObserver.observe(element);

    setDimensions({
      width: element.clientWidth,
      height: element.clientHeight,
    });

    return () => resizeObserver.disconnect();
  }, [ref]);

  return dimensions;
}
