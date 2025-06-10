import styled from 'styled-components';

export const SliderWrapper = styled.div`
  width: 100%;
  height: 90vh; // Altura do slider, ajuste se necessário
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
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.primary}; // Laranja
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

export const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent 60%);
  z-index: 1;
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
  text-shadow: 2px 2px 6px rgba(0,0,0,0.7);
  margin-bottom: ${({ theme }) => theme.spacings.medium};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Caption = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.7);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;