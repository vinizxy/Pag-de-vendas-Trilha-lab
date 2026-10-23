/**
 * Conteúdo principal da página de orçamento.
 * Edite os textos aqui; os componentes só leem deste arquivo.
 */

export const site = {
  nome: "Trilha Lab",
  frase: "Tecnologia que resolve o problema do seu negócio.",
  descricao:
    "Sites e landing pages profissionais para autônomos, pequenas empresas e comércios locais. Feitos para transformar visita em conversa no WhatsApp. Atendimento online em todo o Brasil.",
  // E-mail exibido no rodapé e na política de privacidade.
  email: "contato@trilhalab.com.br", // [PREENCHER] confirme o e-mail
  instagram: "https://www.instagram.com/trilhalab", // [PREENCHER] confirme o perfil

  // Logo. Coloque os SVGs oficiais em public/logo/ com estes nomes
  // e troque `logoTemporaria` para false.
  logo: {
    clara: "/logo/trilha-lab-clara.svg", // para fundo escuro (esta página)
    escura: "/logo/trilha-lab-escura.svg", // para fundo claro
    temporaria: "/logo/trilha-lab-temporaria.png",
    // Tamanho do arquivo em px (troque ao colocar os SVGs oficiais)
    largura: 298,
    altura: 106,
  },
  logoTemporaria: true,
} as const;

/** Mensagens que já chegam escritas no WhatsApp. */
export const whatsapp = {
  mensagemPadrao:
    "Oi, vim pelo Instagram e quero um orçamento de site para minha empresa.",
  textoBotao: "Pedir orçamento no WhatsApp",
  apoio: "Orçamento sem compromisso.",
} as const;

export const hero = {
  // Os trechos entre colchetes recebem o destaque verde.
  titulo: ["Seu negócio aparece,", "passa confiança e", "[vende pelo WhatsApp]."],
  subtitulo:
    "Site ou landing page profissional, feito para transformar visita em conversa.",
  // Simulação da conversa que abre quando a pessoa toca no botão.
  conversa: {
    contato: "Trilha Lab",
    status: "online",
    resposta:
      "Oi! Que bom que veio. Me conta um pouco do seu negócio que eu já te passo o caminho.",
  },
} as const;

export const problema = {
  titulo: "3 sinais de que seu negócio perde venda",
  sinais: [
    {
      fala: "“Vocês têm site?”",
      texto:
        "E você responde mandando o Instagram. O cliente queria ver preço, endereço e horário num lugar só, e foi olhar o concorrente.",
    },
    {
      fala: "Ninguém te acha no Google.",
      texto:
        "Quem pesquisa “dentista perto de mim” ou “oficina aberta agora” encontra outra empresa. Seu serviço pode ser melhor, mas não aparece.",
    },
    {
      fala: "Tudo depende de você responder na hora.",
      texto:
        "Se a mensagem fica sem resposta durante o atendimento, a venda esfria. Falta uma página que explique, convença e já leve a pessoa pronta para a conversa.",
    },
  ],
} as const;

export type Nivel = {
  id: string;
  nome: string;
  produto: string;
  resumo: string;
  itens: string[];
  prazo: string;
  destaque?: boolean;
};

export const niveis: { titulo: string; subtitulo: string; lista: Nivel[] } = {
  titulo: "O que entregamos",
  subtitulo:
    "Três formatos, do mais direto ao mais completo. O valor depende do escopo e sai na conversa pelo WhatsApp.",
  lista: [
    {
      id: "essencial",
      nome: "Essencial",
      produto: "Landing page",
      resumo: "Para quem precisa de uma página rápida que vire conversa.",
      itens: [
        "1 página pensada primeiro para o celular",
        "Botão e formulário que levam ao WhatsApp",
        "SEO técnico básico",
        "Nota alta no Lighthouse (velocidade)",
      ],
      prazo: "5 a 7 dias úteis",
    },
    {
      id: "profissional",
      nome: "Profissional",
      produto: "Site institucional",
      resumo: "Para quem quer ser encontrado no Google e passar confiança.",
      itens: [
        "Até 5 páginas",
        "Dados estruturados de negócio local (Schema)",
        "Google Analytics configurado",
        "Orientação para ajustar seu perfil no Google",
      ],
      prazo: "10 a 15 dias úteis",
      destaque: true,
    },
    {
      id: "completo",
      nome: "Completo",
      produto: "Site com painel",
      resumo: "Para quem quer atualizar o próprio site sem depender de ninguém.",
      itens: [
        "Até 10 páginas",
        "Painel para editar textos e fotos",
        "Rastreamento de conversão",
        "Tudo do nível Profissional",
      ],
      prazo: "20 a 30 dias úteis",
    },
  ],
};

export const comoFunciona = {
  titulo: "Como funciona",
  passos: [
    {
      titulo: "Conversa no WhatsApp",
      texto: "Você conta como funciona seu negócio e o que precisa resolver. Sem formulário longo.",
    },
    {
      titulo: "Proposta com escopo fechado",
      texto: "Você recebe por escrito o que será feito, o prazo e o valor. Sem surpresa no meio do caminho.",
    },
    {
      titulo: "Desenvolvimento, ajustes e entrega",
      texto: "Você acompanha o andamento, pede os ajustes e recebe o site publicado e funcionando.",
    },
  ],
} as const;

export const garantias = {
  titulo: "Regras claras desde o início",
  itens: [
    { chave: "2 rodadas", texto: "de ajustes incluídas no projeto." },
    { chave: "30 dias", texto: "de acompanhamento depois da entrega." },
    { chave: "No seu nome", texto: "domínio e hospedagem ficam registrados em nome da sua empresa." },
    { chave: "Escopo fechado", texto: "o que está na proposta é exatamente o que é entregue." },
  ],
} as const;

export const maisServicos = {
  titulo: "O que mais fazemos",
  subtitulo: "Quando o site já não basta, a gente resolve o próximo problema.",
  itens: [
    {
      nome: "Sistemas web sob medida",
      problema: "Planilhas e controles espalhados que ninguém consegue manter.",
      resultado: "Um sistema simples, do jeito que sua operação funciona.",
    },
    {
      nome: "Automação, atendimento e CRM",
      problema: "Mensagens perdidas e clientes que somem depois do primeiro contato.",
      resultado: "Atendimento organizado e follow-up que acontece sozinho.",
    },
    {
      nome: "Manutenção e suporte",
      problema: "Site parado, desatualizado ou fora do ar sem ninguém perceber.",
      resultado: "Alguém cuidando para tudo continuar funcionando.",
    },
  ],
} as const;

export const ctaFinal = {
  titulo: "Vamos ver o que seu negócio precisa?",
  texto: "Manda uma mensagem. Em poucos minutos de conversa você já sabe o caminho, o prazo e o valor.",
} as const;
