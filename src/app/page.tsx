import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <div id="projetos">
          <Hero />
        </div>

        <section className="pb-10">
          <div className="w-full border-y bg-[#121212] py-10 shadow-sm sm:py-14">
            <div className="mx-auto w-[min(1400px,calc(100%-2rem))]">
              <div className="grid min-h-45 content-center gap-2 sm:min-h-55 sm:gap-4">
                <Marquee
                  reverse
                  items={[
                    { label: "Não passe despercebido." },
                    { label: "Posicionamento de marca com estratégia" },
                    { label: "Conteúdo que conecta e converte" },
                    { label: "Criatividade com foco em resultado" },
                    { label: "Sua marca lembrada todos os dias" },
                    { label: "Comunicação forte em cada detalhe" },
                    { label: "Marketing com identidade de verdade" },
                  ]}
                  speedSeconds={60}
                />
                <Marquee
                  items={[
                    { label: "Branding para quem quer crescer" },
                    { label: "Do feed ao faturamento" },
                    { label: "Seja destaque onde estiver" },
                    { label: "Campanhas que geram movimento" },
                    { label: "Design que gera percepção de valor" },
                    { label: "Estratégia local com presença digital" },
                    { label: "Sua marca em outro nível" },
                  ]}
                  speedSeconds={65}
                />
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
