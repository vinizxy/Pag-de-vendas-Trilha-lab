/**
 * Rastreamento no navegador: consentimento (LGPD), origem do anúncio e Meta Pixel.
 * Só roda no cliente. O Pixel nunca carrega sem o "Aceitar" do aviso.
 */

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: Fbq;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
const CHAVE_CONSENTIMENTO = "tl-consentimento";
const CHAVE_ORIGEM = "tl-origem";
const PARAMETROS_ORIGEM = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "fbclid"] as const;

export type Consentimento = "aceito" | "recusado";
export type Origem = Partial<Record<(typeof PARAMETROS_ORIGEM)[number], string>>;

// O armazenamento pode falhar (aba anônima, webview restrito); a página segue funcionando.
function ler(storage: () => Storage, chave: string) {
  try {
    return storage().getItem(chave);
  } catch {
    return null;
  }
}

function gravar(storage: () => Storage, chave: string, valor: string) {
  try {
    storage().setItem(chave, valor);
  } catch {
    /* sem armazenamento: vale só para esta visita */
  }
}

// Cópia em memória: vale para esta visita mesmo se o navegador bloquear o armazenamento.
let consentimentoNaMemoria: Consentimento | null = null;
const EVENTO_CONSENTIMENTO = "tl-consentimento";

export function lerConsentimento(): Consentimento | null {
  const valor = ler(() => localStorage, CHAVE_CONSENTIMENTO) ?? consentimentoNaMemoria;
  return valor === "aceito" || valor === "recusado" ? valor : null;
}

export function salvarConsentimento(valor: Consentimento) {
  consentimentoNaMemoria = valor;
  gravar(() => localStorage, CHAVE_CONSENTIMENTO, valor);
  window.dispatchEvent(new Event(EVENTO_CONSENTIMENTO));
}

/** Para useSyncExternalStore: avisa quando o consentimento muda. */
export function assinarConsentimento(aoMudar: () => void) {
  window.addEventListener(EVENTO_CONSENTIMENTO, aoMudar);
  window.addEventListener("storage", aoMudar);
  return () => {
    window.removeEventListener(EVENTO_CONSENTIMENTO, aoMudar);
    window.removeEventListener("storage", aoMudar);
  };
}

/** Guarda UTMs e fbclid da entrada. Mantém a primeira origem da visita. */
export function capturarOrigem() {
  const params = new URLSearchParams(window.location.search);
  const nova: Origem = {};
  for (const chave of PARAMETROS_ORIGEM) {
    const valor = params.get(chave);
    if (valor) nova[chave] = valor.slice(0, 200);
  }
  if (Object.keys(nova).length === 0) return;
  gravar(() => sessionStorage, CHAVE_ORIGEM, JSON.stringify({ ...nova, ...lerOrigem() }));
}

export function lerOrigem(): Origem {
  try {
    return JSON.parse(ler(() => sessionStorage, CHAVE_ORIGEM) ?? "{}") as Origem;
  } catch {
    return {};
  }
}

/** Carrega o script oficial do Pixel sem bloquear a página e dispara o PageView. */
export function carregarPixel() {
  if (!PIXEL_ID || window.fbq) return;

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as Fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  fbq("init", PIXEL_ID);
  fbq("track", "PageView");
}

/**
 * Dispara o evento Contact com a origem do anúncio.
 * Retorna true se o evento foi enviado (Pixel ativo).
 */
export function registrarContato(botao: string, nivel?: string) {
  if (!window.fbq || lerConsentimento() !== "aceito") return false;
  window.fbq("track", "Contact", {
    content_name: nivel ? `whatsapp_${nivel}` : "whatsapp",
    botao,
    ...lerOrigem(),
  });
  return true;
}
