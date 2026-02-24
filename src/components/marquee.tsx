"use client";

import { cn } from "@/lib/utils";

type MarqueeItem = {
  label: string;
  showIcon?: boolean;
};

type MarqueeProps = {
  items: MarqueeItem[];
  reverse?: boolean;
  speedSeconds?: number;
  className?: string;
};

export function Marquee({
  items,
  reverse,
  speedSeconds = 26,
  className,
}: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden group", className)}>
      <div
        className={cn(
          "font-(family-name:--font-pirata) marquee-track flex w-max gap-20 py-4 text-base font-semibold tracking-wide text-white/80 will-change-transform sm:gap-28 sm:text-lg group-hover:paused",
        )}
        style={{
          animationName: reverse ? "marquee-reverse" : "marquee",
          animationDuration: `${speedSeconds}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        <MarqueeLine items={items} />
        <MarqueeLine items={items} ariaHidden />
      </div>
    </div>
  );
}

function MarqueeLine({
  items,
  ariaHidden,
}: {
  items: MarqueeItem[];
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="flex shrink-0 items-center justify-around gap-16 sm:gap-24"
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      {items.map((item, idx) => (
        <div
          key={`${item.label}-${idx}`}
          className="whitespace-nowrap transition-colors duration-300 hover:text-white text-white/50"
        >
          <span className="inline-flex items-center gap-6 sm:gap-8">
            {item.showIcon && (
              <span
                aria-hidden
                className="h-6 w-6 rounded-full border border-foreground/15 bg-background/60 shadow-sm transition-colors duration-300 hover:bg-background/80"
              />
            )}
            <span className="text-8xl ">{item.label}</span>
            {idx < items.length - 1 && (
              <span
                aria-hidden
                className="h-2.5 w-2.5 rounded-full bg-white/45 shadow-[0_0_10px_rgba(255,255,255,0.35)]"
              />
            )}
          </span>
        </div>
      ))}
    </div>
  );
}
