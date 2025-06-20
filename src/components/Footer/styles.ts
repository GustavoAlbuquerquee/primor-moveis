import styled from "styled-components";
import Link from "next/link";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) =>
    theme.colors.secondary}; // Fundo Marrom Escuro
  color: ${({ theme }) =>
    `${theme.colors.textOnDark}BF`}; // Branco com ~75% de opacidade
`;

export const MainFooter = styled.div`
  padding: 3rem 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
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
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textOnDark};
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.headings};
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

// --- SEÇÃO CORRIGIDA ---
export const SubFooter = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1.5rem 0; // Aumentei um pouco o padding para dar mais respiro
  font-size: 0.8rem;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between; // Essencial para separar os itens
    align-items: center;
    flex-wrap: wrap; // Permite que os itens quebrem para a linha de baixo em telas pequenas
    gap: 1rem; // Espaçamento entre os itens quando quebram a linha
  }
`;

export const CopyrightText = styled.p`
  margin: 0;
  /* O flex-grow ajuda a ocupar o espaço, mas vamos deixar simples por enquanto */
  /* Ele terá um comportamento natural de ficar à esquerda */
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center; // Centraliza os links caso a linha quebre
  gap: 2rem; // Aumenta o espaço entre os links

  a {
    color: ${({ theme }) => `${theme.colors.textOnDark}BF`};
    text-decoration: none;
    white-space: nowrap; // Evita que "Política de Privacidade" quebre em duas linhas

    &:hover {
      color: ${({ theme }) => theme.colors.textOnDark};
    }
  }
`;
