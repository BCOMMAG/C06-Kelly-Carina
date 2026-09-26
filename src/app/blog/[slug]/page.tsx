import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BlogPostContent from "@/components/BlogPostContent";
import { BLOG_POSTS, BlogPost } from "@/lib/blog";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Artigo Não Encontrado | Advocacia Kelly Carina",
    };
  }

  const postUrl = `${SITE.url}/blog/${post.slug}`;
  const imageUrl = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${SITE.url}${post.coverImage}`;

  return {
    title: `${post.title} | Advocacia Kelly Carina`,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedDate,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.coverAlt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Filtrar posts relacionados (mesma categoria ou outros populares)
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && (p.category === post.category || p.popular)
  ).slice(0, 3);

  // Schema.org BlogPosting
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage.startsWith("http")
      ? post.coverImage
      : `${SITE.url}${post.coverImage}`,
    datePublished: post.date,
    dateModified: post.updatedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/blog/${post.slug}`,
    },
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      url: `${SITE.url}/#sobre`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/Logo_com_fundo_branco.png`,
      },
    },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main>
        <BlogPostContent post={post} relatedPosts={relatedPosts} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
