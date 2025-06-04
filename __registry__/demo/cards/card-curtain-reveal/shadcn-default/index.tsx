import { Button } from '@/components/ui/button';
import {
  CardCurtain,
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealDescription,
  CardCurtainRevealFooter,
  CardCurtainRevealTitle,
} from '@/__registry__/cards/card-curtain-reveal/shadcn-default';
import { ArrowUpRight } from 'lucide-react';

export const CardCurtainRevealDemo = () => {
  return (
    <CardCurtainReveal className=" h-[540px] w-96 border bg-fd-accent-foreground text-fd-accent shadow">
      <CardCurtainRevealBody>
        <CardCurtainRevealTitle className="text-3xl font-medium tracking-tight">
          Behind <br />
          the Curtain
        </CardCurtainRevealTitle>
        <CardCurtainRevealDescription className="my-4 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            voluptate, eum quia temporibus fugiat rerum nobis modi dolor,
            delectus laboriosam, quae adipisci reprehenderit officiis quidem
            iure ducimus incidunt officia. Magni, eligendi repellendus. Fugiat,
            natus aut?
          </p>
        </CardCurtainRevealDescription>
        <Button
          variant={'secondary'}
          size={'icon'}
          className="aspect-square rounded-full"
        >
          <ArrowUpRight />
        </Button>

        <CardCurtain className=" bg-secondary" />
      </CardCurtainRevealBody>

      <CardCurtainRevealFooter className="mt-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          width="100%"
          height="100%"
          alt="street"
          className="size-full"
          src="https://images.unsplash.com/photo-1628468033761-125b565aaac7?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </CardCurtainRevealFooter>
    </CardCurtainReveal>
  );
};
