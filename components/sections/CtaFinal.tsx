import { BotaoWhatsApp } from "@/components/BotaoWhatsApp";
import { TrilhaFinal } from "@/components/Trilha";
import { ctaFinal, whatsapp } from "@/content/site";
import { linkWhatsApp } from "@/lib/whatsapp";

/** Fim da trilha: a linha faz a curva e chega no botão. */
export function CtaFinal() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="relative px-4 sm:px-6 lg:px-10">
      <div aria-hidden className="grade pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_80%_at_25%_70%,#000_20%,transparent_75%)]" />
      <div className="relative mx-auto grid max-w-[80rem] grid-cols-[var(--trilho)_minmax(0,1fr)] gap-x-2.5 pb-[var(--pad-secao)] lg:gap-x-6">
        <TrilhaFinal />
        <div className="min-w-0 pt-[var(--pad-secao)]">
          <h2 id="contato-titulo" className="max-w-[16ch] text-[2rem] leading-[1.1] font-semibold tracking-[-0.03em] lg:text-6xl lg:leading-[1.02]">
            {ctaFinal.titulo}
          </h2>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-cinza">{ctaFinal.texto}</p>
          <div className="mt-9 flex items-center">
            {/* Continuação horizontal da trilha até o botão */}
            <span aria-hidden className="-ml-2.5 h-0.5 w-2.5 flex-none bg-brilho shadow-[0_0_6px_rgb(159_232_112/0.5)] lg:-ml-6 lg:w-10" />
            <BotaoWhatsApp id="cta-final" href={linkWhatsApp()} origem="final" className="min-w-0 flex-1 sm:flex-none">
              {whatsapp.textoBotao}
            </BotaoWhatsApp>
          </div>
          <p className="mt-3 h-5 font-mono text-[0.8125rem] leading-5 text-cinza lg:ml-4">{whatsapp.apoio}</p>
        </div>
      </div>
    </section>
  );
}
