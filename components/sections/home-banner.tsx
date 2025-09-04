import Link from 'next/link';

export function HomeBanner() {
  return (
    <div className="group relative top-0 bg-primary py-3 text-white  md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <Link
          href="/docs/templates/veo"
          target="_blank"
          className="inline-flex text-xs leading-normal md:text-sm"
        >
          <strong>🎁 Launch Giveaway 🎁</strong>{' '}
          <span className="ml-1 font-[580] dark:font-[550]">
            {' '}
            New template availble - Veo agency{' '}
            <strong>completly free 🎁</strong>
          </span>
        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
    </div>
  );
}
