/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { TextStaggerHoverDemo } from '@/registry/demo/text/text-stagger-hover';
import {
  TextStaggerHover,
  TextStaggerHoverActive,
  TextStaggerHoverHidden,
} from '@/registry/text/text-stagger-hover';
import { motion, useScroll, useTransform } from 'motion/react';
import { animationRange } from '@/registry/utils/animation-range/animation-range';
import { GridBentoDemo } from '@/registry/demo/containers/grid-bento';
import { ContainerInfiniteScrollDemo } from '@/registry/demo/containers/container-infinite-scroll';

const HeroDesignStudioDemo1 = () => (
  <section className="min-h-screen w-full">
    {/* container */}
    <div className="md:grid h-[55rem] w-full md:grid-cols-12 md:grid-rows-[6.25rem_1fr_1fr_6.25rem_1fr]">
      {/* text */}
      <div className="md:rounded-tr-[400px] md:row-start-1 md:row-end-5 md:col-start-1 md:col-end-9 bg-slate-200">
        <div className=" p-8 md:pl-12 md:pr-0 h-full gap-8 flex flex-col justify-center relative z-20">
          <h1 className=" font-serif text-6xl xl:text-7xl tracking-tight">
            Crafting Timeless Architectural Spaces
          </h1>
          <p>
            We are a visionary design collective that transforms spaces <br />
            into living art. Our expertise spans from architectural <br />
            innovation to bespoke interior solutions, creating <br />
            environments that inspire and endure.
          </p>
          <div className="md:text-center">
            <Button className=" bg-slate-900 text-slate-50" size={'lg'}>
              Get Started &rarr;
            </Button>
          </div>
        </div>
      </div>

      {/* image */}
      <div className="relative before:pointer-events-none md:row-start-2 md:row-end-4 rounded-bl-[200px] md:col-start-7 md:col-end-13 bg-blue-400 before:size-full before:absolute before:top-[30px] before:bottom-[-30px] before:left-[-30px] before:right-[-30px] before:border before:border-neutral-300 before:rounded-[inherit] before:hidden md:before:block">
        <div className="size-full bg-blue-500 overflow-hidden rounded-[inherit] z-10 relative">
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="modern architecture"
            className="size-full object-cover"
          />
        </div>
      </div>

      {/* rounded image 1 */}
      <div className=" min-w-px overflow-hidden row-start-4 col-start-2 row-end-6 col-end-4  md:rounded-full">
        <img
          src="https://images.unsplash.com/photo-1520587393050-c5298e1a8486?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="modern architecture"
          className="size-full object-cover"
        />
      </div>

      {/* image 2 */}
      <div className="row-start-5 overflow-hidden col-start-5 row-end-6 col-end-7 md:rounded-b-full">
        <img
          src="https://images.unsplash.com/photo-1504963831438-960a99a0d630?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="modern architecture"
          className="size-full object-cover"
        />
      </div>

      {/* button */}
    </div>
  </section>
);

const HeroDesignStudioDemo2 = () => (
  <section className="min-h-screen w-full">
    {/* container */}
    <div className="md:grid h-[55rem] w-full md:grid-cols-12 md:grid-rows-[6.25rem_1fr_1fr_6.25rem_1fr]">
      {/* text */}
      <div className="md:rounded-tr-[400px] md:row-start-1 md:row-end-5 md:col-start-1 md:col-end-9 bg-slate-800 text-slate-50">
        <div className=" p-8 md:pl-12 md:pr-0 h-full gap-8 flex flex-col justify-center relative z-20">
          <h1 className=" font-medium  text-6xl xl:text-7xl tracking-tight">
            Creating Digital Experiences That Inspire
          </h1>
          <p>
            We craft digital experiences that blend creativity with strategy.{' '}
            <br />
            From brand identity to web design, we transform ideas into <br />
            compelling visual stories that connect with your audience and <br />
            drive meaningful engagement.
          </p>
          <div className="md:text-center">
            <Button
              variant={'secondary'}
              className="bg-slate-100 rounded-none text-slate-800"
              size={'lg'}
            >
              Get Started &rarr;
            </Button>
          </div>
        </div>
      </div>

      {/* image */}
      <div className="relative before:pointer-events-none md:row-start-1 md:row-end-4 rounded-bl-[200px] md:col-start-7 md:col-end-13 before:size-full before:absolute before:top-[30px] before:bottom-[-30px] before:left-[-30px] before:right-[-30px]  before:bg-amber-400 before:rounded-[inherit] before:hidden md:before:block">
        <div className="size-full  overflow-hidden rounded-[inherit] z-10 relative">
          <img
            src="https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2186&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="modern architecture"
            className="size-full object-cover"
          />
        </div>
      </div>

      {/* rounded image 1 */}
      <div className=" min-w-px overflow-hidden row-start-4 col-start-2 row-end-6 col-end-4  md:rounded-full">
        <img
          src="https://images.unsplash.com/photo-1597239451147-f163967b8581?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="modern architecture"
          className="size-full object-cover"
        />
      </div>

      {/* image 2 */}
      <div className="row-start-5 overflow-hidden col-start-5 row-end-6 col-end-7 md:rounded-b-full">
        <img
          src="https://images.unsplash.com/photo-1631624210938-539575f92e3c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="modern architecture"
          className="size-full object-cover"
        />
      </div>

      {/* button */}
    </div>
  </section>
);

