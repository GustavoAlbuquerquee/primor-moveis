import styled from "styled-components";

export const ProjectsSection = styled.section`
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textOnLight};
  margin-bottom: 64px;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 48px;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    margin-bottom: 48px;
  }
`;

export const ProjectCard = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 64px rgba(0, 0, 0, 0.15);
  }
`;

export const ProjectImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;

  img {
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

export const ProjectInfo = styled.div`
  padding: 24px;
`;

export const ProjectCategory = styled.span`
  display: inline-block;
  padding: 6px 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 20px;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const ProjectName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textOnLight};
  margin: 0;
  line-height: 1.4;
`;

export const ViewAllButton = styled.div`
  text-align: center;

  a {
    display: inline-block;
    padding: 16px 32px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(139, 69, 19, 0.3);

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(139, 69, 19, 0.4);
    }
  }
`;
