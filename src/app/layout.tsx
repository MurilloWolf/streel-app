import type { Metadata } from "next";
import { Pirata_One } from "next/font/google";

import { rootMetadata } from "@/lib/seo";

import "./globals.css";

const pirataOne = Pirata_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pirata",
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`scroll-smooth ${pirataOne.variable} bg-linear-to-br from-sky-200 via-blue-100 to-indigo-200 min-h-screen`}
    >
      <body className="antialiased bg-transparent" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
