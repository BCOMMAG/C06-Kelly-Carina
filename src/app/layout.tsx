import type { Metadata } from "next";
import { Raleway, Merriweather } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";
import { OFFICE_INFO } from "@/lib/data";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kellycarina.adv.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Advocacia Kelly Carina | Direito Previdenciário em Curitiba PR",
    template: "%s | Advocacia Kelly Carina",
  },
  description:
    "Assessoria jurídica especializada em Direito Previdenciário em Curitiba e em todo o Brasil. Atuação em Aposentadorias, Auxílio-Doença, BPC/LOAS, Pensão por Morte e Revisões no INSS e na Justiça Federal.",
  keywords: [
    "advogada previdenciaria curitiba",
    "advocacia kelly carina",
    "kelly carina advogada",
    "aposentadoria inss curitiba",
    "auxilio doenca pericia inss",
    "bpc loas autismo curitiba",
    "revisao de aposentadoria",
    "pensao por morte uniao estavel",
    "advogado previdenciario boqueirao",
    "planejamento previdenciario parana",
  ],
  authors: [{ name: "Dra. Kelly Carina da Silva" }],
  creator: "Dra. Kelly Carina da Silva",
  publisher: "Advocacia Kelly Carina",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Advocacia Kelly Carina | Direito Previdenciário em Curitiba PR",
    description:
      "Assessoria jurídica especializada e acolhedora em Aposentadorias, Auxílio-Doença, BPC/LOAS e Planejamento Previdenciário.",
    siteName: "Advocacia Kelly Carina",
    images: [
      {
        url: "/og-image_1_optimized_300.jpg",
        width: 1200,
        height: 630,
        alt: "Advocacia Kelly Carina - Direito Previdenciário em Curitiba PR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advocacia Kelly Carina | Direito Previdenciário em Curitiba PR",
    description:
      "Assessoria jurídica especializada em Aposentadorias, Benefícios por Incapacidade e BPC/LOAS em Curitiba/PR.",
    images: ["/og-image_1_optimized_300.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/Favicon-android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/Favicon-android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/Favicon-apple-touch-icon180x180.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getLegalServiceSchema();

  return (
    <html lang="pt-BR" suppressHydrationWarning className="dark" data-theme="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('kc_theme') || localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.setAttribute('data-theme', 'light');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              } catch (e) {
                document.documentElement.classList.add('dark');
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${raleway.variable} ${merriweather.variable} font-body antialiased selection:bg-[#C9A84C] selection:text-[#0A0C10] bg-[var(--bg-primary)] text-[var(--text-main)]`}
      >
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
