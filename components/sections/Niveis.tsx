import { BotaoWhatsApp } from "@/components/BotaoWhatsApp";
import { IconeCheck } from "@/components/Icones";
import { Secao } from "@/components/Secao";
import { niveis } from "@/content/site";
import { linkWhatsApp } from "@/lib/whatsapp";

export function Niveis() {
  return (
    <Secao id="niveis" titulo={niveis.titulo} subtitulo={niveis.subtitulo} curva="b">
      {/* Uma só moldura dividida em colunas: sem cartões dentro de cartões */}
      <div className="mt-10 grid overflow-hidden rounded-2xl border border-linha lg:mt-14 lg:grid-cols-3">
        {niveis.lista.map((nivel) => (
          <article
            key={nivel.id}
            aria-labelledby={`nivel-${nivel.id}`}
            className={`flex flex-col border-linha p-6 not-last:border-b sm:p-8 lg:not-last:border-r lg:not-last:border-b-0 ${
              nivel.destaque ? "bg-grafite-claro" : ""
            }`}
          >
            <p className="font-mono text-sm tracking-wide text-trilha uppercase">{nivel.nome}</p>
            <h3 id={`nivel-${nivel.id}`} className="mt-2 text-[1.75rem] leading-tight font-semibold tracking-[-0.02em]">
              {nivel.produto}
            </h3>
            <p className="mt-3 leading-relaxed text-cinza">{nivel.resumo}</p>

            <ul className="mt-6 space-y-3">
              {nivel.itens.map((item) => (
                <li key={item} className="flex gap-3 leading-snug">
                  <IconeCheck className="mt-0.5 size-5 flex-none text-trilha" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Empurra prazo e botão para a base, alinhando as três colunas */}
            <div className="mt-auto pt-8">
              <dl className="flex items-baseline justify-between gap-4 border-t border-dashed border-linha pt-5">
                <dt className="text-sm text-cinza">Prazo estimado</dt>
                <dd className="font-mono text-sm whitespace-nowrap tabular-nums sm:text-[0.9375rem]">{nivel.prazo}</dd>
              </dl>
            </div>

            <BotaoWhatsApp
              href={linkWhatsApp(`Tenho interesse no nível ${nivel.nome} (${nivel.produto}).`)}
              origem="nivel"
              nivel={nivel.id}
              variante="secundario"
              className="mt-5 w-full"
            >
              Quero o {nivel.nome}
            </BotaoWhatsApp>
          </article>
        ))}
      </div>
    </Secao>
  );
}
