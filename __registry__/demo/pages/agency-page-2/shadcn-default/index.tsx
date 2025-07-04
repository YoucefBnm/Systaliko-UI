'use client';
import { ModeToggle } from '@/components/mode-toggle';
import { Badge } from '@/__registry__/badge/shadcn-default';
import { Button } from '@/__registry__/button/shadcn-default';
import {
  CardSticky,
  ContainerScroll,
} from '@/__registry__/cards/cards-stack/shadcn-default';
import { ContainerStagger } from '@/__registry__/containers/container-stagger/shadcn-default';
import { gridStaggerdVariants } from '@/__registry__/containers/grid-staggered/shadcn-default';
import { RatingStars } from '@/__registry__/rating-stars/shadcn-default';
import {
  ScrollXCarousel,
  ScrollXCarouselContainer,
  ScrollXCarouselWrap,
} from '@/__registry__/scroll-x-carousel/shadcn-default';
import { TextStaggerInview } from '@/__registry__/text/text-stagger-inview/shadcn-default';
import { useAnimationVariants } from '@/__registry__/utils/use-animation-variants/shadcn-default';
import {
  ArrowRightIcon,
  BandageIcon,
  CodeIcon,
  FrameIcon,
  VideoIcon,
} from 'lucide-react';
import { motion, MotionConfig } from 'motion/react';
import Link from 'next/link';
import * as React from 'react';

