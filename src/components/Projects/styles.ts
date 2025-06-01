// src/components/Projects/styles.ts
import styled from 'styled-components';
import Link from 'next/link';

export const ProjectsWrapper = styled.section`
  padding: ${({ theme }) => theme.spacings.xxlarge} ${({ theme }) => theme.spacings.medium};
  background-color: ${({ theme }) => theme.colors.lightBackground}; // Off-white/Bege sutil
  text-align: center;

  @media (min-width: 768px) {
    padding: ${({ theme }) => `calc(${theme.spacings.xxlarge} * 1.5)`} ${({ theme }) => theme.spacings.large};
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.primary}; // Laranja Amarelado
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 70px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.secondary}; // Marrom Escuro
    margin: 0.75rem auto ${({ theme }) => theme.spacings.xlarge} auto;
  }

   @media (min-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacings.large};
  max-width: 1200px;
  margin: 0 auto ${({ theme }) => theme.spacings.xlarge} auto;
`;

export const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background}; // Branco
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

export const ProjectInfo = styled.div`
  padding: ${({ theme }) => theme.spacings.large};
  text-align: left;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const ProjectName = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.secondary}; // Marrom Escuro
  margin-bottom: ${({ theme }) => theme.spacings.small};
  font-family: ${({ theme }) => theme.fonts.headings};
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textOnLight}; // Marrom Escuro
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: ${({ theme }) => theme.spacings.medium};
`;

export const ViewMoreButton = styled(Link)`
  display: inline-block;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary}; // Laranja Amarelado
  padding: ${({ theme }) => theme.spacings.small} ${({ theme }) => theme.spacings.large};
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border: 2px solid ${({ theme }) => theme.colors.primary}; // Laranja Amarelado
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background-color 0.3s ease, color 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}; // Laranja Amarelado
    color: ${({ theme }) => theme.colors.secondary}; // Texto Marrom Escuro
    text-decoration: none;
  }
`;