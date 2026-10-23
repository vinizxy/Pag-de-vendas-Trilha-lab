import Image from "next/image";
import { Secao } from "@/components/Secao";
import { demos, type Demo } from "@/content/demos";

function Tela({ demo }: { demo: Demo }) {
  return (
    <div className="relative aspect-[9/17] overflow-hidden rounded-[1.75rem] border border-linha bg-grafite-fundo p-2 lg:max-w-[18rem]">
      <div className="relative size-full overflow-hidden rounded-[1.25rem] bg-grafite-claro">
        {demo.imagem ? (
          <Image
            src={demo.imagem.src}
            alt={demo.imagem.alt}
            width={demo.imagem.largura}
            height={demo.imagem.altura}
            sizes="(min-width: 1024px) 22rem, 72vw"
            className="size-full object-cover object-top"
          />
        ) : (
          // Espaço reservado até a imagem da demo chegar
          <div className="grade-fina grid size-full place-items-center p-6 text-center">
            <span className="font-mono text-xs leading-relaxed text-cinza">
              [PREENCHER]
              <br />
              imagem da demo
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export function Demos() {
  return (
    <Secao id="demos" titulo={demos.titulo} subtitulo={demos.subtitulo} curva="c">
      {/* No celular, carrossel com rolagem lateral; no computador, três colunas */}
      <ul className="-mr-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pr-4 pb-2 [scrollbar-width:none] sm:-mr-6 sm:pr-6 lg:mt-14 lg:mr-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pr-0">
        {demos.lista.map((demo, i) => {
          const conteudo = (
            <>
              <Tela demo={demo} />
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.01em]">{demo.nicho}</h3>
              <p className="mt-1.5 max-w-[34ch] leading-relaxed text-cinza">{demo.resolve}</p>
            </>
          );
          return (
            <li key={i} className="w-[72%] max-w-[20rem] flex-none snap-start lg:w-auto lg:max-w-none">
              {demo.link ? (
                <a href={demo.link} target="_blank" rel="noopener" className="group block">
                  {conteudo}
                </a>
              ) : (
                conteudo
              )}
            </li>
          );
        })}
      </ul>
    </Secao>
  );
}
