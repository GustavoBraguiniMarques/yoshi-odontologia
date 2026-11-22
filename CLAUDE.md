# Instruções para o Claude Code

@README.md

## Ao adaptar o modelo para uma clínica nova

- Dados da clínica ficam só em `config/clinic.ts`; textos e fotos, só em `config/content.ts`. Não escreva nome, telefone, endereço ou cidade direto nos componentes.
- Não mude a aparência (layout, espaçamentos, componentes) a menos que o pedido seja exatamente esse.
- Imagens: converta para os tamanhos da tabela do README com o `sharp`, que já vem instalado com o Next. Use WebP com qualidade ~80; logos e recortes sem fundo mantêm a transparência. O `apple-icon.png` precisa de fundo sólido.
- `og-image.jpg` (1200×630): logo à esquerda e a foto da hero à direita, sobre o gradiente claro da marca (`--light-bg` para `--light-bg2`).
- Descrições dos serviços com até ~80 caracteres.
- Ao terminar, rode `npm run lint` e `npm run build` e procure dados da clínica anterior (nome, telefone, DDD, cidade, @ do Instagram) em `app`, `components`, `config` e `lib`. Não pode sobrar nenhum.
- No resumo para o usuário, lembre os campos que dependem dele: `cro` (obrigatório antes de publicar), `site` (domínio final) e depoimentos reais.

## Convenções

- Nomes de código (componentes, classes, ids, arquivos, chaves do config) em inglês; textos do site e comentários em português.
- Indexação e dados estruturados ficam em `lib/seo.ts`: o site só é indexável com `clinic.site` preenchido e build fora da Vercel.
- Mudanças no projeto: um commit por assunto, com o build passando. Merge e push ficam com o usuário.
