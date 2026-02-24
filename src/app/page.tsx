import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { ServicesSection } from "@/components/services-section";
import {
  marqueePrimaryItems,
  marqueeSecondaryItems,
} from "@/content/site-content";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

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
                  items={marqueePrimaryItems}
                  speedSeconds={60}
                />
                <Marquee items={marqueeSecondaryItems} speedSeconds={65} />
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
