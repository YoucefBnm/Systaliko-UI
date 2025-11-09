import MotionIcon from '../icons/motion-icon';
import ReactIcon from '../icons/react-icon';
import ShadcnIcon from '../icons/shadcn-icon';
import TailwindIcon from '../icons/tailwind-icon';
import TSIcon from '../icons/ts-icon';
import { LogoIconBg, LogoText } from '../logo';
import { Showcase } from './showcase';

const TECH_STACK = [
  {
    id: Math.random(),
    label: 'react',
    icon: ReactIcon,
  },
  {
    id: Math.random(),
    label: 'typescript',
    icon: TSIcon,
  },
  {
    id: Math.random(),
    label: 'tailwind',
    icon: TailwindIcon,
  },
  {
    id: Math.random(),
    label: 'shadcn',
    icon: ShadcnIcon,
  },
  {
    id: Math.random(),
    label: 'motion',
    icon: MotionIcon,
  },
];

export function OGContent() {
  return (
    <>
      <div className="relative bg-gray-950 min-h-screen  max-w-7xl place-content-center w-full overflow-hidden">
        <div className="relative z-10 flex px-6 pt-12  flex-col items-center text-center justify-center space-y-6">
          <div className="space-y-2 flex flex-col items-center justify-center">
            <LogoIconBg className="w-12" />
            <LogoText className=" w-30" />
          </div>

          <h2 className="font-bold max-w-[28ch] text-4xl">
            Copy Paste or install React blocks, components and templates
          </h2>
          <p className="text-sm max-w-[70ch] text-muted-foreground">
            Collection of UI blocks and components and ready to use templates to
            create your website in no time, animated and interactive. Built into
            the Shadcn CLI with no additional configuration.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-center gap-1 flex-wrap"
              >
                <tech.icon className="size-6" />
                <span className="text-muted-foreground text-sm capitalize font-medium">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <Showcase />
      </div>
    </>
  );
}
