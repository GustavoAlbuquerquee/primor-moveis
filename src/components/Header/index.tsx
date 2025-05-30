'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as S from './styles';

const Header = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Ensure consistent hydration by logging the current path
    console.log('Current path:', pathname);
  }, [pathname]);

  return (
    <S.HeaderWrapper>
      <S.LogoContainer href="/">
        {/* Static content for logo */}
        Primor Móveis
      </S.LogoContainer>
      <S.Nav>
        <S.NavLink href="/">Início</S.NavLink>
        <S.NavLink href="/sobre">Sobre Nós</S.NavLink>
        <S.NavLink href="/projetos">Projetos</S.NavLink>
        <S.NavLink href="/contato">Contato</S.NavLink>
      </S.Nav>
    </S.HeaderWrapper>
  );
};

export default Header;