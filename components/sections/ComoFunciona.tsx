import { Secao } from "@/components/Secao";
import { comoFunciona } from "@/content/site";

export function ComoFunciona() {
  return (
    <Secao id="como-funciona" titulo={comoFunciona.titulo} curva="b">
      <ol className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-3 lg:gap-8">
        {comoFunciona.passos.map((passo, i) => (
          <li key={passo.titulo} className="relative">
            {/* Pequeno trecho de trilha ligando os passos */}
            <div aria-hidden className="flex items-center gap-3">
              <span className="grid size-10 flex-none place-items-center rounded-full border border-trilha/60 font-mono text-sm text-trilha tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-px flex-1 border-t border-dashed border-linha" />
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-[-0.01em]">{passo.titulo}</h3>
            <p className="mt-2 max-w-[40ch] leading-relaxed text-cinza">{passo.texto}</p>
          </li>
        ))}
      </ol>
    </Secao>
  );
}
