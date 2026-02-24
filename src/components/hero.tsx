"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { AnimatedButton } from "@/components/ui/animated-button";
import { PlusGridBackground } from "./plus-grid-background";

type Slide = {
  id: string;
  title: string;
  image: string;
};

const slides: Slide[] = [
  {
    id: "s1",
    title: "Branding",
    image: "/assets/client1.png",
  },
  {
    id: "s2",
    title: "Branding",
    image: "/assets/client5.png",
  },
  {
    id: "s3",
    title: "Identidade Visual",
    image: "/assets/client3.jpg",
  },
  {
    id: "s4",
    title: "Branding",
    image: "/assets/client4.jpg",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = window.setInterval(
      () => setActive((v) => (v + 1) % slides.length),
      6000,
    );
    return () => window.clearInterval(t);
  }, []);

  const ordered = useMemo(() => {
    const before = slides.slice(active);
    const after = slides.slice(0, active);
    return [...before, ...after];
  }, [active]);

  return (
    <section className="relative overflow-hidden min-h-screen">
      <PlusGridBackground />
      <div className="relative z-10 mx-auto w-[min(1120px,calc(100%-2rem))] pt-40 pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl leading-[1.08] tracking-tight sm:text-5xl font-(family-name:--font-pirata)">
                <span className="font-medium text-8xl bg-linear-to-br from-zinc-400 via-zinc-800 to-zinc-900 bg-clip-text text-transparent drop-shadow-sm">
                  Vida e presença
                </span>
                <br />
                <span className="font-medium text-8xl bg-linear-to-br from-zinc-400 via-zinc-800 to-zinc-900 bg-clip-text text-transparent drop-shadow-sm">
                  para seu negócio
                </span>
              </h1>
            </div>

            <div className="grid gap-6 sm:grid-cols-[1fr,auto] sm:items-start">
              <div className="space-y-5">
                <p className="font-serif max-w-md text-2xl leading-6 text-black/70">
                  Branding, conteúdo e estratégia para transformar negócios em
                  marcas vivas.
                </p>
                <div className="flex items-center gap-3">
                  <AnimatedButton
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-12 w-72 text-xl rounded-full border-foreground/15 bg-background text-foreground/80 hover:bg-background"
                    fillClassName="bg-foreground"
                    icon={<ArrowRight className="size-4 " />}
                  >
                    <a href="#contato">Falar com a Streel</a>
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-130 lg:ml-auto lg:mr-0 lg:translate-x-10 lg:-translate-y-24">
            <div className="relative aspect-4/3">
              <div className="absolute left-0 top-1/2 z-30 -translate-x-8 -translate-y-1/2 sm:-translate-x-10">
                <div className="flex flex-col gap-3">
                  {slides.map((s, idx) => {
                    const isActive = idx === active;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        aria-label={`Ir para ${s.title}`}
                        onClick={() => setActive(idx)}
                        className={cn(
                          "h-5 w-5 rounded-full  border-2 transition-all motion-reduce:transition-none",
                          isActive
                            ? "bg-foreground/15 ring-2 ring-foreground/80"
                            : "bg-background/80 ring-2 ring-foreground/20 hover:bg-foreground/40",
                        )}
                      />
                    );
                  })}
                </div>
              </div>
              {ordered.map((slide, i) => {
                const depth = i;
                const scale = 1 - depth * 0.045;
                const x = depth * 18;
                const y = depth * 14;
                const rotate = depth * 2.4 * (depth % 2 === 0 ? 1 : -1);
                const zIndex = 20 - depth;
                const isFront = i === 0;

                return (
                  <div
                    key={slide.id}
                    className={cn(
                      "absolute inset-0 overflow-hidden rounded-3xl border shadow-[0_22px_60px_-40px_rgba(0,0,0,0.35)] transition-all duration-700 ease-out motion-reduce:transition-none",
                      "border-foreground/10",
                      isFront ? "opacity-100" : "opacity-80",
                    )}
                    style={{
                      transform: `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale})`,
                      zIndex,
                    }}
                  >
                    <Image
                      src={slide.image}
                      alt={`Cliente ${slide.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover rounded-3xl"
                    />

                    <div className="relative z-10 flex h-full flex-col justify-start p-6">
                      <div className="flex items-center justify-between text-xs text-foreground">
                        <Badge className="bg-sky-500 backdrop-blur-sm font-semibold text-white shadow-sm">
                          {slide.title}
                        </Badge>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
