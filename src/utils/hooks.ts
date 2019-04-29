import { useEffect, useRef, useState } from 'react';

// Source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export function useInterval(callback: Function, tickingRateMs: number) {
  const savedCallback = useRef<Function>();

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    function handleTick() {
      if (savedCallback.current) savedCallback.current();
    }

    const intervalID = setInterval(handleTick, tickingRateMs);
    return () => clearInterval(intervalID);
  }, [tickingRateMs]);
}

export function useCurrentUnixMs({ pollingRateMs = 1000 } = {}) {
  const [currentUnixMs, setCurrentUnixMs] = useState(Date.now());

  useInterval(() => setCurrentUnixMs(Date.now()), pollingRateMs);

  return currentUnixMs;
}

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
