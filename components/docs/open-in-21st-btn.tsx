import TwentyFirstIcon from '../icons/21st-icon';
import { Button } from '@/registry/shadcn/button';

export function OpenIn21stBtn({
  componentName,
  url,
}: {
  componentName: string;
  url?: string;
}) {
  const href = url ?? `https://21st.dev/youcefbnm/${componentName}/default`;

  return (
    <Button size={'sm'} aria-label="Open in 21st dev" asChild>
      <a href={href} target="_blank" rel="noreferrer" className="no-underline">
        Open in 21st dev <TwentyFirstIcon />
      </a>
    </Button>
  );
}
