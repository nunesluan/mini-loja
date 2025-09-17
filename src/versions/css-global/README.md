# 01-css-global

Implementação da tela com **CSS Global** e variáveis de design tokens.

## Funcionalidades

- Navbar fixa com toggle de tema (persistência em `localStorage`) e badge de carrinho.
- Grid de produtos responsivo:  
  - ≤480px → 1 coluna  
  - 481–768px → 2 colunas  
  - 769–1024px → 3 colunas  
  - ≥1025px → 4 colunas
- Cards com imagem, título (2 linhas, ellipsis), preço, rating, tag e botão “Adicionar”.
- Estados: hover, focus, disabled, skeleton.
- Dark mode aplicado em cores/sombras.
- Acessibilidade: navegação por teclado, foco visível, contraste ≥ 4.5:1.

## Rodar

```bash
npm install
npm run dev
