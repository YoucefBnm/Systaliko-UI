import { Card } from '@/registry/cards/card';
import { CardSticky, CardsStackContainer } from '@/registry/cards/cards-stack';

const PROCESS_PHASES = [
  {
    id: 'process-1',
    title: 'Research and Analysis',
    description:
      'With your vision in mind, we enter the Research and Analysis phase. Here, we examine your competitors, industry trends, and user preferences. This informed approach ensures your website stands out and provides an excellent user experience.',
  },
  {
    id: 'process-2',
    title: 'Wireframing and Prototyping',
    description:
      "We move on to Wireframing and Prototyping, where we create skeletal representations of your website's pages. These visual indigoprints allow us to test and refine the user experience before diving into design.",
  },
  {
    id: 'process-3',
    title: 'Design Creation',
    description:
      "Now, it's time for the Design Creation phase. Our talented designers bring your vision to life. We focus on aesthetics, ensuring your website not only looks stunning but also aligns perfectly with your brand identity.",
  },
  {
    id: 'process-4',
    title: 'Development and Testing',
    description:
      'In the Development and Testing phase, our skilled developers turn designs into a fully functional website. Rigorous testing ensures everything works seamlessly, providing an exceptional user experience.',
  },
  {
    id: 'process-5',
    title: 'Launch and Support',
    description:
      "Our commitment continues beyond launch. We offer post-launch support to address questions, provide assistance, and ensure your website remains updated and optimized. The Website Design Process isn't just about creating a website; it's about crafting a digital experience that resonates, engages, and converts.",
  },
];

export function CardsStackDemo() {
  return (
    <CardsStackContainer className="space-y-8 py-12 place-content-center place-items-center">
      {PROCESS_PHASES.map((phase, index) => (
        <CardSticky key={phase.id} index={index + 2}>
          <Card variant={'glass'} className="p-8 w-1/2 mx-auto">
            <div className="my-6 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold tracking-tighter">
                {phase.title}
              </h2>
              <h3 className="text-2xl font-bold text-primary">
                {String(index + 1).padStart(2, '0')}
              </h3>
            </div>
            <p className="text-foreground">{phase.description}</p>
          </Card>
        </CardSticky>
      ))}
    </CardsStackContainer>
  );
}
