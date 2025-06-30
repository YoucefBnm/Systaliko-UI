'use client';
import { Button } from '@/registry/button';
import { CardSticky, ContainerScroll } from '@/registry/cards/cards-stack';
import {
  CardCurtain,
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealDescription,
  CardCurtainRevealFooter,
  CardCurtainRevealTitle,
} from '@/registry/cards/card-curtain-reveal';
import { ContainerStagger } from '@/registry/containers/container-stagger';
import {
  GalleryCol,
  GalleryContainer,
  GalleryRotatedScroll,
} from '@/registry/containers/gallery-rotated-scroll';
import { TextStaggerInview } from '@/registry/text/text-stagger-inview';
import { useAnimationVariants } from '@/registry/utils/use-animation-variants';
import { ArrowUpRightIcon } from 'lucide-react';
import {
  motion,
  MotionConfig,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react';
import * as React from 'react';
import Link from 'next/link';
import { Badge } from '@/registry/badge';
import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain,
} from '@/registry/cards/card-hover-reveal';

import {
  CardTestimonial,
  TestimonialAuthor,
  TestimonialQuote,
  TestimonialRating,
} from '@/registry/cards/card-testimonial';
import {
  CardsContainer,
  CardTransformed,
  ContainerScrollRotatedCards,
} from '@/registry/cards/cards-stack-rotated';
import { ModeToggle } from '@/components/mode-toggle';

const ABOUT_TEXT =
  'Founded on a passion for innovation and excellence, our team brings together designers, developers, and strategists to craft digital products that stand out. With years of cross‑industry experience, we partner closely with clients to turn ideas into impactful realities.';
