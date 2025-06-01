// src/components/Hero/styles.ts
import styled from 'styled-components';
import Link from 'next/link';

export const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: ${({ theme }) => theme.spacings.xlarge} ${({ theme }) => theme.spacings.medium};
  text-align: center;
  color: ${({ theme }) => theme.colors.textOnDark}; // Branco (texto sobre imagem)

  /* Confirme se este é o caminho correto na pasta /public para sua imagem de fundo */
  background-image: url('/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* Scrim escuro (camada de sobreposição) para melhor contraste do texto */
    /* Usando o marrom escuro com opacidade */
    background-color: rgba(96, 56, 41, 0.6); /* Cor #603829 com 60% de opacidade */
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
  position: relative;
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.textOnDark}; // Branco
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  line-height: 1.2;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.7); // Sombra para legibilidade

  @media (min-width: 768px) {
    font-size: 3.8rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacings.large};
  color: ${({ theme }) => theme.colors.textOnDark}; // Branco
  opacity: 0.9;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.6);

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const CtaButton = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary}; // Laranja Amarelado
  color: ${({ theme }) => theme.colors.secondary}; // Texto Marrom Escuro
  padding: ${({ theme }) => theme.spacings.medium} ${({ theme }) => theme.spacings.xlarge};
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background-color 0.3s ease, transform 0.2s ease, color 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary}; // Marrom Escuro no hover
    color: ${({ theme }) => theme.colors.textOnDark}; // Texto Branco no hover
    text-decoration: none;
    transform: translateY(-2px);
  }
`;