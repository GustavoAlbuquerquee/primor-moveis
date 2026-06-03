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

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

export const SectionWrapper = styled.section`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.secondary} 0%,
    ${({ theme }) => theme.colors.secondary}ee 50%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  color: ${({ theme }) => theme.colors.textOnDark};
  padding: 5rem 2rem;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out forwards;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 60px,
        rgba(240, 160, 45, 0.03) 60px,
        rgba(240, 160, 45, 0.03) 120px
      );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textOnDark};
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.primary},
      transparent
    );
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;

    &::after {
      width: 60px;
      height: 3px;
    }
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 0 auto;
  max-width: 1000px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    gap: 1.5rem;
    max-width: 400px;

    /* O terceiro item (Excelência) vai ocupar as duas colunas da segunda linha */
    > :nth-child(3) {
      grid-column: 1 / -1;
      justify-self: center;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    max-width: 320px;

    /* Mantém o layout do terceiro item */
    > :nth-child(3) {
      grid-column: 1 / -1;
      justify-self: center;
    }
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const StatIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 12px ${({ theme }) => theme.colors.primary}60);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${StatItem}:hover & {
    transform: scale(1.15) rotate(5deg);
    filter: drop-shadow(0 8px 20px ${({ theme }) => theme.colors.primary}80);
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 0.75rem;
  }
`;

export const StatNumber = styled.p`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 3rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.textOnDark};
  line-height: 1;
  height: 48px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.textOnDark} 50%,
    ${({ theme }) => theme.colors.primary} 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 3s linear infinite;
  text-shadow: 0 0 30px ${({ theme }) => theme.colors.primary}40;
  transition: transform 0.3s ease;

  ${StatItem}:hover & {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    height: 32px;
  }
`;

export const StatText = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textOnDark};
  opacity: 0.8;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 0.25rem;
  }
`;

export const SubText = styled.p`
  max-width: 700px;
  margin: 3rem auto 0;
  font-size: 1.2rem;
  font-style: italic;
  opacity: 0.9;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 1.5rem;
    max-width: 400px;
    line-height: 1.4;
  }
`;
