'use client';
import { HTMLMotionProps, LayoutGroup, motion } from 'motion/react';
import { cn } from '@/lib/utils';
import React from 'react';

const layout_config = {
  list: {
    mode: 'list',
    className: 'flex flex-col space-y-4',
    label: 'list view',
  },
  col2: {
    mode: 'col2',
    className: 'md:grid md:grid-cols-2 gap-4',
    label: '2 column view',
  },
  col3: {
    mode: 'col3',
    className: 'md:grid md:grid-cols-3 gap-4',
    label: '3 column view',
  },
  col4: {
    mode: 'col4',
    className: 'md:grid md:grid-cols-4 gap-4',
    label: '4 column view',
  },
};
const animation_variants = {
  container: {
    list: { transition: { staggerChildren: 0.02 } },
    col2: { transition: { staggerChildren: 0.1 } },
    col3: { transition: { staggerChildren: 0.15 } },
    col4: { transition: { staggerChildren: 0.2 } },
    auto: { transition: { staggerChildren: 0.25 } },
  },
  card: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
};
interface ToggleLayoutContextValue {
  modeIndex: number;
  setModeIndex: React.Dispatch<React.SetStateAction<number>>;
}
const ToggleLayoutContext = React.createContext<
  ToggleLayoutContextValue | undefined
>(undefined);
function useToggleLayoutContext() {
  const context = React.useContext(ToggleLayoutContext);
  if (context === undefined) {
    throw new Error(
      'useToggleLayoutContext must be used within a ToggleLayoutProvider',
    );
  }
  return context;
}
export function ToggleLayout({
  children,
  ...props
}: React.ComponentProps<typeof LayoutGroup>) {
  const [modeIndex, setModeIndex] = React.useState<number>(0);

  return (
    <ToggleLayoutContext.Provider value={{ modeIndex, setModeIndex }}>
      <LayoutGroup {...props}>{children}</LayoutGroup>
    </ToggleLayoutContext.Provider>
  );
}
export function ToggleLayoutContainer({
  className,
  ...props
}: HTMLMotionProps<'div'>) {
  const { modeIndex } = useToggleLayoutContext();
  const layout_config_values = [...Object.values(layout_config)];

  const currentConfig = layout_config_values[modeIndex];

  return (
    <motion.div
      layout
      variants={animation_variants.container}
      initial="hidden"
      animate={currentConfig.mode}
      className={cn(currentConfig.className, className)}
      {...props}
    />
  );
}

export function SelectLayoutGroup({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { modeIndex, setModeIndex } = useToggleLayoutContext();
  const layout_config_values = [...Object.values(layout_config)];

  return (
    <div
      className={cn(
        'relative flex -space-x-px -space-y-px flex-col items-start md:flex-row justify-start   w-fit',
        className,
      )}
      {...props}
    >
      {layout_config_values.map((config, index) => (
        <div className="relative" id="layout-toggle-button" key={config.mode}>
          <button
            onClick={() => setModeIndex(index)}
            className="appearance-none border  bg-none text-nowrap text-sm px-2.5 font-medium py-2"
          >
            <span className="hover:underline-none">{config.label}</span>
          </button>
          {index === modeIndex && (
            <motion.div
              className="mix-blend-difference z-2 rounded-inherit absolute inset-0 bg-secondary"
              layoutId="layout-toggle-button"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export function ToggleLayoutCell({ ...props }: HTMLMotionProps<'div'>) {
  return (
    <motion.div
      layout
      variants={animation_variants.card}
      initial="hidden"
      animate="visible"
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      exit="hidden"
      {...props}
    />
  );
}
