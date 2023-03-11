import { useEffect, useState } from 'react';

const useSticky = (triggerRef: React.RefObject<HTMLDivElement>) => {
  const [isSticky, setIsSticky] = useState(false);

  const obCallback = (payload: IntersectionObserverEntry[]) => {
    console.log('useSticky: ', payload[0].isIntersecting);

    setIsSticky(() => !payload[0].isIntersecting);
  };

  const ob = new IntersectionObserver(obCallback);

  useEffect(() => {
    if (!triggerRef.current) return;

    ob.observe(triggerRef.current);
  }, [triggerRef.current]);

  return { isSticky };
};

export default useSticky;
