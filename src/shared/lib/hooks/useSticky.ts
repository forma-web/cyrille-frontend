import { useCallback, useEffect, useMemo, useState } from 'react';

export const useSticky = (triggerRef: React.RefObject<HTMLDivElement>) => {
  const [isSticky, setIsSticky] = useState(false);

  const obCallback = useCallback((payload: IntersectionObserverEntry[]) => {
    setIsSticky(() => !payload[0].isIntersecting);
  }, []);

  const ob = useMemo(() => new IntersectionObserver(obCallback), [obCallback]);

  useEffect(() => {
    if (!triggerRef.current) return;

    ob.observe(triggerRef.current);
  }, [ob, triggerRef]);

  return { isSticky };
};
