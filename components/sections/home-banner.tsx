import Link from 'next/link';

export function HomeBanner() {
  return (
    <div className="group relative top-0 bg-primary py-3 text-white  md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <Link
          href="http://systaliko-ui.vercel.app/templates"
          target="_blank"
          className="inline-flex text-xs leading-normal md:text-sm"
        >
          🎁{' '}
          <span className="ml-1 font-[580] dark:font-[550]">
            {' '}
            Our new ready to use <strong>templates</strong> for your next
            project are now available for <strong>free</strong> 🎁
          </span>
        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
    </div>
  );
}
