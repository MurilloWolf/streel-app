"use client";

import Link from "next/link";
import Image from "next/image";

import { navItems } from "@/content/site-content";
import { cn } from "@/lib/utils";
import { smoothScrollToTop } from "@/lib/smooth-scroll";
import { useScrollY } from "@/hooks/use-scroll-y";

const SHRINK_AT_PX = 12;

export function Header() {
  const scrollY = useScrollY();
  const scrolled = scrollY > SHRINK_AT_PX;

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollToTop();
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 z-50 flex justify-center transition-all duration-500 ease-out motion-reduce:transition-none",
        scrolled ? "top-3" : "top-0",
      )}
    >
      <div
        className={cn(
          "relative transition-all duration-500 ease-out motion-reduce:transition-none",
          scrolled ? "w-[min(1120px,calc(100%-2rem))]" : "w-full",
          scrolled ? "rounded-full" : "rounded-none",
          scrolled ? "px-4 py-2" : "px-0 py-4",
          scrolled ? "shadow-md" : "shadow-none",
          scrolled ? "border border-foreground/10" : "border-transparent",
          scrolled ? "backdrop-blur-xl" : "backdrop-blur-0",
          scrolled ? "bg-background/30" : "bg-transparent",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "liquid-glass-sheen absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 ease-out motion-reduce:transition-none",
            scrolled ? "opacity-100 delay-300" : "opacity-0 delay-0",
          )}
        />
        <div
          className={cn(
            scrolled ? "w-full" : "mx-auto w-[min(1120px,calc(100%-2rem))]",
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between gap-6",
              scrolled ? "px-2" : "",
            )}
          >
            <Link
              href="/"
              onClick={scrollToTop}
              className="font-semibold tracking-tight flex items-center"
            >
              <Image
                src="/assets/streel.png"
                alt="Streel Logo"
                width={400}
                height={200}
                className="h-12 w-auto object-contain brightness-0"
                priority
              />
            </Link>
            <nav className="flex items-center gap-6 text-sm text-foreground/80">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition font-bold hover:text-foreground hover:font-extrabold transition-font ease-in"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
