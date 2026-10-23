/**
 * Demos de sites por nicho.
 *
 * Para cada demo:
 * - coloque a imagem em public/demos/ (de preferência um print vertical
 *   de celular, PNG ou JPG, por exemplo 780 x 1560 px);
 * - preencha `imagem.src` com o caminho (ex.: "/demos/restaurante.png")
 *   e `largura`/`altura` com o tamanho real do arquivo;
 * - `link` é opcional: se existir, a demo vira um link para o site.
 *
 * Enquanto `imagem` for null, a página mostra um espaço reservado.
 */

export type Demo = {
  nicho: string;
  resolve: string;
  imagem: { src: string; alt: string; largura: number; altura: number } | null;
  link?: string;
};

export const demos: { titulo: string; subtitulo: string; lista: Demo[] } = {
  titulo: "Sites que já resolvem problemas reais",
  subtitulo: "Alguns exemplos de páginas por tipo de negócio.",
  lista: [
    {
      nicho: "[PREENCHER] Restaurante",
      resolve: "[PREENCHER] Cardápio, horário e pedido pelo WhatsApp em um toque.",
      imagem: null,
    },
    {
      nicho: "[PREENCHER] Clínica",
      resolve: "[PREENCHER] Agendamento de consulta sem fila de mensagem.",
      imagem: null,
    },
    {
      nicho: "[PREENCHER] Oficina",
      resolve: "[PREENCHER] Orçamento com foto do problema direto no WhatsApp.",
      imagem: null,
    },
  ],
};
