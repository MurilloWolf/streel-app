import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { HeroSlide } from "@/content/site-content";
import { cn } from "@/lib/utils";

type HeroSlideStackProps = {
  slides: HeroSlide[];
  orderedSlides: HeroSlide[];
  active: number;
  onSlideSelect: (index: number) => void;
};

export function HeroSlideStack({
  slides,
  orderedSlides,
  active,
  onSlideSelect,
}: HeroSlideStackProps) {
  return (
    <div className="relative mx-auto w-full max-w-88 sm:max-w-120 lg:ml-auto lg:mr-0 lg:max-w-130 lg:translate-x-10 lg:-translate-y-24">
      <div className="relative aspect-4/3">
        <div className="absolute left-2 top-1/2 z-30 -translate-y-1/2 sm:left-0 sm:-translate-x-8">
          <div className="flex flex-col gap-3">
            {slides.map((slide, index) => {
              const isActive = index === active;

              return (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Ir para ${slide.title}`}
                  onClick={() => onSlideSelect(index)}
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

        {orderedSlides.map((slide, index) => {
          const depth = index;
          const scale = 1 - depth * 0.045;
          const x = depth * 18;
          const y = depth * 14;
          const rotate = depth * 2.4 * (depth % 2 === 0 ? 1 : -1);
          const zIndex = 20 - depth;
          const isFront = index === 0;

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
  );
}
