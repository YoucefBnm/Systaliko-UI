import {
  Timeline,
  TimelineCard,
  TimelineProgress,
} from '@/registry/blocks/timeline';

const PROCESS_PHASES: { phase: string; title: string; description: string }[] =
  [
    {
      phase: 'Discover & Define',
      title: 'Grasp your brand identity',
      description:
        'Our journey begins with a deep dive into your vision. In the Discovery phase, we engage in meaningful conversations to grasp your brand identity, goals, and the essence you want to convey. This phase sets the stage for all that follows.',
    },
    {
      phase: 'Design & Development',
      title: 'Bringing your vision into life',
      description:
        "Now, it's time for the Design Creation phase. Our talented designers bring your vision to life. We focus on aesthetics, ensuring your website not only looks stunning but also aligns perfectly with your brand identity.",
    },
    {
      phase: 'Build & Iterate',
      title: 'Refining the details',
      description:
        'Before your website goes live, it undergoes rigorous Testing and Quality Assurance. We meticulously examine functionality, performance, and compatibility to ensure a seamless user experience.',
    },
    {
      phase: 'Launch Phase',
      title: 'Ready for the spotlight',
      description:
        'The Launch phase is the culmination of hard work. We optimize, configure, and prepare for the grand reveal. Your website is now ready to shine in the digital world.',
    },
    {
      phase: 'Post Launch',
      title: 'Post launch support',
      description:
        "Our commitment continues beyond launch. We offer post-launch support to address questions, provide assistance, and ensure your website remains updated and optimized. The Website Design Process isn't just about creating a website.",
    },
  ];

export function TimelineDemo() {
  return (
    <Timeline className="flex justify-center gap-4 relative px-8 py-12">
      <TimelineProgress className="bg-stone-200" />
      <div className="space-y-20">
        {PROCESS_PHASES.map((phase, index) => (
          <TimelineCard key={phase.title} className="px-6 max-w-md flex gap-8">
            <div className="space-y-3">
              <div className="flex gap-4">
                <div>
                  <h2 className="font-medium">{phase.phase}</h2>
                  <h3 className="text-sm text-muted-foreground">
                    {phase.title}
                  </h3>
                </div>
                <div className="p-1">
                  <h4 className="text-xs font-bold tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </h4>
                </div>
              </div>
              <p className="text-balance text-sm text-muted-foreground">
                {phase.description}
              </p>
            </div>
          </TimelineCard>
        ))}
      </div>
    </Timeline>
  );
}
