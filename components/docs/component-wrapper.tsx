'use client';

import { Button } from '@/registry/shadcn/button';
import { cn } from '@/lib/utils';
import { Fullscreen, RotateCcw } from 'lucide-react';
import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import Iframe from './iframe';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/registry/shadcn/select';
import { STYLES_INFO, useStyle } from '@/providers/style-provider';
import { index } from '@/__registry__';
import { OpenIn21stBtn } from './open-in-21st-btn';

interface ComponentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  iframe?: boolean;
  bigScreen?: boolean;
  url?: string;
}

export const ComponentWrapper = ({
  className,
  children,
  name,
  iframe = false,
  bigScreen = false,
  url,
}: ComponentWrapperProps) => {
  const [key, setKey] = useState(0);

  const { style, setStyle } = useStyle();
  const componentName = useMemo(() => name.replace('-demo', ''), [name]);

  const styleName = `${style}-${componentName}`;
  const hasStyles = index[styleName]?.component;

  return (
    <motion.div
      className={cn(
        'max-w-screen relative rounded-xl border  flex flex-col md:flex-row',
        bigScreen && 'overflow-hidden',
        className,
      )}
    >
      <motion.div className="relative size-full flex-1">
        {!iframe && (
          <>
            {hasStyles && Object.keys(STYLES_INFO).length > 1 && (
              <div className="absolute top-3 left-3 z-[9]  flex items-center justify-start gap-2 p-1 rounded-[11px]">
                <Select value={style} onValueChange={setStyle}>
                  <SelectTrigger className="sm:w-[200px] w-[145px] pl-2.5">
                    <SelectValue placeholder="Select a style" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(STYLES_INFO).map(([name, style]) => (
                      <SelectItem key={name} value={name} className="pl-1.5">
                        {style.icon && (
                          <span className="mr-2">
                            {style.icon as unknown as React.ReactNode}
                          </span>
                        )}
                        {style.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="absolute top-3 right-3 z-[9]  flex items-center justify-end gap-2 p-1 rounded-[11px]">
              <OpenIn21stBtn componentName={componentName} url={url} />
              <Button
                onClick={() => setKey((prev) => prev + 1)}
                className="flex items-center rounded-lg"
                size="icon"
                variant={'secondary'}
                asChild
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RotateCcw aria-label="restart-btn" size={14} />
                </motion.button>
              </Button>

              {iframe && (
                <Button
                  onClick={() => window.open(`/examples/${name}`, '_blank')}
                  className="flex items-center rounded-lg"
                  size="icon"
                  asChild
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Fullscreen aria-label="fullscreen-btn" size={14} />
                  </motion.button>
                </Button>
              )}
            </div>
          </>
        )}

        {iframe ? (
          <Iframe key={key} name={name} bigScreen={bigScreen} />
        ) : (
          <div
            key={key}
            className="flex min-h-[400px] w-full items-center justify-center px-10 py-16"
          >
            {children}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};
