"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  stopCursorOnEnd?: boolean;

  // ✅ novo: qualquer valor que, ao mudar, reinicia a animação (ex.: locale)
  resetKey?: string | number;
}

export default function Typewriter({
  text,
  speed = 50,
  delay = 0,
  className = "",
  showCursor = true,
  stopCursorOnEnd = true,
  resetKey,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const clearTimers = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    timeoutRef.current = null;
    intervalRef.current = null;
  };

  // ✅ reinicia quando text OU resetKey mudarem
  useEffect(() => {
    clearTimers();
    setDisplayedText("");
    setDone(false);
    setStarted(false);

    timeoutRef.current = window.setTimeout(() => {
      setStarted(true);
    }, delay);

    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delay, resetKey]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    intervalRef.current = window.setInterval(() => {
      i += 1;
      setDisplayedText(text.slice(0, i));

      if (i >= text.length) {
        setDone(true);
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }, speed);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [started, speed, text]);

  const shouldShowCursor = showCursor && !(stopCursorOnEnd && done);

  return (
    <span className={className}>
      {displayedText}
      {shouldShowCursor && (
        <span className="animate-pulse ml-1 font-light">|</span>
      )}
    </span>
  );
}