import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textOnDark};
  padding: 4rem 2rem;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out forwards;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 0 auto;
  max-width: 1000px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const StatNumber = styled.p`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textOnDark};
  line-height: 1;
  height: 48px; // Altura fixa para evitar "pulos" de layout enquanto os números contam

  @media (max-width: 768px) {
    font-size: 2.5rem;
    height: 40px;
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
