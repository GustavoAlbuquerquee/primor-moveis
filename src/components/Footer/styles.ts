import styled from "styled-components";
import Link from "next/link";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) =>
    theme.colors.secondary}; // Fundo Marrom Escuro
  color: ${({ theme }) =>
    `${theme.colors.textOnDark}BF`}; // Branco com ~75% de opacidade
`;

export const MainFooter = styled.div`
  padding: 2rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2.5rem 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 0;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 0 1.2rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 0 1.5rem;
    }

    @media (max-width: 480px) {
      padding: 0 0.75rem;
    }
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  text-align: center;

  @media (min-width: 480px) {
    text-align: left;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    text-align: left;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 2fr 1fr 1.5fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    text-align: center;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

  @media (min-width: 769px) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const LogoContainer = styled.a`
  display: inline-block;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  max-width: 300px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    max-width: 280px;
    margin: 0 auto;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    max-width: 260px;
    line-height: 1.5;
  }
`;

export const FooterTitle = styled.h4`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textOnDark};
  margin-bottom: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.headings};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.15rem;
    margin-bottom: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.6rem;
  }
`;

export const FooterNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: ${({ theme }) => `${theme.colors.textOnDark}BF`};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    
    li {
      margin-bottom: 0.6rem;
    }
    
    a {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    li {
      margin-bottom: 0.5rem;
    }
    
    a {
      font-size: 0.85rem;
    }
  }
`;

export const ContactInfo = styled.div`
  font-size: 0.9rem;
  line-height: 1.8;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 0.85rem;
    
    p {
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 0.6rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.6;
    
    p {
      margin-bottom: 0.5rem;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: ${({ theme }) => theme.colors.textOnDark};
    font-size: 1.5rem;
    transition:
      color 0.3s ease,
      transform 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1.2rem;
    
    a {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
    margin-top: 1rem;
    
    a {
      font-size: 1.4rem;
    }
  }
`;

export const SubFooter = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1rem 0;
  font-size: 0.7rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.2rem 0;
    font-size: 0.75rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1.5rem 0;
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 0;
    font-size: 0.65rem;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 0.8rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 0 1.2rem;
      gap: 1rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 0 1.5rem;
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }

    @media (max-width: 768px) {
      padding: 0 0.75rem;
      gap: 0.8rem;
      flex-direction: column;
      text-align: center;
    }

    @media (max-width: 480px) {
      padding: 0 0.5rem;
      gap: 0.6rem;
    }
  }
`;

export const CopyrightText = styled.p`
  margin: 0;
  
  @media (max-width: 768px) {
    text-align: center;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 0.65rem;
    line-height: 1.3;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    flex-direction: column;
    align-items: center;
  }

  a {
    color: ${({ theme }) => `${theme.colors.textOnDark}BF`};
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      color: ${({ theme }) => theme.colors.textOnDark};
    }

    @media (max-width: 480px) {
      font-size: 0.65rem;
      white-space: normal;
      text-align: center;
    }
  }
`;
