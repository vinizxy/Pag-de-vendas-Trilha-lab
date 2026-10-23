import { Secao } from "@/components/Secao";
import { maisServicos } from "@/content/site";

export function MaisServicos() {
  return (
    <Secao id="mais" titulo={maisServicos.titulo} subtitulo={maisServicos.subtitulo} curva="a">
      <ul className="mt-10 border-t border-linha lg:mt-14">
        {maisServicos.itens.map((item) => (
          <li key={item.nome} className="grid gap-3 border-b border-linha py-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,4fr)_minmax(0,4fr)] lg:gap-8 lg:py-8">
            <h3 className="text-xl font-semibold tracking-[-0.01em]">{item.nome}</h3>
            <p className="leading-relaxed text-cinza">
              <span className="mb-1 block font-mono text-xs tracking-wide text-cinza uppercase">Problema</span>
              {item.problema}
            </p>
            <p className="leading-relaxed">
              <span className="mb-1 block font-mono text-xs tracking-wide text-trilha uppercase">Resultado</span>
              {item.resultado}
            </p>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
