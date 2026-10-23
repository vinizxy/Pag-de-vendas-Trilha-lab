import { BotaoWhatsApp } from "@/components/BotaoWhatsApp";
import { IconeVistos } from "@/components/Icones";
import { Logo } from "@/components/Logo";
import { hero, whatsapp } from "@/content/site";
import { linkWhatsApp } from "@/lib/whatsapp";

/** Colchete preso à primeira e à última palavra, para nunca ficar sozinho na linha. */
function ComColchetes({ texto }: { texto: string }) {
  const palavras = texto.split(" ");
  const colchete = (c: string) => <span className="font-mono font-normal text-cinza-escuro">{c}</span>;
  return (
    <span className="text-trilha">
      {palavras.map((palavra, i) => (
        <span key={i} className="whitespace-nowrap">
          {i === 0 && colchete("[")}
          {palavra}
          {i === palavras.length - 1 && colchete("]")}
          {i < palavras.length - 1 && " "}
        </span>
      ))}
    </span>
  );
}

/** Trechos entre [colchetes] viram destaque verde com colchetes em mono. */
function Destaque({ texto }: { texto: string }) {
  const partes = texto.split(/(\[[^\]]+\])/g);
  return (
    <>
      {partes.map((parte, i) =>
        parte.startsWith("[") ? (
          <ComColchetes key={i} texto={parte.slice(1, -1)} />
        ) : (
          <span key={i}>{parte}</span>
        ),
      )}
    </>
  );
}

/** Prévia da conversa que abre no WhatsApp: mostra o resultado do clique. */
function Conversa() {
  const { conversa } = hero;
  return (
    <figure
      aria-label="Exemplo da conversa que abre no WhatsApp"
      className="relative w-full max-w-[24rem] overflow-hidden rounded-[1.75rem] border border-linha bg-grafite-fundo shadow-[0_30px_60px_-30px_rgb(0_0_0/0.7)]"
    >
      <div className="flex items-center gap-3 border-b border-linha px-5 py-4">
        <span className="grid size-9 place-items-center rounded-full bg-grafite-claro font-mono text-xs text-trilha">TL</span>
        <div className="leading-tight">
          <p className="text-[0.9375rem] font-medium">{conversa.contato}</p>
          <p className="font-mono text-xs text-trilha">{conversa.status}</p>
        </div>
      </div>
      <div className="space-y-3 px-4 pt-5 pb-6">
        <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-trilha/20 px-4 py-3 text-[0.9375rem] leading-snug">
          {whatsapp.mensagemPadrao}
          <span className="mt-1.5 flex items-center justify-end gap-1.5 font-mono text-[0.6875rem] text-cinza">
            agora <IconeVistos className="h-2.5 w-4 text-brilho" />
          </span>
        </p>
        <p className="max-w-[85%] rounded-2xl rounded-bl-md bg-grafite-claro px-4 py-3 text-[0.9375rem] leading-snug text-cinza">
          {conversa.resposta}
        </p>
      </div>
      <figcaption className="sr-only">Mensagem enviada ao tocar no botão e resposta da Trilha Lab.</figcaption>
    </figure>
  );
}

export function Hero() {
  return (
    <header className="relative px-4 sm:px-6 lg:px-10">
      <div aria-hidden className="grade pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-[80rem] grid-cols-[var(--trilho)_minmax(0,1fr)] gap-x-3 lg:gap-x-6">
        {/* Logo: o "S" verde fica sobre o centro da coluna da trilha, que nasce dele */}
        <div className="col-span-2 pt-5 lg:pt-8">
          <a href="#topo" aria-label="Trilha Lab, início" className="ml-[calc(var(--trilho)/2_-_1rem)] inline-block lg:ml-[calc(var(--trilho)/2_-_1.36rem)]">
            <Logo prioridade className="w-[6.25rem] lg:w-[8.5rem]" />
          </a>
        </div>

        {/* Trecho da trilha que sai da logo: desenha ao carregar */}
        <div aria-hidden className="pointer-events-none flex flex-col items-center">
          <span className="relative block w-0.5 flex-1">
            <span className="absolute inset-0 bg-linha" />
            <span className="trilha-entrada absolute inset-0 bg-brilho shadow-[0_0_8px_rgb(159_232_112/0.5)]" />
          </span>
        </div>

        <div id="topo" className="grid min-w-0 gap-12 pt-6 pb-[var(--pad-secao)] lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-center lg:gap-16 lg:pt-16">
          <div>
            <h1 className="max-w-[16ch] text-[clamp(2.25rem,9.4vw,5.25rem)] leading-[1.02] font-semibold tracking-[-0.035em]">
              <Destaque texto={hero.titulo.join(" ")} />
            </h1>
            <p className="mt-5 max-w-[34ch] text-lg leading-relaxed text-cinza lg:mt-7 lg:text-xl">{hero.subtitulo}</p>
            <div className="mt-7 lg:mt-10">
              <BotaoWhatsApp id="cta-hero" href={linkWhatsApp()} origem="hero" className="w-full max-w-[24rem] sm:w-auto">
                {whatsapp.textoBotao}
              </BotaoWhatsApp>
              <p className="mt-3 flex items-center gap-2 font-mono text-[0.8125rem] text-cinza">
                <span aria-hidden className="size-1.5 rounded-full bg-brilho" />
                {whatsapp.apoio}
              </p>
            </div>
          </div>
          <div className="lg:justify-self-end">
            <Conversa />
          </div>
        </div>
      </div>
    </header>
  );
}
