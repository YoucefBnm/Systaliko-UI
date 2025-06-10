import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Story,
  StoryProgress,
  StoryControls,
  StorySlide,
  StoryOverlay,
} from '@/__registry__/story/shadcn-default';

const FABRIZIO_STORIES = [
  {
    title: 'Champions league will begin soon',
    caption: 'whos you are running for ?',
    storyImage:
      'https://images.unsplash.com/photo-1569617234470-9e9813ee1dae?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "who's your favourite player ?",
    caption: 'who you think will win the champions league ?',
    storyImage:
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const SHADCN_STORIES = [
  {
    title: 'Easy vibes',
    caption: 'In the System Prompts.',
    storyImage:
      'https://pbs.twimg.com/media/Gr5BeX6WwAAgGH_?format=jpg&name=large',
  },
  {
    title: 'The new calendar.tsx is here',
    caption: `
    → Latest react-daypicker
    → Tailwind v3 and v4
    → Date, range & time pickers
    → Persian, Hijri & timezone support
    → 30+ examples to copy, paste, and build.
    `,
    storyImage:
      'https://pbs.twimg.com/media/GsxdzRfb0AIUBSs?format=jpg&name=large',
  },
  {
    title: '🤣🤣🤣🤣🤣',
    caption: 'Me walking away after adding min-w-0 and it works.',
    storyImage:
      'https://pbs.twimg.com/media/Gsh-UBoasAM_Uin?format=jpg&name=medium',
  },
];

const NBA_STORIES = [
  {
    title: 'Shai follows 38 in Game 1 with 34 tonight 🔥🔥🔥',
    caption:
      'MOST POINTS EVER by a player in his first 2 career Finals games 🚨🚨',
    storyImage:
      'https://pbs.twimg.com/media/Gs-BiiMbsAAIK9p?format=jpg&name=large',
  },
];

export function StoryDemo() {
  return (
    <section className="min-h-dvh p-12 w-full place-content-center">
      <div className="flex gap-4 justify-center">
        <Dialog>
          <DialogTrigger>
            <Avatar className="size-12">
              <AvatarImage
                src="https://scontent.forn3-5.fna.fbcdn.net/v/t39.30808-1/347110386_993663875383747_583934797072922306_n.jpg?stp=c0.124.1179.1179a_cp0_dst-jpg_s80x80_tt6&_nc_cat=1&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=sznTMSftQGgQ7kNvwFnYrhK&_nc_oc=Adl88GWERQJFnS-FhRo3kmyRvwQeqel4uE97CRcHAX2hgEouXRhN98vLowFYZewYbKE&_nc_zt=24&_nc_ht=scontent.forn3-5.fna&_nc_gid=zgCgewXONoFNXl_Ycl7B9Q&oh=00_AfP29XsY8aMHX1lZasw43qaYzda8eY9esKHCjO-ZARUk5A&oe=684D1280"
                alt="@fabrizioRomano"
              />
              <AvatarFallback>FR</AvatarFallback>
            </Avatar>
          </DialogTrigger>
          <DialogContent className="aspect-[12/16] w-auto h-[90vh] overflow-hidden p-0">
            <DialogTitle className="sr-only">Story</DialogTitle>

            <Story
              className="relative size-full "
              duration={5000}
              mediaLength={FABRIZIO_STORIES.length}
            >
              <DialogHeader className="px-4 py-6">
                <div className="relative z-10 flex items-center gap-2">
                  <Avatar className="size-10">
                    <AvatarImage
                      src="https://scontent.forn3-5.fna.fbcdn.net/v/t39.30808-1/347110386_993663875383747_583934797072922306_n.jpg?stp=c0.124.1179.1179a_cp0_dst-jpg_s80x80_tt6&_nc_cat=1&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=sznTMSftQGgQ7kNvwFnYrhK&_nc_oc=Adl88GWERQJFnS-FhRo3kmyRvwQeqel4uE97CRcHAX2hgEouXRhN98vLowFYZewYbKE&_nc_zt=24&_nc_ht=scontent.forn3-5.fna&_nc_gid=zgCgewXONoFNXl_Ycl7B9Q&oh=00_AfP29XsY8aMHX1lZasw43qaYzda8eY9esKHCjO-ZARUk5A&oe=684D1280"
                      alt="@fabrizioRomano"
                    />
                    <AvatarFallback>FR</AvatarFallback>
                  </Avatar>

                  <StoryProgress
                    className="flex-1"
                    progressWrapClass="h-1.5"
                    progressActiveClass="bg-blue-500"
                  />
                  <StoryControls
                    variant="ghost"
                    className="text-white rounded-full"
                  />
                </div>
              </DialogHeader>
              {FABRIZIO_STORIES.map((story, idx) => (
                <StorySlide
                  key={idx}
                  index={idx}
                  className="absolute inset-0 size-full"
                >
                  {/* Example with image */}
                  <img
                    src={story.storyImage}
                    className="w-full h-auto max-h-auto"
                    alt={story.title}
                  />

                  <div className="absolute bottom-4 left-4  z-10 space-y-1 text-white">
                    <a
                      className="text-secondary"
                      href="https://x.com/FabrizioRomano"
                    >
                      @FabrizioRomano
                    </a>
                    <h3 className="text-medium tracking-tight text-foreground-muted">
                      {story.title}
                    </h3>
                    <p className="text-sm text-slate-200">{story.caption}</p>
                  </div>
                </StorySlide>
              ))}
              <StoryOverlay />
            </Story>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger>
            <Avatar className="size-12">
              <AvatarImage
                src="https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg"
                alt="@shadcn"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </DialogTrigger>
          <DialogContent className="aspect-[12/16] w-auto h-[90vh] overflow-hidden p-0">
            <DialogTitle className="sr-only">Story</DialogTitle>

            <Story
              className="relative size-full "
              duration={5000}
              mediaLength={SHADCN_STORIES.length}
            >
              <DialogHeader className="px-4 py-6">
                <div className="relative z-10 flex items-center gap-2">
                  <Avatar className="size-10">
                    <AvatarImage
                      src="https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg"
                      alt="@shadcn"
                    />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>

                  <StoryProgress
                    className="flex-1"
                    progressWrapClass="h-1.5"
                    progressActiveClass="bg-pink-500"
                  />
                  <StoryControls
                    variant="ghost"
                    className="text-white rounded-full"
                  />
                </div>
              </DialogHeader>
              {SHADCN_STORIES.map((story, idx) => (
                <StorySlide
                  key={idx}
                  index={idx}
                  className="absolute inset-0 size-full"
                >
                  <img
                    src={story.storyImage}
                    className="w-full h-auto max-h-auto"
                    alt={story.title}
                  />

                  <div className="absolute bottom-4 left-4  z-10 space-y-1 text-white">
                    <a
                      className="text-secondary"
                      href="https://x.com/FabrizioRomano"
                    >
                      @Shadcn
                    </a>
                    <h3 className="text-medium tracking-tight text-foreground-muted">
                      {story.title}
                    </h3>
                    <p className="text-sm text-slate-200">{story.caption}</p>
                  </div>
                </StorySlide>
              ))}
              <StoryOverlay />
            </Story>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger>
            <Avatar className="size-12">
              <AvatarImage
                src="https://pbs.twimg.com/profile_images/1931904469446377472/mjaR8LDc_400x400.jpg"
                alt="@nba"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </DialogTrigger>
          <DialogContent className="aspect-[12/16] w-auto h-[90vh] overflow-hidden p-0">
            <DialogTitle className="sr-only">Story</DialogTitle>

            <Story
              className="relative size-full "
              duration={8000}
              mediaLength={NBA_STORIES.length}
            >
              <DialogHeader className="px-4 py-6">
                <div className="relative z-10 flex items-center gap-2">
                  <Avatar className="size-10">
                    <AvatarImage
                      src="https://pbs.twimg.com/profile_images/1931904469446377472/mjaR8LDc_400x400.jpg"
                      alt="@nba"
                    />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>

                  <StoryProgress
                    className="flex-1"
                    progressWrapClass="h-1.5"
                    progressActiveClass="bg-red-500"
                  />
                  <StoryControls
                    variant="ghost"
                    className="text-white rounded-full"
                  />
                </div>
              </DialogHeader>
              {NBA_STORIES.map((story, idx) => (
                <StorySlide
                  key={idx}
                  index={idx}
                  className="absolute inset-0 size-full"
                >
                  <img
                    src={story.storyImage}
                    className="w-full h-auto max-h-auto"
                    alt={story.title}
                  />

                  <div className="absolute bottom-4 left-4  z-10 p-4 space-y-1 text-white">
                    <a
                      className="text-secondary"
                      href="https://x.com/FabrizioRomano"
                    >
                      @nba
                    </a>
                    <h3 className="text-medium tracking-tight text-foreground-muted">
                      {story.title}
                    </h3>
                    <p className="text-sm text-slate-200">{story.caption}</p>
                  </div>
                </StorySlide>
              ))}
              <StoryOverlay />
            </Story>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
