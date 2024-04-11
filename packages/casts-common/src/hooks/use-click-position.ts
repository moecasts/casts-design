import { useEffect, useRef } from 'react';

export type Position = {
  x: number;
  y: number;
};

export const useClickPosition = () => {
  const mousePositionRef = useRef<Position | null>(null);

  const updateClickPosition = (e: MouseEvent) => {
    mousePositionRef.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  useEffect(() => {
    document.addEventListener('click', updateClickPosition, true);

    return () => {
      document.removeEventListener('click', updateClickPosition, true);
    };
  }, []);

  return mousePositionRef;
};
