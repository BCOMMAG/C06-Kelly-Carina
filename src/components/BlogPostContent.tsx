"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, Clock, Share2, Check, ChevronRight, MessageCircle, 
  HelpCircle, ArrowLeft, BookmarkCheck, AlertCircle, Quote
} from "lucide-react";
import { BlogPost, BLOG_POSTS } from "@/lib/blog";
import { CONTACT } from "@/lib/constants";

interface Props {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostContent({ post, relatedPosts }: Props) {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : `https://kellycarina.adv.br/blog/${post.slug}`;
  const whatsappShareText = encodeURIComponent(`${post.title} — Leia no blog da Advocacia Kelly Carina: ${shareUrl}`);

  const handleCopyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsappCtaUrl = `https://wa.me/5541998702590?text=${encodeURIComponent(
    `Olá! Li o artigo "${post.title}" no seu blog e gostaria de uma orientação jurídica para o meu caso.`
  )}`;

  return (
    <article className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] pt-28 pb-20">
      {/* ── BREADCRUMBS (Caminho de Rato) ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] py-4 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-[#C9A84C] transition-colors">
            Início
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
          <Link href="/blog" className="hover:text-[#C9A84C] transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
          <span className="text-[#8B6914] font-medium">{post.category}</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
          <span className="truncate max-w-[200px] sm:max-w-xs text-[var(--text-primary)] font-medium">
            {post.title}
          </span>
        </nav>
      </div>

      {/* ── CABEÇALHO DO POST ── */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        {/* Categoria Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C9A84C]/15 text-[#8B6914] border border-[#C9A84C]/40 mb-4">
          <span>{post.category}</span>
        </div>

        {/* Título Principal (H1) */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] leading-tight tracking-tight text-[var(--text-primary)]">
          {post.title}
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-medium">
          {post.subtitle}
        </p>

        {/* Metadados: Autora, Data, Tempo de Leitura e Compartilhamento */}
        <div className="mt-6 pt-6 border-t border-[var(--border-color)]/70 flex flex-wrap items-center justify-between gap-4">
          {/* Autor Info */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#C9A84C] shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--text-primary)]">
                Por {post.author.name}
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] mt-0.5">
                <span>{post.author.oab}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readingTime}
                </span>
              </div>
            </div>
          </div>

