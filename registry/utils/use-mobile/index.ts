import * as React from 'react';

export function useIsMobile(break_point: number = 768) {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${break_point - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < break_point);
    };
    mql.addEventListener('change', onChange);
    setIsMobile(window.innerWidth < break_point);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return !!isMobile;
}
