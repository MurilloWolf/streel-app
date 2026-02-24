import type { Metadata } from "next";

const FALLBACK_SITE_URL = "https://streel.com.br";

export const siteConfig = {
  name: "Streel Marketing",
  legalName: "Streel Marketing",
  description:
    "Agência de marketing em Presidente Prudente com foco em branding, social media, tráfego pago e produção de conteúdo para marcas locais.",
  locale: "pt_BR",
  language: "pt-BR",
  keywords: [
    "agência de marketing",
    "branding",
    "social media",
    "tráfego pago",
    "marketing digital",
    "Presidente Prudente",
    "produção de conteúdo",
    "identidade visual",
  ],
  contact: {
    email: "streelmp@gmail.com",
    phonePrimary: "+55 18 99745-2901",
    phoneSecondary: "+55 18 99655-6202",
    whatsapp: "https://wa.me/5518997452901",
  },
  address: {
    streetAddress: "Av. Washington Luiz, 2326",
    addressLocality: "Presidente Prudente",
    addressRegion: "SP",
    postalCode: "19027-100",
    addressCountry: "BR",
  },
  social: [
    "https://instagram.com/streel_mkt",
    "https://tiktok.com/@streelmkt",
  ],
} as const;

function normalizeSiteUrl(rawUrl?: string) {
  const value = rawUrl?.trim() || FALLBACK_SITE_URL;
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const siteOrigin = new URL(siteUrl);

export const defaultOgImage = `${siteUrl}/assets/strategy.png`;

export const rootMetadata: Metadata = {
  metadataBase: siteOrigin,
  title: {
    default: "Streel | Marketing, Branding e Conteúdo",
    template: "%s | Streel",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  category: "marketing",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: "Streel | Marketing, Branding e Conteúdo",
    description: siteConfig.description,
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
    title: "Streel | Marketing, Branding e Conteúdo",
    description: siteConfig.description,
    images: [defaultOgImage],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteUrl,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phonePrimary,
    sameAs: [...siteConfig.social],
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
  };
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phonePrimary,
    image: defaultOgImage,
    areaServed: "Presidente Prudente e região",
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    sameAs: [...siteConfig.social],
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrl,
    inLanguage: siteConfig.language,
  };
}