import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { fadeInAnimation } from "@/styles/global";
export const ViewsWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  text-align: center;
  ${fadeInAnimation}

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.6rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    display: block;
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
    margin: 0.75rem auto 0;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;

    &::after {
      width: 70px;
      height: 4px;
    }
  }
`;

export const ReviewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto auto;
    gap: 1.5rem;
    max-width: 100%;

    > :nth-child(1) {
      grid-column: 1;
      grid-row: 1;
    }

    > :nth-child(2) {
      grid-column: 2;
      grid-row: 1;
    }

    > :nth-child(3) {
      grid-column: 1 / -1;
      grid-row: 2;
      max-width: 400px;
      justify-self: center;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;

    > :nth-child(3) {
      max-width: 350px;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 1rem;

    > :nth-child(1),
    > :nth-child(2),
    > :nth-child(3) {
      grid-column: auto;
      grid-row: auto;
      max-width: none;
      justify-self: auto;
    }
  }
`;

export const ReviewCardLink = styled(Link)`
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-top: 5px solid ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  border-radius: 12px;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.06),
    0 8px 25px rgba(0, 0, 0, 0.05);
  text-align: left;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow:
      0 12px 32px rgba(240, 160, 45, 0.12),
      0 20px 48px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(240, 160, 45, 0.1);
    border-top-color: transparent;
    color: inherit;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-top-width: 4px;

    &:hover {
      transform: translateY(-4px) scale(1.01);
      box-shadow:
        0 8px 24px rgba(240, 160, 45, 0.1),
        0 12px 32px rgba(0, 0, 0, 0.08);
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const AvatarImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 3px solid ${({ theme }) => theme.colors.primary}40;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  ${ReviewCardLink}:hover & {
    transform: scale(1.1) rotate(5deg);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 6px 16px ${({ theme }) => theme.colors.primary}40;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 0.75rem;
    border-width: 2px;
  }
`;

export const AuthorInfo = styled.div`
  flex-grow: 1;
`;

export const ReviewAuthorName = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const ReviewStars = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
  margin-top: 0.25rem;
  filter: drop-shadow(0 2px 4px ${({ theme }) => theme.colors.primary}40);
  transition: all 0.3s ease;

  ${ReviewCardLink}:hover & {
    transform: scale(1.1);
    filter: drop-shadow(0 4px 8px ${({ theme }) => theme.colors.primary}60);
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const GoogleIcon = styled.div`
  font-size: 1.5rem;
  color: #dddddd;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ViewMoreButton = styled(Link)`
  display: inline-block;
  margin-top: 2.5rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacings.medium} ${theme.spacings.xlarge}`};
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
    background: ${({ theme }) => theme.colors.primary};
    transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }

  &:hover::before {
    left: 0;
  }

  &:hover {
    color: white;
    transform: translateY(-3px);
    box-shadow:
      0 8px 20px ${({ theme }) => theme.colors.primary}40,
      0 12px 32px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const ReviewText = styled.p`
  font-size: 1rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.textOnLight};
  line-height: 1.7;
  margin-bottom: 0;
  flex-grow: 1;

  &::before {
    content: "“";
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.primary};
    line-height: 0;
    margin-right: 0.5rem;
    vertical-align: -0.6em;
    font-style: normal;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;

    &::before {
      font-size: 2.2rem;
      margin-right: 0.3rem;
      vertical-align: -0.5em;
    }
  }
`;
