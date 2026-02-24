import Link from "next/link";
import Image from "next/image";
import { Instagram, Music2 } from "lucide-react";

import { footerColumns } from "@/content/site-content";

export function Footer() {
  return (
    <footer className="border-t bg-[#121212] text-slate-100/90">
      <div className="mx-auto w-[min(1120px,calc(100%-2rem))] py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/streel.png"
                alt="Streel Logo"
                width={200}
                height={200}
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-md font-(family-name:--font-pirata) text-slate-100/70 text-center">
              Seja destaque onde estiver
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <FooterCol title="Links" links={footerColumns.links} />
            <FooterCol title="Contato" links={footerColumns.contact} />
            <FooterCol
              title="Redes Sociais"
              links={[
                {
                  ...footerColumns.socials[0],
                  icon: <Instagram className="h-4 w-4" />,
                },
                {
                  ...footerColumns.socials[1],
                  icon: <Music2 className="h-4 w-4" />,
                },
              ]}
            />
          </div>
        </div>

        <div className="mt-12 border-t border-slate-100/40 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-100/70">
          <p>© {new Date().getFullYear()} Streel</p>
          <div className="text-right">
            <p>Av. Washington Luiz, 2326</p>
            <p>Jardim Paulista, Pres. Prudente</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string; icon?: React.ReactNode }[];
}) {
  return (
    <div className="space-y-3">
      <p className="text-md font-semibold text-slate-100">{title}</p>
      <div className="space-y-2 text-sm text-slate-100/70">
        {links.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            {l.icon}
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
