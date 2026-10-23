/**
 * Depoimentos de clientes.
 *
 * Cole cada depoimento no formato abaixo. `foto` é opcional:
 * coloque a imagem em public/depoimentos/ (quadrada, ex.: 160 x 160 px)
 * e preencha o caminho. Sem foto, aparecem as iniciais do nome.
 *
 * Use só depoimentos reais e com autorização do cliente.
 */

export type Depoimento = {
  texto: string;
  nome: string;
  negocio: string;
  foto?: string;
};

export const depoimentos: { titulo: string; lista: Depoimento[] } = {
  titulo: "Quem já trilhou esse caminho",
  lista: [
    {
      texto: "[PREENCHER] Texto do depoimento do cliente, em uma ou duas frases.",
      nome: "[PREENCHER] Nome",
      negocio: "[PREENCHER] Tipo de negócio",
    },
    {
      texto: "[PREENCHER] Texto do depoimento do cliente, em uma ou duas frases.",
      nome: "[PREENCHER] Nome",
      negocio: "[PREENCHER] Tipo de negócio",
    },
    {
      texto: "[PREENCHER] Texto do depoimento do cliente, em uma ou duas frases.",
      nome: "[PREENCHER] Nome",
      negocio: "[PREENCHER] Tipo de negócio",
    },
  ],
};
