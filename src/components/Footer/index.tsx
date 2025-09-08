"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import * as S from "./styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.FooterWrapper>
      <S.MainFooter>
        <div className="container">
          <S.FooterGrid>
            <S.FooterColumn>
              <S.FooterTitle>Primor Móveis</S.FooterTitle>
              <S.Description>
                Móveis planejados em Belo Horizonte com mais de 25 anos de
                experiência, unindo design, qualidade e responsabilidade.
              </S.Description>
            </S.FooterColumn>

            <S.FooterColumn>
              <S.FooterTitle>Navegação</S.FooterTitle>
              <S.FooterNav>
                <li>
                  <Link href="/">Início</Link>
                </li>
                <li>
                  <Link href="/sobre">Sobre Nós</Link>
                </li>
                <li>
                  <Link href="/projetos">Projetos</Link>
                </li>
                <li>
                  <Link href="/contato">Contato</Link>
                </li>
              </S.FooterNav>
            </S.FooterColumn>

            <S.FooterColumn>
              <S.FooterTitle>Contato</S.FooterTitle>
              <S.ContactInfo>
                <p>
                  <FaWhatsapp />
                  <a
                    href="https://wa.me/5531999884688"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (31) 99988-4688
                  </a>
                </p>
                <p>
                  Rua Teodomira Diniz Lara, 48
                  <br />
                  Sagrada Família - Belo Horizonte/MG
                </p>
              </S.ContactInfo>
              <S.SocialLinks>
                <a
                  href="https://instagram.com/primormoveisbh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://facebook.com/primormoveis"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
              </S.SocialLinks>
            </S.FooterColumn>
          </S.FooterGrid>
        </div>
      </S.MainFooter>

      <S.SubFooter>
        <div className="container">
          <S.CopyrightText>
            © {currentYear} Primor Móveis. Todos os direitos reservados |
            12.654.132-0001/16
          </S.CopyrightText>
          <S.FooterLinks>
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>
            <Link href="/termos-de-uso">Termos de Uso</Link>
          </S.FooterLinks>
        </div>
      </S.SubFooter>
    </S.FooterWrapper>
  );
};

export default Footer;
