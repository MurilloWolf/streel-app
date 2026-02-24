import type { Metadata } from "next";

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
import {
  defaultOgImage,
  getLocalBusinessJsonLd,
  getOrganizationJsonLd,
  getWebsiteJsonLd,
  siteConfig,
  siteUrl,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Agência de Marketing em Presidente Prudente",
  description:
    "Branding, conteúdo e estratégia para transformar negócios em marcas vivas em Presidente Prudente e região.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Streel | Agência de Marketing em Presidente Prudente",
    description:
      "Branding, social media, tráfego pago e produção para negócios que querem crescer com presença forte.",
    url: siteUrl,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Streel Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Streel | Agência de Marketing em Presidente Prudente",
    description:
      "Branding, social media, tráfego pago e produção para negócios que querem crescer com presença forte.",
    images: [defaultOgImage],
  },
};

export default function Home() {
  const organizationJsonLd = getOrganizationJsonLd();
  const localBusinessJsonLd = getLocalBusinessJsonLd();
  const websiteJsonLd = getWebsiteJsonLd();

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
      <Header />

      <main aria-label={`Página principal da ${siteConfig.name}`}>
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
