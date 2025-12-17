'use client';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  MotionConfig,
  Variants,
} from 'motion/react';
import React from 'react';

const menuListVariants = {
  open: {
    width: 320,
    height: 420,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    width: 102,
    height: 40,
    transition: { duration: 0.75, delay: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
} as Variants;

const itemVariants = {
  initial: {
    opacity: 0,
  },
  enter: (i: number) => ({
    opacity: 1,
    transition: {
      delay: 0.55 + i * 0.1,
      duration: 0.75,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    transition: {
      delay: 0.25 + -i * 0.1,
    },
  }),
} as Variants;
interface AnimatedMenuContextValue {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface AnimatedMenuListProps extends HTMLMotionProps<'div'> {
  menuListVariants?: Variants;
}
interface AnimatedMenuItemProps extends HTMLMotionProps<'div'> {
  order?: number;
  variants?: Variants;
}
interface AnimatedMenuButtonLabelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  closeLabel?: string;
  openLabel?: string;
}
const AnimatedMenuContext = React.createContext<
  AnimatedMenuContextValue | undefined
>(undefined);
function useAnimatedMenuContext() {
  const context = React.useContext(AnimatedMenuContext);
  if (context === undefined) {
    throw new Error(
      'useAnimatedMenuContext must be used within an AnimatedMenuProvider',
    );
  }
  return context;
}
export function AnimatedMenu({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <AnimatedMenuContext.Provider value={{ isOpen, setIsOpen }}>
      <div {...props} />
    </AnimatedMenuContext.Provider>
  );
}
const buttonIconVariants = cva(
  'flex flex-col gap-1.5 justify-center items-center p-1 relative *:bg-current',
  {
    variants: {
      size: {
        sm: '*:w-4 *:h-px *:w-4 *:h-px *:origin-[20%]',
        md: '*:w-6 *:h-0.5  *:origin-[25%]',
        lg: '*:w-8 *:h-0.5  *:origin-[33%]',
        xl: '*:w-10 *:h-1 *:origin-[31%]',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
);
export function AnimatedMenuButtonToggleIcon({
  className,
  size = 'sm',
  ...props
}: React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof buttonIconVariants>) {
  const { isOpen } = useAnimatedMenuContext();
  return (
    <div
      className={cn(
        buttonIconVariants({
          size,
          className,
        }),
      )}
      {...props}
    >
      <motion.span animate={isOpen ? { rotate: 45 } : { rotate: 0 }} />
      <motion.span animate={isOpen ? { rotate: -45 } : { rotate: 0 }} />
    </div>
  );
}
export function AnimatedMenuButtonLabel({
  closeLabel = 'Menu',
  openLabel = 'Close',
  className,
  ...props
}: AnimatedMenuButtonLabelProps) {
  const { isOpen } = useAnimatedMenuContext();
  return (
    <div
      className={cn(
        'overflow-hidden shrink-0 inline-grid grid-rows-1 grid-cols-1',
        className,
      )}
      {...props}
    >
      <AnimatePresence>
        <motion.span
          key={closeLabel}
          className="will-change-transform col-start-1 row-start-1"
          initial={{ y: '0%' }}
          animate={isOpen ? { y: '-100%' } : { y: '0%' }}
          exit={{ y: '-100%' }}
        >
          {closeLabel}
        </motion.span>
        <motion.span
          key={openLabel}
          className="will-change-transform col-start-1 row-start-1"
          initial={{ y: '100%' }}
          animate={isOpen ? { y: '0%' } : { y: '100%' }}
          exit={{ y: '100%' }}
        >
          {openLabel}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export function AnimatedMenuButton({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  const { setIsOpen } = useAnimatedMenuContext();
  const toggleMenu = () => setIsOpen((prevState) => !prevState);
  return (
    <button
      className={cn(
        'appearance-none relative z-[999] bg-none inline-flex gap-0.5 justify-center items-center',
        '[&:hover>*]:scale-90 *:transition-transform *:duration-300',
        className,
      )}
      onClick={toggleMenu}
      {...props}
    >
      <MotionConfig
        transition={{ duration: 0.35, ease: [0.445, 0.05, 0.55, 0.95] }}
      >
        {children}
      </MotionConfig>
    </button>
  );
}

export function AnimatedMenuList({
  variants = menuListVariants,
  className,
  children,
  ...props
}: AnimatedMenuListProps) {
  const { isOpen } = useAnimatedMenuContext();
  return (
    <motion.div
      className={cn('z-[800] ', className)}
      variants={variants}
      initial="close"
      animate={isOpen ? 'open' : 'close'}
      {...props}
    >
      <AnimatePresence>
        {isOpen && (children as React.ReactNode)}
      </AnimatePresence>
    </motion.div>
  );
}

export function AnimatedMenuItem({
  order = 0,
  variants = itemVariants,
  ...props
}: AnimatedMenuItemProps) {
  return (
    <motion.div
      custom={order}
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      {...props}
    />
  );
}

export function CloseAnimatedMenu({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  const { setIsOpen } = useAnimatedMenuContext();
  const closeMenu = () => setIsOpen(false);
  return (
    <button
      className={cn(
        'appearance-none bg-none outline-none border-none',
        className,
      )}
      onClick={closeMenu}
      {...props}
    />
  );
}
