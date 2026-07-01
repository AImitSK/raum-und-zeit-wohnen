"use client";

import { useReveal } from "@/hooks/useReveal";

type RevealProps = {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

/**
 * Wrapper, der die `.reveal`-Animation aus der Vorlage kapselt.
 * Nutzt den useReveal-Hook (IntersectionObserver + prefers-reduced-motion).
 */
export default function Reveal({ className = "", children, style }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
