## Visão geral

Reconstruir o site da Carcki Esquadrias de PVC como um site institucional moderno, com estética **minimalista premium / arquitetura high-end** — muito espaço em branco, tipografia editorial grande, fotos dominantes em destaque — preservando a identidade da marca (vermelho Carcki + cinzas neutros + logo atual).

Você vai me enviar as fotos reais depois. Enquanto isso, vou estruturar tudo com placeholders bem dimensionados para você só substituir.

## Estrutura de páginas (rotas)

```
/                  Home (hero + destaques de cada seção)
/sobre             Quem somos + por que escolher Carcki
/produtos          Catálogo completo (grid de produtos)
/produtos/$slug    Página individual de cada produto
/projetos          Galeria de obras realizadas
/contato           Formulário + endereço + contatos
```

Header fixo com logo + navegação + CTA "Peça seu orçamento". Footer com contato, redes sociais e mapa.

## Catálogo de produtos

Página `/produtos` com grid de cards. Página individual para cada um com galeria, descrição técnica, características, aplicações recomendadas e CTA de orçamento. Produtos iniciais:

- Porta de Abrir
- Porta de Correr
- Porta Balcão
- Janela de Correr
- Janela Maxim-ar
- Janela de Abrir
- Janela Basculante
- Janela Pivotante

(Posso ajustar a lista quando você confirmar.)

## Direção visual

- **Tipografia**: par editorial — display serif moderno (ex: Fraunces / Instrument Serif) para títulos grandes + sans-serif neutro (ex: Inter) para corpo. Substitui a tipografia genérica atual.
- **Cores**: vermelho Carcki como acento pontual (CTAs, detalhes), paleta dominada por off-white, cinza pedra e preto suave. Sem o cinza chumbo pesado do site atual.
- **Layout**: grids assimétricas, fotos full-bleed, números grandes para os "4 passos", bastante respiro entre seções.
- **Movimento**: fade/slide sutil ao scroll (Framer Motion), sem exagero. Hover refinado nos cards.
- **Fotos**: protagonistas. Cada seção respira em torno de uma foto grande de ambiente real.

## Conteúdo aproveitado dos screenshots

Mantenho todo o copy atual (hero, quem somos, diferenciais, 4 passos, depoimentos, contato Brusque/SC, telefone, e-mail) e reorganizo numa narrativa mais limpa.

## Detalhes técnicos

- TanStack Start (rotas em `src/routes/`), Tailwind v4, shadcn/ui customizado.
- Tokens de design (`src/styles.css`) com a paleta Carcki em `oklch`.
- SEO por rota: `head()` único em cada página com title/description/og.
- Imagens em `src/assets/` com placeholders dimensionados — você troca depois.
- Logo Carcki: você me envia em PNG/SVG e eu coloco; até lá uso um placeholder textual.
- Sem backend nesta etapa (formulário de contato será só visual, com link `mailto:` / WhatsApp). Se depois quiser form funcional + envio de e-mail, ativo Lovable Cloud.

## O que eu vou precisar de você depois

1. Logo da Carcki em alta (PNG ou SVG, fundo transparente).
2. Fotos dos projetos / produtos (pode ir mandando aos poucos).
3. Confirmação da lista final de produtos do catálogo.

Posso começar a construção mesmo sem as fotos finais — uso placeholders e você substitui na sequência.