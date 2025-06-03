// src/components/Header/styles.ts
import styled from 'styled-components';
import Link from 'next/link';

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.background}; // Branco
  padding: ${({ theme }) => theme.spacings.medium} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacings.medium};

  @media (min-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacings.large};
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center; // Alinha verticalmente a imagem e o texto
  text-decoration: none;
  gap: ${({ theme }) => theme.spacings.small}; /* Espaçamento entre a imagem e o texto. Ajuste 'small' (8px) ou 'medium' (16px) conforme o gosto */
`;

export const Logo = styled.img`
  height: 40px; /* Altura da imagem da logo. Ajuste entre 35px a 50px para um header típico. */
  width: auto;   /* Mantém a proporção da imagem */
  display: block;
  transition: opacity 0.3s ease;

  ${LogoContainer}:hover & {
    opacity: 0.8;
  }

`;


export const LogoText = styled.span`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 1.75rem; /* Tamanho do texto. Ajuste para equilibrar com a altura da imagem (40px). */
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary}; // Marrom Escuro (para texto "primor")
  line-height: 1; /* Ajuda no alinhamento vertical preciso com a imagem */
  transition: color 0.3s ease;

  ${LogoContainer}:hover & {
    color: ${({ theme }) => theme.colors.primary}; // Laranja Amarelado no hover do link
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.large};
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textOnLight}; // Marrom Escuro
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: ${({ theme }) => theme.spacings.small} 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary}; // Laranja Amarelado
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary}; // Laranja Amarelado
    text-decoration: none;
    &::after {
      width: 100%;
    }
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    &::after {
      width: 100%;
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textOnLight};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;