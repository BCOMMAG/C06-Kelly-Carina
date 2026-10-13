"use client";

import { useRef } from "react";
import { REVIEWS_DATA } from "@/lib/data";
import { Star, MessageSquareQuote, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Cabeçalho e Badge de Avaliações
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
    },
    { scope: sectionRef }
  );

  const duplicatedReviews = [...REVIEWS_DATA, ...REVIEWS_DATA];

  return (
    <section
      id="avaliacoes"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-secondary)]/50 editorial-border-b w-full relative overflow-hidden"
    >
      <GeometricLines variant="reviews" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--accent)]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--accent)] font-bold">
                05 / Reconhecimento Público &amp; Clientes
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Avaliações no Google Reviews
            </h2>
          </div>

          {/* Badge de Avaliações 5.0 */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/30 shadow-2xs">
            <div className="text-right">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <span className="font-heading text-xs uppercase tracking-wider text-[var(--text-muted)] block mt-0.5 font-semibold">
                Avaliação 5.0 Estrelas
              </span>
            </div>
            <div className="h-8 w-[1px] bg-[var(--border-subtle)]/30" />
            <div className="flex items-center gap-1.5 font-heading text-sm font-bold text-[var(--accent)]">
              <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
              <span>Google Verificado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa Marquee de Cards Contínuos com Loop Automático Infinito */}
      <div className="w-full overflow-hidden py-4">
        <div className="animate-marquee gap-6">
          {duplicatedReviews.map((rev, idx) => (
            <div
              key={`${rev.id}-${idx}`}
              className="w-[300px] sm:w-[360px] p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs flex flex-col justify-between flex-shrink-0 hover:border-[#C9A84C] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-5 h-5 text-[var(--border-subtle)]" />
                </div>

                <p className="font-body text-xs sm:text-sm text-[var(--text-main)] italic leading-relaxed line-clamp-4 mb-4">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)]/25 flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-[var(--text-main)]">
                    {rev.name}
                  </h3>
                  <span className="text-[0.6875rem] text-[var(--accent)] font-heading font-medium block">
                    {rev.highlight}
                  </span>
                </div>
                <span className="text-[0.625rem] text-[var(--text-muted)] font-body">
                  Google Review
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
