import { whatsapp } from "@/content/site";

/** Número só com dígitos, com DDI e DDD (ex.: 5511999999999). */
export const numeroWhatsApp = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");

/**
 * Monta o link wa.me com a mensagem já escrita.
 * `complemento` entra depois da mensagem padrão (ex.: o nível escolhido).
 * Sem número configurado, o wa.me abre o WhatsApp para a pessoa escolher o contato.
 */
export function linkWhatsApp(complemento?: string) {
  const texto = complemento ? `${whatsapp.mensagemPadrao} ${complemento}` : whatsapp.mensagemPadrao;
  return `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
}
