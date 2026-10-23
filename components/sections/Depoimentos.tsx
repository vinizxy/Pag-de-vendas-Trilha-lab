import Image from "next/image";
import { BotaoWhatsApp } from "@/components/BotaoWhatsApp";
import { Secao } from "@/components/Secao";
import { depoimentos } from "@/content/depoimentos";
import { whatsapp } from "@/content/site";
import { linkWhatsApp } from "@/lib/whatsapp";

function iniciais(nome: string) {
  return nome
    .replace(/\[.*?\]/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export function Depoimentos() {
  return (
    <Secao id="depoimentos" titulo={depoimentos.titulo} curva="a">
      <ul className="mt-10 grid gap-x-10 border-t border-linha lg:mt-14 lg:grid-cols-3">
        {depoimentos.lista.map((d, i) => (
          <li key={i} className="border-b border-linha py-8 lg:border-b-0 lg:py-10">
            <figure className="flex h-full flex-col">
              <blockquote className="text-lg leading-relaxed">
                <span aria-hidden className="mb-3 block font-mono text-2xl leading-none text-trilha">
                  “
                </span>
                {d.texto}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 lg:mt-auto lg:pt-6">
                {d.foto ? (
                  <Image src={d.foto} alt="" width={80} height={80} className="size-11 rounded-full object-cover" />
                ) : (
                  <span aria-hidden className="grid size-11 flex-none place-items-center rounded-full border border-linha font-mono text-sm text-cinza">
                    {iniciais(d.nome) || "··"}
                  </span>
                )}
                <span className="leading-tight">
                  <span className="block font-medium">{d.nome}</span>
                  <span className="mt-0.5 block font-mono text-[0.8125rem] text-cinza">{d.negocio}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <BotaoWhatsApp href={linkWhatsApp()} origem="depoimentos" className="w-full max-w-[24rem] sm:w-auto">
          {whatsapp.textoBotao}
        </BotaoWhatsApp>
      </div>
    </Secao>
  );
}
