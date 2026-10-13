"use client";

import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import {
  MessageSquare,
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Scale,
  FileText,
  MapPin,
  HeartHandshake,
} from "lucide-react";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/SocialIcons";

export default function LinksPage() {
  const quickLinks = [
    {
      id: "whatsapp",
      title: "Atendimento Direto no WhatsApp",
      subtitle: "Converse com a Dra. Kelly Carina sobre seu caso",
      href: OFFICE_INFO.whatsappUrl,
      icon: MessageSquare,
      highlight: true,
    },
    {
      id: "website",
      title: "Website Institucional",
      subtitle: "Conheça nossas áreas de atuação e sede",
      href: "/",
      icon: Globe,
      highlight: false,
    },
    {
      id: "aposentadorias",
      title: "Aposentadorias & Planejamento",
      subtitle: "Análise completa do CNIS e regras de transição",
      href: `https://wa.me/${OFFICE_INFO.whatsappNumber}?text=Ol%C3%A1!%20Gostaria%20de%20consultoria%20com%20a%20advogada%20sobre%20Aposentadorias%20e%20Planejamento.`,
      icon: Scale,
      highlight: false,
    },
    {
      id: "incapacidade",
      title: "Auxílio-Doença & BPC/LOAS",
      subtitle: "Reversão de altas indevidas e benefícios por incapacidade",
      href: `https://wa.me/${OFFICE_INFO.whatsappNumber}?text=Ol%C3%A1!%20Preciso%20de%20orienta%C3%A7%C3%A3o%20urgente%20sobre%20Aux%C3%ADlio-Doen%C3%A7a%20ou%20BPC/LOAS.`,
      icon: HeartHandshake,
      highlight: false,
    },
    {
      id: "instagram",
      title: "Instagram Oficial",
      subtitle: "@kellycarinaadv • Orientações didáticas sobre o INSS",
      href: OFFICE_INFO.instagramUrl,
      icon: InstagramIcon,
      highlight: false,
    },
    {
      id: "localizacao",
      title: "Localização da Sede",
      subtitle: "Rua das Carmelitas, 586 - Sl 04, Curitiba/PR",
      href: OFFICE_INFO.mapsDirectionsUrl,
      icon: MapPin,
      highlight: false,
    },
  ];

  const specialties = [
    "Aposentadorias",
    "Auxílio-Doença",
    "BPC / LOAS",
    "Pensão por Morte",
    "Auxílio-Acidente",
    "Planejamento INSS",
  ];

  return (
    <main className="min-h-[100dvh] lg:h-screen lg:max-h-screen lg:overflow-hidden w-screen max-w-full bg-[#FFFFFF] text-[#0A0C10]">
      {/* ===================== VERSÃO DESKTOP (Split Screen 50/50 - Sem Scroll - Padrão C26/C27) ===================== */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full w-full overflow-hidden">
        
        {/* LADO ESQUERDO: Fundo Escuro com Logo DOBRADA e Identidade Visual */}
        <div className="relative bg-[#0A0C10] text-white flex flex-col justify-between p-8 xl:p-12 h-full overflow-hidden border-r border-[#C9A84C]/25">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-links-desktop" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
                  <circle cx="0" cy="0" r="1.5" fill="#C9A84C" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-links-desktop)" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A84C]/30 bg-[#14171E]/80 backdrop-blur-md text-xs font-heading tracking-wider text-[#F6F4EE]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Direito Previdenciário • OAB/PR 76.720</span>
            </div>
            <span className="text-[0.6875rem] font-heading uppercase tracking-widest text-[#C9A84C]">
              Curitiba • Paraná
            </span>
          </div>

          {/* Logo Dobrada no Lado Esquerdo */}
          <div className="relative z-10 my-auto py-2 flex flex-col items-center text-center w-full">
            <Link
              href="/"
              className="w-full max-w-[560px] xl:max-w-[650px] block mx-auto cursor-pointer group focus:outline-none mb-4"
              aria-label={`Ir para a página inicial da ${OFFICE_INFO.name}`}
            >
              <div className="relative w-full h-60 xl:h-72 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo_sem_fundo_usarnomodoescuro.png"
                  alt={OFFICE_INFO.name}
                  fill
                  priority
                  className="object-contain object-center drop-shadow-md"
                  sizes="(min-width: 1280px) 650px, 560px"
                />
              </div>
            </Link>

            <div className="h-0.5 w-16 bg-[#C9A84C]/50 mb-4" />

            <h1 className="font-heading text-xl xl:text-2xl font-semibold max-w-md leading-snug text-white">
              {OFFICE_INFO.tagline}
            </h1>

            <p className="font-body text-xs xl:text-sm text-gray-300 max-w-sm mt-3 leading-relaxed">
              Defendendo seus direitos, cuidando do seu futuro com excelência e acolhimento humano.
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs text-gray-400 font-body pt-3 border-t border-white/10">
            <p>{OFFICE_INFO.addressShort}</p>
            <p className="text-[0.6875rem] text-[#C9A84C]">Provimento 205/2021 CFOAB</p>
          </div>
        </div>

        {/* LADO DIREITO: Fundo Claro com Logo + Canais de Atendimento */}
        <div className="bg-[#FFFFFF] flex flex-col justify-between p-6 xl:p-8 h-full overflow-y-auto">
          <div className="max-w-md mx-auto w-full flex flex-col justify-center my-auto space-y-3 xl:space-y-3.5 py-4">
            
            {/* Header com Logo no Lado Direito */}
            <div className="flex flex-col items-center text-center w-full">
              <Link
                href="/"
                className="w-full max-w-[440px] xl:max-w-[500px] block mx-auto cursor-pointer group focus:outline-none mb-2"
                aria-label={`Ir para a página inicial da ${OFFICE_INFO.name}`}
              >
                <div className="relative w-full h-36 xl:h-44 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/logo_sem_fundo_usarnomodoclaro.png"
                    alt={OFFICE_INFO.name}
                    fill
                    priority
                    className="object-contain object-center drop-shadow-xs"
                    sizes="(min-width: 1280px) 500px, 440px"
                  />
                </div>
              </Link>
              <span className="font-heading uppercase text-[0.6875rem] tracking-widest text-[#C9A84C] block mb-0.5 font-bold">
                Acesso Imediato
              </span>
              <h2 className="font-heading text-2xl xl:text-3xl font-bold text-[#0A0C10]">
                Canais de Atendimento
              </h2>
              <p className="font-body text-xs text-gray-500 mt-0.5">
                Escolha o canal desejado para se comunicar diretamente com o escritório.
              </p>
            </div>

            {/* Lista de Links */}
            <div className="space-y-2">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                const isInternal = item.href.startsWith("/");
                const buttonClasses = `w-full p-3 xl:p-3.5 rounded-xl flex items-center justify-between group transition-all duration-300 border ${
                  item.highlight
                    ? "bg-[#0A0C10] text-[#F6F4EE] border-2 border-[#C9A84C] hover:bg-[#1C202A] shadow-sm hover:shadow-md"
                    : "bg-[#FFFFFF] text-[#0A0C10] border-[#0A0C10]/15 hover:border-[#C9A84C] shadow-2xs hover:shadow-xs"
                }`;

                const content = (
                  <>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          item.highlight ? "bg-[#C9A84C] text-[#0A0C10]" : "bg-[#F6F4EE] text-[#0A0C10]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="font-heading text-sm font-bold block leading-snug">
                          {item.title}
                        </span>
                        <span
                          className={`font-body text-[0.6875rem] block ${
                            item.highlight ? "text-gray-200" : "text-[#555552]"
                          }`}
                        >
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        item.highlight ? "text-[#C9A84C]" : "text-[#555552] group-hover:text-[#C9A84C]"
                      }`}
                    />
                  </>
                );

                return isInternal ? (
                  <Link key={item.id} href={item.href} className={buttonClasses}>
                    {content}
                  </Link>
                ) : (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses}
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            {/* Caixa de Especialidades */}
            <div className="p-3.5 rounded-xl border border-[#C9A84C]/40 bg-[#F6F4EE]">
              <div className="flex items-center gap-1.5 text-[0.6875rem] uppercase tracking-wider font-heading text-[#0A0C10] font-bold mb-1.5">
                <Scale className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>Especialidades Previdenciárias</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded-md text-[0.6875rem] font-body bg-white text-[#0A0C10] border border-[#0A0C10]/15 font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <div className="text-center text-[0.6875rem] font-body text-gray-500 pt-2 border-t border-gray-200">
            {OFFICE_INFO.address} • © {new Date().getFullYear()} {OFFICE_INFO.name}
          </div>
        </div>
      </div>

      {/* ===================== VERSÃO MOBILE (100% Fit Sem Scroll + Logo Centralizada) ===================== */}
      <div className="lg:hidden relative flex flex-col justify-between h-[100dvh] max-h-[100dvh] w-full px-4 py-3 sm:py-4 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F6F4EE] to-[#ECE9DF]">
        {/* Linhas Geométricas Sutis de Fundo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="goldGeomGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#0A0C10" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            <line x1="-15%" y1="12%" x2="115%" y2="38%" stroke="url(#goldGeomGrad1)" strokeWidth="0.75" />
            <line x1="-15%" y1="78%" x2="115%" y2="58%" stroke="url(#goldGeomGrad1)" strokeWidth="0.75" />
            <line x1="18%" y1="-10%" x2="82%" y2="110%" stroke="url(#goldGeomGrad1)" strokeWidth="0.5" strokeDasharray="5 5" />
            <circle cx="88%" cy="16%" r="80" fill="none" stroke="#C9A84C" strokeWidth="0.75" strokeOpacity="0.25" />
            <circle cx="12%" cy="84%" r="90" fill="none" stroke="#C9A84C" strokeWidth="0.75" strokeOpacity="0.25" />
          </svg>
        </div>

        {/* Topo Mobile - Logo Centralizada + Especialidades */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center pt-2 pb-1">
          <Link
            href="/"
            className="w-[92vw] max-w-[360px] block mx-auto cursor-pointer group focus:outline-none mb-1.5"
            aria-label={`Ir para a página inicial da ${OFFICE_INFO.name}`}
          >
            <div className="relative w-full h-32 sm:h-36 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo_sem_fundo_usarnomodoclaro.png"
                alt={OFFICE_INFO.name}
                fill
                priority
                className="object-contain object-center drop-shadow-xs"
                sizes="(max-width: 768px) 360px, 300px"
              />
            </div>
          </Link>

          {/* Áreas de Atuação em pílulas compactas */}
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 max-w-sm mx-auto px-1">
            {specialties.slice(0, 3).map((spec, i) => (
              <span
                key={i}
                className="text-[0.625rem] px-2 py-0.5 rounded-full bg-[#ECE9DF] text-[#0A0C10] font-body border border-[#C9A84C]/40 font-semibold shadow-2xs"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Links Mobile */}
        <div className="relative z-10 w-full flex-1 flex flex-col justify-between py-2 max-w-md mx-auto">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center justify-between px-3.5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border transition-all duration-200 active:scale-[0.98] ${
                  item.highlight
                    ? "bg-[#0A0C10] text-white border-2 border-[#C9A84C] shadow-[0_4px_14px_rgba(10,12,16,0.25)]"
                    : "bg-white/95 backdrop-blur-xs hover:bg-white border-[#0A0C10]/12 text-[#0A0C10] shadow-2xs"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      item.highlight ? "bg-[#C9A84C] text-[#0A0C10]" : "bg-[#F6F4EE] border border-[#0A0C10]/10 text-[#0A0C10]"
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-heading font-bold text-xs sm:text-sm leading-tight truncate">{item.title}</h2>
                    <p
                      className={`text-[0.6875rem] font-body truncate mt-0.5 ${
                        item.highlight ? "text-gray-200" : "text-[#555552]"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-current flex-shrink-0 ml-2" />
              </a>
            );
          })}
        </div>

        {/* Rodapé Mobile Compacto */}
        <div className="relative z-10 text-center text-[0.625rem] sm:text-[0.6875rem] text-[#555552] font-body pt-1 pb-1">
          <p>{OFFICE_INFO.addressShort} • © {new Date().getFullYear()} {OFFICE_INFO.name}</p>
        </div>
      </div>
    </main>
  );
}
