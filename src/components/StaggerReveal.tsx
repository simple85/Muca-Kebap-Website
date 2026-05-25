"use client";

import { useEffect, useRef } from "react";

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  childSelector?: string;
}

export default function StaggerReveal({
  children,
  className = "",
  stagger = 0.15,
  childSelector = ":scope > *",
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll(childSelector) as NodeListOf<HTMLElement>;

    items.forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(40px)";
      item.style.transition = `opacity 0.7s ease-out ${i * stagger}s, transform 0.7s ease-out ${i * stagger}s`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item) => {
            item.style.opacity = "1";
            item.style.transform = "none";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [stagger, childSelector]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
