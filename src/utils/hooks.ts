import { useState, useEffect } from 'react';

// TODO: Use @rehooks/window-mouse-position instead
// eslint-disable-next-line import/prefer-default-export
export function useWindowMousePosition() {
  const [WindowMousePosition, setWindowMousePosition] = useState<{
    x: number | null;
    y: number | null;
  }>({
    x: null,
    y: null,
  });

  function handleMouseMove(e: MouseEvent) {
    setWindowMousePosition({
      x: e.pageX,
      y: e.pageY,
    });
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return WindowMousePosition;
}
