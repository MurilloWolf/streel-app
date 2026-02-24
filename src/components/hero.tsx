"use client";

import { useEffect, useMemo, useState } from "react";
import { heroSlides } from "@/content/site-content";

import { HeroContent } from "./hero-content";
import { HeroSlideStack } from "./hero-slide-stack";
import { PlusGridBackground } from "./plus-grid-background";

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = window.setInterval(
      () => setActive((v) => (v + 1) % heroSlides.length),
      6000,
    );
    return () => window.clearInterval(t);
  }, []);

  const ordered = useMemo(() => {
    const before = heroSlides.slice(active);
    const after = heroSlides.slice(0, active);
    return [...before, ...after];
  }, [active]);

  return (
    <section className="relative overflow-hidden min-h-screen">
      <PlusGridBackground />
      <div className="relative z-10 mx-auto w-[min(1120px,calc(100%-2rem))] pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-40">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <HeroContent />
          <HeroSlideStack
            slides={heroSlides}
            orderedSlides={ordered}
            active={active}
            onSlideSelect={setActive}
          />
        </div>
      </div>
    </section>
  );
}
