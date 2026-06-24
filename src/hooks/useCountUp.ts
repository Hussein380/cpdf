"use client";

import { useState, useEffect, useRef } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
}

/**
 * Animates a number from `start` to `end` over `duration` ms.
 * Starts when the returned `startCounting` function is called.
 */
export function useCountUp({
  end,
  duration = 2000,
  start = 0,
  decimals = 0,
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const [isRunning, setIsRunning] = useState(false);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);

  const startCounting = () => setIsRunning(true);

  useEffect(() => {
    if (!isRunning) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;

      setCount(parseFloat(current.toFixed(decimals)));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isRunning, end, start, duration, decimals]);

  return { count, startCounting };
}
