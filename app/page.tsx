import { Button } from '@/components/ui/button';

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
  return (
    <main>
      home page
      <Button>button</Button>
    </main>
  );
}
