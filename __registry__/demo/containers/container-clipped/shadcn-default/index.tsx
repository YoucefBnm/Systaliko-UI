import { Button } from '@/components/ui/button';
import {
  clipPathVariants,
  ContainerClipped,
  ContainerClippedBg,
  ContainerClippedColLg,
  ContainerClippedColMd,
} from '@/__registry__/containers/container-clipped/shadcn-default';
import { TextStaggerInview } from '@/__registry__/text/text-stagger-inview/shadcn-default';

export const ContainerClippedDemo = () => {
  return (
    <ContainerClipped className="min-h-dvh">
      <ContainerClippedColLg>
        <ContainerClippedBg className="absolute bg-slate-200 hidden md:block inset-0 size-full" />
        <div className="p-8 md:pl-12 md:pr-0 h-full gap-8 flex flex-col items-start justify-center relative z-50">
          <TextStaggerInview
            as="h1"
            className="font-serif text-6xl xl:text-7xl tracking-tight"
            animation="top"
            staggerDirection={-1}
          >
            Crafting Timeless Architectural Spaces
          </TextStaggerInview>
          <p className="opacity-80">
            We are a visionary design collective that transforms spaces <br />
            into living art. Our expertise spans from architectural <br />
            innovation to bespoke interior solutions, creating <br />
            environments that inspire and endure.
          </p>
          <Button
            className="rounded-none bg-slate-400 text-slate-200"
            size={'lg'}
            variant={'secondary'}
          >
            Discover more
          </Button>
        </div>
      </ContainerClippedColLg>

      <ContainerClippedColMd style={{ clipPath: clipPathVariants['reversed'] }}>
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="modern architecture"
          className="size-full object-cover"
        />
      </ContainerClippedColMd>
    </ContainerClipped>
  );
};

export const ContainerClippedDemo2 = () => {
  return (
    <ContainerClipped className="mb-12 min-h-dvh">
      <ContainerClippedColLg>
        <ContainerClippedBg className="absolute  bg-blue-900 hidden md:block inset-0 size-full" />
        <div className="p-8 text-secondary md:pl-12 md:pr-0 h-full gap-8 flex flex-col items-start justify-center relative z-50">
          <TextStaggerInview
            as="h1"
            className="font-semibold   text-6xl xl:text-7xl tracking-tight"
            animation="top"
            staggerDirection={-1}
          >
            Quality Textiles Crafted with Precision
          </TextStaggerInview>
          <p className="text-lg">
            We are a leading textile manufacturer that transforms <br />
            raw materials into premium fabrics. Our expertise
            <br /> spans from innovative weaving techniques to
            <br /> sustainable production methods.
          </p>
          <Button className="rounded-none  " size={'lg'}>
            Request a Quote
          </Button>
        </div>
      </ContainerClippedColLg>

      <ContainerClippedColMd>
        <img
          src="https://images.unsplash.com/photo-1589793463357-5fb813435467?q=80&w=2456&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Textile factory"
          className="size-full object-cover"
        />
      </ContainerClippedColMd>
    </ContainerClipped>
  );
};

export const ContainerClippedDemo3 = () => {
  return (
    <ContainerClipped className="mb-12 min-h-dvh">
      <ContainerClippedColLg>
        <ContainerClippedBg className="absolute rounded-br-4xl bg-fd-primary hidden md:block inset-0 size-full" />
        <div className="p-8 text-secondary md:pl-12 md:pr-0 h-full gap-8 flex flex-col items-start justify-center relative z-50">
          <TextStaggerInview
            as="h1"
            className="font-medium text-5xl xl:text-7xl tracking-tight"
            // animation="top"
            // staggerDirection={-1}
          >
            Elevate Your Productivity in Our Modern Workspaces
          </TextStaggerInview>
          <TextStaggerInview
            stagger={0.01}
            as="p"
            className="text-sm max-w-[45ch]"
          >
            At Nexus Hub, we offer flexible, fully furnished workspaces designed
            to inspire collaboration and fuel creativity. Enjoy high-speed
            internet, ergonomic seating, and vibrant communal areas—all backed
            by 24/7 access and premium amenities. Whether you’re a solo
            freelancer or a growing team, our tailored plans ensure you have
            everything you need to work smarter and connect with professionals.
          </TextStaggerInview>
          <Button size={'lg'}>Book a Free Tour</Button>
        </div>
      </ContainerClippedColLg>

      <ContainerClippedColMd className="flex justify-center items-end">
        <div className=" size-3/4 aspect-square overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Textile factory"
            className="size-full object-cover"
          />
        </div>
      </ContainerClippedColMd>
    </ContainerClipped>
  );
};
