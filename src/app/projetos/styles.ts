"use client";

import styled from "styled-components";

export const GalleryWrapper = styled.div`
  padding: ${({ theme }) => theme.spacings.medium} 0;
  min-height: 80vh;

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
  font-weight: 900;
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
    content: "";
    display: block;
    width: 80px;
    height: 5px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary},
      ${({ theme }) => theme.colors.primary},
      transparent
    );
    margin: 0.75rem auto;
    border-radius: 3px;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 100px;
      margin: 1rem auto;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 120px;
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
  background: ${({ $isActive, theme }) =>
    $isActive
      ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primary}dd)`
      : "transparent"};
  color: ${({ $isActive, theme }) =>
    $isActive ? "white" : theme.colors.textOnLight};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacings.small} 1rem;
  border-radius: 50px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  will-change: transform, background-color, color;
  font-size: 0.8rem;
  letter-spacing: 0.5px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacings.small} 1.2rem;
    font-size: 0.9rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacings.small} 1.5rem;
    font-size: 1rem;
  }

  &:hover {
    color: white;
    transform: translateY(-3px) scale(1.02);
    box-shadow:
      0 6px 20px ${({ theme }) => theme.colors.primary}40,
      0 8px 24px rgba(0, 0, 0, 0.12);
  }

  &:hover::before {
    left: ${({ $isActive }) => ($isActive ? "-100%" : "0")};
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacings.medium};
  padding: 0 ${({ theme }) => theme.spacings.small};
  max-width: 1300px;
  margin: 0 auto;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${({ theme }) => theme.spacings.large};
    padding: 0 ${({ theme }) => theme.spacings.medium};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  /* Otimizações para performance */
  & > * {
    will-change: transform, opacity;
    backface-visibility: hidden;
    transform: translateZ(0);
  }
`;

export const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.06),
    0 8px 24px rgba(0, 0, 0, 0.04);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  will-change: transform, box-shadow;
  overflow: hidden;

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

  .image-container {
    width: 100%;
    height: 250px;
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.secondary};

    img {
      transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1) !important;
      will-change: transform;
      transform: scale(1);
      filter: brightness(0.95);
    }
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow:
      0 12px 40px rgba(240, 160, 45, 0.15),
      0 20px 68px rgba(0, 0, 0, 0.12),
      0 0 0 1px rgba(240, 160, 45, 0.1);

    .image-container img {
      transform: scale(1.1) rotate(1deg);
      filter: brightness(1.05) contrast(1.05);
    }

    .overlay {
      opacity: 1;
    }
  }

  &:hover::before {
    transform: scaleX(1);
  }

  .info-container {
    padding: ${({ theme }) => theme.spacings.small};
    background: white;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: ${({ theme }) => theme.spacings.medium};
    }
  }

  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: ${({ theme }) => theme.spacings.small};
    font-size: 1rem;
    font-weight: 700;
    transition: color 0.3s ease;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.1rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.2rem;
    }
  }

  &:hover h3 {
    color: ${({ theme }) => theme.colors.primary};
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

export const CardOverlay = styled.div.attrs({ className: "overlay" })`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 2.5rem;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  border-radius: ${({ theme }) => theme.borderRadius}
    ${({ theme }) => theme.borderRadius} 0 0;
  will-change: opacity;
`;

export const InstagramButtonWrapper = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-bottom: 2rem;
`;

export const InstagramButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.primary}dd 100%
  );
  color: white;
  padding: ${({ theme }) => theme.spacings.medium} 1.5rem;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 4px 16px ${({ theme }) => theme.colors.primary}40,
    0 8px 24px rgba(0, 0, 0, 0.1);
  will-change: transform, background-color, color, box-shadow;
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

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0.75rem;
    padding: ${({ theme }) => theme.spacings.medium} 2rem;
    font-size: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacings.medium} 2.5rem;
    font-size: 1.1rem;
  }

  svg {
    font-size: 1.3rem;
    transition: transform 0.3s ease;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.5rem;
    }
  }

  &:hover {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.secondary} 0%,
      ${({ theme }) => theme.colors.secondary}dd 100%
    );
    color: white;
    transform: translateY(-4px) scale(1.02);
    box-shadow:
      0 8px 24px ${({ theme }) => theme.colors.secondary}50,
      0 16px 48px rgba(0, 0, 0, 0.15);
  }

  &:hover svg {
    transform: scale(1.1) rotate(5deg);
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
  }
`;
