import { cn } from '@/lib/utils';
import {
  ScrollAnimation,
  ScrollScale,
  ScrollTranslateX,
  ScrollTranslateY,
} from '@/__registry__/blocks/scroll-animation/shadcn-default';
import Image from 'next/image';

interface TeamMember {
  avatar: string;
  name: string;
  role: string;
}
const TEAM_MEMBERS: TeamMember[] = [
  {
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww',
    name: 'Magdalina',
    role: 'CEO',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww',
    name: 'Jamie',
    role: 'CTO',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Emilio',
    role: 'CTO',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Samia',
    role: 'COO',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Alex',
    role: 'Engineer',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Ema',
    role: 'Head of Product',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Carlos',
    role: 'Engineer',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Campos',
    role: 'Engineer',
  },
];

export function TeamCard({
  member,
  className,
  ...props
}: React.ComponentProps<'div'> & { member: TeamMember }) {
  return (
    <div className={cn('space-y-6', className)} {...props}>
      <Image
        src={member.avatar}
        alt={member.name}
        width={200}
        height={200}
        className="aspect-square w-full"
      />

      <div className="space-y-1 pb-4 px-4">
        <h3 className="text-xl font-medium">{member.name}</h3>
        <h4>{member.role}</h4>
      </div>
    </div>
  );
}
export function Team() {
  return (
    <ScrollAnimation className="overflow-hidden">
      <ScrollTranslateY className="min-h-svh flex flex-col justify-center items-center gap-6">
        <div className="w-full ">
          <ScrollTranslateX
            xRange={['-200%', '0%']}
            inputRange={[0.4, 0.9]}
            className="origin-bottom flex flex-nowrap gap-4"
          >
            {TEAM_MEMBERS.map((member, index) => (
              <TeamCard
                className="min-w-[48vw] md:min-w-[20vw] bg-card border"
                key={index}
                member={member}
              />
            ))}
          </ScrollTranslateX>
        </div>
        <ScrollScale
          inputRange={[0, 0.5]}
          scaleRange={[1.4, 1]}
          className="w-10/12 flex flex-col justify-center text-center items-center mx-auto origin-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Compact team of <span className="text-primary">strategists</span>
          </h2>
        </ScrollScale>
        <div className="w-full ">
          <ScrollTranslateX
            inputRange={[0.4, 0.9]}
            xRange={['100%', '-50%']}
            className="flex flex-nowrap gap-4"
          >
            {TEAM_MEMBERS.map((member, index) => (
              <TeamCard
                className="min-w-[48vw] md:min-w-[20vw] bg-card border"
                key={index}
                member={member}
              />
            ))}
          </ScrollTranslateX>
        </div>
      </ScrollTranslateY>
    </ScrollAnimation>
  );
}
