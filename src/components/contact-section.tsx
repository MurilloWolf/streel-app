"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MessageCircle, Music2 } from "lucide-react";

import { useInView } from "@/hooks/use-in-view";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/streel_mkt",
    icon: Instagram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5518997452901",
    icon: MessageCircle,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@streelmkt",
    icon: Music2,
  },
];

export function ContactSection() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.25 });

  return (
    <section id="contato" className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-sky-100/35 via-transparent to-indigo-100/35"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl motion-safe:animate-pulse"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -bottom-6 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl motion-safe:animate-pulse [animation-delay:1200ms]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-45 bg-[linear-gradient(to_right,rgba(100,116,139,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.14)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(circle_at_center,black_30%,transparent_85%)]"
      />

      <div className="relative z-10 mx-auto w-[min(1120px,calc(100%-2rem))]">
        <div
          ref={ref}
          className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between"
        >
          <div className="relative w-full md:w-auto md:flex-none">
            <div className="relative mx-auto w-[min(430px,90vw)] md:mx-0">
              <div
                className={cn(
                  "relative aspect-4/5 w-full overflow-hidden rounded-4xl border border-foreground/10 shadow-sm",
                  "transition-all duration-700 ease-out motion-reduce:transition-none",
                  isInView
                    ? "translate-x-0 opacity-100 rotate-0"
                    : "translate-x-12 opacity-0 rotate-3",
                )}
              >
                <Image
                  src="/assets/strategy.png"
                  alt="Projeto de branding da Streel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 430px"
                  className="object-fit"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />
                <Badge
                  variant="outline"
                  className="pokemon-foil-card absolute left-4 top-4 rounded-full border-white/40 px-4 py-2 text-xs font-semibold text-foreground shadow-sm"
                >
                  Impulsione sua marca
                </Badge>
              </div>

              <div
                className={cn(
                  "absolute -bottom-40 -left-20 aspect-2/1 h-64 w-96 overflow-hidden rounded-3xl border border-foreground/10 shadow-sm z-20",
                  "transition-all duration-700 delay-150 ease-out motion-reduce:transition-none",
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0",
                )}
              >
                <Image
                  src="/assets/streel-location.png"
                  alt="Conteúdo para redes sociais"
                  fill
                  sizes="540px"
                  className="object-cover"
                />
              </div>

              {/* <div
                className={cn(
                  "absolute -right-4 -top-8 aspect-square w-34 overflow-hidden rounded-3xl border border-foreground/10 shadow-sm z-20",
                  "transition-all duration-700 delay-200 ease-out motion-reduce:transition-none",
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-6 opacity-0",
                )}
              >
                <Image
                  src="/assets/client4.jpg"
                  alt="Campanhas de marketing digital"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div> */}
            </div>
          </div>

          <div
            className={cn(
              "w-full md:max-w-xl space-y-4 sm:space-y-6 transition-all duration-700 ease-out motion-reduce:transition-none",
              isInView
                ? "translate-x-0 opacity-100 delay-100"
                : "translate-x-10 opacity-0",
            )}
          >
            <h2 className="font-bold text-5xl reveal-up__inner bg-linear-to-br from-slate-300 via-blue-900 to-slate-900 bg-clip-text text-transparent drop-shadow-sm sm:text-4xl md:text-6xl">
              Entre em Contato
            </h2>
            <p className="max-w-lg text-2xl text-foreground/80 bg-white p-4 sm:text-base">
              Fale com a gente e descubra como podemos ajudar a impulsionar sua
              marca com soluções feitas sob medida para você.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="pokemon-foil-card group inline-flex h-12 min-w-34 items-center justify-center gap-2 rounded-xl border border-white/30 px-4 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Icon className="size-4 transition-transform duration-300 group-hover:scale-110" />
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="rounded-2xl border border-foreground/10 bg-background/70 p-5 shadow-sm">
              <p className="text-xs font-semibold tracking-wide text-foreground/60 uppercase">
                E-mail comercial
              </p>
              <a
                href="mailto:streelmp@gmail.com"
                className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-foreground transition-colors hover:text-sky-700"
              >
                <Mail className="size-4" />
                streelmp@gmail.com
              </a>
              <p className="mt-2 text-sm text-foreground/65">
                Retorno rápido para orçamento, planejamento e consultoria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
