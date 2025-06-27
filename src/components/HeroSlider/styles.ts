import styled, { keyframes } from "styled-components";

// 1. DEFINIÇÃO DA ANIMAÇÃO DE ZOOM LENTO
const kenburns = keyframes`
  0% {
    transform: scale(1.0) translateY(0);
  }
  100% {
    transform: scale(1.1) translateY(-10px); // Aumenta o zoom e move um pouco para cima
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.5);
    width: 12px;
    height: 12px;
    opacity: 1;
    transition: background-color 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

// 2. MUDANÇA PRINCIPAL NO SlideContent
export const SlideContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; // Essencial para "cortar" a imagem enquanto ela cresce

  /* O seletor '> img' aplica a animação diretamente no componente <Image> do Next.js
    que está dentro do SlideContent.
  */
  > img {
    animation: ${kenburns} 30s ease-out infinite alternate; // Aplica a animação
  }
`;

export const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const SlideTextContainer = styled.div`
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.colors.textOnDark}; // Branco
  text-align: center;
  padding: 2rem;
  max-width: 800px;
`;

export const Keyword = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textOnDark};
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
  margin-bottom: ${({ theme }) => theme.spacings.medium};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Caption = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Watermark = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 3;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  pointer-events: none;
  user-select: none;
`;
