import styled from 'styled-components';

export const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary}; // Fundo Marrom Escuro
  color: ${({ theme }) => theme.colors.textOnDark}; // Texto Branco
  padding: ${({ theme }) => theme.spacings.xlarge} ${({ theme }) => theme.spacings.medium};
  text-align: center;
`;

export const Content = styled.p`
  max-width: 900px;
  margin: 0 auto;
  font-size: 1.5rem;
  line-height: 1.5;
  font-style: italic;
  font-family: ${({ theme }) => theme.fonts.headings};
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;