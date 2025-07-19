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
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoContainer = styled.a`
  display: inline-block;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  max-width: 300px;
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
  }
`;

export const CopyrightText = styled.p`
  margin: 0;
  /* O flex-grow ajuda a ocupar o espaço, mas vamos deixar simples por enquanto */
  /* Ele terá um comportamento natural de ficar à esquerda */
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

  a {
    color: ${({ theme }) => `${theme.colors.textOnDark}BF`};
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      color: ${({ theme }) => theme.colors.textOnDark};
    }
  }
`;
