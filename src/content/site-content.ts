export type HeroSlide = {
  id: string;
  title: string;
  image: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "s1",
    title: "Branding",
    image: "/assets/client1.png",
  },
  {
    id: "s2",
    title: "Branding",
    image: "/assets/client5.png",
  },
  {
    id: "s3",
    title: "Identidade Visual",
    image: "/assets/client3.jpg",
  },
  {
    id: "s4",
    title: "Branding",
    image: "/assets/client4.jpg",
  },
];

export type Service = {
  title: string;
  lines: string[];
};

export const services: Service[] = [
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

export const navItems = [
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
] as const;

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/streel_mkt",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5518997452901",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@streelmkt",
  },
] as const;

export const marqueePrimaryItems = [
  { label: "Não passe despercebido." },
  { label: "Posicionamento de marca com estratégia" },
  { label: "Conteúdo que conecta e converte" },
  { label: "Criatividade com foco em resultado" },
  { label: "Sua marca lembrada todos os dias" },
  { label: "Comunicação forte em cada detalhe" },
  { label: "Marketing com identidade de verdade" },
];

export const marqueeSecondaryItems = [
  { label: "Branding para quem quer crescer" },
  { label: "Do feed ao faturamento" },
  { label: "Seja destaque onde estiver" },
  { label: "Campanhas que geram movimento" },
  { label: "Design que gera percepção de valor" },
  { label: "Estratégia local com presença digital" },
  { label: "Sua marca em outro nível" },
];

export const footerColumns = {
  links: [{ label: "Projetos", href: "#projetos" }],
  contact: [
    { label: "Entre em contato", href: "#contato" },
    { label: "(18) 99745-2901", href: "tel:+5518997452901" },
    { label: "(18) 99655-6202", href: "tel:+5518996556202" },
    {
      label: "streelmp@gmail.com",
      href: "mailto:streelmp@gmail.com",
    },
  ],
  socials: [
    {
      label: "@streel_mkt",
      href: "https://instagram.com/streel_mkt",
    },
    {
      label: "@streelmkt",
      href: "https://tiktok.com/@streelmkt",
    },
  ],
} as const;
