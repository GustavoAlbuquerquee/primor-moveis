import styled from 'styled-components';

export const AboutWrapper = styled.section`
  padding: ${({ theme }) => theme.spacings.xxlarge} ${({ theme }) => theme.spacings.medium};
  background-color: ${({ theme }) => theme.colors.background}; // Ou theme.colors.lightGray para alternar
  text-align: center;

  @media (min-width: 768px) {
    padding: ${({ theme }) => `calc(${theme.spacings.xxlarge} * 1.5)`} ${({ theme }) => theme.spacings.large};
  }
`;

// Estilo de título de seção padrão (pode ser reutilizado ou vir de um componente global de título)
export const SectionTitle = styled.h2`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 70px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.secondary};
    margin: 0.75rem auto ${({ theme }) => theme.spacings.xlarge} auto; // Aumentado espaço abaixo da barra
  }

  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text}; // Usando cor de texto do tema
`;

export const Text = styled.p`
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  text-align: justify; // Justificado pode parecer mais formal

  @media (min-width: 768px) {
    // Em telas maiores, pode manter justificado ou alinhar à esquerda
  }
`;

export const AboutImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: ${({ theme }) => theme.spacings.large};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
`;