const SHOWCASE_IMAGES = [
  'https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];
const SERVICES = [
  {
    id: 'agency-service-branding',
    title: 'branding',
    description:
      'We collaborate with you to uncover your unique value proposition, target audience, and market positioning. Through competitive analysis, messaging workshops, and brand audits.',
    link: '/services/branding',
    icon: BandageIcon,
    stack: ['marketing', 'social media', 'SEO'],
  },
  {
    id: 'agency-service-design',
    title: 'design',
    description:
      'We work closely with you to understand your business goals, target audience, and competitive landscape. Through a comprehensive design process.',
    link: '/services/design',
    icon: FrameIcon,
    stack: ['UI UX', 'sketch', 'figma', 'wireframe'],
  },
  {
    id: 'agency-service-development',
    title: 'development',
    description:
      'We collaborate with you to understand your business goals, target audience, and competitive landscape. Through a comprehensive development process.',
    icon: CodeIcon,
    stack: ['backend', 'frontend', 'mobile', 'CMS', 'no code'],
  },
];
const WORK_PROJECTS = [
  {
    id: 'work-project-3',
    title: 'YCF DEV Porfolio',
    type: 'portfolio',
    services: ['branding', 'development', 'UI UX'],
    imageUrl:
      'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'work-project-1',
    title: 'Ecommerce for sports shoes',
    type: 'e commerce',
    services: ['Branding', 'UI UX', 'Development'],
    imageUrl:
      'https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'work-project-4',
    title: 'Video for new movie',
    type: 'video editing',
    services: ['marketing', 'social media', 'video editing'],
    imageUrl:
      'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'work-project-2',
    title: 'Marketing campaign for new product',
    type: 'marketing',
    services: ['Branding', 'SEO'],
    imageUrl:
      'https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

function AgencyPage2Header() {
  return (
    <header className="flex justify-between items-center h-16 px-12">
      <strong className="font-black text-xl tracking-tight">
        Logo<span className="text-primary text-4xl">.</span>
      </strong>

      <div className="flex gap-4 items-center">
        <Button variant={'outline'} className="rounded-full">
          Get started
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}

function AgencyPage2Showcase() {
  return (
    <ScrollXCarousel>
      <ScrollXCarouselContainer className=" place-content-center flex flex-col gap-4">
        <div className=" pointer-events-none w-[12vw] h-[103%] absolute inset-[0_auto_0_0] z-10 bg-[linear-gradient(90deg,_var(--background)_35%,_transparent)]" />
        <div className="pointer-events-none bg-[linear-gradient(270deg,_var(--background)_35%,_transparent)] w-[15vw] h-[103%] absolute inset-[0_0_0_auto] z-10" />
        <ScrollXCarouselWrap
          xRagnge={['5%', '-40%']}
          className="relative flex gap-4 [&>*:first-child]:ml-8"
        >
          {SHOWCASE_IMAGES.map((imageUrl, index) => (
            <div
              className="min-w-[50vw] md:min-w-[30vw] aspect-video rounded overflow-hidden"
              key={index}
            >
              <img
                alt="agency showcase"
                src={imageUrl}
                className="size-full object-cover"
              />
            </div>
          ))}
        </ScrollXCarouselWrap>
        <ScrollXCarouselWrap
          xRagnge={['-50%', '10%']}
          className="relative flex gap-4 [&>*:first-child]:ml-8"
        >
          {SHOWCASE_IMAGES.map((imageUrl, index) => (
            <div
              className="min-w-[50vw] md:min-w-[30vw] aspect-video rounded overflow-hidden"
              key={index}
            >
              <img
                alt="agency showcase"
                src={imageUrl}
                className="size-full object-cover"
              />
            </div>
          ))}
        </ScrollXCarouselWrap>
      </ScrollXCarouselContainer>
    </ScrollXCarousel>
  );
}
function AgencyPage2About() {
  const animationVariants = useAnimationVariants();
  return (
    <section className="place-content-center py-16 px-12">
      <ContainerStagger className="xl:w-4/5 mx-auto flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">
        <TextStaggerInview
          stagger={0.005}
          as="h3"
          className="flex-4/5 text-2xl font-medium"
        >
          Founded on a passion for innovation and excellence, our team brings
          together designers, developers, and strategists to craft digital
          products that stand out. With years of cross‑industry experience, we
          partner closely with clients to turn ideas into impactful realities.
        </TextStaggerInview>

        <div className=" space-y-4">
          <motion.p
            className="text-muted-foreground max-w-[45ch] text-sm"
            variants={animationVariants}
          >
            with years of cross‑industry experience, we partner closely with
            clients to turn ideas into impactful realities.
          </motion.p>

          <motion.div
            variants={animationVariants}
            className="flex gap-2 flex-wrap justify-start items-center"
          >
            <Badge variant={'secondary'} className="rounded-full space-x-2">
              <img
                src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw"
                width={96}
                height={96}
                alt="google logo"
                className="size-4"
              />
              <RatingStars className="text-primary" rating={4.8} />

              <span className="text-xs text-muted-foreground">4.8</span>
            </Badge>
            <p className="text-xs">from +100 review on Google</p>
          </motion.div>
        </div>
      </ContainerStagger>
    </section>
  );
}
function AgencyPage2Services() {
  const MotionBadge = motion.create(Badge);
  const MotionButton = motion.create(Button);
  const animationVariants = useAnimationVariants('bottom');
  const fadeVariants = useAnimationVariants();

  return (
    <section className="px-8">
      <ContainerStagger
        className={`min-h-dvh md:${gridStaggerdVariants({ variant: 'default' })} gap-6 flex flex-col items-start`}
      >
        <ContainerStagger className="flex flex-col items-start pt-6 md:self-end md:justify-end space-y-2">
          <MotionConfig
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <MotionBadge
              variants={animationVariants}
              variant={'outline'}
              className="rounded-full"
            >
              ⚙️ Our services
            </MotionBadge>
            <TextStaggerInview
              as="h2"
              className="text-3xl xl:text-4xl font-semibold tracking-tight"
              animation="bottom"
              staggerDirection={-1}
            >
              Your Growth Path
            </TextStaggerInview>

            <motion.p
              variants={animationVariants}
              className="text-muted-foreground text-sm my-2 max-w-[50ch]"
            >
              We offer a wide range of services to help you achieve your
              business goals. From branding and design to development and
              marketing, we have the expertise and resources to help you
              succeed.
            </motion.p>
            <MotionButton variant={'link'} variants={animationVariants}>
              <Link href="/">View all Services</Link> <ArrowRightIcon />
            </MotionButton>
          </MotionConfig>
        </ContainerStagger>

        {SERVICES.map((service) => (
          <motion.div
            variants={fadeVariants}
            key={service.id}
            className="bg-card rounded-md border p-6"
          >
            <service.icon className="text-primary" size={30} />
            <div className="space-y-2 my-6">
              <h4 className="capitalize text-xl font-semibold tracking-tight">
                {service.title}
              </h4>
              <p>{service.description}</p>
            </div>

            <div className="flex gap-2 flex-wrap">
              {service.stack.map((stack) => (
                <Badge
                  className="text-xs rounded-full"
                  key={stack}
                  variant={'secondary'}
                >
                  {stack}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </ContainerStagger>
    </section>
  );
}
function AgencyPage2Work() {
  const animationVariants = useAnimationVariants('bottom');
  const MotionBadge = motion.create(Badge);
  return (
    <section className="p-12">
      <ContainerStagger className="space-y-4 flex flex-col items-center justify-center text-center">
        <MotionConfig
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <MotionBadge
            variants={animationVariants}
            variant={'outline'}
            className="rounded-full"
          >
            ✦ Our Work
          </MotionBadge>
          <TextStaggerInview
            as="h2"
            className="text-4xl font-semibold tracking-tight"
            animation="bottom"
            staggerDirection={-1}
          >
            Get a glimpse of our work
          </TextStaggerInview>

          <motion.p
            className="text-muted-foreground text-sm max-w-[45ch] mx-auto"
            variants={animationVariants}
          >
            We have worked with some of the biggest brands in the world to
            create innovative solutions that have changed the way people
            interact with technology.
          </motion.p>
        </MotionConfig>
      </ContainerStagger>

      <ContainerScroll className="my-8">
        {WORK_PROJECTS.map((project, index) => (
          <CardSticky
            key={project.id}
            index={index}
            className="mx-auto w-full overflow-hidden rounded bg-card border shadow"
            incrementY={70}
            incrementZ={5}
          >
            <div className="border-b flex justify-between items-center  p-4 space-y-2">
              <h3 className="text-2xl  font-semibold">{project.title}</h3>
              <div className="flex flex-wrap gap-1">
                <Badge className="capitalize rounded-full">
                  {project.type}
                </Badge>
                {project.services.map((service) => (
                  <Badge
                    className="capitalize rounded-full"
                    variant={'secondary'}
                    key={service}
                  >
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
            <img
              className="size-full object-cover aspect-video"
              width="100%"
              height="100%"
              src={project.imageUrl}
              alt="project"
            />
          </CardSticky>
        ))}
      </ContainerScroll>
    </section>
  );
}
function AgencyPage2Footer() {
  return <footer className="py-12 px-8">footer</footer>;
}
export function AgencyPage2Hero2() {
  const MotionBadge = motion.create(Badge);
  const animationVariants = useAnimationVariants('blur');
  return (
    <section className="p-12 px-8 text-center">
      <ContainerStagger className="space-y-4 flex flex-col items-center justify-center">
        <MotionConfig
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <MotionBadge
            variants={animationVariants}
            className="rounded-full"
            variant={'outline'}
          >
            💎 grow your business with us
          </MotionBadge>
          <TextStaggerInview
            as="h1"
            animation="blur"
            className="text-5xl max-w-[18ch] font-medium tracking-tighter  md:text-6xl"
          >
            Delivering Exceptional Digital Experiences
          </TextStaggerInview>

          <motion.p
            variants={animationVariants}
            className="text-center text-muted-foreground max-w-[50ch] mx-auto"
          >
            We offer a wide range of services to help you achieve your business
            goals. From branding and design to development and marketing, we
            have the expertise and resources to help you succeed.
          </motion.p>

          <motion.div variants={animationVariants} className="flex gap-4">
            <Button>
              Book a free call <VideoIcon />
            </Button>
            <Button variant="link">
              Learn more <ArrowRightIcon />
            </Button>
          </motion.div>
        </MotionConfig>
      </ContainerStagger>
    </section>
  );
}
export function AgencyPage2Demo() {
  return (
    <>
      <div
        style={{
          background:
            'radial-gradient(125% 125% at 50% 100%, var(--background) 40%, var(--accent) 100%)',
        }}
      >
        <AgencyPage2Header />
        <AgencyPage2Hero2 />
      </div>
      <AgencyPage2Showcase />

      <main>
        <AgencyPage2About />
        <AgencyPage2Services />
        <AgencyPage2Work />
      </main>
      <AgencyPage2Footer />
    </>
  );
}
