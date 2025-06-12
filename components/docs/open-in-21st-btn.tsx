import { motion } from 'motion/react';
import { Button } from '../ui/button';

export function OpenIn21stBtn({ componentName }: { componentName: string }) {
  return (
    <Button size={'sm'} aria-label="Open in 21st dev" asChild>
      <motion.a
        href={`https://21st.dev/youcefbnm/${componentName}/default`}
        target="_blank"
        rel="noreferrer"
        className="no-underline"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="sr-only">Open in 21st dev</span>
        Open in 21st dev
      </motion.a>
    </Button>
  );
}
