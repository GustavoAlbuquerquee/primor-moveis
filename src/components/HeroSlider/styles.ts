import styled from "styled-components";

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

export const SlideContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// --- MODIFICAÇÃO PRINCIPAL AQUI ---
export const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  /* Opção A (Recomendada): Escurecimento Uniforme
    Aplica uma camada escura por igual sobre toda a imagem.
    Ajuste a opacidade (o último número, de 0.0 a 1.0) conforme seu gosto. 
    0.4 = 40% escuro.
  */
  background-color: rgba(0, 0, 0, 0.4);

  /* Opção B (Alternativa): Gradiente Mais Forte
    Se quiser que o escurecimento seja mais forte na parte de baixo e mais suave em cima.
    Descomente o código abaixo e comente o 'background-color' de cima para testar.
  */
  /*
  background: linear-gradient(
    to top, 
    rgba(0, 0, 0, 0.8) 10%,  // Começa 80% escuro na base
    transparent 70%         // Fica transparente a partir de 70% da altura
  );
  */
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
  white-space: pre-line; // <-- ADICIONE ESTA LINHA

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Watermark = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 3; // Para ficar acima do overlay, mas abaixo de possíveis controles

  color: rgba(255, 255, 255, 0.6); // Cor branca com 60% de opacidade
  font-size: 0.8rem;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8); // Sombra para legibilidade
  pointer-events: none; // Impede que o texto seja clicável ou interfira no slider
  user-select: none; // Impede que o texto seja facilmente selecionado
`;
