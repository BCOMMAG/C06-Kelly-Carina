"use client";

interface GeometricLinesProps {
  variant:
    | "pillars"
    | "about"
    | "areas"
    | "reviews"
    | "methodology"
    | "educational"
    | "faq"
    | "contact";
  className?: string;
}

export function GeometricLines({ variant, className = "" }: GeometricLinesProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden z-0 select-none transition-colors duration-500 ${className}`}
    >
      {/* 1. PILARES: Malha geométrica arquitetônica sutil */}
      {variant === "pillars" && (
        <div className="absolute inset-0 text-[#121212]/[0.055] dark:text-[#C9A84C]/[0.07] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_95%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="pillarsGridPattern"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 0 L 0 0 0 80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                <circle cx="0" cy="0" r="1.5" className="fill-[#121212]/[0.12] dark:fill-[#C9A84C]/[0.25]" />
                <path
                  d="M 38 40 L 42 40 M 40 38 L 40 42"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pillarsGridPattern)" />
            <line x1="0" y1="0" x2="35%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="6 6" />
            <line x1="100%" y1="0" x2="65%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="6 6" />
          </svg>
        </div>
      )}

      {/* 2. SOBRE O ADVOGADO: Vetores lineares elegantes */}
      {variant === "about" && (
        <div className="absolute inset-0 text-[#121212]/[0.05] dark:text-[#C9A84C]/[0.065] [mask-image:radial-gradient(circle_at_60%_40%,black_45%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <line x1="-10%" y1="20%" x2="110%" y2="70%" stroke="currentColor" strokeWidth="0.5" />
            <line x1="-10%" y1="35%" x2="110%" y2="85%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 6" />
            <line x1="-10%" y1="5%" x2="110%" y2="55%" stroke="currentColor" strokeWidth="0.5" />
            <line x1="25%" y1="-10%" x2="95%" y2="110%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
            
            <polygon
              points="150,80 200,130 150,180 100,130"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="hidden md:block"
            />
            <polygon
              points="850,220 900,270 850,320 800,270"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="hidden lg:block"
            />
            <circle cx="850" cy="270" r="85" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="hidden lg:block" />
            <circle cx="850" cy="270" r="2" className="fill-[#121212]/[0.18] dark:fill-[#C9A84C]/[0.3]" />
          </svg>
        </div>
      )}

      {/* 3. ÁREAS DE ATUAÇÃO: Grid isométrico */}
      {variant === "areas" && (
        <div className="absolute inset-0 text-[#121212]/[0.045] dark:text-[#C9A84C]/[0.06] [mask-image:radial-gradient(ellipse_at_bottom,black_40%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="areasIsometricPattern"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 60 M 0 0 L 60 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#areasIsometricPattern)" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>
        </div>
      )}

      {/* 4. AVALIAÇÕES */}
      {variant === "reviews" && (
        <div className="absolute inset-0 text-[#121212]/[0.04] dark:text-[#C9A84C]/[0.06] [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <line x1="0" y1="25%" x2="100%" y2="25%" stroke="currentColor" strokeWidth="0.5" />
            <line x1="0" y1="75%" x2="100%" y2="75%" stroke="currentColor" strokeWidth="0.5" />
            <line x1="15%" y1="0" x2="15%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="6 6" />
            <line x1="85%" y1="0" x2="85%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="6 6" />
            <circle cx="85%" cy="25%" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="15%" cy="75%" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          </svg>
        </div>
      )}

      {/* 5. METODOLOGIA / COMO ATUAMOS */}
      {variant === "methodology" && (
        <div className="absolute inset-0 text-[#121212]/[0.05] dark:text-[#C9A84C]/[0.065] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <line x1="-5%" y1="50%" x2="105%" y2="50%" stroke="currentColor" strokeWidth="0.5" />
            <line x1="-5%" y1="20%" x2="105%" y2="20%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 8" />
            <line x1="-5%" y1="80%" x2="105%" y2="80%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 8" />
            <line x1="25%" y1="0" x2="25%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 6" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 6" />
            <line x1="75%" y1="0" x2="75%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 6" />
            <rect x="24.5%" y="49%" width="1%" height="2%" fill="currentColor" />
            <rect x="49.5%" y="49%" width="1%" height="2%" fill="currentColor" />
            <rect x="74.5%" y="49%" width="1%" height="2%" fill="currentColor" />
          </svg>
        </div>
      )}

      {/* 6. CONTEÚDO EDUCATIVO */}
      {variant === "educational" && (
        <div className="absolute inset-0 text-[#121212]/[0.045] dark:text-[#C9A84C]/[0.06] [mask-image:radial-gradient(circle_at_30%_30%,black_40%,transparent_85%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="eduPattern"
                width="70"
                height="70"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 70 0 L 0 0 0 70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#eduPattern)" />
            <line x1="0" y1="100%" x2="100%" y2="0" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
          </svg>
        </div>
      )}

      {/* 7. FAQ */}
      {variant === "faq" && (
        <div className="absolute inset-0 text-[#121212]/[0.045] dark:text-[#C9A84C]/[0.06] [mask-image:radial-gradient(ellipse_at_top,black_50%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <line x1="10%" y1="-10%" x2="90%" y2="110%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="7 7" />
            <line x1="90%" y1="-10%" x2="10%" y2="110%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="7 7" />
            <circle cx="50%" cy="50%" r="140" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50%" cy="50%" r="220" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
          </svg>
        </div>
      )}

      {/* 8. CONTATO */}
      {variant === "contact" && (
        <div className="absolute inset-0 text-[#121212]/[0.045] dark:text-[#C9A84C]/[0.06] [mask-image:radial-gradient(circle_at_70%_50%,black_45%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <line x1="0" y1="30%" x2="100%" y2="30%" stroke="currentColor" strokeWidth="0.5" />
            <line x1="0" y1="70%" x2="100%" y2="70%" stroke="currentColor" strokeWidth="0.5" />
            <line x1="41.66%" y1="0" x2="41.66%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="70%" cy="50%" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="70%" cy="50%" r="3" className="fill-[#121212]/[0.15] dark:fill-[#C9A84C]/[0.3]" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default GeometricLines;
