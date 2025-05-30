'use client';
// (Mantenha os imports e o componente como estava, apenas envolva com NavContainer)
import Link from 'next/link';
import * as S from './styles';
// import { usePathname } from 'next/navigation'; // Para links ativos

const Header = () => {
  // const pathname = usePathname(); // Para links ativos

  return (
    <S.HeaderWrapper>
      <S.NavContainer> {/* Adicionado este container */}
        <S.LogoContainer href="/">
          Primor Móveis
        </S.LogoContainer>
        <S.Nav>
          {/* Adicione className={pathname === '/' ? 'active' : ''} para links ativos */}
          <S.NavLink href="/">Início</S.NavLink>
          <S.NavLink href="/sobre">Sobre Nós</S.NavLink>
          <S.NavLink href="/projetos">Projetos</S.NavLink>
          <S.NavLink href="/contato">Contato</S.NavLink>
        </S.Nav>
        {/* <S.MobileMenuButton>☰</S.MobileMenuButton> */} {/* Se for implementar menu mobile */}
      </S.NavContainer>
    </S.HeaderWrapper>
  );
};

export default Header;