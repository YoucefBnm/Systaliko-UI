import {
  CardsContainer,
  CardTransformed,
  ContainerScroll,
} from '@/__registry__/cards/cards-stack-rotated/default';

export function CardsStackRotatedRecognitionsDemo() {
  return (
    <section className="px-8 py-12">
      <div>
        <h2 className="text-center text-4xl font-semibold">Recognitions</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          consequatur reprehenderit.
        </p>
      </div>
      <ContainerScroll className="container h-[300vh] ">
        <div className="sticky left-0 top-0 h-svh w-full py-12">
          <CardsContainer className="mx-auto size-full h-72 w-[440px]">
            <CardTransformed
              className="items-start border p-12 rounded-xl overflow-hidden shadow justify-evenly border-none bg-blue-600/80  text-secondary backdrop-blur-md"
              arrayLength={4}
              index={1}
            >
              <div className="flex flex-col items-start justify-start space-y-4 ">
                <div className="flex size-16 items-center justify-center  rounded-sm bg-secondary/50 text-2xl">
                  🏆
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wide">Awwwards</h4>
                  <h3 className="text-2xl font-bold">Site of the Day</h3>
                </div>
              </div>
              <p className=" text-secondary/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus consequatur reprehenderit.
              </p>
            </CardTransformed>

            <CardTransformed
              className="items-start border p-12 rounded-xl overflow-hidden shadow justify-evenly border-none bg-orange-600/80 text-secondary backdrop-blur-md"
              arrayLength={4}
              index={2}
            >
              <div className="flex flex-col items-start justify-start space-y-4 ">
                <div className="flex size-16 items-center justify-center  rounded-sm bg-secondary/50 text-2xl">
                  🚀
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wide">
                    Performance
                  </h4>
                  <h3 className="text-2xl font-bold">100% Performance Score</h3>
                </div>
              </div>
              <p className=" text-secondary/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus consequatur reprehenderit.
              </p>
            </CardTransformed>
            <CardTransformed
              className="items-start border p-12 rounded-xl overflow-hidden shadow justify-evenly border-none bg-cyan-600/80 text-secondary backdrop-blur-md"
              arrayLength={4}
              index={3}
            >
              <div className="flex flex-col items-start justify-start space-y-4 ">
                <div className="flex size-16 items-center justify-center  rounded-sm bg-secondary/50 text-2xl">
                  🎯
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wide">
                    CSS awaaards
                  </h4>
                  <h3 className="text-2xl font-bold">Honorable Mention</h3>
                </div>
              </div>
              <p className=" text-secondary/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus consequatur reprehenderit.
              </p>
            </CardTransformed>
            <CardTransformed
              className="items-start border p-12 rounded-xl overflow-hidden shadow justify-evenly border-none bg-violet-600/80 text-secondary backdrop-blur-md"
              arrayLength={4}
              index={4}
            >
              <div className="flex flex-col items-start justify-start space-y-4 ">
                <div className="flex size-16 items-center justify-center  rounded-sm bg-secondary/50 text-2xl">
                  🎖
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wide">awaaards</h4>
                  <h4 className="text-2xl font-bold">Most Creative Design</h4>
                </div>
              </div>
              <p className=" text-secondary/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus consequatur reprehenderit.
              </p>
            </CardTransformed>
          </CardsContainer>
        </div>
      </ContainerScroll>
    </section>
  );
}
