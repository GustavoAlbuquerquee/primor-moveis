// src/components/Reviews/styles.ts
import styled from 'styled-components';

export const ReviewsWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.lightBackground}; // Off-white/Bege sutil
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.primary}; // Laranja Amarelado
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 70px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.secondary}; // Marrom Escuro
    margin: 0.75rem auto 0;
  }
`;

export const ReviewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ReviewCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background}; // Branco
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-top: 5px solid ${({ theme }) => theme.colors.primary}; // Laranja Amarelado
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  text-align: left;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const AvatarPlaceholder = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary}; // Marrom Escuro
  color: ${({ theme }) => theme.colors.textOnDark}; // Branco
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 1rem;
`;

export const ReviewAuthorName = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary}; // Marrom Escuro
  margin: 0;
`;

export const ReviewStars = styled.div`
  color: ${({ theme }) => theme.colors.primary}; // Laranja Amarelado
  font-size: 1.1rem;
  margin-top: 0.25rem;
`;

export const QuoteIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary}; // Laranja Amarelado
  line-height: 1;
  margin-bottom: 0.5rem;
`;

export const ReviewText = styled.p`
  font-size: 1rem;
  font-style: normal;
  color: ${({ theme }) => theme.colors.textOnLight}; // Marrom Escuro
  line-height: 1.7;
  margin-bottom: 0;
  flex-grow: 1;
`;