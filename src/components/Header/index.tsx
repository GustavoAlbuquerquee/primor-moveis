// src/components/Header/index.tsx
"use client";

import Link from "next/link";
import * as S from "./styles";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <S.HeaderWrapper>
      <S.NavContainer>
        <S.LogoContainer href="/" onClick={closeMobileMenu}>
          <S.Logo src="/cropped-logo-primor.png" alt="Logo Primor Móveis" />
          <S.LogoText>Primor Móveis</S.LogoText>
        </S.LogoContainer>
        
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

        <S.MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </S.MobileMenuButton>

        <S.MobileMenu $isOpen={isMobileMenuOpen}>
          <S.MobileNavLink 
            href="/" 
            className={pathname === "/" ? "active" : ""}
            onClick={closeMobileMenu}
          >
            Início
          </S.MobileNavLink>
          <S.MobileNavLink
            href="/sobre"
            className={pathname === "/sobre" ? "active" : ""}
            onClick={closeMobileMenu}
          >
            Sobre Nós
          </S.MobileNavLink>
          <S.MobileNavLink
            href="/projetos"
            className={pathname === "/projetos" ? "active" : ""}
            onClick={closeMobileMenu}
          >
            Projetos
          </S.MobileNavLink>
          <S.MobileNavLink
            href="/contato"
            className={pathname === "/contato" ? "active" : ""}
            onClick={closeMobileMenu}
          >
            Contato
          </S.MobileNavLink>
        </S.MobileMenu>
      </S.NavContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
