'use client';
import { TextStaggerInview } from '@/registry/text/text-stagger-inview';
import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import { Button } from '../ui/button';

interface FeaturedCoponentProps {
  id: string;
  componentLink: string;
  videoUrl: string;
  title: string;
  description: string;
}
const featuredComponents: FeaturedCoponentProps[] = [
  {
    id: 'featured-component-scroll-reverse-animation',
    componentLink: '/docs/blocks/scroll-reverse-animation',
    videoUrl:
      'https://cdn.21st.dev/user_2sdAd21yCZlZRkVtZyf4K8ogkBh/hero-gallery-scroll-animation/default/video.1746088116758.mp4',
    title: 'Scroll Reverse Animation',
    description:
      'Scroll Trigger animations, that reverse animation of both gallery images and text in different range on scroll.',
  },
  {
    id: 'featured-component-sticky-cards-stack',
    componentLink: '/docs/cards/cards-stack',
    videoUrl:
      'https://cdn.21st.dev/user_2sdAd21yCZlZRkVtZyf4K8ogkBh/cards-stack/cards-stack/video.mp4?v=1',
    title: 'Sticky Cards Stack',
    description:
      'Animated cards stack, displaying one card at a time overlaping the previous card.',
  },
  {
    id: 'featured-component-testimonal-cards',
    componentLink: '/docs/cards/cards-stack-rotated',
    videoUrl:
      'https://cdn.21st.dev/user_2sdAd21yCZlZRkVtZyf4K8ogkBh/animated-cards-stack/animated-cards-stack-on-scroll/video.mp4?v=1',
    title: 'Rotated Cards Stack',
    description: 'Stack of rotated cards show, rotate one element at a time.',
  },
  {
    id: 'featured-component-scroll-animation-rotate',
    componentLink: '/docs/blocks/scroll-animations-rotate',
    videoUrl:
      'https://cdn.21st.dev/user_2sdAd21yCZlZRkVtZyf4K8ogkBh/animated-gallery/animated-scroll-gallery/video.mp4?v=1',
    title: 'Scroll Rotation Animation',
    description:
      'Animated gallery images, with scroll triggered animations, rotates and translates on the Y axis on scroll.',
  },
  {
    id: 'featured-component-text-stagger-hover',
    componentLink: '/docs/text/text-stagger-hover',
    videoUrl:
      'https://cdn.21st.dev/user_2sdAd21yCZlZRkVtZyf4K8ogkBh/text-stagger-hover/default/video.1750815014778.mp4',
    title: 'Text Stagger Hover',
    description:
      'Splitted text animation with staggered reveal triggered by hover gesture, You can easily customize by controlling the animation property (transform, opacity, blur) and the stagger value, and the transition.',
  },
  {
    id: 'featured-component-scroll-x-carousel',
    componentLink: '/docs/blocks/story',
    videoUrl:
      'https://cdn.21st.dev/youcefbnm/scroll-x-carousel/default/video.1751413860542.mp4',
    title: 'Scroll X Carousel',
    description:
      'Carousel that transforms on the x-axis, showing items depnding on the scroll position, with a progress indicator.',
  },
  {
    id: 'featured-component-scroll-animations',
    componentLink: '/docs/blocks/scroll-animations',
    videoUrl:
      'https://cdn.21st.dev/youcefbnm/scroll-trigger-animations/default/video.1751383795251.mp4',
    title: 'Scroll Animations',
    description:
      'Scroll triggerd animations never been easier, now you can animate transforms, and roundness and positioning.',
  },
  {
    id: 'featured-component-story',
    componentLink: '/docs/blocks/story',
    videoUrl:
      'https://cdn.21st.dev/youcefbnm/story/default/video.1749513788082.mp4',
    title: 'Story',
    description: 'Autoplay carousel similar to IG story.',
  },
];
interface ComponentCardProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  componentLink: string;
  videoUrl: string;
  title: string;
  description: string;
}
function ComponentCard({
  componentLink,
  videoUrl,
  title,
  description,
  ...props
}: ComponentCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Handle play errors silently
        console.debug('Video play error:', error);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to start
    }
  };

  return (
    <Link
      className="group relative gap-4 rounded-xl overflow-hidden transition-all duration-300 bg-gradient-to-b from-card to-card border border-primary/5 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-primary/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 after:absolute after:inset-0 after:z-[-1] after:rounded-xl after:bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:backdrop-blur-xl hover:bg-primary/[0.02] before:hover:opacity-100 flex h-full flex-col"
      href={componentLink}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title={title}
      {...props}
    >
      <div className="flex flex-col gap-4">
        <div className="relative aspect-[6/5] w-full ">
          <div className="size-full">
            <video
              ref={videoRef}
              className="size-full object-cover"
              loop
              muted
              playsInline
              src={videoUrl}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col p-4 space-y-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="line-clamp-1 font-semibold tracking-tighter transition-colors duration-300 group-hover:text-primary">
              {title}
            </h3>
            <div className="text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:text-white">
              <ArrowUpRightIcon className="size-5" />
            </div>
          </div>
          <p className="line-clamp2 text-muted-foreground text-sm tracking-tighter">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
export function Components() {
  return (
    <section className="py-16 px-8 space-y-8">
      <div className="space-y-4">
        <TextStaggerInview
          className="text-4xl font-semibold tracking-tight [&>[data-word=customizable]]:text-primary [&>[data-word=flexible]]:text-primary"
          animation="bottom"
          as="h2"
        >
          Components
        </TextStaggerInview>

        <p className="max-w-prose text-muted-foreground">
          Choose your component copy/past or install via shadcn registry
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center gap-4">
        {featuredComponents.map((component) => (
          <ComponentCard key={component.id} {...component} />
        ))}
        <Button size="lg" variant={'link'} className="self-center">
          <Link className="inline-flex items-center gap-1" href="/docs">
            View all components <ArrowUpRightIcon />
          </Link>
        </Button>
      </div>
    </section>
  );
}
