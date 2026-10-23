/**
 * A "trilha": linha verde que desce pela página ligando as seções.
 *
 * Cada seção desenha o seu trecho na coluna da esquerda:
 *  1. um traço reto até a altura do título,
 *  2. um ponto (a "parada"),
 *  3. uma curva até o fim da seção, que continua na seção seguinte.
 *
 * Todo trecho começa e termina no centro da coluna, então as seções se encaixam.
 * O SVG estica com a altura da seção (preserveAspectRatio="none") e o traço
 * mantém a espessura (vector-effect). A animação é só CSS (globals.css).
 */

const curvas = {
  a: "M50 0 C50 140 86 200 86 340 S14 580 14 720 S50 880 50 1000",
  b: "M50 0 C50 160 14 230 14 390 S86 640 86 780 S50 900 50 1000",
  c: "M50 0 C50 220 80 330 80 500 S50 800 50 1000",
  reta: "M50 0 L50 1000",
} as const;

export type Curva = keyof typeof curvas;

function Traco({ d }: { d: string }) {
  return (
    <span className="relative block w-full flex-1">
      <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="absolute inset-0 size-full overflow-visible">
        <path d={d} fill="none" stroke="var(--color-linha)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
      <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="trilha-acesa absolute inset-0 size-full overflow-visible">
        <path d={d} fill="none" stroke="var(--color-brilho)" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function Reta({ className = "" }: { className?: string }) {
  return (
    <span className={`relative block w-0.5 ${className}`}>
      <span className="absolute inset-0 bg-linha" />
      <span className="trilha-acesa absolute inset-0 bg-brilho" />
    </span>
  );
}

export function No() {
  return <span className="no-trilha relative z-10 block size-3 flex-none rounded-full border-2 border-brilho bg-grafite" />;
}

type Props = {
  curva?: Curva;
  /** Sem ponto de parada (ex.: no topo da página). */
  semNo?: boolean;
  className?: string;
};

export function Trilha({ curva = "a", semNo = false, className = "" }: Props) {
  return (
    <div aria-hidden className={`pointer-events-none flex flex-col items-center ${className}`}>
      {!semNo && (
        <>
          {/* Até o meio da primeira linha do título da seção */}
          <Reta className="h-[calc(var(--pad-secao)_+_var(--meio-titulo)_-_0.375rem)] flex-none" />
          <No />
        </>
      )}
      <Traco d={curvas[curva]} />
    </div>
  );
}

/** Último trecho: desce e faz a curva para dentro do botão final. */
export function TrilhaFinal() {
  return (
    <div aria-hidden className="pointer-events-none flex flex-col items-center pb-7">
      <Reta className="h-[calc(var(--pad-secao)_+_var(--meio-titulo)_-_0.375rem)] flex-none" />
      <No />
      <Reta className="flex-1" />
      {/* Cotovelo: sai do centro da coluna e vira para a direita, na altura do botão */}
      <span className="relative block h-5 w-full flex-none">
        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="absolute inset-0 size-full overflow-visible">
          <path d="M50 0 Q50 20 100 20" fill="none" stroke="var(--color-brilho)" strokeWidth="2" vectorEffect="non-scaling-stroke" className="trilha-acesa" />
        </svg>
      </span>
    </div>
  );
}
