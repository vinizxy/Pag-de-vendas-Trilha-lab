"use client";

import type { MouseEvent, ReactNode } from "react";
import { IconeConversa } from "@/components/Icones";
import { registrarContato } from "@/lib/rastreamento";

type Props = {
  href: string;
  /** Identifica o botão no evento Contact (ex.: "hero", "nivel", "fixo"). */
  origem: string;
  /** Nível escolhido, quando o botão é de um dos níveis. */
  nivel?: string;
  variante?: "principal" | "secundario";
  id?: string;
  className?: string;
  children: ReactNode;
};

const estilos = {
  principal:
    "botao-principal bg-brilho text-tinta font-semibold",
  secundario:
    "border border-trilha/70 text-papel hover:bg-trilha/12 hover:border-trilha transition-colors",
};

export function BotaoWhatsApp({ href, origem, nivel, variante = "principal", id, className = "", children }: Props) {
  function aoClicar(evento: MouseEvent<HTMLAnchorElement>) {
    // Respeita Ctrl/Cmd+clique e botão do meio.
    if (evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.button !== 0) return;
    const enviado = registrarContato(origem, nivel);
    if (!enviado) return;
    // Dá um instante para o Pixel enviar o evento antes de sair da página.
    evento.preventDefault();
    window.setTimeout(() => window.location.assign(href), 180);
  }

  return (
    <a
      id={id}
      href={href}
      onClick={aoClicar}
      rel="noopener"
      className={`inline-flex min-h-14 items-center justify-center gap-2.5 rounded-xl px-6 text-[1.0625rem] leading-tight ${estilos[variante]} ${className}`}
    >
      <IconeConversa className="size-5 flex-none" />
      <span>{children}</span>
    </a>
  );
}
