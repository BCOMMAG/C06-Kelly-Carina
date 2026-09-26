import { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogFeed from "@/components/BlogFeed";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog de Direito Previdenciário em Curitiba | Advocacia Kelly Carina",
  description:
    "Artigos, orientações jurídicas e guias práticos sobre Aposentadorias, BPC/LOAS, Benefícios por Incapacidade e revisões no INSS por Kelly Carina – Advogada.",
  alternates: {
    canonical: `${SITE.url}/blog`,
  },
  openGraph: {
    title: "Blog de Direito Previdenciário | Advocacia Kelly Carina",
    description:
      "Informação jurídica clara e estratégica para garantir os seus direitos e a melhor aposentadoria no INSS.",
    url: `${SITE.url}/blog`,
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "Blog Advocacia Kelly Carina",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Direito Previdenciário | Advocacia Kelly Carina",
    description:
      "Informação jurídica clara e estratégica para garantir os seus direitos e a melhor aposentadoria no INSS.",
    images: [SITE.ogImage],
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div className="min-h-screen pt-32 text-center text-sm text-gray-500">Carregando artigos do Blog...</div>}>
          <BlogFeed />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
