'use client';

import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  padding: ${({ theme }) => theme.spacings.xlarge} 0;
  min-height: 80vh;
`;

export const PageTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.8rem;
  margin-bottom: ${({ theme }) => theme.spacings.medium};

  &::after {
    content: '';
    display: block;
    width: 70px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.secondary};
    margin: 0.75rem auto;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacings.small};
  margin-bottom: ${({ theme }) => theme.spacings.xlarge};
  padding: 0 ${({ theme }) => theme.spacings.medium};
`;

export const FilterButton = styled.button<{ $isActive: boolean }>`
  background-color: ${({ $isActive, theme }) => $isActive ? theme.colors.primary : 'transparent'};
  color: ${({ $isActive, theme }) => $isActive ? theme.colors.secondary : theme.colors.textOnLight};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacings.small} ${({ theme }) => theme.spacings.large};
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacings.large};
  padding: 0 ${({ theme }) => theme.spacings.medium};
  max-width: 1300px;
  margin: 0 auto;
`;

export const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }

  .image-container {
    width: 100%;
    height: 250px;
    position: relative;
  }

  .info-container {
    padding: ${({ theme }) => theme.spacings.medium};
  }

  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: ${({ theme }) => theme.spacings.small};
    font-size: 1.2rem;
  }

  p {
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: 0.9rem;
  }
`;