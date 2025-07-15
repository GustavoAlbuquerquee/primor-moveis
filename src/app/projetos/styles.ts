"use client";

import styled from "styled-components";

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
    content: "";
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
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : "transparent"};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.secondary : theme.colors.textOnLight};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacings.small} 1.5rem;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  will-change: transform, background-color, color;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacings.large};
  padding: 0 ${({ theme }) => theme.spacings.medium};
  max-width: 1300px;
  margin: 0 auto;
  position: relative;

  /* Otimizações para performance */
  & > * {
    will-change: transform, opacity;
    backface-visibility: hidden;
    transform: translateZ(0);
  }
`;

export const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  will-change: transform, box-shadow;

  .image-container {
    width: 100%;
    height: 250px;
    position: relative;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.borderRadius}
      ${({ theme }) => theme.borderRadius} 0 0;

    img {
      transition: transform 0.4s ease-in-out;
      will-change: transform;
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);

    .image-container img {
      transform: scale(1.1);
    }

    /* Faz o overlay aparecer no hover */
    .overlay {
      opacity: 1;
    }
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
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacings.medium} 1.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  will-change: transform, background-color, color, box-shadow;

  svg {
    font-size: 1.4rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textOnDark};
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;
