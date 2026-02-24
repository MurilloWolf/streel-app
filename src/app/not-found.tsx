import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

import { AnimatedButton } from "@/components/ui/animated-button";
import { PlusGridBackground } from "@/components/plus-grid-background";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description:
    "A página que você tentou acessar não foi encontrada. Volte para a página principal da Streel.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <PlusGridBackground />

      <div className="relative z-10 mx-auto flex min-h-screen w-[min(1120px,calc(100%-2rem))] items-center justify-center py-20">
        <section className="w-full max-w-3xl rounded-4xl border border-foreground/10 bg-background/65 p-8 text-center shadow-[0_30px_80px_-48px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-12">
          <p className="font-(family-name:--font-pirata) text-8xl leading-none tracking-tight bg-linear-to-br from-slate-400 via-blue-900 to-slate-900 bg-clip-text text-transparent sm:text-9xl">
            404
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Esta página saiu de cena.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/75 sm:text-xl">
            O conteúdo que você procurou não está disponível neste endereço.
            Volte para a página inicial e continue explorando a {siteConfig.name}.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <AnimatedButton
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-foreground/15 bg-background px-7 text-base font-semibold text-foreground/90 hover:bg-background"
              fillClassName="bg-foreground"
              icon={<Home className="size-4" />}
            >
              <Link href="/">Voltar para a página principal</Link>
            </AnimatedButton>

            <AnimatedButton
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-foreground/15 bg-background/80 px-7 text-base font-semibold text-foreground/80 hover:bg-background"
              fillClassName="bg-foreground"
              icon={<ArrowLeft className="size-4" />}
            >
              <Link href="/#projetos">Ver projetos</Link>
            </AnimatedButton>
          </div>
        </section>
      </div>
    </main>
  );
}