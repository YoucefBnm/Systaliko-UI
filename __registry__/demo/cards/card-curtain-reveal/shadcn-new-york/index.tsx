import { Button } from '@/components/ui/button';
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
    <CardCurtainReveal className=" h-[540px] w-96 border bg-black dark:bg-white text-fd-accent shadow">
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
          width="100%"
          height="100%"
          alt="street"
          className="size-full"
          src="https://images.pexels.com/photos/1678997/pexels-photo-1678997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </CardCurtainRevealFooter>
    </CardCurtainReveal>
  );
};
