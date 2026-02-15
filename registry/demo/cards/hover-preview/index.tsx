'use client';
import {
  CustomCursor,
  CustomCursorProvider,
  useCustomCursor,
} from '@/registry/components/custom-cursor';
import { ArrowUpRightIcon } from 'lucide-react';
import Image from 'next/image';

const clients = [
  {
    id: 'slide-6',
    name: 'YCF Dev',
    service: 'UI UX design',
    imageUrl:
      'https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'slide-1',
    name: 'Systaliko',
    service: 'Frontend dev',
    imageUrl:
      'https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'slide-2',
    name: 'Central Bank',
    service: 'Backend dev',
    imageUrl:
      'https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'slide-3',
    name: 'Veo Studio',
    service: 'Video editing',
    imageUrl:
      'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
export const clipPathVariants = {
  visible: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  },
  hidden: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0px)',
  },
};

function HoverPreviewContent() {
  const { setCursorChildren, containerRef } = useCustomCursor();
  const handleClearCursor = () => {
    setCursorChildren(null);
  };
  return (
    <div className="w-full h-screen place-content-center p-8">
      <div
        onMouseLeave={handleClearCursor}
        className="relative "
        ref={containerRef}
      >
        <div className="bg-border space-y-px py-px max-w-3xl mx-auto">
          <CustomCursor />
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex bg-background px-4 py-6  flex-wrap gap-4 items-center justify-between"
              onMouseEnter={() =>
                setCursorChildren(
                  <div className="aspect-[12/16] h-48">
                    <Image
                      alt={client.name}
                      src={client.imageUrl}
                      width={200}
                      height={530}
                      className=" size-full"
                    />
                  </div>,
                )
              }
            >
              <div className="md:flex-1">
                <p className="uppercase text-muted-foreground text-xl">
                  {client.name}
                </p>
              </div>

              <div className="md:flex-1">
                <p className="text-3xl font-medium">{client.service}</p>
              </div>

              <div className="bg-secondary text-secondary-foreground rounded-full p-3">
                <ArrowUpRightIcon className="size-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HoverPreviewDemo() {
  return (
    <CustomCursorProvider>
      <HoverPreviewContent />
    </CustomCursorProvider>
  );
}
