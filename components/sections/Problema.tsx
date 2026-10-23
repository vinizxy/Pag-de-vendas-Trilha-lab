import { Secao } from "@/components/Secao";
import { problema } from "@/content/site";

export function Problema() {
  return (
    <Secao id="problema" titulo={problema.titulo} curva="a">
      <ol className="mt-10 border-t border-linha lg:mt-14">
        {problema.sinais.map((sinal, i) => (
          <li key={sinal.fala} className="grid gap-3 border-b border-linha py-7 lg:grid-cols-[3rem_minmax(0,5fr)_minmax(0,6fr)] lg:gap-8 lg:py-10">
            <span aria-hidden className="font-mono text-sm text-cinza lg:pt-2">
              {i + 1}/{problema.sinais.length}
            </span>
            <p className="text-2xl leading-tight font-medium tracking-[-0.02em] lg:text-[1.75rem]">{sinal.fala}</p>
            <p className="max-w-[60ch] leading-relaxed text-cinza lg:pt-1 lg:text-lg">{sinal.texto}</p>
          </li>
        ))}
      </ol>
    </Secao>
  );
}
