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
  font-weight: 900;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
  position: relative;
  display: inline-block;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 5px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary},
      ${({ theme }) => theme.colors.primary},
      transparent
    );
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;

    &::after {
      width: 80px;
      height: 4px;
    }
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
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.06),
    0 8px 32px rgba(0, 0, 0, 0.04);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 2;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow:
      0 12px 40px rgba(240, 160, 45, 0.15),
      0 20px 68px rgba(0, 0, 0, 0.12),
      0 0 0 1px rgba(240, 160, 45, 0.1);
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

export const ProjectImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.secondary};

  img {
    transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
    filter: brightness(0.95);
  }

  &:hover img {
    transform: scale(1.1) rotate(1deg);
    filter: brightness(1.05) contrast(1.05);
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
    rgba(96, 56, 41, 0) 0%,
    rgba(96, 56, 41, 0.2) 60%,
    rgba(96, 56, 41, 0.6) 100%
  );
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: radial-gradient(
      ellipse at bottom,
      ${({ theme }) => theme.colors.primary}40 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${ProjectCard}:hover & {
    opacity: 1;
  }

  ${ProjectCard}:hover &::after {
    opacity: 1;
  }
`;

export const ProjectInfo = styled.div`
  padding: 24px;
  position: relative;
  background: white;
`;

export const ProjectCategory = styled.span`
  display: inline-block;
  padding: 6px 14px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primary}dd
  );
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 20px;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.primary}40;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${ProjectCard}:hover & {
    transform: translateX(4px);
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.primary}60;
  }
`;

export const ProjectName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textOnLight};
  margin: 0;
  line-height: 1.4;
  transition: color 0.3s ease;

  ${ProjectCard}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ViewAllButton = styled.div`
  text-align: center;

  a {
    display: inline-block;
    padding: 18px 40px;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.primary}dd 100%
    );
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1.1rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow:
      0 4px 16px ${({ theme }) => theme.colors.primary}40,
      0 8px 32px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    letter-spacing: 0.5px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
      );
      transition: left 0.5s ease;
    }

    &:hover::before {
      left: 100%;
    }

    &:hover {
      background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.secondary} 0%,
        ${({ theme }) => theme.colors.secondary}dd 100%
      );
      transform: translateY(-3px) scale(1.02);
      box-shadow:
        0 8px 24px ${({ theme }) => theme.colors.secondary}50,
        0 16px 48px rgba(0, 0, 0, 0.15);
    }

    &:active {
      transform: translateY(-1px) scale(0.98);
    }
  }
`;
