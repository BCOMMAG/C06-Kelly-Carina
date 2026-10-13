"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { MessageSquare, ShieldCheck, ChevronRight, Award, MapPin } from "lucide-react";
import { WhatsAppIcon } from "./SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageDesktopRef = useRef<HTMLDivElement>(null);
  const imageMobileRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Efeito de Parallax suave nas imagens de fundo do Hero
      if (imageDesktopRef.current) {
        gsap.to(imageDesktopRef.current, {
          y: 70,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (imageMobileRef.current) {
        gsap.to(imageMobileRef.current, {
          y: 45,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 2. Animação de entrada dos textos e botões
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            delay: 0.1,
          }
        );
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative w-full h-[100dvh] min-h-[100dvh] flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6 lg:pb-8 overflow-hidden"
    >
      {/* Imagem de Fundo Desktop (Landscape / >= lg) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div ref={imageDesktopRef} className="hidden lg:block absolute inset-0 -top-10 -bottom-10 will-change-transform">
          <Image
            src="/header_Desktop.jpeg"
            alt="Advocacia Kelly Carina - Direito Previdenciário em Curitiba PR"
            fill
            priority
            quality={92}
            className="object-cover object-[center_32%] brightness-[0.82] contrast-[1.05]"
            sizes="100vw"
          />
        </div>

        {/* Imagem de Fundo Mobile & Tablet Portrait (< lg) */}
        <div ref={imageMobileRef} className="block lg:hidden absolute inset-0 -top-8 -bottom-8 will-change-transform">
          <Image
            src="/header_mobile.jpeg"
            alt="Advocacia Kelly Carina - Advogada Previdenciária Curitiba"
            fill
            priority
            quality={92}
            className="object-cover object-[center_25%] sm:object-[center_30%] brightness-[0.82] contrast-[1.05]"
            sizes="100vw"
          />
        </div>

        {/* Gradientes e Overlays mesclando Preto Profundo, Grafite e Dourado */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C10]/95 via-[#0A0C10]/85 to-[#1C202A]/40 lg:from-[#0A0C10]/92 lg:via-[#0A0C10]/65 lg:via-55% lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10]/95 via-transparent to-[#0A0C10]/60 lg:from-[#0A0C10]/65 lg:via-transparent lg:to-transparent" />
      </div>

      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center lg:justify-between will-change-transform py-4 sm:py-6 lg:py-0"
      >
        {/* Topo do Hero: Badge + Headline Principal */}
        <div className="pt-2 sm:pt-4 lg:pt-2 max-w-3xl animate-fade-in-down mb-6 sm:mb-8 lg:mb-0">
          {/* Badge de Autoridade Dourado Institucional */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C9A84C]/40 bg-[#0A0C10]/80 backdrop-blur-md text-xs sm:text-sm font-heading tracking-wide text-[#F6F4EE] mb-3 sm:mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#C9A84C]" />
            <span>Advocacia Kelly Carina • OAB/PR 76.720 • Direito Previdenciário</span>
          </div>

          {/* Headline Principal */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] leading-[1.12] sm:leading-[1.1] tracking-tight text-[#F6F4EE] font-bold drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
            Defesa Técnica e Acolhimento em{" "}
            <span className="text-gold-gradient underline decoration-[#C9A84C]/40 underline-offset-8">
              Direito Previdenciário
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="font-body text-sm sm:text-base md:text-lg text-[#F6F4EE]/90 max-w-2xl mt-4 sm:mt-5 leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
            Assessoria jurídica especializada na conquista e revisão da sua aposentadoria, restabelecimento de auxílio-doença, BPC/LOAS e planejamento previdenciário no INSS e na Justiça Federal.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <a
              href={OFFICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 sm:px-8 text-sm sm:text-base shadow-[0_4px_22px_rgba(37,211,102,0.4)] hover-lift transition-all gap-2.5 cursor-pointer font-bold justify-center"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Consultar Advogada no WhatsApp</span>
            </a>

            <Link
              href="#atuacao"
              className="btn-pill bg-white/10 hover:bg-white/20 text-[#F6F4EE] border border-white/25 backdrop-blur-md py-3.5 px-6 text-sm sm:text-base hover-lift transition-all gap-2 justify-center font-heading font-semibold"
            >
              <span>Conhecer Especialidades</span>
              <ChevronRight className="w-4 h-4 text-[#C9A84C]" />
            </Link>
          </div>
        </div>

        {/* Rodapé do Hero: Badges de Destaque */}
        <div className="pt-2 sm:pt-4 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-[#F6F4EE]/90 text-xs sm:text-sm font-heading">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
            <span className="font-semibold">+10 Anos de Prática Jurídica</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
            <span className="font-semibold">Pós-Graduação em Previdência</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
            <span className="font-semibold">Sede na Rua das Carmelitas, Curitiba</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
            <span className="font-semibold text-emerald-300">Atendimento Presencial & Online</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
