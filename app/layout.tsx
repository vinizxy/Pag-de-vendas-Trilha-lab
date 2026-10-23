import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { BottomDock } from "@/components/BottomDock";
import { site } from "@/content/site";
import { urlSite } from "@/lib/config";
import { linkWhatsApp } from "@/lib/whatsapp";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const titulo = "Site e landing page para sua empresa vender pelo WhatsApp | Trilha Lab";

export const metadata: Metadata = {
  metadataBase: new URL(urlSite),
  title: { default: titulo, template: "%s | Trilha Lab" },
  description: site.descricao,
  applicationName: site.nome,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.nome,
    title: titulo,
    description: site.descricao,
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: site.descricao,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#1e2321",
  colorScheme: "dark",
  // Necessário para safe-area-inset-bottom no iPhone
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-papel focus:px-4 focus:py-3 focus:text-tinta"
        >
          Pular para o conteúdo
        </a>
        {children}
        <BottomDock hrefWhatsApp={linkWhatsApp()} />
      </body>
    </html>
  );
}