export default function Home() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['-0%', '-100%']);

  const y1Range = animationRange(0, 8);
  const y1 = useTransform(scrollYProgress, y1Range, [20, 0]);

  const y2Range = animationRange(1, 8);
  const y2 = useTransform(scrollYProgress, y2Range, [40, 0]);

  const y3Range = animationRange(2, 8);
  const y3 = useTransform(scrollYProgress, y3Range, [60, 0]);

  const y4Range = animationRange(3, 8);
  const y4 = useTransform(scrollYProgress, y4Range, [80, 0]);

  const y5Range = animationRange(4, 8);
  const y5 = useTransform(scrollYProgress, y5Range, [100, 0]);

  const y6Range = animationRange(5, 8);
  const y6 = useTransform(scrollYProgress, y6Range, [120, 0]);

  const y7Range = animationRange(6, 8);
  const y7 = useTransform(scrollYProgress, y7Range, [140, 0]);

  const y8Range = animationRange(7, 8);
  const y8 = useTransform(scrollYProgress, y8Range, [160, 0]);

  return (
    <main className="relative ">
      <ContainerInfiniteScrollDemo />
      <GridBentoDemo />
      {/* wrap */}

      {/* <div className="max-w-screen sticky top-0 left-0 w-full h-svh overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-6 h-svh items-center px-6"
        >
          <motion.div
            style={{ y: y1 }}
            className="basis-1/4 min-w-1/4 overflow-hidden  max-h-[50vw] h-[65vmin]"
          >
            <img
              src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="tokyo"
              className="size-full object-cover "
            />
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            className="basis-1/4 min-w-1/4 overflow-hidden  max-h-[50vw] h-[65vmin]"
          >
            <img
              src="https://images.unsplash.com/photo-1608874973277-a34ed4aba3f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8"
              alt="tokyo"
              className="size-full object-cover "
            />
          </motion.div>

          <motion.div
            style={{ y: y3 }}
            className="basis-1/4 min-w-1/4 overflow-hidden  max-h-[50vw] h-[65vmin]"
          >
            <img
              src="https://images.unsplash.com/photo-1732667318048-c3868e2c6ed6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
              alt="tokyo"
              className="size-full object-cover "
            />
          </motion.div>

          <motion.div
            style={{ y: y4 }}
            className="basis-1/4 min-w-1/4 overflow-hidden  max-h-[50vw] h-[65vmin]"
          >
            <img
              src="https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8"
              alt="tokyo"
              className="size-full object-cover "
            />
          </motion.div>

          <motion.div
            style={{ y: y5 }}
            className="basis-1/4 min-w-1/4 overflow-hidden  max-h-[50vw] h-[65vmin]"
          >
            <img
              src="https://images.unsplash.com/photo-1573455494057-12684d151bf4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8"
              alt="tokyo"
              className="size-full object-cover "
            />
          </motion.div>

          <motion.div
            style={{ y: y7 }}
            className="basis-1/4 min-w-1/4 overflow-hidden  max-h-[50vw] h-[65vmin]"
          >
            <img
              src="https://images.unsplash.com/photo-1490855345014-1692c19ffe60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUxfHx8ZW58MHx8fHx8"
              alt="tokyo"
              className="size-full object-cover "
            />
          </motion.div>

          <motion.div
            style={{ y: y8 }}
            className="basis-1/4 min-w-1/4 overflow-hidden  max-h-[50vw] h-[65vmin]"
          >
            <img
              src="https://images.unsplash.com/photo-1493515211228-6c03db55b9ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ3fHx8ZW58MHx8fHx8"
              alt="tokyo"
              className="size-full object-cover "
            />
          </motion.div>
        </motion.div>
      </div> */}
    </main>
  );
}
