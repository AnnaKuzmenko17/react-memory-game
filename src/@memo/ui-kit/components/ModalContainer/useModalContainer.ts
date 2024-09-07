import {useEffect, useRef} from 'react';

export const useModalContainer = () => {
  const portalRef = useRef<HTMLDivElement>(document.createElement('div'));

  useEffect(() => {
    const portal = portalRef.current;
    document.body.appendChild(portal);

    return () => {
      document.body.removeChild(portal);
    };
  }, []);

  return portalRef;
};
