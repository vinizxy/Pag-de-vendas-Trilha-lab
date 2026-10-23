# Trilha Lab — página de orçamento

Página de vendas que recebe o tráfego dos Reels (Meta Ads) e leva a pessoa a pedir orçamento no WhatsApp.
Next.js (App Router) + TypeScript + Tailwind, 100% estática, pronta para a Vercel.

## O que falta preencher

| O quê | Onde | Como |
|---|---|---|
| Número do WhatsApp | variável `NEXT_PUBLIC_WHATSAPP_NUMBER` | Só dígitos, com DDI e DDD: `5511999999999` |
| ID do Pixel da Meta | variável `NEXT_PUBLIC_META_PIXEL_ID` | Gerenciador de Eventos → Fontes de dados → ID |
| Domínio final | variável `NEXT_PUBLIC_SITE_URL` | Ex.: `https://orcamento.trilhalab.com.br` (sem barra no fim) |
| Logo oficial (SVG) | `public/logo/` | Salve como `trilha-lab-clara.svg` e `trilha-lab-escura.svg`, ajuste `largura`/`altura` e mude `logoTemporaria` para `false` em `content/site.ts` |
| Imagens das demos | `public/demos/` + `content/demos.ts` | Siga o comentário no topo do arquivo |
| Depoimentos | `content/depoimentos.ts` | Cole texto, nome e tipo de negócio; foto é opcional |
| E-mail e Instagram | `content/site.ts` | Campos `email` e `instagram` (marcados com `[PREENCHER]`) |
| Ícone da aba (favicon) | `app/icon.svg` | O atual é provisório (só a curva verde). Substitua pelo símbolo oficial |

Procure por `[PREENCHER]` no projeto para achar tudo o que ainda é provisório.

### Variáveis de ambiente

- **No computador:** copie `.env.example` para `.env.local` e preencha.
- **Na Vercel:** Project → Settings → Environment Variables, com os mesmos nomes. Depois faça um novo deploy (as variáveis entram no build).

## Onde editar os textos

Tudo em `content/`:

- `site.ts`: títulos, níveis, como funciona, garantias, outros serviços, CTA final e mensagens do WhatsApp
- `demos.ts`: demos por nicho
- `depoimentos.ts`: depoimentos
- `faq.ts`: perguntas frequentes

Cores, fontes e medidas ficam num só lugar: o bloco `@theme` em `app/globals.css`.

## Rodar no computador

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Antes de publicar, rode `npm run lint` e `npm run build`.

## Como o rastreamento funciona

- **Aviso LGPD:** o Pixel só carrega depois do "Aceitar". Quem recusa navega normalmente e não é rastreado.
- **PageView:** disparado quando o Pixel carrega (após o aceite).
- **Contact:** disparado em todo clique de WhatsApp, com `botao` (hero, nivel, depoimentos, final, fixo), o nível escolhido e a origem do anúncio.
- **Origem:** `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` e `fbclid` são guardados na entrada (só nesta aba) e enviados junto com o Contact.
- Nos anúncios, use links com UTM, por exemplo:
  `https://SEU-DOMINIO/?utm_source=instagram&utm_medium=paid&utm_campaign=reels-site&utm_content=video1`

## Teste obrigatório no celular (antes de soltar o anúncio)

O navegador interno do Instagram às vezes abre o WhatsApp Web em vez do app. Isso só aparece em aparelho de verdade:

1. Publique na Vercel e mande o link para você mesmo por direct no Instagram.
2. Abra o link **de dentro do Instagram**, no iPhone e no Android.
3. Toque no botão do topo, num botão de nível e no botão fixo do rodapé.
4. Confira: abre o app do WhatsApp, no número certo, com a mensagem certa (e o nível, quando for o caso).
5. No Gerenciador de Eventos → Testar eventos, confira o `PageView` (após aceitar o aviso) e o `Contact`.

## Estrutura

```
app/                  layout, página, /privacidade, OG image, sitemap, robots
components/sections/  uma seção por arquivo, na ordem da página
components/           botão de WhatsApp, trilha, aviso + botão fixo, logo, ícones
content/              textos editáveis
lib/                  link do WhatsApp, rastreamento (Pixel/UTM/consentimento)
assets/               fontes usadas só na imagem de compartilhamento
```

A linha verde ("trilha") é SVG + CSS puro (`animation-timeline: view()`), sem biblioteca. Em navegadores sem suporte ou com "reduzir movimento" ligado, ela aparece já desenhada.
