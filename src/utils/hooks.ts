import { useEffect, useState } from 'react';

// TODO: Use @rehooks/window-mouse-position instead
// eslint-disable-next-line import/prefer-default-export
export function useWindowMousePosition() {
  const [windowMousePosition, setWindowMousePosition] = useState<{
    x: number | null;
    y: number | null;
  }>({
    x: null,
    y: null,
  });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setWindowMousePosition({
        x: e.pageX,
        y: e.pageY,
      });
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return windowMousePosition;
}
