"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO, PRACTICE_AREAS } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/context/ThemeContext";
import { Menu, X, ChevronDown, ArrowUpRight, ShieldCheck, Scale, Award } from "lucide-react";
import { WhatsAppIcon } from "./SocialIcons";

export function Navbar() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [officeDropdownOpen, setOfficeDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const [mobileOfficeOpen, setMobileOfficeOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  const officeRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar dropdowns ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (officeRef.current && !officeRef.current.contains(event.target as Node)) {
        setOfficeDropdownOpen(false);
      }
      if (areasRef.current && !areasRef.current.contains(event.target as Node)) {
        setAreasDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Travar o scroll quando o menu mobile estiver aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Escolhe a logo de acordo com o estado de scroll e tema
  const currentLogo = !isScrolled
    ? "/logo_sem_fundo_usarnomodoescuro.png"
    : theme === "dark"
    ? "/logo_sem_fundo_usarnomodoescuro.png"
    : "/logo_sem_fundo_usarnomodoclaro.png";

  const drawerLogo =
    theme === "dark"
      ? "/logo_sem_fundo_usarnomodoescuro.png"
      : "/logo_sem_fundo_usarnomodoclaro.png";

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileOfficeOpen(false);
    setMobileAreasOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. LOGO MOBILE FIXA SEPARADA — DESCONECTADA DA ALTURA DO MENU E ELEVADA */}
      <div className="lg:hidden fixed top-0 sm:top-0.5 left-2 sm:left-3 z-[45] pointer-events-none">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center group focus:outline-none pointer-events-auto"
          aria-label={`Ir para a página inicial da ${OFFICE_INFO.name}`}
        >
          <div className="relative h-14 sm:h-15 w-28 sm:w-32 max-w-[32vw] transition-transform duration-300 group-hover:scale-105">
            <Image
              src={currentLogo}
              alt={OFFICE_INFO.name}
              fill
              priority
              className="object-contain object-left drop-shadow-md"
              sizes="(max-width: 640px) 120px, 135px"
            />
          </div>
        </Link>
      </div>

      {/* 2. BARRA DE NAVEGAÇÃO PRINCIPAL */}
      <header
        className={`fixed top-0 left-0 right-0 w-full max-w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg-primary)]/95 backdrop-blur-md shadow-sm border-b border-[var(--border-subtle)]/30 py-2 sm:py-2.5"
            : "bg-transparent py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
          <div className="relative min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Espaçador Mobile para proteger a área da logo sem afetar a altura dos botões */}
            <div className="lg:hidden w-28 sm:w-32 max-w-[32vw] h-6 flex-shrink-0 pointer-events-none" />

            {/* Logo Desktop: Totalmente Desacoplada da altura da barra do menu */}
            <div className="hidden lg:flex items-center justify-start relative flex-shrink-0 w-52 xl:w-60 h-10 pointer-events-none">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 mt-1 xl:mt-1.5 pointer-events-auto">
                <Link
                  href="/"
                  onClick={handleLogoClick}
                  className="flex items-center group focus:outline-none"
                  aria-label={`Ir para a página inicial da ${OFFICE_INFO.name}`}
                >
                  <div className="relative h-16 xl:h-20 w-52 xl:w-60 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={currentLogo}
                      alt={OFFICE_INFO.name}
                      fill
                      priority
                      className="object-contain object-left drop-shadow-sm"
                      sizes="(min-width: 1280px) 300px, 250px"
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* Menu Desktop */}
            <nav
              className={`hidden lg:flex items-center gap-6 xl:gap-8 text-[0.875rem] font-heading uppercase tracking-wider transition-colors duration-300 ${
                !isScrolled ? "text-white/95" : "text-[var(--text-main)]"
              }`}
            >
              <Link href="#inicio" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                Início
              </Link>

              {/* Submenu 1: O Escritório */}
              <div
                ref={officeRef}
                className="relative"
                onMouseEnter={() => setOfficeDropdownOpen(true)}
                onMouseLeave={() => setOfficeDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setOfficeDropdownOpen(!officeDropdownOpen)}
                  className="inline-flex items-center gap-1.5 transition-colors py-2 focus:outline-none cursor-pointer hover:text-[var(--accent)] font-semibold"
                  aria-expanded={officeDropdownOpen}
                >
                  <span className="editorial-link">O Escritório</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      officeDropdownOpen ? "rotate-180 text-[var(--accent)]" : "opacity-70"
                    }`}
                  />
                </button>

                {officeDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 p-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl animate-fade-in-down z-50 text-[var(--text-main)]">
                    <Link
                      href="#sobre"
                      onClick={() => setOfficeDropdownOpen(false)}
                      className="p-3 rounded-xl hover:bg-[var(--bg-secondary)]/80 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <span className="font-heading font-bold text-sm block group-hover:text-[var(--accent)]">
                          A Advogada Titular
                        </span>
                        <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">
                          Dra. Kelly Carina da Silva • OAB/PR 76.720
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                    <Link
                      href="#pilares"
                      onClick={() => setOfficeDropdownOpen(false)}
                      className="p-3 rounded-xl hover:bg-[var(--bg-secondary)]/80 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <span className="font-heading font-bold text-sm block group-hover:text-[var(--accent)]">
                          Pilares Institucionais
                        </span>
                        <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">
                          +10 Anos de Prática • Sede em Curitiba
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                    <Link
                      href="#como-atuamos"
                      onClick={() => setOfficeDropdownOpen(false)}
                      className="p-3 rounded-xl hover:bg-[var(--bg-secondary)]/80 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <span className="font-heading font-bold text-sm block group-hover:text-[var(--accent)]">
                          Como Atuamos
                        </span>
                        <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">
                          4 etapas seguras do seu processo
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Submenu 2: Especialidades */}
              <div
                ref={areasRef}
                className="relative"
                onMouseEnter={() => setAreasDropdownOpen(true)}
                onMouseLeave={() => setAreasDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setAreasDropdownOpen(!areasDropdownOpen)}
                  className="inline-flex items-center gap-1.5 transition-colors py-2 focus:outline-none cursor-pointer hover:text-[var(--accent)] font-semibold"
                  aria-expanded={areasDropdownOpen}
                >
                  <span className="editorial-link">Especialidades</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      areasDropdownOpen ? "rotate-180 text-[var(--accent)]" : "opacity-70"
                    }`}
                  />
                </button>

                {areasDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 p-2.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl animate-fade-in-down z-50 text-[var(--text-main)]">
                    <div className="px-3 py-1.5 mb-1 border-b border-[var(--border-subtle)]/30">
                      <span className="text-[0.6875rem] font-heading uppercase tracking-wider text-[var(--accent)] font-bold">
                        Direito Previdenciário Especializado
                      </span>
                    </div>

                    <div className="max-h-72 overflow-y-auto space-y-1 pr-1">
                      {PRACTICE_AREAS.slice(0, 6).map((area) => (
                        <Link
                          key={area.id}
                          href={`#${area.id}`}
                          onClick={() => setAreasDropdownOpen(false)}
                          className="p-2.5 rounded-xl hover:bg-[var(--bg-secondary)]/80 flex items-center justify-between group transition-colors"
                        >
                          <div className="min-w-0 pr-2">
                            <span className="font-heading font-bold text-xs block group-hover:text-[var(--accent)] truncate">
                              {area.title}
                            </span>
                            <span className="text-[0.6875rem] text-[var(--text-muted)] font-body line-clamp-1">
                              {area.shortDesc}
                            </span>
                          </div>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] flex-shrink-0" />
                        </Link>
                      ))}
                    </div>

                    <div className="pt-2 mt-1 border-t border-[var(--border-subtle)]/30 text-center">
                      <Link
                        href="#atuacao"
                        onClick={() => setAreasDropdownOpen(false)}
                        className="text-xs font-heading font-bold text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Ver todas as 8 especialidades</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="#educativo" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                Artigos Didáticos
              </Link>

              <Link href="#avaliacoes" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                Depoimentos
              </Link>

              <Link href="#faq" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                FAQ
              </Link>

              <Link href="/blog" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                Blog
              </Link>

              <Link href="#contato" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                Contato
              </Link>
            </nav>

            {/* Ações da Direita: Theme Toggle + CTA WhatsApp + Menu Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3.5 relative z-10 flex-shrink-0">
              <ThemeToggle />

              {/* Botão de WhatsApp Desktop / Tablet */}
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex btn-pill bg-[#25D366] hover:bg-[#20ba59] text-white py-2 px-4 sm:px-5 text-xs sm:text-sm shadow-[0_2px_14px_rgba(37,211,102,0.35)] hover-lift transition-all gap-2 cursor-pointer font-bold"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp</span>
              </a>

              {/* Botão Hamburger Mobile */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={mobileMenuOpen}
                className="lg:hidden p-2 rounded-xl border border-[var(--border-subtle)]/40 bg-[var(--bg-card)]/80 text-[var(--text-main)] hover:border-[var(--accent)] transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[var(--accent)]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. MENU MOBILE DRAWER (Z-[60] À PROVA DE CONFLITOS DE CAMADAS) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden animate-fade-in">
          {/* Backdrop semitransparente */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
            onClick={closeMobileMenu}
          />

          {/* Gaveta Lateral */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[var(--bg-primary)] border-l border-[var(--border-subtle)]/40 p-5 sm:p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Topo do Drawer com Logo e Fechar */}
              <div className="flex items-center justify-between pb-5 border-b border-[var(--border-subtle)]/30 mb-6">
                <Link
                  href="/"
                  onClick={(e) => {
                    closeMobileMenu();
                    handleLogoClick(e);
                  }}
                  className="flex items-center"
                >
                  <div className="relative h-12 w-28">
                    <Image
                      src={drawerLogo}
                      alt={OFFICE_INFO.name}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={closeMobileMenu}
                  aria-label="Fechar menu de navegação"
                  className="p-2 rounded-full border border-[var(--border-subtle)]/40 text-[var(--text-main)] hover:text-[var(--accent)]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links de Navegação Mobile */}
              <div className="space-y-2">
                <Link
                  href="#inicio"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 rounded-xl font-heading text-base font-bold text-[var(--text-main)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  Início
                </Link>

                {/* Dropdown Mobile: O Escritório */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileOfficeOpen(!mobileOfficeOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-heading text-base font-bold text-[var(--text-main)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    <span>O Escritório</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileOfficeOpen ? "rotate-180 text-[var(--accent)]" : ""
                      }`}
                    />
                  </button>

                  {mobileOfficeOpen && (
                    <div className="pl-6 pr-2 py-1 space-y-1 bg-[var(--bg-secondary)]/40 rounded-xl my-1">
                      <Link
                        href="#sobre"
                        onClick={closeMobileMenu}
                        className="block py-2 text-sm font-body text-[var(--text-muted)] hover:text-[var(--accent)]"
                      >
                        A Advogada Titular (Dra. Kelly Carina)
                      </Link>
                      <Link
                        href="#pilares"
                        onClick={closeMobileMenu}
                        className="block py-2 text-sm font-body text-[var(--text-muted)] hover:text-[var(--accent)]"
                      >
                        Pilares Institucionais (+10 Anos)
                      </Link>
                      <Link
                        href="#como-atuamos"
                        onClick={closeMobileMenu}
                        className="block py-2 text-sm font-body text-[var(--text-muted)] hover:text-[var(--accent)]"
                      >
                        Como Atuamos (4 Etapas)
                      </Link>
                    </div>
                  )}
                </div>

                {/* Dropdown Mobile: Especialidades */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-heading text-base font-bold text-[var(--text-main)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    <span>Especialidades Previdenciárias</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileAreasOpen ? "rotate-180 text-[var(--accent)]" : ""
                      }`}
                    />
                  </button>

                  {mobileAreasOpen && (
                    <div className="pl-6 pr-2 py-1 space-y-1 bg-[var(--bg-secondary)]/40 rounded-xl my-1 max-h-56 overflow-y-auto">
                      {PRACTICE_AREAS.map((area) => (
                        <Link
                          key={area.id}
                          href={`#${area.id}`}
                          onClick={closeMobileMenu}
                          className="block py-2 text-xs font-body text-[var(--text-muted)] hover:text-[var(--accent)]"
                        >
                          {area.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="#educativo"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 rounded-xl font-heading text-base font-bold text-[var(--text-main)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  Artigos Didáticos
                </Link>

                <Link
                  href="#avaliacoes"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 rounded-xl font-heading text-base font-bold text-[var(--text-main)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  Depoimentos de Clientes
                </Link>

                <Link
                  href="#faq"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 rounded-xl font-heading text-base font-bold text-[var(--text-main)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  Perguntas Frequentes
                </Link>

                <Link
                  href="/blog"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 rounded-xl font-heading text-base font-bold text-[var(--text-main)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  Blog Jurídico
                </Link>

                <Link
                  href="#contato"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 rounded-xl font-heading text-base font-bold text-[var(--text-main)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  Canais de Atendimento
                </Link>

                <Link
                  href="/links"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 rounded-xl font-heading text-base font-bold text-[var(--accent)] hover:bg-[var(--bg-secondary)] transition-colors"
                >
                  Central de Links (Bio)
                </Link>
              </div>
            </div>

            {/* Rodapé do Drawer Mobile */}
            <div className="pt-6 border-t border-[var(--border-subtle)]/30 space-y-4">
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-pill bg-[#25D366] hover:bg-[#20ba59] text-white py-3 gap-2 shadow-[0_4px_16px_rgba(37,211,102,0.35)] text-sm cursor-pointer flex items-center justify-center font-bold"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Iniciar Conversa no WhatsApp</span>
              </a>

              <div className="text-center text-[0.6875rem] text-[var(--text-muted)] font-body">
                <span>{OFFICE_INFO.name} • {OFFICE_INFO.oab}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