const SERVICES = [
  {
    id: 'agency-service-branding',
    title: 'brand strategy',
    description:
      'We collaborate with you to uncover your unique value proposition, target audience, and market positioning. Through competitive analysis, messaging workshops, and brand audits, we craft a strategic roadmap that informs every aspect of your visual identity and communications. The result? A cohesive brand presence that resonates emotionally and drives loyalty.',
    link: '/services/branding',
    imageUrl:
      'https://images.pexels.com/photos/26954172/pexels-photo-26954172.jpeg',
  },
  {
    id: 'agency-service-design',
    title: 'design strategy',
    description:
      'We work closely with you to understand your business goals, target audience, and competitive landscape. Through a comprehensive design process, we create a holistic vision that aligns with your values and drives business growth. The result? A cohesive design system that enhances user experience and drives revenue.',
    link: '/services/design',
    imageUrl:
      'https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'agency-service-development',
    title: 'development strategy',
    description:
      'We collaborate with you to understand your business goals, target audience, and competitive landscape. Through a comprehensive development process, we create a holistic vision that aligns with your values and drives business growth. The result? A cohesive design system that enhances user experience and drives revenue.',
    imageUrl:
      'https://images.unsplash.com/photo-1542762933-ab3502717ce7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
const WORK = [
  {
    id: 'work-car',
    title: 'car rental platform',
    description:
      'We build a car rental platform for the masses, with a focus on user experience and security, and data privacy.',
    services: ['branding', 'design'],
    type: 'car rental',
    imageUrl:
      'https://images.pexels.com/photos/26954172/pexels-photo-26954172.jpeg',
  },
  {
    id: 'work-saas',
    title: 'SaaS platform',
    description:
      'We build a SaaS platform for the masses, with a focus on user experience and security, and data privacy.',
    services: ['branding', 'design', 'development'],
    type: 'SaaS',
    imageUrl:
      'https://images.pexels.com/photos/7947968/pexels-photo-7947968.jpeg',
  },
  {
    id: 'work-blockchain',
    title: 'Blockchain wallet',
    description:
      'We build a Blockchain wallet for the masses, with a focus on security and usability.',
    services: ['branding', 'design', 'development'],
    type: 'blockchain',
    imageUrl:
      'https://images.pexels.com/photos/9588217/pexels-photo-9588217.jpeg',
  },
  {
    id: 'work-ecommerce',
    title: 'ecommerce store',
    description:
      'We build an ecommerce store for the masses, with a focus on performance and user experience.',
    services: ['branding', 'design', 'payment getaway', 'development'],
    type: 'ecommerce',
    imageUrl:
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
  },
];
const PROCESS = [
  {
    id: 'process-discover',
    title: 'Discover',
    description:
      'We kick off every project with a deep‑dive workshop to understand your business goals, audience needs, and competitive landscape. Through stakeholder interviews, user surveys, and data audits, we uncover key insights that shape our strategic direction. This phase ensures we’re solving the right problems with measurable objectives and clear success criteria.',
  },
  {
    id: 'processs-design',
    title: 'Design',
    description:
      'Armed with research, our designers translate insights into compelling visual and interaction concepts. We start with low‑fidelity wireframes to establish information architecture, then move to interactive prototypes for early usability testing. High‑fidelity mockups bring the look and feel to life, incorporating your brand’s voice, style guidelines, and accessibility standards. Every decision is validated against user feedback and business metrics to maximize engagement.',
  },
  {
    id: 'process-develop',
    title: 'Develop',
    description:
      'In development, we turn designs into robust, production‑ready code. Our engineers set up scalable architectures, implement responsive layouts, and integrate necessary platforms—whether it’s a headless CMS, e‑commerce engine, or custom API. We enforce code quality through automated testing, CI/CD pipelines, and peer reviews, ensuring reliability and maintainability. Regular sprint demos keep you in the loop and let us adapt quickly to new insights.',
  },
  {
    id: 'process-deploy',
    title: 'Deploy',
    description:
      'Launch day is just the beginning. We manage the full rollout, from provisioning servers or CDN configurations to domain setup and SSL certificates. Our team conducts comprehensive QA—cross‑browser, performance, security, and accessibility checks—to guarantee a smooth go‑live. We also provide launch checklists and rollback plans, so you have confidence that your site or app will perform under real‑world conditions.',
  },
  {
    id: 'process-optimize',
    title: 'Optimize',
    description:
      'After launch, we monitor real‑time analytics, user behavior flows, and performance metrics to identify opportunities for iterative improvement. Through A/B testing, heat‑map analysis, and ongoing content updates, we refine features to boost conversions, reduce friction, and keep pace with evolving market trends. Regular strategy sessions ensure your digital presence continues to grow in alignment with your business objectives.',
  },
];
const TESTIMONIALS = [
  {
    id: 'testimonial-3',
    name: 'Youcef Bnm.',
    profession: 'Frontend Developer',
    rating: 5,
    quote:
      'Their innovative solutions and quick turnaround time made our collaboration incredibly successful. Highly recommended!',
    avatarUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocKV3NNwtqyu8_gbuVEDARpyUpTuFtb_XPAIETgsD3wbXx4F4xlE=s576-c-no',
  },
  {
    id: 'testimonial-1',
    name: 'Jessica H.',
    profession: 'Web Designer',
    rating: 4.5,
    quote:
      "The attention to detail and user experience in their work is exceptional. I'm thoroughly impressed with the final product.",
    avatarUrl:
      'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 'testimonial-2',
    name: 'Lisa M.',
    profession: 'UX Designer',
    rating: 5,
    quote:
      'Working with them was a game-changer for our project. Their expertise and professionalism exceeded our expectations.',
    avatarUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 'testimonial-4',
    name: 'Jane D.',
    profession: 'UI/UX Designer',
    rating: 4.5,
    quote:
      'The quality of work and communication throughout the project was outstanding. They delivered exactly what we needed.',
    avatarUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
  },
];

const IMAGES_1 = [
  'https://images.unsplash.com/photo-1529218402470-5dec8fea0761?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFkfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1717008303072-88c8ad26c3ff?q=80&w=2663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1716855048433-50d4db79ba14?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1608501078713-8e445a709b39?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];
const IMAGES_2 = [
  'https://images.unsplash.com/photo-1712183465613-555424cf0e69?q=80&w=2661&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1560360482-d5588f13d530?q=80&w=2687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1712183465613-555424cf0e69?q=80&w=2661&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1493515322954-4fa727e97985?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRva3lvfGVufDB8MHwwfHx8Mg%3D%3D',
];
const IMAGES_3 = [
  'https://images.unsplash.com/photo-1687647849698-e54685db9ae3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1658195686058-3b790484ae7e?q=80&w=2452&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1629692905066-d202dad72ebf?q=80&w=2678&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1608875004752-2fdb6a39ba4c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export function AgencyPageHeader() {
  return (
    <header className="flex justify-between items-center h-16 px-12">
      <strong className="font-bold text-xl tracking-tight">
        Logo<span className="text-primary text-4xl">.</span>
      </strong>

      <div className="flex gap-4 items-center">
        <Button variant={'outline'}>Get started</Button>
        <ModeToggle />
      </div>
    </header>
  );
}
export function AgencyPageFooter() {
  const footerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });

  const [isPinned, setIsPinned] = React.useState(false);
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    // v: 0 = footer just entering viewport, 1 = footer fully in view
    setIsPinned(v < 1); // Pinned while not fully scrolled past
  });
  const animationVariants = useAnimationVariants('bottom');

  return (
    <motion.footer
      className={`transition-all duration-300 z-50`}
      layout="position"
      animate={
        isPinned
          ? 'fixed bottom-0 left-0 w-full'
          : 'absolute bottom-0 left-0 w-full'
      }
      ref={footerRef}
    >
      <div className="bg-foreground text-background py-12 px-8">
        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-2 md:grid-rows-1 gap-8">
          <div className="flex justify-evenly items-start gap-6">
            <ContainerStagger className="flex flex-col items-start space-y-2">
              <MotionConfig
                transition={{
                  duration: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <motion.h2
                  variants={animationVariants}
                  className="text-secondary/80 font-medium"
                >
                  Sitemap
                </motion.h2>
                <motion.a
                  href="#"
                  className="text-background/80 transition-colors duration-300 hover:text-background/100"
                  variants={animationVariants}
                >
                  About
                </motion.a>
                <motion.a
                  href="#"
                  className="text-background/80 transition-colors duration-300 hover:text-background/100"
                  variants={animationVariants}
                >
                  Services
                </motion.a>
                <motion.a
                  href="#"
                  className="text-background/80 transition-colors duration-300 hover:text-background/100"
                  variants={animationVariants}
                >
                  Work
                </motion.a>
                <motion.a
                  href="#"
                  className="text-background/80 transition-colors duration-300 hover:text-background/100"
                  variants={animationVariants}
                >
                  Contact
                </motion.a>
              </MotionConfig>
            </ContainerStagger>

            <ContainerStagger className="flex flex-col items-start space-y-2">
              <MotionConfig
                transition={{
                  duration: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <motion.h2
                  variants={animationVariants}
                  className="text-secondary/80 font-medium"
                >
                  Follow Us
                </motion.h2>
                <motion.a
                  href="#"
                  className="text-background/80 transition-colors duration-300 hover:text-background/100"
                  variants={animationVariants}
                >
                  X
                </motion.a>
                <motion.a
                  href="#"
                  className="text-background/80 transition-colors duration-300 hover:text-background/100"
                  variants={animationVariants}
                >
                  Github
                </motion.a>
                <motion.a
                  href="#"
                  className="text-background/80 transition-colors duration-300 hover:text-background/100"
                  variants={animationVariants}
                >
                  Dribble
                </motion.a>
                <motion.a
                  href="#"
                  className="text-background/80 transition-colors duration-300 hover:text-background/100"
                  variants={animationVariants}
                >
                  Linkedin
                </motion.a>
                <motion.a
                  href="#"
                  className="text-background/80 transition-colors duration-300 hover:text-background/100"
                  variants={animationVariants}
                >
                  Facebook
                </motion.a>
                <motion.a
                  href="#"
                  className="text-background/80 transition-colors duration-300 hover:text-background/100"
                  variants={animationVariants}
                >
                  IG
                </motion.a>
              </MotionConfig>
            </ContainerStagger>
          </div>

          <ContainerStagger className="flex  space-y-2 items-center justify-center flex-col">
            <MotionConfig
              transition={{
                duration: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <motion.strong
                variants={animationVariants}
                className="font-bold text-xl tracking-tight"
              >
                Logo<span className="text-primary text-4xl">.</span>
              </motion.strong>
              <motion.small
                variants={animationVariants}
                className="text-xs text-secondary/80"
              >
                &copy; 2025 Systaliko. All rights reserved.
              </motion.small>
            </MotionConfig>
          </ContainerStagger>
        </div>
      </div>
    </motion.footer>
  );
}
export function AgencyPageHero() {
  const animationVariants = useAnimationVariants('bottom');

  return (
    <section className="pt-16 text-center">
      <ContainerStagger
        staggerChildren={0.1}
        className="px-8 flex flex-col justify-center items-center"
      >
        <MotionConfig
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h1
            variants={animationVariants}
            className="text-4xl md:text-6xl font-medium tracking-tighter"
          >
            Delivering Exceptional
          </motion.h1>
          <motion.h1
            variants={animationVariants}
            className="text-4xl md:text-6xl font-medium tracking-tighter"
          >
            Digital Experiences
          </motion.h1>
          <motion.p className="max-w-[45ch] my-6 " variants={animationVariants}>
            We help brands connect, engage, and grow through bespoke design and
            technology solutions.
          </motion.p>

          <motion.div variants={animationVariants} className="flex gap-4">
            <Button>Get Started</Button>
            <Button variant={'link'}>
              Learn More <ArrowUpRightIcon />
            </Button>
          </motion.div>
        </MotionConfig>
      </ContainerStagger>

      <GalleryRotatedScroll>
        <div
          className="pointer-events-none absolute top-32 blur-[84px] z-10 h-[20vh] w-full "
          style={{
            background:
              'linear-gradient(to right, gray, var(--accent), var(--primary))',
            mixBlendMode: 'screen',
          }}
        />
        <GalleryContainer
          yRange={[-120, 400]}
          rotateXRange={[70, 0]}
          className="h-dvh  gap-2"
        >
          <GalleryCol className="gap-2 mt-[-10%]">
            {IMAGES_1.map((imageUrl, index) => (
              <img
                key={index}
                className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover"
                src={imageUrl}
                alt="gallery item"
              />
            ))}
          </GalleryCol>
          <GalleryCol
            className="gap-2 hidden md:flex mt-[-20%]"
            yRange={['15%', '5%']}
          >
            {IMAGES_2.map((imageUrl, index) => (
              <img
                key={index}
                className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover"
                src={imageUrl}
                alt="gallery item"
              />
            ))}
          </GalleryCol>
          <GalleryCol yRange={['-10%', '2%']} className="gap-2 mt-[-10%]">
            {IMAGES_3.map((imageUrl, index) => (
              <img
                key={index}
                className="aspect-video block h-auto max-h-full w-full  rounded-md  object-cover"
                src={imageUrl}
                alt="gallery item"
              />
            ))}
          </GalleryCol>
        </GalleryContainer>
      </GalleryRotatedScroll>
    </section>
  );
}
export function AgencyPageServices() {
  return (
    <section className="min-h-dvh place-content-center">
      <div className="flex flex-wrap items-start">
        {SERVICES.map((service) => (
          <CardCurtainReveal
            key={service.id}
            className="md:flex-1/3 max-h-dvh  bg-foreground  text-fd-accent "
          >
            <CardCurtainRevealBody>
              <CardCurtainRevealTitle className="capitalize text-3xl max-w-[9ch] font-medium tracking-tight">
                {service.title}
              </CardCurtainRevealTitle>
              <CardCurtainRevealDescription className="mt-4">
                <p>{service.description}</p>
              </CardCurtainRevealDescription>
              <Button
                variant={'secondary'}
                size={'icon'}
                className="aspect-square rounded-full"
              >
                <ArrowUpRightIcon />
              </Button>

              <CardCurtain className="bg-background" />
            </CardCurtainRevealBody>

            <CardCurtainRevealFooter className="mt-auto h-48">
              <img
                width="100%"
                height="100%"
                alt="service"
                className="size-full object-cover"
                src={service.imageUrl}
              />
            </CardCurtainRevealFooter>
          </CardCurtainReveal>
        ))}
      </div>
    </section>
  );
}
export function AgencyPageAbout() {
  return (
    <section className="relative min-h-dvh  place-content-center px-8">
      <div className="md:w-4/5 mx-auto flex flex-col md:flex-row justify-evenly gap-8">
        <TextStaggerInview
          className="pt-4 text-primary text-nowrap text-xs font-semibold capitalize tracking-wide"
          as="h4"
        >
          / our story
        </TextStaggerInview>
        <TextStaggerInview
          as={'h3'}
          className="text-3xl leading-relaxed"
          stagger={0.01}
        >
          {ABOUT_TEXT}
        </TextStaggerInview>
      </div>
    </section>
  );
}
export function AgencyPageProcess() {
  return (
    <section className="p-12">
      <div className="grid md:grid-cols-[0.4fr_0.6fr] md:gap-10 xl:gap-12">
        <div className="left-0 md:h-dvh top-16 space-y-5 md:sticky md:py-12">
          <TextStaggerInview
            className="pt-4 text-foreground/80 text-nowrap text-xs font-semibold capitalize tracking-wide"
            as="h4"
          >
            / our process
          </TextStaggerInview>
          <TextStaggerInview
            className="text-3xl font-medium tracking-tighter"
            as="h2"
          >
            From ideation to launch
          </TextStaggerInview>
          <p className="max-w-prose text-muted-foreground">
            every iteration in between—our collaborative, data‑driven
            methodology ensures clarity, efficiency, and measurable impact at
            each stage of your project.
          </p>
          <Button variant={'link'}>
            <Link href="/docs/blocks/cards-stack">Start your project</Link>
            <ArrowUpRightIcon />
          </Button>
        </div>

        <ContainerScroll className="space-y-8 py-12 place-content-center place-items-center">
          {PROCESS.map((feature, index) => (
            <CardSticky
              key={feature.id}
              index={index + 2}
              incrementZ={3}
              className="rounded-2xl border p-8  shadow-md backdrop-blur-md"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="my-6 text-2xl font-bold tracking-tighter">
                  {feature.title}
                </h2>
                <h1 className="font-bold text-4xl text-primary">{index + 1}</h1>
              </div>

              <p className="text-foreground">{feature.description}</p>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </section>
  );
}
export function AgencyPageTestimonials() {
  return (
    <section className="px-8 py-12">
      <div className="flex flex-col justify-center items-center text-center space-y-2">
        <TextStaggerInview
          className="pt-4 text-foreground/80 text-nowrap text-xs font-semibold capitalize tracking-wide"
          as="h4"
          viewport={{ once: true }}
        >
          / Testimonials
        </TextStaggerInview>
        <TextStaggerInview
          className="text-3xl font-medium tracking-tighter"
          as="h2"
          viewport={{ once: true }}
        >
          What Our Clients Say
        </TextStaggerInview>
      </div>

      <ContainerScrollRotatedCards className="container h-[300vh] ">
        <div className="sticky left-0 top-0 h-svh w-full py-12">
          <CardsContainer className="mx-auto size-full h-[450px] w-[350px]">
            {TESTIMONIALS.map((testimonial, index) => (
              <CardTransformed
                arrayLength={TESTIMONIALS.length}
                key={testimonial.id}
                index={index + 2}
              >
                <CardTestimonial
                  testimonialQuote={testimonial.quote}
                  testimonialRating={testimonial.rating}
                  testimonialAuthor={{
                    authorName: testimonial.name,
                    avatarUrl: testimonial.avatarUrl,
                    description: testimonial.profession,
                  }}
                  role="article"
                  aria-labelledby={`card-${testimonial.id}-title`}
                  aria-describedby={`card-${testimonial.id}-content`}
                  className="h-[450px] w-[350px] bg-card/10 shadow"
                >
                  <TestimonialRating className="text-primary" />
                  <div className="relative text-center mx-auto w-4/5 text-lg">
                    <TestimonialQuote>{testimonial.quote}</TestimonialQuote>
                  </div>

                  <TestimonialAuthor className="flex items-center gap-4" />
                </CardTestimonial>
              </CardTransformed>
            ))}
          </CardsContainer>
        </div>
      </ContainerScrollRotatedCards>
    </section>
  );
}
export function AgencyPageWork() {
  const carouselXRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselXRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['-0%', '-100%']);
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-12">
      <div
        ref={carouselXRef}
        className="relative h-[300vh] w-screen max-w-full"
      >
        <div className="sticky space-y-8 overflow-hidden w-full h-dvh top-0 left-0 place-content-center">
          <motion.div
            className="flex space-x-8 [&>*:first-child]:ml-8"
            style={{ x }}
          >
            <div className="flex flex-col items-start space-y-2 min-w-[40vw] ">
              <TextStaggerInview
                className="pt-4 text-foreground/80 text-nowrap text-xs font-semibold capitalize tracking-wide"
                as="h4"
                viewport={{ once: true }}
              >
                / our work
              </TextStaggerInview>
              <TextStaggerInview
                className="text-3xl font-medium tracking-tighter"
                as="h2"
                viewport={{ once: true }}
              >
                Our Work in Action
              </TextStaggerInview>

              <p className="max-w-prose text-muted-foreground">
                From startups to enterprises, we’ve delivered solutions that
                drive results. Here are a few highlights:
              </p>
              <Button variant={'link'}>
                <Link href="/docs/blocks/cards-stack">View all</Link>
                <ArrowUpRightIcon />
              </Button>
            </div>
            {WORK.map((work) => (
              <CardHoverReveal
                key={work.id}
                className="min-w-[35vw] rounded-xl"
              >
                <CardHoverRevealMain>
                  <img
                    alt={work.title}
                    src={work.imageUrl}
                    className="size-full aspect-square object-cover"
                  />
                </CardHoverRevealMain>
                <CardHoverRevealContent className="space-y-4 rounded-2xl bg-[rgba(0,0,0,.5)] backdrop-blur-3xl p-4">
                  <div className="space-y-2">
                    <h3 className="text-sm text-white/80">Type</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="capitalize rounded-full">
                        {work.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm text-white/80">Services</h3>
                    <div className="flex flex-wrap gap-2">
                      {work.services.map((service) => (
                        <Badge
                          key={service}
                          className="capitalize rounded-full"
                          variant={'secondary'}
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 mt-2">
                    <h3 className="text-white capitalize font-medium">
                      {work.title}
                    </h3>
                    <p className="text-white/80 text-sm">{work.description}</p>
                  </div>
                </CardHoverRevealContent>
              </CardHoverReveal>
            ))}
          </motion.div>
          <div className="max-w-screen overflow-hidden bg-secondary mx-8 h-1 rounded-full">
            <motion.div
              style={{ scaleX }}
              className="size-full origin-left bg-primary/70 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export function AgencyPageDemo() {
  return (
    <>
      <AgencyPageHeader />

      <main className="relative">
        <AgencyPageHero />
        <AgencyPageAbout />
        <AgencyPageServices />
        <AgencyPageWork />
        <AgencyPageProcess />
        <AgencyPageTestimonials />
      </main>
      <AgencyPageFooter />
    </>
  );
}
