import {
  CardSticky,
  ContainerScroll,
} from '@/__registry__/cards/cards-stack/default';

const ACHIEVEMENTS = [
  {
    id: 'achivement-1',
    title: '4',
    description: 'site of the day',
    bg: 'var(--primary)',
  },
  {
    id: 'achivement-2',
    title: '60+',
    description: 'website created',
    bg: 'var(--chart-2)',
  },
  {
    id: 'achivement-3',
    title: '5+',
    description: 'years of experience',
    bg: 'var(--chart-1)',
  },
  {
    id: 'achivement-4',
    title: '6+',
    description: 'component created',
    bg: 'var(--chart-4)',
  },
];

export function CardsStackSmDemo() {
  return (
    <ContainerScroll className="min-h-[400vh] place-items-center space-y-8 p-12 text-center ">
      {ACHIEVEMENTS.map((achievement, index) => (
        <CardSticky
          key={achievement.id}
          incrementY={20}
          index={index + 2}
          className="flex h-72 w-[420px] flex-col place-content-center justify-evenly rounded-2xl  p-8 shadow-md"
          style={{ rotate: index + 2, background: achievement.bg }}
        >
          <h1 className="text-left text-6xl font-semibold opacity-80">
            {achievement.title}
          </h1>
          <div className="place-items-end text-right">
            <h3 className="max-w-[10ch] text-wrap  text-4xl font-semibold capitalize tracking-tight">
              {achievement.description}
            </h3>
          </div>
        </CardSticky>
      ))}
    </ContainerScroll>
  );
}
