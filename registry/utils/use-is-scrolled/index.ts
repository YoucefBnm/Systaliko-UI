import React from 'react';

export function useIsScrolled() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const sentinelRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the sentinel (top pixel) is NOT intersecting, we have scrolled down
        setIsScrolled(!entry.isIntersecting);
      },
      { root: null, threshold: 1.0 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return {
    isScrolled,
    sentinelRef,
  };
}
