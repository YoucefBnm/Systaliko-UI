'use client';
import { cn } from '@/lib/utils';
import React from 'react';

type Breakpoint = [number, number];
const DEFAULT_BREAKPOINTS: Breakpoint[] = [
  [1536, 10],
  [1280, 8],
  [1024, 6],
  [768, 4],
  [640, 2],
  [0, 1],
];

interface TransformValues {
  tx: number;
  ty: number;
  scale: number;
  originX: number;
  originY: number;
}

interface ExpandableGridProps extends React.ComponentPropsWithRef<'div'> {
  breakpoints?: Breakpoint[];
  expandScale?: number;
  transitionDuration?: number;
  padding?: number;
}

interface GridContextValue {
  expandedIndex: number | null;
  totalItems: number;
  setExpandedIndex: (index: number | null) => void;
  registerCell: (index: number, element: HTMLElement) => void;
}

const GridContext = React.createContext<GridContextValue | null>(null);

function useGridContext() {
  const context = React.useContext(GridContext);
  if (!context) {
    throw new Error('useGridContext must be used within ExpandableGrid');
  }
  return context;
}

function getColCount(width: number, breakpoints: Breakpoint[]): number {
  for (const [minWidth, cols] of breakpoints) {
    if (width >= minWidth) return cols;
  }
  return breakpoints[breakpoints.length - 1][1];
}

function calculateTransform(
  cellElement: HTMLElement,
  gridElement: HTMLElement,
  targetScale: number,
  padding: number = 40,
): TransformValues {
  const cellRect = cellElement.getBoundingClientRect();
  const gridRect = gridElement.getBoundingClientRect();

  const originX = cellRect.left - gridRect.left + cellRect.width / 2;
  const originY = cellRect.top - gridRect.top + cellRect.height / 2;
  const cellCenterX = cellRect.left + cellRect.width / 2;
  const cellCenterY = cellRect.top + cellRect.height / 2;
  const viewportCenterX = window.innerWidth / 2;
  const viewportCenterY = window.innerHeight / 2;

  // Calculate available space in viewport (with padding)
  const availableWidth = window.innerWidth - padding * 2;
  const availableHeight = window.innerHeight - padding * 2;

  // Calculate maximum scale that fits in viewport
  const scaleX = availableWidth / cellRect.width;
  const scaleY = availableHeight / cellRect.height;
  const maxScale = Math.min(scaleX, scaleY);

  // Use the smaller of targetScale or maxScale to ensure it fits
  const finalScale = Math.min(targetScale, maxScale);

  return {
    tx: viewportCenterX - cellCenterX,
    ty: viewportCenterY - cellCenterY,
    scale: finalScale,
    originX,
    originY,
  };
}

export function ExpandableGrid({
  breakpoints = DEFAULT_BREAKPOINTS,
  expandScale = 3,
  transitionDuration = 300,
  padding = 24,
  style,
  className,
  ...props
}: ExpandableGridProps) {
  const gridRef = React.useRef<HTMLDivElement>(null);
  const cellRefs = React.useRef<Map<number, HTMLElement>>(new Map());
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);
  const [colCount, setColCount] = React.useState(1);
  const [totalItems, setTotalItems] = React.useState(0);
  const [cssVars, setCssVars] = React.useState({
    tx: 0,
    ty: 0,
    scale: 1,
    originX: '50%',
    originY: '50%',
    opacity: 1,
  });

  const registerCell = React.useCallback(
    (index: number, element: HTMLElement) => {
      cellRefs.current.set(index, element);
      setTotalItems(cellRefs.current.size);
    },
    [],
  );

  // Handle responsive column count
  React.useEffect(() => {
    const updateColCount = () => {
      const width = window.innerWidth;
      setColCount(getColCount(width, breakpoints));
    };
    updateColCount();
    window.addEventListener('resize', updateColCount);
    return () => window.removeEventListener('resize', updateColCount);
  }, [breakpoints]);

  // Recalculate transform on window resize when expanded
  React.useEffect(() => {
    if (expandedIndex === null) return;

    const handleResize = () => {
      const cellElement = cellRefs.current.get(expandedIndex);
      if (!cellElement || !gridRef.current) return;

      const { tx, ty, scale, originX, originY } = calculateTransform(
        cellElement,
        gridRef.current,
        expandScale,
        padding,
      );

      setCssVars({
        tx,
        ty,
        scale,
        originX: `${originX}px`,
        originY: `${originY}px`,
        opacity: 1,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [expandedIndex, expandScale, padding]);

  // Calculate and apply transforms when expanded index changes
  React.useEffect(() => {
    if (expandedIndex === null) {
      setCssVars({
        tx: 0,
        ty: 0,
        scale: 1,
        originX: '50%',
        originY: '50%',
        opacity: 1,
      });
      return;
    }

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      const cellElement = cellRefs.current.get(expandedIndex);
      if (!cellElement || !gridRef.current) return;

      const { tx, ty, scale, originX, originY } = calculateTransform(
        cellElement,
        gridRef.current,
        expandScale,
        padding,
      );

      setCssVars({
        tx,
        ty,
        scale,
        originX: `${originX}px`,
        originY: `${originY}px`,
        opacity: 1,
      });
    });
  }, [expandedIndex, expandScale, padding]);

  // Lock body scroll when expanded
  React.useEffect(() => {
    if (expandedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [expandedIndex]);

  return (
    <GridContext.Provider
      value={{ expandedIndex, totalItems, setExpandedIndex, registerCell }}
    >
      <div
        ref={gridRef}
        className={cn('grid gap-4', className)}
        style={
          {
            '--col-count': colCount,
            gridTemplateColumns: `repeat(var(--col-count), minmax(0, 1fr))`,
            '--tx': `${cssVars.tx}px`,
            '--ty': `${cssVars.ty}px`,
            '--scale': cssVars.scale,
            '--opacity': cssVars.opacity,
            '--duration': `${transitionDuration}ms`,
            transformOrigin: `${cssVars.originX} ${cssVars.originY}`,
            transform: `translate(var(--tx), var(--ty)) scale(var(--scale))`,
            opacity: 'var(--opacity)',
            transition: `transform var(--duration) ease-out, opacity var(--duration) ease-out`,
            padding: `${padding}px`,
            ...style,
          } as React.CSSProperties
        }
        {...props}
      />
    </GridContext.Provider>
  );
}

export function ExpandableGridCell({
  index,
  onClick,
  className,
  ...props
}: React.ComponentPropsWithRef<'button'> & { index: number }) {
  const { expandedIndex, setExpandedIndex, registerCell } = useGridContext();
  const cellRef = React.useRef<HTMLButtonElement>(null);
  const isExpanded = expandedIndex === index;
  const isAnyExpanded = expandedIndex !== null;

  React.useEffect(() => {
    if (cellRef.current) {
      registerCell(index, cellRef.current);
    }
  }, [index, registerCell]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isExpanded) {
      setExpandedIndex(null);
    } else if (!isAnyExpanded) {
      setExpandedIndex(index);
    }
    onClick?.(e);
  };

  return (
    <button
      ref={cellRef}
      className={cn(
        'flex-col flex items-center w-[min(500px, 100%)] cursor-pointer outline-none focus:outline-none active:outline-none transition-opacity',
        isAnyExpanded && !isExpanded && 'opacity-0 pointer-events-none',
        className,
      )}
      onClick={handleClick}
      {...props}
    />
  );
}
