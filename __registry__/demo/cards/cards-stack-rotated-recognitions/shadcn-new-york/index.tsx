import { Card } from '@/__registry__/cards/card/shadcn-new-york';
import {
  CardsContainer,
  CardTransformed,
  ContainerScrollRotatedCards,
} from '@/__registry__/cards/cards-stack-rotated/shadcn-new-york';

const RECOGNITIONS = [
  {
    id: 'recognition-1',
    icon: '🏆',
    title: 'Awwwards',
    description: 'Site of the Day',
    bg: 'bg-blue-700/80',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequatur reprehenderit.',
  },
  {
    id: 'recognition-2',
    icon: '🚀',
    title: 'Performance',
    description: '100% Performance Score',
    bg: 'bg-emerald-700/80',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequatur reprehenderit.',
  },
  {
    id: 'recognition-3',
    icon: '🎯',
    title: 'CSS awaaards',
    description: 'Honorable Mention',
    bg: 'bg-indigo-700/80',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequatur reprehenderit.',
  },
  {
    id: 'recognition-4',
    icon: '🎖',
    title: 'Most Creative Design',
    description: 'Awards',
    bg: 'bg-yellow-700/80',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequatur reprehenderit.',
  },
];

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
      <ContainerScrollRotatedCards className="container h-[300vh] ">
        <div className="sticky left-0 top-0 h-svh w-full py-12">
          <CardsContainer className="mx-auto size-full h-72 w-[440px]">
            {RECOGNITIONS.map((recognition, index) => (
              <CardTransformed
                arrayLength={RECOGNITIONS.length}
                key={recognition.id}
                index={index + 1}
              >
                <Card
                  variant={'glass'}
                  className={`${recognition.bg} text-white items-start justify-start space-y-4`}
                >
                  <div
                    style={{ perspective: '500px' }}
                    className="flex size-16 items-center justify-center  rounded-sm bg-secondary/50 text-2xl"
                  >
                    <span className=" translate-z-20">{recognition.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wide">
                      {recognition.title}
                    </h4>
                    <h3 className="text-2xl font-bold">
                      {recognition.description}
                    </h3>
                  </div>
                  <p className="text-white/80">{recognition.text}</p>
                </Card>
              </CardTransformed>
            ))}
          </CardsContainer>
        </div>
      </ContainerScrollRotatedCards>
    </section>
  );
}
