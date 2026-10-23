import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Demos } from "@/components/sections/Demos";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Faq } from "@/components/sections/Faq";
import { Garantias } from "@/components/sections/Garantias";
import { Hero } from "@/components/sections/Hero";
import { MaisServicos } from "@/components/sections/MaisServicos";
import { Niveis } from "@/components/sections/Niveis";
import { Problema } from "@/components/sections/Problema";
import { Rodape } from "@/components/sections/Rodape";
import { niveis, site } from "@/content/site";
import { urlSite } from "@/lib/config";
import { numeroWhatsApp } from "@/lib/whatsapp";

// Dados estruturados para o Google (Schema.org ProfessionalService)
const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.nome,
  description: site.descricao,
  slogan: site.frase,
  url: urlSite,
  image: `${urlSite}/opengraph-image`,
  email: site.email,
  ...(numeroWhatsApp ? { telephone: `+${numeroWhatsApp}` } : {}),
  areaServed: { "@type": "Country", name: "Brasil" },
  availableLanguage: "pt-BR",
  sameAs: [site.instagram],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sites e landing pages",
    itemListElement: niveis.lista.map((n) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: `${n.produto} (${n.nome})`, description: n.resumo },
    })),
  },
};

export default function Pagina() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <main id="conteudo">
        <Problema />
        <Niveis />
        <Demos />
        <Depoimentos />
        <ComoFunciona />
        <Garantias />
        <MaisServicos />
        <Faq />
        <CtaFinal />
      </main>
      <Rodape />
    </>
  );
}
