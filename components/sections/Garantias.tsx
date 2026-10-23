import { Secao } from "@/components/Secao";
import { garantias } from "@/content/site";

export function Garantias() {
  return (
    <Secao id="garantias" titulo={garantias.titulo} curva="c">
      <dl className="mt-10 grid border-t border-linha sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
        {garantias.itens.map((item) => (
          <div key={item.chave} className="border-b border-linha py-6 sm:pr-6 lg:border-b-0 lg:py-8">
            <dt className="text-2xl font-semibold tracking-[-0.02em] text-trilha lg:text-[1.75rem]">{item.chave}</dt>
            <dd className="mt-2 max-w-[30ch] leading-relaxed text-cinza">{item.texto}</dd>
          </div>
        ))}
      </dl>
    </Secao>
  );
}
