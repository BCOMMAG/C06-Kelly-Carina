"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Clock, Calendar, ArrowRight, BookOpen, Sparkles, CheckCircle2, MessageCircle, Send } from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES, BlogPost } from "@/lib/blog";
import { CONTACT, SOCIALS } from "@/lib/constants";

export default function BlogFeed() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Filtragem dinâmica de artigos
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "Todas" || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Artigo em destaque (o primeiro com featured ou o mais recente)
  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  }, []);

  // Posts mais lidos para a barra lateral
  const popularPosts = useMemo(() => {
    return BLOG_POSTS.filter((p) => p.popular);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail("");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] pt-28 pb-20">
      {/* ── Banner Superior do Blog ── */}
      <section className="relative overflow-hidden border-b border-[var(--border-color)]/60 bg-gradient-to-b from-[#C9A84C]/10 via-transparent to-transparent py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-3.5 py-1 text-xs font-semibold text-[#8B6914] uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Portal Jurídico Previdenciário</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight font-[family-name:var(--font-heading)] text-[var(--text-primary)]">
              Conhecimento e Estratégia para o Seu Futuro
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Guias práticos, análises atualizadas e orientações jurídicas sobre Aposentadorias, BPC/LOAS, Benefícios por Incapacidade e revisões no INSS.
            </p>
          </div>

          {/* Barra de Pesquisa e Filtros */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Input de Busca */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por tema, benefício ou palavra-chave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Categorias Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-[#C9A84C] text-black shadow-md font-bold"
                      : "bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[#C9A84C] hover:bg-[#C9A84C]/10 border border-[var(--border-color)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Conteúdo Principal do Feed: Hero Post + Grid + Sidebar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* ARTIGO EM DESTAQUE (Apenas se nenhuma busca específica estiver ativa ou se o post bater com o filtro) */}
        {!searchQuery && selectedCategory === "Todas" && (
          <section className="mb-14">
            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#C9A84C]/40 bg-[var(--bg-card)] shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Imagem do Hero Post */}
                <div className="relative h-64 sm:h-80 lg:h-full lg:min-h-[420px] lg:col-span-7 overflow-hidden">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.coverAlt}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0A0A0A]/90 text-[#C9A84C] border border-[#C9A84C]/60 shadow-lg backdrop-blur-md">
                      <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
                      Destaque Principal
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Hero Post */}
                <div className="p-6 sm:p-8 lg:p-10 lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#8B6914] bg-[#C9A84C]/15 px-2.5 py-1 rounded-md">
                        {featuredPost.category}
                      </span>
                      <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {featuredPost.readingTime}
                      </span>
                    </div>

                    <Link href={`/blog/${featuredPost.slug}`}>
                      <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] leading-snug group-hover:text-[#C9A84C] transition-colors">
                        {featuredPost.title}
                      </h2>
                    </Link>

                    <p className="mt-3 text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[var(--border-color)]/60 mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C9A84C]">
                        <Image
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-primary)]">
                          {featuredPost.author.name}
                        </p>
                        <p className="text-[11px] text-[var(--text-secondary)]">
                          {featuredPost.date}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8B6914] hover:text-[#C9A84C] group-hover:translate-x-1 transition-all"
                    >
                      <span>Ler Artigo</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Grid Principal + Sidebar Lateral ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Coluna Esquerda: Grid de Artigos (8 Colunas no Desktop) */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)]">
                {selectedCategory === "Todas" ? "Artigos Recentes" : `Artigos em ${selectedCategory}`}
              </h2>
              <span className="text-xs text-[var(--text-secondary)]">
                {filteredPosts.length} {filteredPosts.length === 1 ? "artigo encontrado" : "artigos encontrados"}
              </span>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--bg-card)]">
                <BookOpen className="w-12 h-12 text-[#C9A84C] mx-auto mb-3 opacity-60" />
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  Nenhum artigo encontrado
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  Tente buscar por outro termo ou selecione a categoria "Todas".
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("Todas");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 rounded-xl text-xs font-bold uppercase bg-[#C9A84C] text-black hover:brightness-105 transition-all"
                >
                  Ver todos os artigos
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="group flex flex-col rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#C9A84C]/50 transition-all duration-300"
                  >
                    {/* Thumbnail */}
                    <Link href={`/blog/${post.slug}`} className="relative h-48 w-full overflow-hidden block">
                      <Image
                        src={post.coverImage}
                        alt={post.coverAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#0A0A0A]/85 text-[#C9A84C] border border-[#C9A84C]/50 shadow-sm backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </Link>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] mb-2">
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

                        <Link href={`/blog/${post.slug}`}>
                          <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] leading-snug group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                        </Link>

                        <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[var(--border-color)]/50 mt-4 flex items-center justify-between">
                        <span className="text-xs font-medium text-[var(--text-secondary)]">
                          Por {post.author.name}
                        </span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#8B6914] group-hover:text-[#C9A84C] transition-colors"
                        >
                          <span>Ler</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Coluna Direita: Sidebar Lateral (4 Colunas no Desktop) */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            {/* 1. Box da Autora */}
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#C9A84C] shrink-0">
                  <Image
                    src="/fotodeperfildaKelly.jpeg"
                    alt="Kelly Carina — Advogada"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base font-[family-name:var(--font-heading)]">
                    Kelly Carina
                  </h3>
                  <p className="text-xs text-[#8B6914] font-semibold">
                    OAB/PR 76.720 • Advogada
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                    Especialista em Direito Previdenciário
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs text-[var(--text-secondary)] leading-relaxed">
                Mais de 10 anos de experiência na defesa intransigente dos direitos dos segurados do INSS. Pós-graduada em Direito Previdenciário e Direito Aplicado.
              </p>

              {/* Botão de Consulta Direta */}
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Atendimento com a Advogada</span>
              </a>
            </div>

            {/* 2. Posts Mais Lidos / Populares */}
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#C9A84C] mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Artigos Mais Lidos</span>
              </h3>

              <div className="flex flex-col divide-y divide-[var(--border-color)]/60">
                {popularPosts.map((post, idx) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="py-3 first:pt-0 last:pb-0 group flex items-start gap-3"
                  >
                    <span className="text-xl font-bold text-[#C9A84C]/50 group-hover:text-[#C9A84C] shrink-0 w-6">
                      0{idx + 1}
                    </span>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8B6914]">
                        {post.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-semibold group-hover:text-[#C9A84C] transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 3. Newsletter / Informativo Previdenciário */}
            <div className="rounded-2xl border border-[#C9A84C]/40 bg-gradient-to-br from-[#C9A84C]/10 via-[var(--bg-card)] to-[var(--bg-card)] p-6 shadow-sm">
              <h3 className="font-bold text-sm font-[family-name:var(--font-heading)] uppercase tracking-wide text-[var(--text-primary)]">
                Informativo Previdenciário
              </h3>
              <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                Receba atualizações sobre regras do INSS, novidades em aposentadorias e orientações jurídicas no seu e-mail.
              </p>

              {newsletterSubscribed ? (
                <div className="mt-4 p-3 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Inscrição realizada com sucesso!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="mt-4 flex flex-col gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Seu melhor e-mail..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#C9A84C] text-black hover:brightness-105 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Receber Informações</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* 4. Redes Sociais */}
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 text-center shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-3">
                Siga a Advocacia Kelly Carina
              </p>
              <div className="flex items-center justify-center gap-3">
                <a
                  href={SOCIALS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold border border-[var(--border-color)] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all bg-[var(--bg-primary)]"
                >
                  Instagram
                </a>
                <a
                  href={SOCIALS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold border border-[var(--border-color)] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all bg-[var(--bg-primary)]"
                >
                  Facebook
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
