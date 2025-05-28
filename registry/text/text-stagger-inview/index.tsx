import * as React from "react";
import { motion } from "framer-motion";

interface TextStaggerInviewProps {
  children: React.ReactNode;
  className?: string;
}

export function TextStaggerInview({
  children,
  className,
}: TextStaggerInviewProps) {
  const words = React.useMemo(() => {
    if (typeof children === "string") {
      return children.split(" ");
    }
    return [];
  }, [children]);

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          viewport={{ once: true }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
