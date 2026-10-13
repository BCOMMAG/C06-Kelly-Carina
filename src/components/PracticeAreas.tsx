"use client";

import { useState, useRef } from "react";
import { PRACTICE_AREAS, PracticeArea, OFFICE_INFO } from "@/lib/data";
import { CheckCircle2, ArrowUpRight, Scale, ShieldCheck, HeartHandshake, Award, Clock, FileCheck, ShieldAlert, X } from "lucide-react";
import { WhatsAppIcon } from "./SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

function getAreaIcon(iconName: string) {
  switch (iconName) {
    case "ShieldAlert":
      return <ShieldAlert className="w-5 h-5" />;
    case "HeartHandshake":
      return <HeartHandshake className="w-5 h-5" />;
    case "FileCheck":
      return <FileCheck className="w-5 h-5" />;
    case "ShieldCheck":
      return <ShieldCheck className="w-5 h-5" />;
    case "Clock":
      return <Clock className="w-5 h-5" />;
    case "Award":
      return <Award className="w-5 h-5" />;
    case "Scale":
    default:
      return <Scale className="w-5 h-5" />;
  }
}

export function PracticeAreas() {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

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

      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.querySelectorAll(".practice-card");
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardsContainerRef.current,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="atuacao"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-secondary)]/40 editorial-border-b w-full relative overflow-hidden"
    >
      <GeometricLines variant="areas" />

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
                03 / Especialidades Previdenciárias
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Áreas de Atuação Especializada
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Atuação profunda e estratégica em todas as modalidades de benefícios do INSS e ações na Justiça Federal. Atendimento presencial em Curitiba e consultoria online em todo o Brasil.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* GRID PRINCIPAL: 4 COLUNAS NO DESKTOP, 2 COLUNAS NO TABLET, 1 NO MOBILE   */}
        {/* ========================================================================= */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.id}
              id={area.id}
              className={`practice-card p-6 rounded-2xl bg-[var(--bg-card)] border ${
                area.featured
                  ? "border-[var(--accent)]/60 shadow-md ring-1 ring-[var(--accent)]/20"
                  : "border-[var(--border-subtle)]/40 shadow-sm"
              } hover:border-[var(--accent)] transition-all duration-300 hover-lift will-change-transform flex flex-col justify-between group relative`}
            >
              {area.featured && (
                <div className="absolute -top-3 right-5 px-3 py-0.5 rounded-full bg-[var(--accent)] text-[var(--bg-primary)] font-heading text-[0.625rem] font-bold uppercase tracking-wider shadow-xs">
                  Alta Demanda
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-xl font-bold text-[var(--accent)]">
                    {area.number}.
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent)] group-hover:bg-[#C9A84C] group-hover:text-white transition-colors duration-300 shadow-2xs">
                    {getAreaIcon(area.iconName)}
                  </div>
                </div>

                <span className="font-heading text-[0.6875rem] uppercase tracking-wider text-[var(--accent)] font-semibold block mb-1">
                  {area.highlightText}
                </span>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-[var(--text-main)] mb-2.5 leading-snug group-hover:text-[var(--accent)] transition-colors">
                  {area.title}
                </h3>

                <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed mb-5 line-clamp-3">
                  {area.shortDesc}
                </p>

                <div className="space-y-2 pt-4 border-t border-[var(--border-subtle)]/20">
                  {area.coverageList.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-body text-[var(--text-main)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-[var(--border-subtle)]/25 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedArea(area)}
                  className="w-full py-2 px-3 rounded-xl border border-[var(--border-subtle)]/50 hover:border-[var(--accent)] bg-[var(--bg-secondary)]/50 text-xs font-heading font-semibold text-[var(--text-main)] hover:text-[var(--accent)] transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Ver Detalhes &amp; Casos</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Olá! Gostaria de consultar a advogada sobre ${area.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-heading font-bold shadow-xs hover-lift transition-all text-center cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                  <span>Consultar no WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODAL DE DETALHES DA ESPECIALIDADE                                        */}
      {/* ========================================================================= */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
          <div
            className="relative w-full max-w-2xl max-h-[90vh] bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedArea(null)}
              aria-label="Fechar detalhes"
              className="absolute top-5 right-5 p-2 rounded-full border border-[var(--border-subtle)]/40 text-[var(--text-main)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="font-heading text-sm uppercase tracking-wider text-[var(--accent)] font-bold">
                Especialidade {selectedArea.number}
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-main)] mb-2">
              {selectedArea.title}
            </h3>

            <p className="font-heading text-sm text-[var(--accent)] font-semibold mb-5">
              {selectedArea.subtitle}
            </p>

            <div className="p-4 rounded-2xl bg-[var(--bg-secondary)]/70 border border-[var(--border-subtle)]/30 mb-6 font-body text-xs sm:text-sm text-[var(--text-main)] leading-relaxed">
              <p>{selectedArea.description}</p>
            </div>

            <div className="mb-6">
              <h4 className="font-heading text-sm font-bold text-[var(--text-main)] uppercase tracking-wider mb-3">
                Situações Atendidas &amp; Procedimentos:
              </h4>
              <div className="space-y-2">
                {selectedArea.coverageList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[var(--text-main)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-body text-[var(--text-muted)] text-center sm:text-left">
                {OFFICE_INFO.name} • {OFFICE_INFO.oab}
              </span>

              <a
                href={`https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Olá! Gostaria de consultar a advogada sobre ${selectedArea.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-6 text-xs sm:text-sm font-bold shadow-md hover-lift transition-all gap-2 cursor-pointer flex items-center justify-center w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Conversar Sobre Esta Especialidade</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PracticeAreas;
