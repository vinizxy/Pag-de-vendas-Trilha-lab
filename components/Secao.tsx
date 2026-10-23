import type { ReactNode } from "react";
import { Trilha, type Curva } from "@/components/Trilha";

type Props = {
  id?: string;
  titulo?: ReactNode;
  subtitulo?: ReactNode;
  curva?: Curva;
  className?: string;
  children: ReactNode;
};

/**
 * Moldura comum das seções: coluna da trilha à esquerda e conteúdo à direita.
 * O título usa as medidas de --meio-titulo para o ponto da trilha ficar alinhado.
 */
export function Secao({ id, titulo, subtitulo, curva, className = "", children }: Props) {
  const idTitulo = id ? `${id}-titulo` : undefined;
  return (
    <section id={id} aria-labelledby={idTitulo} className={`relative px-4 sm:px-6 lg:px-10 ${className}`}>
      <div className="mx-auto grid max-w-[80rem] grid-cols-[var(--trilho)_minmax(0,1fr)] gap-x-3 lg:gap-x-6">
        <Trilha curva={curva} />
        <div className="min-w-0 py-[var(--pad-secao)]">
          {titulo && (
            <h2 id={idTitulo} className="max-w-[22ch] text-[2rem] leading-[1.1] font-semibold tracking-[-0.03em] lg:text-5xl lg:leading-[1.05]">
              {titulo}
            </h2>
          )}
          {subtitulo && <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-cinza">{subtitulo}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
