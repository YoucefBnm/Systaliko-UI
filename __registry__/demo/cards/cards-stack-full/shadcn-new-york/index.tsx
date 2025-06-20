import { Badge } from '@/__registry__/badge/shadcn-new-york';
import {
  CardSticky,
  ContainerScroll,
} from '@/__registry__/cards/cards-stack/shadcn-new-york';

const WORK_PROJECTS = [
  {
    id: 'work-project-3',
    title: 'YCF DEV',
    services: ['Portfolio', 'Partnership', 'UI UX Design'],
    imageUrl:
      'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'work-project-1',
    title: 'Stridath Ecommerce',
    services: ['E-Commerce', 'Branding', 'UI UX Design', 'Development'],
    imageUrl:
      'https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'work-project-2',
    title: 'Marketing Agency',
    services: ['Partnership', 'UI UX Design', 'Development'],
    imageUrl:
      'https://images.unsplash.com/photo-1683803055067-1ca1c17cb2b9?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export function CardsStackFullDemo() {
  return (
    <div className="container min-h-svh place-content-center p-12 ">
      <div className="text-center">
        <Badge className="rounded-full" variant={'secondary'}>
          latest projects
        </Badge>
        <h2 className="mb-4 mt-1 text-4xl font-bold tracking-tight">
          Get a glimpse of <span className="text-primary">our work</span>
        </h2>
        <p className="mx-auto max-w-prose text-sm ">
          From ecommerce to startup landing pages and singl/multi page websites,
          building fully responsive and functional website that showcase your
          product and your unique identity.
        </p>
      </div>
      <ContainerScroll className="min-h-[500vh] py-12">
        {WORK_PROJECTS.map((project, index) => (
          <CardSticky
            key={project.id}
            index={index}
            className="w-full overflow-hidden rounded-sm bg-indigo-950 text-white border"
            incrementY={60}
            incrementZ={5}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
              <h2 className="text-2xl font-bold tracking-tighter">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-1">
                {project.services.map((service) => (
                  <Badge key={service} className="rounded-full">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
            <img
              className="size-full object-cover"
              width="100%"
              height="100%"
              src={project.imageUrl}
              alt="project"
            />
          </CardSticky>
        ))}
      </ContainerScroll>
    </div>
  );
}
