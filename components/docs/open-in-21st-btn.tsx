import { motion } from 'motion/react';
import { Button } from '../ui/button';

export function OpenIn21stBtn({
  componentName,
  url,
}: {
  componentName: string;
  url?: string;
}) {
  const href = url ?? `https://21st.dev/youcefbnm/${componentName}/default`;

  return (
    <Button size={'sm'} aria-label="Open in 21st dev" asChild>
      <motion.a
        href={href}
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
