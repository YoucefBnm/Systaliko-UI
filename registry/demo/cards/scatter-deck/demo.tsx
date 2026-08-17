'use client';
import { cn } from '@/lib/utils';
import { CameraIcon, GlobeIcon } from 'lucide-react';
import LinkedinIcon from '../linkedin-icon';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Marquee } from '../marquee';
import { TextStaggerInview } from '../systaliko-ui/text-stagger-inview';

const TEAM = [
  {
    id: 'team-member-2',
    name: 'Alexander Hipp',
    position: 'Lead Designer',
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Alexander is a Lead Designer at Abla Studio. He is a creative problem solver who is always looking for new ways to innovate and improve user experiences. He has a strong background in UX/UI design and is always looking for new ways to improve user experiences.',
    socialLinks: [
      {
        label: 'linkedin',
        url: 'https://www.linkedin.com/in/alexsanders/',
        icon: LinkedinIcon,
      },
      {
        label: 'website',
        url: 'https://www.alexsanders.com/',
        icon: GlobeIcon,
      },
      {
        label: 'instagram',
        url: 'https://www.instagram.com/alexsanders/',
        icon: CameraIcon,
      },
    ],
  },
  {
    id: 'team-member-3',
    name: 'Jacklin Nackos',
    position: 'Staff Engineer',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Jacklin is a Staff Engineer at Abla Studio. He is passionate about design, technology, and innovation. He has a strong background in UX/UI design and is always looking for new ways to improve user experiences.',
    socialLinks: [
      {
        label: 'linkedin',
        url: 'https://www.linkedin.com/in/alexsanders/',
        icon: LinkedinIcon,
      },
      {
        label: 'website',
        url: 'https://www.alexsanders.com/',
        icon: GlobeIcon,
      },
      {
        label: 'instagram',
        url: 'https://www.instagram.com/alexsanders/',
        icon: CameraIcon,
      },
    ],
  },
  {
    id: 'team-member-1',
    name: 'Alex Suprun',
    position: 'Staff Engineer',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Alex is a Staff Engineer at Abla Studio. He is passionate about design, technology, and innovation. He has a strong background in UX/UI design and is always looking for new ways to improve user experiences.',
    socialLinks: [
      {
        label: 'linkedin',
        url: 'https://www.linkedin.com/in/alexsanders/',
        icon: LinkedinIcon,
      },
      {
        label: 'website',
        url: 'https://www.alexsanders.com/',
        icon: GlobeIcon,
      },
      {
        label: 'instagram',
        url: 'https://www.instagram.com/alexsanders/',
        icon: CameraIcon,
      },
    ],
  },
];
interface MemberProps {
  name: string;
  position: string;
  avatar: string;
  socialLinks: { label: string; url: string; icon?: React.ElementType }[];
  bio?: string;
}
function TeamCard({
  member,
  className,
  ...props
}: React.ComponentProps<'div'> & { member: MemberProps }) {
  return (
    <div
      className={cn(
        'flex bg-card text-card-foreground rounded-full border flex items-center gap-4',
        className,
      )}
      {...props}
    >
      <div className="p-2">
        <Avatar className="size-20">
          <AvatarImage
            src={member.avatar}
            alt={`@${member.name}`}
            className=""
          />
          <AvatarFallback>{member.name}</AvatarFallback>
        </Avatar>
      </div>
      <div className="pr-10 space-y-4">
        <div className="">
          <h3 className="font-medium">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.position}</p>
        </div>
        <div className="flex gap-1">
          {member.socialLinks.map((socialLink) => (
            <div key={socialLink.label}>
              <a href={socialLink.url}>
                {socialLink.icon && (
                  <socialLink.icon className="size-4 text-primary stroke-[1.5]" />
                )}
                {!socialLink.icon && <span>{socialLink.label}</span>}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MarqueeDemo() {
  return (
    <section className="py-20 ">
      <div className="px-8 mb-8">
        <TextStaggerInview
          animation="blur"
          className="mb-6 text-muted-foreground uppercase tracking-wider text-sm"
        >
          our team of experts
        </TextStaggerInview>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee className="[--duration:20s]">
          {TEAM.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {TEAM.reverse().map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>
    </section>
  );
}
