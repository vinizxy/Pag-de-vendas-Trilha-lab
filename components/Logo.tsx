import Image from "next/image";
import { site } from "@/content/site";

/**
 * Logo oficial (SVG em public/logo/). Enquanto os SVGs não chegam,
 * usa a imagem temporária; o fundo escuro dela some com mix-blend "lighten".
 */
export function Logo({ className = "", prioridade = false }: { className?: string; prioridade?: boolean }) {
  const { logo } = site;
  return (
    <Image
      src={site.logoTemporaria ? logo.temporaria : logo.clara}
      alt={site.nome}
      width={logo.largura}
      height={logo.altura}
      priority={prioridade}
      unoptimized={!site.logoTemporaria}
      className={`h-auto ${site.logoTemporaria ? "mix-blend-lighten" : ""} ${className}`}
    />
  );
}
