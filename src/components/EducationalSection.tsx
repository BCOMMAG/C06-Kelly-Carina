"use client";

import { useState, useRef } from "react";
import { EDUCATIONAL_TOPICS, OFFICE_INFO } from "@/lib/data";
import { BookOpen, Clock, ChevronRight, ShieldAlert, ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "./SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function EducationalSection() {
  const [selectedId, setSelectedId] = useState(EDUCATIONAL_TOPICS[0].id);
  const activeTopic = EDUCATIONAL_TOPICS.find((t) => t.id === selectedId) || EDUCATIONAL_TOPICS[0];

  // Estado para acordeão mobile condensado
  const [expandedMobileTopicId, setExpandedMobileTopicId] = useState<string | null>(null);

  const toggleMobileTopic = (id: string) => {
    setExpandedMobileTopicId((prev) => (prev === id ? null : id));
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  };

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { x: -35, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leftColRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { x: 35, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rightColRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const getWhatsAppMessageUrl = (topicTitle: string) => {
    const text = `Olá! Li o conteúdo educativo sobre "${topicTitle}" no site da Advocacia Kelly Carina e gostaria de tirar dúvidas sobre o meu caso.`;
    return `https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="educativo"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative overflow-hidden"
    >
      <GeometricLines variant="educational" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--accent)]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--accent)] font-bold">
                04 / Orientação Pública &amp; Provimento 205/2021 OAB
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Conteúdo Educativo &amp; Direitos
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Esclarecimentos didáticos para que você compreenda seus direitos previdenciários e as medidas legais cabíveis contra exigências abusivas do INSS.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MODELO DESKTOP (LG+): 2 COLUNAS (LISTA À ESQUERDA + ARTIGO À DIREITA)     */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* Coluna 1: Lista de Tópicos Interativos (5 colunas) */}
          <div ref={leftColRef} className="lg:col-span-5 space-y-3 will-change-transform">
            {EDUCATIONAL_TOPICS.map((topic) => {
              const isSelected = topic.id === selectedId;
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setSelectedId(topic.id)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 flex items-start gap-4 cursor-pointer hover-lift ${
                    isSelected
                      ? "bg-[var(--bg-card)] border-[var(--accent)] shadow-md ring-1 ring-[var(--accent)]/30"
                      : "bg-[var(--bg-secondary)]/50 border-[var(--border-subtle)]/30 hover:border-[var(--accent)]/50 text-[var(--text-muted)]"
                  }`}
                >
                  <span
                    className={`font-heading text-base font-bold flex-shrink-0 mt-0.5 ${
                      isSelected ? "text-[var(--accent)]" : "opacity-60"
                    }`}
                  >
                    {topic.number}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-heading text-[0.625rem] uppercase tracking-wider text-[var(--accent)] font-bold">
                        {topic.category}
                      </span>
                      <span className="text-[0.625rem] text-[var(--text-muted)] font-body flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {topic.readTime}
                      </span>
                    </div>

                    <h3
                      className={`font-heading text-sm font-bold leading-snug ${
                        isSelected ? "text-[var(--text-main)]" : "text-[var(--text-main)]/80"
                      }`}
                    >
                      {topic.title}
                    </h3>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 flex-shrink-0 mt-2 transition-transform duration-300 ${
                      isSelected ? "text-[var(--accent)] translate-x-1" : "opacity-40"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Coluna 2: Artigo Educativo Selecionado (7 colunas) */}
          <div
            ref={rightColRef}
            className="lg:col-span-7 p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-lg flex flex-col justify-between will-change-transform"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/30 mb-6">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[var(--accent)]" />
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold">
                    {activeTopic.category}
                  </span>
                </div>
                <span className="text-xs text-[var(--text-muted)] font-body flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activeTopic.readTime}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-main)] mb-4 leading-tight">
                {activeTopic.title}
              </h3>

              <p className="font-heading text-sm font-semibold text-[var(--accent)] mb-6 leading-relaxed">
                {activeTopic.summary}
              </p>

              <div className="space-y-4 font-body text-sm text-[var(--text-main)] leading-relaxed mb-8">
                {activeTopic.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border-subtle)]/30 space-y-4">
              <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]/25 flex items-start gap-2.5 text-[0.6875rem] text-[var(--text-muted)] font-body">
                <ShieldAlert className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                <span>{activeTopic.oabDisclaimer}</span>
              </div>

              <div className="flex items-center justify-between gap-4 pt-2">
                <span className="text-xs font-body text-[var(--text-muted)]">
                  Ficou com dúvidas sobre este tema?
                </span>

                <a
                  href={getWhatsAppMessageUrl(activeTopic.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-5 text-xs font-heading font-bold shadow-sm hover-lift transition-all gap-1.5 cursor-pointer flex items-center"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                  <span>Tirar Dúvida no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODELO MOBILE & TABLET (< LG): ACORDEÃO INTERATIVO                        */}
        {/* ========================================================================= */}
        <div className="lg:hidden space-y-3">
          {EDUCATIONAL_TOPICS.map((topic) => {
            const isExpanded = expandedMobileTopicId === topic.id;

            return (
              <div
                key={topic.id}
                className="rounded-2xl border border-[var(--border-subtle)]/40 bg-[var(--bg-card)] overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleMobileTopic(topic.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-heading text-sm font-bold text-[var(--accent)] flex-shrink-0 mt-0.5">
                      {topic.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-heading text-[0.625rem] uppercase tracking-wider text-[var(--accent)] font-bold">
                          {topic.category}
                        </span>
                        <span className="text-[0.625rem] text-[var(--text-muted)] font-body">
                          • {topic.readTime}
                        </span>
                      </div>
                      <h3 className="font-heading text-sm sm:text-base font-bold text-[var(--text-main)] leading-snug">
                        {topic.title}
                      </h3>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-[var(--text-muted)] flex-shrink-0 mt-1 transition-transform duration-300 ${
                      isExpanded ? "rotate-180 text-[var(--accent)]" : "rotate-0"
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-[var(--border-subtle)]/20 animate-fade-in-down space-y-4">
                    <p className="font-heading text-xs font-semibold text-[var(--accent)] leading-relaxed">
                      {topic.summary}
                    </p>

                    <div className="space-y-3 font-body text-xs sm:text-sm text-[var(--text-main)] leading-relaxed">
                      {topic.content.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]/25 flex items-start gap-2 text-[0.625rem] text-[var(--text-muted)] font-body">
                      <ShieldAlert className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <span>{topic.oabDisclaimer}</span>
                    </div>

                    <a
                      href={getWhatsAppMessageUrl(topic.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-pill bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 text-xs font-heading font-bold shadow-sm hover-lift transition-all gap-1.5 cursor-pointer flex items-center justify-center"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                      <span>Tirar Dúvida no WhatsApp</span>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EducationalSection;
