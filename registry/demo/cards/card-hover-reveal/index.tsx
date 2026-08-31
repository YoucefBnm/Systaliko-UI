import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain,
} from '@/registry/cards/card-hover-reveal';

export const CardHoverRevealDemo = () => (
  <CardHoverReveal className="h-[470px] w-[340px] rounded-xl ring-2 ring-ring/80 shadow-xs">
    <CardHoverRevealMain>
      <img
        width={385}
        height={498}
        alt="product image"
        src="https://images.unsplash.com/photo-1619551734325-81aaf323686c?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="inline-block size-full max-h-full max-w-full object-cover align-middle"
      />
    </CardHoverRevealMain>

    <CardHoverRevealContent className="space-y-4 rounded-2xl bg-foreground/80 text-background p-4">
      <div className="space-y-2">
        <h3 className="text-sm ">Services</h3>
        <div className="flex flex-wrap gap-2 ">
          <div className="mix-blend-exclusion rounded-full border border-border/10 bg-linear-to-b from-zinc-950 to-black/20 text-primary-foreground px-2 py-0.5">
            <p className=" text-[10px] leading-normal">Branding</p>
          </div>
          <div className="mix-blend-exclusion rounded-full border border-border/10 bg-linear-to-b from-zinc-950 to-black/20 text-primary-foreground px-2 py-0.5">
            <p className=" text-[10px] leading-normal">3D Modeling</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className=" text-sm ">Stack</h3>
        <div className="flex items-center  gap-2 ">
          <div className=" mix-blend-exclusion rounded-full border border-border/20 bg-linear-to-b from-muted/30 to-muted/10 text-muted px-2 py-0.5">
            <p className="text-[10px] leading-normal">Auto CAD</p>
          </div>
          <div className=" mix-blend-exclusion rounded-full border border-border/20 bg-linear-to-b from-muted/30 to-muted/10 text-muted px-2 py-0.5">
            <p className=" text-[10px] leading-normal">Key Shot</p>
          </div>
          <div className=" mix-blend-exclusion rounded-full border border-border/20 bg-linear-to-b from-muted/30 to-muted/10 text-muted px-2 py-0.5">
            <p className=" text-[10px] leading-normal">In Design</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm ">Profile</h3>
        {/* tag */}
        <div className="flex flex-wrap gap-2 ">
          <p className="text-xs text-balance ">
            Comprehensive platform designed for an agency, Creating professional
            and business-oriented brand.
          </p>
        </div>
      </div>
    </CardHoverRevealContent>
  </CardHoverReveal>
);
