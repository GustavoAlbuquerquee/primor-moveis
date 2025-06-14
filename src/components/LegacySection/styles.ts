import styled from 'styled-components';

export const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary}; // Fundo Marrom Escuro
  color: ${({ theme }) => theme.colors.textOnDark}; // Texto Branco
  padding: 4rem 2rem; // Aumentamos o padding
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textOnDark};
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Três colunas
  gap: 2rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Uma coluna em telas menores
    gap: 3rem;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const StatIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary}; // Laranja Amarelado para destaque
  margin-bottom: 1rem;
`;

export const StatNumber = styled.p`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textOnDark};
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const StatText = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textOnDark};
  opacity: 0.8;
  margin-top: 0.5rem;
`;

export const SubText = styled.p`
  max-width: 700px;
  margin: 3rem auto 0;
  font-size: 1.2rem;
  font-style: italic;
  opacity: 0.9;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 2rem;
  }
`;