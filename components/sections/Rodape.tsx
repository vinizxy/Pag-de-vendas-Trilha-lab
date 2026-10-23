import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/content/site";
import { linkWhatsApp } from "@/lib/whatsapp";

export function Rodape() {
  return (
    <footer className="border-t border-linha bg-grafite-fundo px-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-[80rem] flex-col gap-6 py-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Logo className="w-[6.25rem]" />
          <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-cinza">{site.frase}</p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
          <a href={linkWhatsApp()} className="inline-flex min-h-11 items-center text-cinza underline-offset-4 hover:text-papel hover:underline">
            WhatsApp
          </a>
          <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center text-cinza underline-offset-4 hover:text-papel hover:underline">
            {site.email}
          </a>
          <Link href="/privacidade" className="inline-flex min-h-11 items-center text-cinza underline-offset-4 hover:text-papel hover:underline">
            Política de Privacidade
          </Link>
        </nav>
      </div>
    </footer>
  );
}
