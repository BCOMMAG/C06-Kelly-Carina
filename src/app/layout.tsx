import type { Metadata } from "next";
import { Raleway, Merriweather } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Direito Previdenciário em Curitiba`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: `${SITE.name} | Direito Previdenciário`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: SITE.name,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/Favicon-android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/Favicon-android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/Favicon-apple-touch-icon180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/Favicon-apple-touch-icon180x180.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Favicon-apple-touch-icon180x180.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:image" content={`${SITE.url}${SITE.ogImage}`} />
        <meta property="og:image:secure_url" content={`${SITE.url}${SITE.ogImage}`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={SITE.name} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: SITE.name,
              image: SITE.ogImage,
              description: SITE.description,
              url: SITE.url,
              telephone: "+5541998702590",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua das Carmelitas 586, Sala 04",
                addressLocality: "Curitiba",
                addressRegion: "PR",
                postalCode: "81650-000",
                addressCountry: "BR",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
              areaServed: "BR",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Direito Previdenciário",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aposentadorias" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auxílio-Doença" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pensão por Morte" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "BPC/LOAS" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Salário-Maternidade" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auxílio-Acidente" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Benefício por Incapacidade" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Revisão de Benefícios" } },
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${raleway.variable} ${merriweather.variable} antialiased`}
        style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        {children}
      </body>
    </html>
  );
}
