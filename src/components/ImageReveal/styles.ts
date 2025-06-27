"use client";

import styled from "styled-components";

export const RevealWrapper = styled.div`
  position: relative;
  overflow: hidden;
  line-height: 0;

  /* --- DEBUG --- */
  border: 2px solid white; /* Borda para ajudar a visualizar */
  /* --- FIM DO DEBUG --- */

  /* A "cortina" colorida que revela a imagem */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateX(0);
    transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1);
    z-index: 1;
  }

  /* A imagem em si */
  .reveal-image {
    opacity: 1;
    transform: scale(1.1);
    transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1);
    /* --- DEBUG --- */
    background-color: blue; /* Adicionado para vermos se o container da imagem tem tamanho */
    /* --- FIM DO DEBUG --- */
  }

  /* Quando o componente está visível na tela */
  &.in-view {
    &::after {
      transform: translateX(101%);
    }
    .reveal-image {
      transform: scale(1);
    }
  }
`;
