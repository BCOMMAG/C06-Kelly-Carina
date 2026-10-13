"use client";

import { useRef } from "react";
import { WORK_STEPS, OFFICE_INFO } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

      if (progressBarRef.current && trackRef.current) {
        gsap.fromTo(
          progressBarRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: trackRef.current,
              start: "top 75%",
              end: "bottom 60%",
              scrub: 0.8,
            },
          }
        );
      }

      if (trackRef.current) {
        const stepItems = trackRef.current.querySelectorAll(".step-card-item");
        if (stepItems.length > 0) {
          gsap.fromTo(
            stepItems,
            { y: 40, opacity: 0, scale: 0.95 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.75,
              stagger: 0.14,
              ease: "power2.out",
              scrollTrigger: {
                trigger: trackRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="como-atuamos"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative overflow-hidden"
    >
      <GeometricLines variant="methodology" />

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
                06 / Metodologia &amp; Transparência
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Como Funciona o Nosso Atendimento
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Um método estruturado em 4 etapas claras para conduzir seu requerimento no INSS ou ação judicial com máxima segurança, previsibilidade e acolhimento.
          </p>
        </div>

        {/* Trilha de Etapas com Linha Conectora */}
        <div ref={trackRef} className="relative mb-12">
          {/* Linha de progresso no Desktop (Scrub GSAP) */}
          <div className="hidden lg:block absolute top-[45px] left-12 right-12 h-[2px] bg-[var(--border-subtle)]/30 z-0">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-[#C9A84C] via-[#DFCA85] to-[#C9A84C] will-change-transform"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {WORK_STEPS.map((step) => (
              <div
                key={step.number}
                className="step-card-item p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 hover:border-[var(--accent)] shadow-sm hover-lift transition-all duration-300 flex flex-col justify-between will-change-transform group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-12 h-12 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]/40 flex items-center justify-center font-heading text-xl font-bold text-[var(--accent)] group-hover:bg-[#C9A84C] group-hover:text-white transition-colors duration-300 shadow-2xs">
                      {step.number}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[var(--border-subtle)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
                  </div>

                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-semibold block mb-1">
                    {step.subtitle}
                  </span>

                  <h3 className="font-heading text-lg font-bold text-[var(--text-main)] mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--border-subtle)]/20">
                  <span className="text-[0.6875rem] font-heading text-[var(--text-muted)] font-medium">
                    Etapa {step.number} de 04
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Inferior */}
        <div
          ref={ctaRef}
          className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm will-change-transform"
        >
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-main)] mb-1">
              Pronto para dar o primeiro passo com segurança?
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)]">
              Agende uma conversa inicial e descubra os melhores caminhos para o seu benefício.
            </p>
          </div>

          <a
            href={OFFICE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-7 text-xs sm:text-sm font-bold shadow-md hover-lift transition-all gap-2 cursor-pointer flex items-center flex-shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Iniciar Análise no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
