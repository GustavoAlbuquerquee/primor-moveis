import styled from 'styled-components';
import Link from 'next/link';

export const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: ${({ theme }) => theme.spacings.medium} ${({ theme }) => theme.spacings.small};
  text-align: center;
  color: ${({ theme }) => theme.colors.textOnDark};
  background-image: url('/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 60vh;
    padding: ${({ theme }) => theme.spacings.large} ${({ theme }) => theme.spacings.medium};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 70vh;
    padding: ${({ theme }) => theme.spacings.xlarge} ${({ theme }) => theme.spacings.medium};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(96, 56, 41, 0.6);
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
  position: relative;
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textOnDark};
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  line-height: 1.2;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.7);

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 3.8rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: ${({ theme }) => theme.spacings.large};
  color: ${({ theme }) => theme.colors.textOnDark};
  opacity: 0.9;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.6);

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.4rem;
  }
`;

export const CtaButton = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacings.small} ${({ theme }) => theme.spacings.large};
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background-color 0.3s ease, transform 0.2s ease, color 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacings.medium} ${({ theme }) => theme.spacings.xlarge};
    font-size: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.1rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textOnDark};
    text-decoration: none;
    transform: translateY(-2px);
  }
`;