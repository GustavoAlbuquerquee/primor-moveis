// src/components/Projects/styles.ts
import styled from 'styled-components';


// --- Styled Components para a Galeria ---
 export const GalleryWrapper = styled.div`
  padding: ${({ theme }) => theme.spacings.medium} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacings.large} 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacings.xlarge} 0;
  }
`;
export const PageTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  margin-bottom: ${({ theme }) => theme.spacings.medium};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 2.8rem;
  }

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.secondary};
    margin: 0.5rem auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 60px;
      height: 4px;
      margin: 0.75rem auto;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 70px;
    }
  }
`;
export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacings.small};
  margin-bottom: ${({ theme }) => theme.spacings.large};
  padding: 0 ${({ theme }) => theme.spacings.small};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacings.medium};
    margin-bottom: ${({ theme }) => theme.spacings.xlarge};
  }
`;
export const FilterButton = styled.button<{ $isActive: boolean }>`
  background-color: ${({ $isActive, theme }) => $isActive ? theme.colors.primary : 'transparent'};
  color: ${({ $isActive, theme }) => $isActive ? theme.colors.secondary : theme.colors.textOnLight};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacings.small} 1rem;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.8rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacings.small} 1.2rem;
    font-size: 0.9rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacings.small} ${({ theme }) => theme.spacings.large};
    font-size: 1rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacings.medium};
  padding: 0 ${({ theme }) => theme.spacings.small};
  max-width: 1300px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${({ theme }) => theme.spacings.large};
    padding: 0 ${({ theme }) => theme.spacings.medium};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;
export const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.03);
  }
  
  .image-container {
    width: 100%;
    height: 200px;
    position: relative;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      height: 225px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      height: 250px;
    }
  }
  
  .info-container {
    padding: ${({ theme }) => theme.spacings.small};

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: ${({ theme }) => theme.spacings.medium};
    }
  }
  
  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: ${({ theme }) => theme.spacings.small};
    font-size: 1rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.1rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.2rem;
    }
  }
  
  p {
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: 0.8rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 0.85rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 0.9rem;
    }
  }
`;