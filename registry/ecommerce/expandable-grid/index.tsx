'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import { createPortal } from 'react-dom';

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

const GridCellContext = React.createContext<{
  isExpanded: boolean;
  index: number;
} | null>(null);

function useGridCellContext() {
  const context = React.useContext(GridCellContext);
  if (!context) {
    throw new Error(
      'useGridCellContext must be used within ExpandableGridCell',
    );
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
  activeOrigin: { x: number; y: number } | null = null,
): TransformValues {
  // Temporarily remove transform and transition to get true original layout positions
  const originalTransform = gridElement.style.transform;
  const originalTransition = gridElement.style.transition;
  gridElement.style.transition = 'none';
  gridElement.style.transform = 'none';

  const cellRect = cellElement.getBoundingClientRect();
  const gridRect = gridElement.getBoundingClientRect();

  // Restore immediately
  gridElement.style.transition = originalTransition;
  gridElement.style.transform = originalTransform;

  const cellCenterXRelative =
    cellRect.left - gridRect.left + cellRect.width / 2;
  const cellCenterYRelative = cellRect.top - gridRect.top + cellRect.height / 2;

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

  // If we already have an active origin (because an item is already expanded),
  // we keep the same origin to avoid layout jumps during the transition.
  let originX = cellCenterXRelative;
  let originY = cellCenterYRelative;

  if (activeOrigin) {
    originX = activeOrigin.x;
    originY = activeOrigin.y;
  }

  // Calculate tx/ty required to move the cell's center to the viewport center,
  // taking into account the fixed transformOrigin.
  const tx =
    viewportCenterX -
    gridRect.left -
    originX -
    finalScale * (cellCenterXRelative - originX);
  const ty =
    viewportCenterY -
    gridRect.top -
    originY -
    finalScale * (cellCenterYRelative - originY);

  return {
    tx,
    ty,
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
  const activeOriginRef = React.useRef<{ x: number; y: number } | null>(null);
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
        activeOriginRef.current,
      );

      activeOriginRef.current = { x: originX, y: originY };

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
      activeOriginRef.current = null;
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
        activeOriginRef.current,
      );

      activeOriginRef.current = { x: originX, y: originY };

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

  // Keyboard accessibility (Escape to close, Arrows to navigate)
  React.useEffect(() => {
    if (expandedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setExpandedIndex(null);
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        setExpandedIndex((prev) =>
          prev === null || totalItems === 0 ? null : (prev + 1) % totalItems,
        );
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setExpandedIndex((prev) =>
          prev === null || totalItems === 0
            ? null
            : (prev - 1 + totalItems) % totalItems,
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedIndex, totalItems]);

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
}: React.ComponentPropsWithRef<'div'> & { index: number }) {
  const { expandedIndex, setExpandedIndex, registerCell } = useGridContext();
  const cellRef = React.useRef<HTMLDivElement>(null);
  const isExpanded = expandedIndex === index;
  const isAnyExpanded = expandedIndex !== null;

  React.useEffect(() => {
    if (cellRef.current) {
      registerCell(index, cellRef.current);
    }
  }, [index, registerCell]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isExpanded && !isAnyExpanded) {
      setExpandedIndex(index);
    }
    onClick?.(e);
  };

  return (
    <GridCellContext.Provider value={{ isExpanded, index }}>
      <div
        ref={cellRef}
        aria-expanded={isExpanded}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (!isExpanded && !isAnyExpanded) setExpandedIndex(index);
          }
        }}
        className={cn(
          'relative flex-col flex items-center w-[min(500px,100%)]  transition-opacity',
          isAnyExpanded && !isExpanded && 'opacity-0 pointer-events-none',
          className,
        )}
        onClick={handleClick}
        {...props}
      />
    </GridCellContext.Provider>
  );
}

export function ExpandableGridContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithRef<'div'>) {
  const { isExpanded } = useGridCellContext();

  if (!isExpanded) return null;

  return (
    <div
      className={cn('animate-in fade-in duration-300 ease-out', className)}
      onClick={(e) => e.stopPropagation()}
      {...props}
    >
      {children}
    </div>
  );
}

export function ExpandableGridClose({
  ...props
}: React.ComponentPropsWithRef<'button'>) {
  const { setExpandedIndex } = useGridContext();

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        setExpandedIndex(null);
      }}
      data-slot="expandble-grid-close"
      {...props}
    />
  );
}
export function ExpandbleGridArrow({
  direction,
  ...props
}: React.ComponentProps<'button'> & { direction: 'previous' | 'next' }) {
  const { expandedIndex, totalItems, setExpandedIndex } = useGridContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (expandedIndex === null) return null;
    if (direction === 'previous') {
      setExpandedIndex((expandedIndex - 1 + totalItems) % totalItems);
    } else {
      setExpandedIndex((expandedIndex + 1) % totalItems);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      data-slot="expandble-grid-arrow"
      data-direction={direction}
      {...props}
    />
  );
}
export function ExpandableGridControls({
  className,
  ...props
}: React.ComponentPropsWithRef<'div'>) {
  const { expandedIndex } = useGridContext();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || expandedIndex === null) return null;

  return createPortal(
    <div
      className={cn('fixed top-4 right-4 z-999', className)}
      onClick={(e) => e.stopPropagation()}
      {...props}
    />,
    document.body,
  );
}
