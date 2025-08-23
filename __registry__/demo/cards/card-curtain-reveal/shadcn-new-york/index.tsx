import { Button } from '@/__registry__/shadcn/button/shadcn-new-york';
import {
  CardCurtain,
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealDescription,
  CardCurtainRevealFooter,
  CardCurtainRevealTitle,
} from '@/__registry__/cards/card-curtain-reveal/shadcn-new-york';
import { ArrowUpRight } from 'lucide-react';

export const CardCurtainRevealDemo = () => {
  return (
    <CardCurtainReveal className="h-[560px] w-96 border bg-foreground  text-background shadow">
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

        <CardCurtain className="bg-background" />
      </CardCurtainRevealBody>

      <CardCurtainRevealFooter className="mt-auto">
        <img
          alt="street"
          className="size-full"
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </CardCurtainRevealFooter>
    </CardCurtainReveal>
  );
};
