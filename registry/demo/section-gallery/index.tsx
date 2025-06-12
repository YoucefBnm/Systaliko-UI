import { Button } from '@/components/ui/button';
import { GridStaggered } from '@/registry/containers/grid-staggered';
import {
  SectionGallery,
  SectionGalleryAnimationContainer,
  SectionGalleryCta,
  SectionGalleryDescription,
  SectionGalleryHeading,
  SectionGalleryTitle,
} from '@/registry/section-gallery';

const IMAGES = [
  'https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1703622377707-29bc9409aaf2?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1733680958774-39a0e8a64a54?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1548783307-f63adc3f200b?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export const SectionGalleryDemo = () => {
  return (
    <SectionGallery
      className="min-h-dvh place-content-center flex gap-8 p-8 flex-wrap md:flex-nowrap"
      title="innovate & grow"
      heading="Scale your business with our visionary solutions"
      description="We are a team of experts with a passion for innovation and growth. We believe in the power of technology to transform the way businesses operate and thrive."
    >
      <SectionGalleryAnimationContainer className="flex flex-1/2 flex-col gap-4 items-start">
        <SectionGalleryTitle className="text-primary" animation="top" />
        <SectionGalleryHeading animation="blur" className="" />
        <SectionGalleryDescription />
        <SectionGalleryCta className="flex gap-2">
          <Button className=" bg-primary text-background">Learn More</Button>
        </SectionGalleryCta>
      </SectionGalleryAnimationContainer>

      <GridStaggered className="flex-1/2">
        {IMAGES.map((imageUrl, index) => (
          <img
            key={index}
            className="inline-block align-middle size-full object-cover"
            src={imageUrl}
            alt="startup"
          />
        ))}
      </GridStaggered>
    </SectionGallery>
  );
};
