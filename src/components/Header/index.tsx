'use client';

import Link from 'next/link';
import * as S from './styles';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.LogoContainer href="/">
        {/* Você pode usar uma tag <img> aqui para seu logo */}
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