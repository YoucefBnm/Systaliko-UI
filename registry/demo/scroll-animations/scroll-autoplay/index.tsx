import {
  ScrollAutoplay,
  ScrollAutoplayContainer,
  ScrollAutoplayItem,
} from '@/registry/scroll-animations/scroll-autoplay';
import Image from 'next/image';

const IMAGES = [
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=2368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww',
];
export function ScrollAutoplayDemo() {
  return (
    <ScrollAutoplay className="h-[300vh]">
      <ScrollAutoplayContainer className="sticky top-0 left-0 w-full h-screen place-content-center">
        <div className="relative w-full min-w-3xs md:min-w-md aspect-video  p-2 bg-linear-120 from-muted-foreground/30 to-muted/40 bg-no-repeat border border-foreground/10 rounded-3xl shadow-[inset_0_.450581px_#ffffff4d,0_0_36.0465px_#ffffff0f]">
          <div className="size-full border-16 border-zinc-800 ring ring-black rounded-[19px] relative">
            {IMAGES.map((imageUrl, index) => {
              const start = index / (IMAGES.length + 1);
              const end = (index + 1) / (IMAGES.length + 1);
              const range = [start, end];

              return (
                <ScrollAutoplayItem key={index} inputRange={range}>
                  <Image
                    fill
                    alt="tokyo city"
                    src={imageUrl}
                    className="size-full inset-0 object-cover "
                    priority
                  />
                </ScrollAutoplayItem>
              );
            })}
          </div>
        </div>
      </ScrollAutoplayContainer>
    </ScrollAutoplay>
  );
}
