"use client";

import { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3.5px] z-[100] pointer-events-none bg-black/10 dark:bg-white/5"
    >
      <div
        className="h-full bg-gradient-to-r from-[#C9A84C] via-[#F6F4EE] to-[#C9A84C] origin-left transition-transform duration-75 ease-out shadow-[0_0_12px_rgba(201,168,76,0.6)]"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
    </div>
  );
}

export default ScrollProgressBar;
