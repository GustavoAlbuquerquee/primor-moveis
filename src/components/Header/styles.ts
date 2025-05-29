import styled from 'styled-components';
import Link from 'next/link'; // Para estilizar o Link do Next

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors?: {
      primary?: string;
      secondary?: string;
      [key: string]: string | undefined;
    };
  }
}
export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333; // Cor de exemplo, ajuste conforme sua identidade visual
  color: white;
  border-bottom: 2px solid ${(props) => props.theme.colors?.primary || '#DAA520'}; // Exemplo usando tema
`;

export const LogoContainer = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: ${(props) => props.theme.colors?.secondary || '#B8860B'}; // Exemplo usando tema
    text-decoration: underline;
  }
`;