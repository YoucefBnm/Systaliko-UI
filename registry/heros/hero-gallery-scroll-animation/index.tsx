import { Button } from '@/components/ui/button';
import {
  ContainerScrollAnimation,
  ContainerScrollScale,
  ContainerScrollTranslate,
} from '@/registry/containers/containers-scroll-animations';
import { GridBento } from '@/registry/containers/grid-bento';

const IMAGES = [
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=2368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww',
];
export const HeroGalleryScrollAnimation = () => {
  return (
    <ContainerScrollAnimation className="p-8">
      <ContainerScrollTranslate className="h-dvh grid grid-cols-12 grid-rows-1">
        <ContainerScrollScale
          className="col-start-2 col-end-12 row-start-1 row-end-2 md:col-start-4 md:col-end-10 flex flex-col justify-center items-center space-y-6 text-center"
          scaleRange={[1, 0]}
          inputRange={[0.1, 0.6]}
        >
          <h1 className="max-w-xl text-5xl font-bold tracking-tighter">
            Your Animated Hero
          </h1>
          <p className="max-w-xl text-sm md:text-base">
            Yet another hero section, this time with scroll trigger animations,
            animating the hero content with motion.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button className="bg-indigo-500 hover:bg-indigo-300">
              Get Started
            </Button>
            <Button
              className="text-indigo-500 hover:text-indigo-300"
              variant="link"
            >
              Learn more
            </Button>
          </div>
        </ContainerScrollScale>
        <GridBento className="col-start-1 row-start-1 pointer-events-none row-end-2 col-end-13">
          {IMAGES.map((imageUrl, index) => (
            <ContainerScrollScale
              key={index}
              inputRange={[0, 1]}
              scaleRange={[0.5, 1]}
              className="overflow-hidden"
            >
              <img
                className="size-full object-cover rounded-xl shadow-xl"
                src={imageUrl}
                alt="tokyo city"
              />
            </ContainerScrollScale>
          ))}
        </GridBento>
      </ContainerScrollTranslate>
    </ContainerScrollAnimation>
  );
};
