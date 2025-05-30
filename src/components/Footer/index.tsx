'use client';

import * as S from './styles';
// Poderia importar ícones reais de uma biblioteca como react-icons
// import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <S.FooterWrapper>
      <S.FooterContent>
        <S.CopyrightText>
          &copy; {currentYear} Primor Móveis. Todos os direitos reservados.
        </S.CopyrightText>
        <S.FooterLinks>
          <S.FooterLink href="/politica-de-privacidade">Política de Privacidade</S.FooterLink>
          <S.FooterLink href="/termos-de-uso">Termos de Uso</S.FooterLink>
        </S.FooterLinks>
        <S.SocialMediaIcons>
          <a href="https://instagram.com/primormoveis" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            {/* <FaInstagram /> */} IG {/* Placeholder */}
          </a>
          <a href="https://facebook.com/primormoveis" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            {/* <FaFacebook /> */} FB {/* Placeholder */}
          </a>
          <a href="https://wa.me/SEUNUMEROWHATSAPP" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            {/* <FaWhatsapp /> */} WA {/* Placeholder */}
          </a>
        </S.SocialMediaIcons>
      </S.FooterContent>
    </S.FooterWrapper>
  );
};

export default Footer;