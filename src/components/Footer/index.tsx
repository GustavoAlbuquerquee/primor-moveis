'use client';

import * as S from './styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <S.FooterWrapper>
      <S.FooterContent>
        <S.CopyrightText>
          &copy; {currentYear} Primor Móveis. Todos os direitos reservados.
        </S.CopyrightText>
        <S.FooterLinks>
          {/* Adicione links úteis ou de redes sociais aqui */}
          {/* <S.FooterLink href="/politica-de-privacidade">Política de Privacidade</S.FooterLink>
          <S.FooterLink href="/termos-de-uso">Termos de Uso</S.FooterLink> */}
        </S.FooterLinks>
        {/* <S.SocialMediaIcons>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
        </S.SocialMediaIcons> */}
      </S.FooterContent>
    </S.FooterWrapper>
  );
};

export default Footer;