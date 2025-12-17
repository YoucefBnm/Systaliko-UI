import {
  DistributedCardCell,
  DistributedCards,
  DistributedCardsContainer,
} from '@/registry/blocks/distributed-cards';
import Image from 'next/image';

const CARDS = [
  {
    id: 'distributed-card-1',
    imageUrl:
      'https://images.unsplash.com/photo-1557409518-691ebcd96038?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startX: '100%',
    startY: '50%',
  },
  {
    id: 'distributed-card-2',
    imageUrl:
      'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startX: '0%',
    startY: '50%',
  },
  {
    id: 'distributed-card-3',
    imageUrl:
      'https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startX: '-100%',
    startY: '50%',
  },
  {
    id: 'distributed-card-4',
    imageUrl:
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startX: '100%',
    startY: '-50%',
  },
  {
    id: 'distributed-card-5',
    imageUrl:
      'https://images.unsplash.com/photo-1677652704119-1497d836c396?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startX: '0%',
    startY: '-50%',
  },
  {
    id: 'distributed-card-6',
    imageUrl:
      'https://images.unsplash.com/photo-1525230071276-4a87f42f469e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    startX: '-100%',
    startY: '-50%',
  },
];
export function DistributedCards2Demo() {
  return (
    <DistributedCards className="w-full">
      <DistributedCardsContainer className="h-screen flex items-center justify-center overflow-hidden">
        <div className="grid w-full h-full md:h-auto md:aspect-video max-w-5xl grid-cols-3 grid-rows-2 justify-center items-center gap-4 py-16 px-8">
          {CARDS.map((card, i) => {
            const start = i / (CARDS.length + 1);
            const end = (i + 1) / (CARDS.length + 1);
            const range = [start, end];
            return (
              <DistributedCardCell
                className="relative size-full shadow-xl rounded border border-border/20 overflow-hidden"
                inputRange={range}
                yRange={[card.startY, '0%']}
                xRange={[card.startX, '0%']}
                key={card.id}
              >
                <Image
                  src={card.imageUrl}
                  fill
                  alt={'tokyo'}
                  className="object-cover size-full"
                  sizes="(max-width: 768px) 80vw, 768px"
                />
              </DistributedCardCell>
            );
          })}
        </div>
      </DistributedCardsContainer>
    </DistributedCards>
  );
}
