"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { ChevronRight } from "lucide-react";
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
      className="relative w-full h-[100dvh] min-h-[100dvh] flex flex-col justify-between lg:justify-center overflow-hidden"
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
            className="object-cover object-[center_32%]"
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
            className="object-cover object-[center_28%] sm:object-[center_30%]"
            sizes="100vw"
          />
        </div>

        {/* Overlay sutil exclusivo para modo escuro */}
        <div className="hidden dark:block absolute inset-0 bg-[#0A0C10]/75 pointer-events-none" />
      </div>

      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 lg:mx-0 lg:ml-8 xl:ml-12 2xl:ml-20 lg:max-w-[580px] xl:max-w-[640px] relative z-10 w-full h-full flex-1 flex flex-col justify-between lg:justify-center will-change-transform pt-28 xs:pt-32 sm:pt-36 lg:pt-0 pb-28 xs:pb-32 sm:pb-36 lg:pb-0"
      >
        {/* Topo no Mobile / Alinhado à Esquerda no Desktop (Quadrado Vermelho) */}
        <div className="max-w-3xl lg:max-w-none animate-fade-in-down pt-4 xs:pt-6 sm:pt-8 lg:pt-0">
          <h1 className="font-heading text-[1.85rem] xs:text-[2.15rem] sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.1rem] leading-[1.16] sm:leading-[1.12] tracking-tight text-[#0A0C10] dark:text-[#F6F4EE] font-bold">
            Defesa Técnica e Acolhimento em{" "}
            <span className="text-[#8F6E22] dark:text-[#E8CD82] font-extrabold">
              Direito Previdenciário
            </span>
          </h1>

          <p className="font-body text-xs xs:text-[0.875rem] sm:text-base md:text-lg text-[#262B36] dark:text-[#E0DDD5] max-w-2xl lg:max-w-xl mt-3 sm:mt-4 leading-relaxed font-medium">
            Assessoria jurídica especializada na conquista e revisão da sua aposentadoria, restabelecimento de auxílio-doença, BPC/LOAS e planejamento previdenciário no INSS e na Justiça Federal.
          </p>
        </div>

        {/* Base no Mobile / Junto ao texto no Desktop (Alinhado à Esquerda) */}
        <div className="max-w-3xl lg:max-w-none flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 mt-auto lg:mt-8">
          <a
            href={OFFICE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-[#25D366] hover:bg-[#20ba59] text-white py-3 sm:py-3.5 px-5 sm:px-6 xl:px-7 text-xs xs:text-sm sm:text-base shadow-[0_4px_22px_rgba(37,211,102,0.4)] hover-lift transition-all gap-2.5 cursor-pointer font-bold justify-center"
          >
            <WhatsAppIcon className="w-5 h-5 text-white" />
            <span>Consultar Advogada no WhatsApp</span>
          </a>

          <Link
            href="#atuacao"
            className="btn-pill bg-white/90 hover:bg-white text-[#0A0C10] dark:bg-white/10 dark:hover:bg-white/20 dark:text-[#F6F4EE] border border-[#C9A84C]/60 dark:border-white/25 shadow-sm py-3 sm:py-3.5 px-5 sm:px-6 text-xs xs:text-sm sm:text-base hover-lift transition-all gap-2 justify-center font-heading font-semibold"
          >
            <span>Conhecer Especialidades</span>
            <ChevronRight className="w-4 h-4 text-[#8F6E22] dark:text-[#E8CD82]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
