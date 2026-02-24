"use client";

import { ArrowRight } from "lucide-react";

import { useInView } from "@/hooks/use-in-view";
import { AnimatedButton } from "@/components/ui/animated-button";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "BRANDING",
    lines: [
      "Posicionamento estratégico",
      "Tom de voz da marca",
      "Identidade visual",
      "Direção criativa",
    ],
  },
  {
    title: "SOCIAL MEDIA",
    lines: [
      "Calendário editorial",
      "Produção de conteúdo",
      "Gestão de comunidade",
      "Análise de desempenho",
    ],
  },
  {
    title: "TRÁFEGO PAGO",
    lines: [
      "Campanhas Meta Ads",
      "Segmentação por objetivo",
      "Otimização contínua",
      "Relatórios de conversão",
    ],
  },
  {
    title: "PRODUÇÃO",
    lines: [
      "Captação de imagem",
      "Edição de vídeos curtos",
      "Fotos para campanhas",
      "Cobertura de ações locais",
    ],
  },
];

export function ServicesSection() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="servicos" className="relative py-20">
      <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
        <div ref={ref} className="relative">
          <h2
            className={cn(
              "reveal-up mb-10 text-center text-6xl font-semibold tracking-tight",
              isInView && "in",
            )}
          >
            <span className="reveal-up__inner bg-linear-to-br from-slate-300 via-blue-900 to-slate-900 bg-clip-text text-transparent drop-shadow-sm">
              Nossos serviços
            </span>
          </h2>

          <div
            className={cn(
              "mx-auto overflow-hidden rounded-3xl border shadow-sm transition-all duration-4300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none relative z-0",
              isInView
                ? "h-105 w-full max-w-6xl p-10"
                : "h-150 w-75 max-w-6xl p-6",
            )}
          >
            <div className="absolute inset-0 -z-10 bg-[url('/assets/sao-paulo.webp')] bg-cover bg-center bg-no-repeat grayscale contrast-125 brightness-75 opacity-60 mix-blend-multiply" />
            <div className="absolute inset-0 -z-20 bg-linear-to-br from-slate-400 via-blue-950 to-slate-900" />

            <div
              className={cn(
                "relative z-10 grid h-full content-between gap-8 transition-all duration-1600 delay-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3",
              )}
            >
              <div className=" grid gap-8 md:grid-cols-4">
                {services.map((s, idx) => (
                  <div key={`${s.title}-${idx}`} className="space-y-3">
                    <p className="text-lg font-bold tracking-widest text-white">
                      {s.title}
                    </p>
                    <div className="space-y-1 text-md text-white/80">
                      {s.lines.map((l, i) => (
                        <p key={`${idx}-${i}`}>{l}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <AnimatedButton
                  asChild
                  variant="outline"
                  className="rounded-full border-foreground/15 bg-white/85 px-8 text-sm font-semibold text-foreground/80 hover:bg-background/75"
                  fillClassName="bg-foreground"
                  icon={<ArrowRight className="size-4" />}
                >
                  <a href="#contato">Entrar em contato</a>
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
