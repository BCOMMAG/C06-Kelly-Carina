import { OFFICE_INFO } from "./data";

export function getLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: OFFICE_INFO.name,
    alternateName: OFFICE_INFO.shortName,
    description: OFFICE_INFO.tagline,
    url: "https://kellycarina.adv.br",
    logo: "https://kellycarina.adv.br/logo_sem_fundo_usarnomodoclaro.png",
    image: "https://kellycarina.adv.br/og-image_1_optimized_300.jpg",
    telephone: OFFICE_INFO.phoneRaw,
    email: "contato@kellycarina.adv.br",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICE_INFO.address,
      addressLocality: OFFICE_INFO.city,
      addressRegion: OFFICE_INFO.state,
      postalCode: OFFICE_INFO.zip,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.5034,
      longitude: -49.2486,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Curitiba",
      },
      {
        "@type": "AdministrativeArea",
        name: "Paraná",
      },
      {
        "@type": "Country",
        name: "Brasil",
      },
    ],
    sameAs: [
      OFFICE_INFO.instagramUrl,
      OFFICE_INFO.facebookUrl,
    ],
  };
}
