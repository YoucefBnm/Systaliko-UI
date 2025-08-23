import { Button } from '@/registry/shadcn/button';
import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain,
} from '@/registry/cards/card-hover-reveal';
import { ArrowUpRightIcon } from 'lucide-react';

export const CardHoverRevealFullDemo = () => (
  <CardHoverReveal className="h-[512px] w-[385px]">
    <CardHoverRevealMain hoverScale={1}>
      <img
        alt="honda robot"
        src="https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={430}
        height={603}
        className="size-full object-cover"
      />
    </CardHoverRevealMain>

    <CardHoverRevealContent className="inset-0 bg-black/80 text-white p-0 flex flex-col justify-between">
      <div className="text-right">
        <Button size="icon" className="rounded-none">
          <ArrowUpRightIcon />
        </Button>
      </div>

      <div className="space-y-2 flex flex-col py-8 px-6 items-start">
        <h3 className=" font-semibold text-2xl">
          ASIMO Advanced Step in Innovative Mobility
        </h3>

        <p className="text-muted text-sm">
          walk, run, and perform various tasks, showcasing advancements in
          robotics. Honda retired ASIMO in 2018 to focus
        </p>
      </div>
    </CardHoverRevealContent>
  </CardHoverReveal>
);
