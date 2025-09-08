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
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    display: block;
    width: 70px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.secondary};
    margin: 0.75rem auto 0;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;

    &::after {
      width: 50px;
      height: 3px;
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
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  text-align: left;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
    color: inherit;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    border-top-width: 3px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
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

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 0.75rem;
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
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacings.small} ${theme.spacings.large}`};
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
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
