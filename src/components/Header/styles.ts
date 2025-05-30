import styled from 'styled-components';
import Link from 'next/link';

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacings.medium} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000; // Para ficar acima de outros conteúdos
  width: 100%;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px; /* ou o tamanho do seu container principal */
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacings.medium};

  @media (min-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacings.large};
  }
`;

export const LogoContainer = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.headings};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.large};
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
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
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    &::after {
      width: 100%;
    }
  }

  /* Adicionar uma classe para o link ativo, se você implementar essa lógica com usePathname */
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    &::after {
      width: 100%;
    }
  }
`;

// Para o botão de menu mobile (se você for adicionar)
export const MobileMenuButton = styled.button`
  display: none; // Escondido por padrão, mostrar em telas menores via media query
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;