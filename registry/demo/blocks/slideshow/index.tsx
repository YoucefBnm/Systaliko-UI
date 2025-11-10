'use client';
import {
  Slideshow,
  SlideshowImageContainer,
  SlideshowImageWrap,
  SlideshowIndicator,
} from '@/registry/blocks/slideshow';
import React from 'react';

const slides = [
  {
    id: 'slide-6',
    title: 'UI UX design',
    imageUrl:
      'https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'slide-1',
    title: 'frontend dev',
    imageUrl:
      'https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'slide-2',
    title: 'backend dev',
    imageUrl:
      'https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'slide-3',
    title: 'video editing',
    imageUrl:
      'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'slide-4',
    title: 'SEO optimization',
    imageUrl:
      'https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export function SlideshowDemo() {
  const imageUrls = React.useMemo(() => slides.map((s) => s.imageUrl), []);

  function usePreloadImages(urls: string[]) {
    const imagesRef = React.useRef<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = React.useState(false);
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      if (!urls || urls.length === 0) {
        setLoaded(true);
        return;
      }

      let mounted = true;
      let completed = 0;
      const created: HTMLImageElement[] = [];

      const settle = () => {
        completed += 1;
        if (!mounted) return;
        setProgress((completed / urls.length) * 100);
        if (completed >= urls.length) {
          imagesRef.current = created.filter(Boolean) as HTMLImageElement[];
          setLoaded(true);
        }
      };

      urls.forEach((url) => {
        try {
          const img = new Image();
          created.push(img);
          img.onload = () => settle();
          img.onerror = () => settle();
          img.src = url;
        } catch (e) {
          console.log(e);
          settle();
        }
      });

      return () => {
        mounted = false;
        // cleanup event handlers
        created.forEach((i) => {
          i.onload = null;
          i.onerror = null;
        });
      };
    }, [urls]);

    return { loaded, progress, imagesRef } as const;
  }

  usePreloadImages(imageUrls);
  return (
    <Slideshow className="min-h-svh place-content-center p-6 md:px-12">
      <h3 className="mb-6 text-primary text-xs font-medium capitalize tracking-wide">
        / our services
      </h3>
      <div className="flex flex-wrap items-center justify-evenly gap-6 md:gap-12">
        <div className="flex  flex-col space-y-2 md:space-y-4   ">
          {slides.map((slide, index) => (
            <SlideshowIndicator
              key={slide.title}
              index={index}
              className="cursor-pointer text-4xl font-bold uppercase tracking-tighter"
            >
              {slide.title}
            </SlideshowIndicator>
          ))}
        </div>
        <SlideshowImageContainer>
          {slides.map((slide, index) => (
            <div key={slide.id} className="  ">
              <SlideshowImageWrap
                index={index}
                className="size-full max-h-96 object-cover"
              >
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  loading="eager"
                  className="size-full object-cover"
                />
              </SlideshowImageWrap>
            </div>
          ))}
        </SlideshowImageContainer>
      </div>
    </Slideshow>
  );
}