          {/* Botões de Compartilhamento */}
          <div className="flex items-center gap-2">
            <a
              href={`https://api.whatsapp.com/send?text=${whatsappShareText}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartilhar no WhatsApp"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#25D366] hover:bg-[#20ba59] text-white shadow-sm transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <button
              onClick={handleCopyLink}
              aria-label="Copiar link do artigo"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[#C9A84C] transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-500" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Compartilhar</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── IMAGEM DE CAPA PRINCIPAL ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="relative h-64 sm:h-96 lg:h-[440px] w-full rounded-3xl overflow-hidden border-2 border-[#C9A84C]/40 shadow-xl">
          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* ── CORPO DO POST COM ÍNDICE E CONTEÚDO ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── ÍNDICE DE CONTEÚDO (Table of Contents) ── */}
        {post.sections.length > 1 && (
          <div className="mb-10 p-6 rounded-2xl border border-[#C9A84C]/40 bg-[var(--bg-card)] shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <BookmarkCheck className="w-4 h-4 text-[#C9A84C]" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] font-[family-name:var(--font-heading)]">
                Neste Artigo:
              </h2>
            </div>
            <ul className="space-y-2 text-sm">
              {post.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-[var(--text-secondary)] hover:text-[#C9A84C] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── INTRODUÇÃO (Parágrafos Curtos com Gancho Rápido) ── */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          {post.introduction.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-base sm:text-lg text-[var(--text-primary)] leading-relaxed mb-4 font-normal"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* ── BANNER DE CTA INTERMEDIÁRIO ── */}
        <div className="my-10 p-6 sm:p-8 rounded-2xl border-2 border-[#C9A84C]/50 bg-gradient-to-br from-[#C9A84C]/15 via-[var(--bg-card)] to-[var(--bg-card)] shadow-md text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B6914] bg-[#C9A84C]/20 px-2.5 py-1 rounded-md">
              Orientação Jurídica
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-[family-name:var(--font-heading)] mt-2">
              Seu caso exige análise cuidadosa?
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-md">
              Não dê entrada no INSS com dúvidas. Uma análise prévia de documentos evita anos de espera em recursos.
            </p>
          </div>
          <a
            href={whatsappCtaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com a Advogada</span>
          </a>
        </div>

        {/* ── SEÇÕES PRINCIPAIS (H2, H3, Listas, Dicas, Citações) ── */}
        <div className="space-y-12">
          {post.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-[var(--text-primary)] mb-4">
                {section.title}
              </h2>

              {section.content.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="text-base sm:text-lg text-[var(--text-primary)] leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}

              {/* Lista de itens estruturada com checkmarks */}
              {section.listItems && section.listItems.length > 0 && (
                <ul className="my-5 space-y-2.5 p-4 sm:p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                  {section.listItems.map((item, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-3 text-sm sm:text-base">
                      <span className="w-5 h-5 rounded-full bg-[#C9A84C]/20 text-[#8B6914] flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Subseções H3 */}
              {section.subsections &&
                section.subsections.map((sub) => (
                  <div key={sub.id} id={sub.id} className="mt-6 pl-4 border-l-2 border-[#C9A84C]/50">
                    <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-2 text-[var(--text-primary)]">
                      {sub.title}
                    </h3>
                    {sub.content.map((subP, sIdx) => (
                      <p key={sIdx} className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-3">
                        {subP}
                      </p>
                    ))}
                  </div>
                ))}

              {/* Caixa de Dica / Alerta Legal */}
              {section.tipBox && (
                <div className="my-6 p-5 rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/40 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#8B6914] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#8B6914] uppercase tracking-wide">
                      {section.tipBox.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[var(--text-primary)] mt-1 leading-relaxed">
                      {section.tipBox.text}
                    </p>
                  </div>
                </div>
              )}

              {/* Citação / Blockquote */}
              {section.quote && (
                <blockquote className="my-6 p-5 rounded-2xl bg-[var(--bg-card)] border-l-4 border-[#C9A84C] shadow-sm italic">
                  <Quote className="w-6 h-6 text-[#C9A84C]/50 mb-2" />
                  <p className="text-base sm:text-lg text-[var(--text-primary)] leading-relaxed">
                    "{section.quote.text}"
                  </p>
                  <footer className="mt-2 text-xs font-semibold text-[#8B6914] uppercase tracking-wider not-italic">
                    — {section.quote.author}
                  </footer>
                </blockquote>
              )}
            </section>
          ))}
        </div>

        {/* ── FAQ DO POST (Se houver) ── */}
        {post.faq && post.faq.length > 0 && (
          <div className="my-12 p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-[#C9A84C]" />
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)]">
                Perguntas Frequentes
              </h2>
            </div>
            <div className="space-y-4">
              {post.faq.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-[var(--border-color)]/60 bg-[var(--bg-primary)]">
                  <h3 className="text-sm font-bold text-[var(--text-primary)]">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── CONCLUSÃO / RESUMO ── */}
        <div className="my-10 pt-8 border-t border-[var(--border-color)]">
          <h2 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] mb-3">
            Conclusão
          </h2>
          {post.conclusion.map((paragraph, idx) => (
            <p key={idx} className="text-base sm:text-lg text-[var(--text-primary)] leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* ── BANNER FINAL DE ALTA CONVERSÃO ── */}
        <div className="my-12 p-8 rounded-3xl border-2 border-[#C9A84C] bg-gradient-to-b from-[#C9A84C]/20 via-[var(--bg-card)] to-[var(--bg-card)] shadow-xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)]">
            Precisa de auxílio com a sua aposentadoria ou benefício?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
            Fale diretamente com a equipe da advogada Kelly Carina. Atendimento individual, análise de CNIS e condução segura do seu pedido.
          </p>
          <a
            href={whatsappCtaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Atendimento com a Advogada</span>
          </a>
          <p className="mt-3 text-xs text-[var(--text-secondary)]">
            {CONTACT.oab} • Curitiba e atendimento online para todo o Brasil
          </p>
        </div>

        {/* ── CAIXA DA AUTORA (Author Box) ── */}
        <div className="my-12 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#C9A84C] shrink-0 shadow-md">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)]">
                  {post.author.name}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#C9A84C]/15 text-[#8B6914] border border-[#C9A84C]/30">
                  {post.author.oab}
                </span>
              </div>
              <p className="text-xs text-[#8B6914] font-semibold mt-1">
                {post.author.role}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {post.author.bio}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Link
                  href="/#sobre"
                  className="text-xs font-bold uppercase tracking-wider text-[#8B6914] hover:text-[#C9A84C] transition-colors"
                >
                  Conhecer Trajetória →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── VOLTAR PARA O FEED ── */}
        <div className="my-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[#C9A84C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para todos os artigos do Blog</span>
          </Link>
        </div>
      </div>

      {/* ── POSTS RELACIONADOS (Grid no final) ── */}
      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-[var(--border-color)]">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)]">
              Artigos Relacionados
            </h2>
            <Link
              href="/blog"
              className="text-xs font-bold uppercase tracking-wider text-[#8B6914] hover:text-[#C9A84C] transition-colors"
            >
              Ver Todos →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <article
                key={rel.slug}
                className="group flex flex-col rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#C9A84C]/50 transition-all duration-300"
              >
                <Link href={`/blog/${rel.slug}`} className="relative h-44 w-full block overflow-hidden">
                  <Image
                    src={rel.coverImage}
                    alt={rel.coverAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-black/85 text-[#C9A84C] border border-[#C9A84C]/40">
                      {rel.category}
                    </span>
                  </div>
                </Link>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <Link href={`/blog/${rel.slug}`}>
                    <h3 className="text-base font-bold font-[family-name:var(--font-heading)] group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                      {rel.title}
                    </h3>
                  </Link>
                  <div className="mt-4 pt-3 border-t border-[var(--border-color)]/50 flex items-center justify-between text-xs text-[var(--text-secondary)]">
                    <span>{rel.readingTime}</span>
                    <span className="text-[#8B6914] font-bold group-hover:translate-x-1 transition-transform">
                      Ler →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
