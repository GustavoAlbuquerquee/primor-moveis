'use client';

import * as S from './styles';

const Hero = () => {
  return (
    <S.HeroWrapper>
      {/* Adicione uma imagem de fundo via styled-components ou <img> se preferir */}
      <S.HeroContent>
        <S.Title>Móveis Planejados com Primor e Qualidade</S.Title>
        <S.Subtitle>Transformamos seus sonhos em ambientes únicos e funcionais.</S.Subtitle>
        <S.CtaButton href="/contato">Solicite um Orçamento</S.CtaButton>
      </S.HeroContent>
    </S.HeroWrapper>
  );
};

export default Hero;