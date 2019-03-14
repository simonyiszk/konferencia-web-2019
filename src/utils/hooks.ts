import { useEffect, useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export function useWindowMousePosition() {
  const [windowMousePosition, setWindowMousePosition] = useState<
    [number | null, number | null]
  >([null, null]);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setWindowMousePosition([e.pageX, e.pageY]);
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return windowMousePosition;
}
