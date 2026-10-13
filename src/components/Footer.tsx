"use client";

import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { ShieldCheck } from "lucide-react";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0A0C10] text-[#F6F4EE] border-t border-[#C9A84C]/25 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Topo do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Coluna 1: Logo e Apresentação (5 colunas) */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="/"
              onClick={(e) => {
                if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
                  e.preventDefault();
                  scrollToTop();
                }
              }}
              className="block focus:outline-none group cursor-pointer"
              aria-label="Voltar ao início da página"
            >
              <div className="relative h-20 sm:h-24 w-72 sm:w-80 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo_sem_fundo_usarnomodoescuro.png"
                  alt={OFFICE_INFO.name}
                  fill
                  className="object-contain object-left"
                  sizes="320px"
                />
              </div>
            </Link>
            
            <p className="font-body text-xs sm:text-sm text-gray-300 max-w-sm leading-relaxed">
              Atuação especializada em Direito Previdenciário: aposentadorias, auxílio-doença, BPC/LOAS, pensão por morte e planejamento previdenciário no INSS e na Justiça Federal.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C9A84C]/30 bg-[#14171E] text-xs font-heading text-[#F6F4EE]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>{OFFICE_INFO.name} • {OFFICE_INFO.oab}</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#C9A84C] font-bold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-heading text-gray-300">
              <li>
                <Link href="#inicio" className="hover:text-[#C9A84C] transition-colors">Início</Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-[#C9A84C] transition-colors">A Advogada</Link>
              </li>
              <li>
                <Link href="#pilares" className="hover:text-[#C9A84C] transition-colors">Pilares Institucionais</Link>
              </li>
              <li>
                <Link href="#atuacao" className="hover:text-[#C9A84C] transition-colors">Especialidades</Link>
              </li>
              <li>
                <Link href="#educativo" className="hover:text-[#C9A84C] transition-colors">Artigos Didáticos</Link>
              </li>
              <li>
                <Link href="#avaliacoes" className="hover:text-[#C9A84C] transition-colors">Avaliações no Google</Link>
              </li>
              <li>
                <Link href="#como-atuamos" className="hover:text-[#C9A84C] transition-colors">Como Atuamos</Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#C9A84C] transition-colors">Dúvidas Frequentes</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#C9A84C] transition-colors">Blog Jurídico</Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-[#C9A84C] transition-colors">Contato &amp; Localização</Link>
              </li>
              <li>
                <Link href="/links" className="text-[#C9A84C] hover:text-white hover:underline font-semibold">Central de Links (/links)</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos e Redes (4 colunas) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#C9A84C] font-bold">
              Canais Oficiais
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm font-body text-gray-300">
              <p><strong className="text-white font-heading">Sede:</strong> {OFFICE_INFO.address}</p>
              <p><strong className="text-white font-heading">WhatsApp:</strong> {OFFICE_INFO.phone}</p>
              <p><strong className="text-white font-heading">Expediente:</strong> {OFFICE_INFO.schedule.weekdays}</p>
              <p><strong className="text-white font-heading">Atendimento:</strong> Presencial &amp; Digital em Todo o Brasil</p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={OFFICE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram de ${OFFICE_INFO.name}`}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#1C202A] hover:border hover:border-[#C9A84C]/40 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={OFFICE_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Facebook de ${OFFICE_INFO.name}`}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#1C202A] hover:border hover:border-[#C9A84C]/40 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp de ${OFFICE_INFO.name}`}
                className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#20ba59] flex items-center justify-center text-white transition-colors cursor-pointer shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Rodapé Ético OAB + Direitos Autorais */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p className="font-body text-center md:text-left">
            © {new Date().getFullYear()} {OFFICE_INFO.name}. Todos os direitos reservados.
          </p>
          <p className="font-body text-center md:text-right text-[0.6875rem] text-gray-500">
            Conformidade com o Provimento nº 205/2021 do Conselho Federal da OAB e Código de Ética e Disciplina.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
