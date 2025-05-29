import styled from 'styled-components';
import Link from 'next/link';

export const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh; // Altura de exemplo
  background-color: #f0f0f0; // Cor de fundo de exemplo
  // Para imagem de fundo:
  // background-image: url('/caminho/para/sua/imagem-hero.jpg');
  // background-size: cover;
  // background-position: center;
  padding: 2rem;
  text-align: center;
  color: #333;
`;

export const HeroContent = styled.div`
  max-width: 800px;
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  color: ${(props) => props.theme.colors?.primary || '#DAA520'};
  margin-bottom: 1rem;
  line-height: 1.2;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #555;
`;

export const CtaButton = styled(Link)`
  display: inline-block;
  background-color: ${(props) => props.theme.colors?.primary || '#DAA520'};
  color: white;
  padding: 0.8rem 1.8rem;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors?.secondary || '#B8860B'};
  }
`;