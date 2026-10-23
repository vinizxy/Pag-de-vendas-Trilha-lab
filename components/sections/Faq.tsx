import { IconeMais } from "@/components/Icones";
import { Secao } from "@/components/Secao";
import { faq } from "@/content/faq";

/** Acordeão com <details> nativo: funciona com teclado, leitor de tela e sem JavaScript. */
export function Faq() {
  return (
    <Secao id="faq" titulo={faq.titulo} curva="b">
      <div className="mt-10 max-w-[52rem] border-t border-linha lg:mt-14">
        {faq.lista.map((item) => (
          <details key={item.pergunta} className="faq-item group border-b border-linha">
            <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-6 py-4 text-lg font-medium transition-colors hover:text-trilha lg:text-xl">
              {item.pergunta}
              <IconeMais className="faq-sinal size-5 flex-none text-trilha" />
            </summary>
            <p className="max-w-[62ch] pb-6 leading-relaxed text-cinza">{item.resposta}</p>
          </details>
        ))}
      </div>
    </Secao>
  );
}
