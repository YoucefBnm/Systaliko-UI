import {
  ScrollXCarousel,
  ScrollXCarouselContainer,
  ScrollXCarouselWrap,
} from '@/__registry__/blocks/scroll-x-carousel/default';

const SHOWCASE_IMAGES = [
  'https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export function ScrollXCarouselReverseDemo() {
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
