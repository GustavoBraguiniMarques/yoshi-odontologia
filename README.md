# Modelo de landing page para clínicas odontológicas

Modelo base: cada clínica nova ganha um repositório criado a partir deste e adaptado com os dados dela.

- Next.js 15 + Tailwind CSS 4, site 100% estático: `npm run build` gera a pasta `out/`.
- Prévias na Vercel; site final na Hostinger.

## Comandos

| Comando | O que faz |
|---|---|
| `npm install` | Instala as dependências |
| `npm run dev` | Abre o site em http://localhost:3000, atualizando a cada alteração |
| `npm run build` | Gera o site final em `out/` (também roda o lint e a checagem de tipos) |
| `npm run preview` | Serve a pasta `out/` para conferir o build |
| `npm run lint` | Procura problemas no código |

## Onde fica cada coisa

| O quê | Onde |
|---|---|
| Nome, WhatsApp, telefone, Instagram, endereço, horários, CRO, domínio e SEO | `config/clinic.ts` |
| Textos das seções, menu, serviços, depoimentos, fotos e textos alternativos | `config/content.ts` |
| Cores da marca | `app/globals.css`, bloco `:root` no topo |
| Fontes | `app/layout.tsx` |
| Fotos e logos | `assets/images/` (substitua mantendo os nomes) |
| Favicon e ícone do iPhone | `app/icon.png` (512×512) e `app/apple-icon.png` (180×180, fundo sólido) |
| Imagem de compartilhamento (WhatsApp, redes) | `assets/images/og-image.jpg` (1200×630) |
| Páginas de Privacidade e Termos de Uso | `app/privacy/page.tsx` e `app/terms/page.tsx` |

Os componentes (`components/`) só mudam se o layout mudar.

## Como adaptar para uma clínica nova

1. **Dados da clínica** em `config/clinic.ts`: nome, WhatsApp (número, como aparece e mensagem), telefone (ou `null`), Instagram (ou `''`), endereço, horários (com o campo `schema`, no formato do Google), título e descrição para o Google e o registro no **CRO**, obrigatório antes de publicar. Deixe `site` vazio até ter o domínio final.
2. **Textos e fotos** em `config/content.ts`. Os depoimentos que vêm no modelo são exemplos: troque por depoimentos reais ou deixe a lista vazia (a seção some).
3. **Cores** no bloco `:root` de `app/globals.css`.
4. **Fontes** em `app/layout.tsx`, se a marca usar outras.
5. **Imagens**: substitua os arquivos de `assets/images/` mantendo os nomes e os tamanhos da tabela abaixo; troque `app/icon.png` e `app/apple-icon.png`; refaça a `og-image.jpg`.
6. **Confira**: `npm run build` sem erros e, na busca do VS Code, procure o nome, o telefone e a cidade da clínica anterior em `app`, `components`, `config` e `lib`. Não pode sobrar nenhum.

## Imagens

O `next/image` roda sem otimização: cada arquivo vai para o site do jeito que está. Use estes tamanhos (já contam telas de alta densidade):

| Arquivo | Onde aparece | Tamanho | Formato |
|---|---|---|---|
| `logo-header.webp` | Cabeçalho (fundo claro) | ~160px de altura | WebP com transparência |
| `logo-footer.webp` | Rodapé (fundo escuro) | ~170px de altura | WebP com transparência |
| `hero.webp` | Primeira dobra (recorte sem fundo) | ~1000px de largura | WebP com transparência |
| `team.webp` | Seção Sobre e colagem dos Diferenciais | ~1280px de largura | WebP |
| `office.webp` | Colagem dos Diferenciais (círculo) | ~1000px de largura | WebP |
| `patient.webp` | Colagem dos Diferenciais (círculo) | ~700px de largura | WebP |
| `og-image.jpg` | Prévia do link no WhatsApp e redes | 1200×630 | JPG |

## Publicação

- **Prévia (Vercel)**: enquanto `site` estiver vazio, e sempre que o build rodar na Vercel, o site sai com `noindex` e fica fora do Google.
- **Site final**: preencha `site` em `config/clinic.ts` com o domínio (ex.: `https://www.clinica.com.br`). O site passa a ser indexado, ganha URL canônica e o `robots.txt` passa a apontar o sitemap.
- **Hostinger**: para usar a página 404 personalizada, coloque `ErrorDocument 404 /404.html` no `.htaccess`.

## Páginas legais

`app/privacy/page.tsx` e `app/terms/page.tsx` usam os dados do config. O texto é genérico para um site informativo (sem formulário, cookies próprios ou ferramentas de análise). Se o site passar a coletar dados, revise-o.
