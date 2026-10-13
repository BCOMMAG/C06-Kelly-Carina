"use client";

import { useRef } from "react";
import { OFFICE_INFO } from "@/lib/data";
import { Phone, MapPin, Clock, ArrowUpRight, Navigation } from "lucide-react";
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsColRef = useRef<HTMLDivElement>(null);
  const mapColRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Cabeçalho
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

      // 2. Coluna de Cards
      if (cardsColRef.current) {
        const cards = cardsColRef.current.querySelectorAll(".contact-info-card");
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { x: -30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.65,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardsColRef.current,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }

      // 3. Coluna do Mapa
      if (mapColRef.current) {
        gsap.fromTo(
          mapColRef.current,
          { opacity: 0, scale: 0.96 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mapColRef.current,
              start: "top 85%",
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
      id="contato"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative overflow-hidden"
    >
      <GeometricLines variant="contact" />

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
                08 / Atendimento &amp; Localização
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Canais Oficiais de Atendimento
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Sede física na Rua das Carmelitas no Boqueirão/Hauer em Curitiba/PR para acolhimento presencial, e consultoria jurídica digital segura para clientes em todo o Brasil.
          </p>
        </div>

        {/* Grid 12 colunas: Cards de Contato (5 colunas) + Google Maps (7 colunas) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Coluna 1: Cards de Contato & Ações (5 colunas) */}
          <div ref={cardsColRef} className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              {/* Card WhatsApp & Telefone */}
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 hover-lift group will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors block"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A84C] group-hover:text-white transition-colors shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    WhatsApp &amp; Consultas Previdenciárias
                  </span>
                  <p className="font-heading font-bold text-base sm:text-lg text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors">
                    {OFFICE_INFO.phone}
                  </p>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-1">
                    Atendimento ágil com a Dra. Kelly Carina e equipe.
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors flex-shrink-0 mt-1" />
              </a>

              {/* Card Endereço da Sede com Rota GPS */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    Sede Física em Curitiba/PR
                  </span>
                  <p className="font-body text-xs sm:text-sm text-[var(--text-main)] font-semibold leading-snug">
                    {OFFICE_INFO.address}
                  </p>
                  <a
                    href={OFFICE_INFO.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-heading font-bold text-[var(--accent)] hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Traçar rota no GPS</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Card Redes Sociais */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    Redes Oficiais
                  </span>
                  <div className="flex flex-wrap items-center gap-4 mt-0.5">
                    <a
                      href={OFFICE_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs sm:text-sm font-semibold text-[var(--text-main)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
                    >
                      <span>Instagram ({OFFICE_INFO.instagramHandle})</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)]" />
                    </a>
                    <a
                      href={OFFICE_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs sm:text-sm font-semibold text-[var(--text-main)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
                    >
                      <FacebookIcon className="w-3.5 h-3.5" />
                      <span>Facebook</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)]" />
                    </a>
                  </div>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-1">
                    Acompanhe orientações didáticas sobre aposentadorias e INSS.
                  </p>
                </div>
              </div>

              {/* Card Horário de Funcionamento */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    Horário de Atendimento
                  </span>
                  <p className="font-body text-xs sm:text-sm text-[var(--text-main)] font-semibold">
                    {OFFICE_INFO.schedule.weekdays}
                  </p>
                  <p className="font-body text-xs text-[var(--text-muted)] mt-0.5">
                    Sábado: {OFFICE_INFO.schedule.saturday} • Domingo: {OFFICE_INFO.schedule.sunday}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-pill bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 gap-2 shadow-[0_4px_20px_rgba(37,211,102,0.35)] text-sm sm:text-base cursor-pointer hover-lift transition-all flex items-center justify-center font-bold"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Conversar com a Advogada no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Google Maps Interativo com Badge e Barra Flutuante de Rota (7 colunas) */}
          <div ref={mapColRef} className="lg:col-span-7 flex flex-col justify-between will-change-transform">
            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-full min-h-[380px] rounded-3xl overflow-hidden border border-[var(--border-subtle)]/40 shadow-md">
              <iframe
                title={`Localização de ${OFFICE_INFO.name} na Rua das Carmelitas Curitiba PR`}
                src={OFFICE_INFO.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[15%] contrast-[1.05]"
              />

              {/* Badge de Identificação no Topo do Mapa */}
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-[var(--bg-card)]/95 backdrop-blur-md border border-[var(--border-subtle)]/30 text-xs shadow-md">
                <span className="font-heading font-bold text-[var(--text-main)] block">
                  {OFFICE_INFO.name}
                </span>
                <span className="font-body text-[var(--text-muted)] text-[0.6875rem]">
                  Rua das Carmelitas, 586 - Sl 04 • Curitiba/PR
                </span>
              </div>

              {/* Barra Flutuante de Rotas na Base do Mapa */}
              <div className="absolute bottom-4 inset-x-4 sm:left-auto sm:right-4 p-2 sm:p-2.5 rounded-2xl bg-[var(--bg-card)]/95 backdrop-blur-md border border-[var(--border-subtle)]/30 flex items-center justify-between gap-3 shadow-lg">
                <span className="text-xs font-heading font-semibold text-[var(--text-main)] pl-2 hidden sm:inline">
                  Como Chegar — Boqueirão/Hauer, Curitiba
                </span>
                <a
                  href={OFFICE_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-[#C9A84C] hover:bg-[#B8963E] text-[#0A0C10] py-2 px-4 text-xs font-heading font-bold gap-1.5 shadow-sm hover-lift transition-all cursor-pointer flex items-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Traçar Rota no Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
