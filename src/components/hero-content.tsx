import { ArrowRight } from "lucide-react";

import { AnimatedButton } from "@/components/ui/animated-button";

export function HeroContent() {
  return (
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
            Branding, conteúdo e estratégia para transformar negócios em marcas
            vivas.
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
  );
}
