"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.8,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let translate = "translateY(40px)";
    if (direction === "left") translate = "translateX(-40px)";
    else if (direction === "right") translate = "translateX(40px)";
    else if (direction === "none") translate = "none";

    el.style.opacity = "0";
    el.style.transform = translate;
    el.style.transition = `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [direction, delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
