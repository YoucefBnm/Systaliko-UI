import Link from 'next/link';

export function HomeBanner() {
  return (
    <div className="group relative top-0 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-3  md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <Link
          href="/docs/templates/veo"
          target="_blank"
          className="inline-flex text-xs leading-normal md:text-sm"
        >
          <strong>New Ecommerce Blocks </strong>
          &nbsp;are available &nbsp;
          <strong className="underline">completly free</strong> ✨
        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
    </div>
  );
}
