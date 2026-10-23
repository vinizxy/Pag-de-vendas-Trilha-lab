"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { BotaoWhatsApp } from "@/components/BotaoWhatsApp";
import { whatsapp } from "@/content/site";
import {
  assinarConsentimento,
  capturarOrigem,
  carregarPixel,
  lerConsentimento,
  salvarConsentimento,
  type Consentimento,
} from "@/lib/rastreamento";

/**
 * Base fixa da tela:
 * - aviso de cookies/rastreamento (LGPD) até a pessoa escolher;
 * - botão fixo de WhatsApp no celular, só quando os botões do topo e do fim
 *   não estão visíveis.
 * Também captura UTMs na entrada e liga o Pixel se já houver aceite.
 * O fim da página tem um respiro fixo do tamanho do botão (--dock em globals.css),
 * então o botão fixo nunca cobre o rodapé.
 */
export function BottomDock({ hrefWhatsApp }: { hrefWhatsApp: string }) {
  // No servidor fica "carregando": o aviso só aparece depois de ler a escolha salva.
  const consentimento = useSyncExternalStore(assinarConsentimento, lerConsentimento, () => "carregando" as const);
  const [mostrarFixo, setMostrarFixo] = useState(false);

  // Origem do anúncio + Pixel, se já houver aceite
  useEffect(() => {
    capturarOrigem();
    if (lerConsentimento() === "aceito") carregarPixel();
  }, []);

  // Botão fixo: aparece quando nenhum CTA principal está na tela
  useEffect(() => {
    const alvos = ["cta-hero", "cta-final"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (alvos.length === 0 || !("IntersectionObserver" in window)) return;

    const visiveis = new Set<Element>();
    let jaPassouDoTopo = false;
    const observador = new IntersectionObserver((entradas) => {
      for (const e of entradas) {
        if (e.isIntersecting) visiveis.add(e.target);
        else visiveis.delete(e.target);
        if (e.target.id === "cta-hero" && !e.isIntersecting && e.boundingClientRect.top < 0) jaPassouDoTopo = true;
        if (e.target.id === "cta-hero" && e.isIntersecting) jaPassouDoTopo = false;
      }
      setMostrarFixo(jaPassouDoTopo && visiveis.size === 0);
    });
    alvos.forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, []);

  function escolher(valor: Consentimento) {
    salvarConsentimento(valor);
    if (valor === "aceito") carregarPixel();
  }

  const mostrarAviso = consentimento === null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 pb-[env(safe-area-inset-bottom)]">
      {mostrarAviso && (
        <section
          aria-label="Aviso de cookies"
          className="mx-auto mb-2 w-[calc(100%-1rem)] max-w-[44rem] rounded-2xl border border-linha bg-grafite-claro/95 p-4 shadow-[0_20px_40px_-20px_rgb(0_0_0/0.8)] backdrop-blur-sm sm:flex sm:items-center sm:gap-5 sm:p-5"
        >
          <p className="text-sm leading-relaxed text-cinza">
            Usamos o Pixel da Meta para saber quais anúncios trazem visitas. Ele só é ativado se você aceitar.{" "}
            <Link href="/privacidade" className="text-papel underline underline-offset-4">
              Saiba mais
            </Link>
          </p>
          <div className="mt-3 flex flex-none gap-2 sm:mt-0">
            <button
              type="button"
              onClick={() => escolher("recusado")}
              className="min-h-11 flex-1 rounded-lg border border-linha px-4 text-sm text-papel transition-colors hover:border-cinza-escuro sm:flex-none"
            >
              Recusar
            </button>
            <button
              type="button"
              onClick={() => escolher("aceito")}
              className="min-h-11 flex-1 rounded-lg bg-papel px-4 text-sm font-medium text-tinta transition-colors hover:bg-white sm:flex-none"
            >
              Aceitar
            </button>
          </div>
        </section>
      )}

      {/* Botão fixo: só no celular */}
      <div
        className={`border-t border-linha bg-grafite/95 px-4 pt-3 pb-3 backdrop-blur-sm lg:hidden ${mostrarFixo ? "" : "hidden"}`}
      >
        <BotaoWhatsApp href={hrefWhatsApp} origem="fixo" className="w-full">
          {whatsapp.textoBotao}
        </BotaoWhatsApp>
      </div>
    </div>
  );
}
