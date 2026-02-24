import { ArrowRight } from "lucide-react";

import { AnimatedButton } from "@/components/ui/animated-button";

export function HeroContent() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="font-(family-name:--font-pirata) text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          <span className="bg-linear-to-br from-zinc-400 via-zinc-800 to-zinc-900 bg-clip-text text-[3.25rem] font-medium text-transparent drop-shadow-sm sm:text-7xl lg:text-8xl">
            Vida e presença
          </span>
          <br />
          <span className="bg-linear-to-br from-zinc-400 via-zinc-800 to-zinc-900 bg-clip-text text-[3.25rem] font-medium text-transparent drop-shadow-sm sm:text-7xl lg:text-8xl">
            para seu negócio
          </span>
        </h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-[1fr,auto] sm:items-start">
        <div className="space-y-5">
          <p className="max-w-md font-serif text-lg leading-7 text-black/70 sm:text-2xl sm:leading-8">
            Branding, conteúdo e estratégia para transformar negócios em marcas
            vivas.
          </p>
          <div className="flex items-center gap-3">
            <AnimatedButton
              asChild
              variant="outline"
              size="lg"
              className="h-12 w-full max-w-72 rounded-full border-foreground/15 bg-background text-base text-foreground/80 hover:bg-background sm:text-xl"
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
