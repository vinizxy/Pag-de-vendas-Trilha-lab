import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a Trilha Lab trata os dados de quem visita esta página.",
  alternates: { canonical: "/privacidade" },
};

const blocos = [
  {
    titulo: "Quem somos",
    texto: `A ${site.nome} é responsável por esta página. Para qualquer dúvida sobre seus dados, fale com a gente pelo e-mail ${site.email}.`,
  },
  {
    titulo: "Quais dados coletamos",
    texto:
      "Esta página não tem formulário e não pede seus dados. Se você aceitar o aviso de cookies, o Pixel da Meta registra a sua visita e o clique no botão do WhatsApp, junto com a origem do anúncio (parâmetros como utm_source e fbclid).",
  },
  {
    titulo: "Para que usamos",
    texto:
      "Só para medir quais anúncios trazem visitas e conversas, e melhorar as campanhas. Não vendemos nem compartilhamos esses dados com outras empresas além da Meta, que processa o Pixel.",
  },
  {
    titulo: "Sua escolha",
    texto:
      "O Pixel só é ativado se você tocar em “Aceitar”. Se recusar, a página funciona normalmente. Para mudar de ideia, limpe os dados do site no seu navegador e a pergunta aparece de novo.",
  },
  {
    titulo: "WhatsApp",
    texto:
      "Ao tocar no botão, você é levado ao WhatsApp com uma mensagem pronta. A conversa segue as regras de privacidade do próprio WhatsApp. Usamos o que você enviar só para responder e preparar o seu orçamento.",
  },
  {
    titulo: "Seus direitos (LGPD)",
    texto: `Você pode pedir acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail ${site.email}.`,
  },
];

export default function Privacidade() {
  return (
    <main id="conteudo" className="px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[44rem] py-12 lg:py-20">
        <Link href="/" aria-label="Voltar para a página inicial" className="inline-block">
          <Logo className="w-[6.25rem]" />
        </Link>
        <h1 className="mt-12 text-4xl font-semibold tracking-[-0.03em] lg:text-5xl">Política de Privacidade</h1>
        <p className="mt-4 text-lg leading-relaxed text-cinza">
          Resumo direto de como tratamos os dados de quem visita esta página.
        </p>
        <div className="mt-10 border-t border-linha">
          {blocos.map((b) => (
            <section key={b.titulo} className="border-b border-linha py-7">
              <h2 className="text-xl font-semibold">{b.titulo}</h2>
              <p className="mt-2 leading-relaxed text-cinza">{b.texto}</p>
            </section>
          ))}
        </div>
        <Link href="/" className="mt-10 inline-flex min-h-11 items-center text-trilha underline underline-offset-4">
          Voltar para a página
        </Link>
      </div>
    </main>
  );
}
