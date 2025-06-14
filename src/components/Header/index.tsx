// src/components/Header/index.tsx
"use client";

import Link from "next/link";
import * as S from "./styles";
import { usePathname } from "next/navigation"; // Para links ativos

const Header = () => {
  const pathname = usePathname(); // Para links ativos

  return (
    <S.HeaderWrapper>
      <S.NavContainer>
        {/* O container da logo agora tem a imagem e o texto */}
        <S.LogoContainer href="/">
          <S.Logo src="/cropped-logo-primor.png" alt="Logo Primor Móveis" />
          <S.LogoText>Primor Móveis</S.LogoText>{" "}
        </S.LogoContainer>{" "}
        <S.Nav>
          <S.NavLink href="/" className={pathname === "/" ? "active" : ""}>
            Início
          </S.NavLink>
          <S.NavLink
            href="/sobre"
            className={pathname === "/sobre" ? "active" : ""}
          >
            Sobre Nós
          </S.NavLink>
          <S.NavLink
            href="/projetos"
            className={pathname === "/projetos" ? "active" : ""}
          >
            Projetos
          </S.NavLink>
          <S.NavLink
            href="/contato"
            className={pathname === "/contato" ? "active" : ""}
          >
            Contato
          </S.NavLink>
        </S.Nav>
        {/* <S.MobileMenuButton>☰</S.MobileMenuButton> */}
      </S.NavContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
