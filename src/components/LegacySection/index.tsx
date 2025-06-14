"use client";
import React from "react";
import { FaCalendarAlt, FaHammer, FaStar } from "react-icons/fa"; // Ícones para ilustrar
import * as S from "./styles";

const LegacySection = () => {
  return (
    <S.SectionWrapper>
      <S.Title>Nossa Trajetória de Confiança</S.Title>
      <S.StatsContainer>
        <S.StatItem>
          <S.StatIcon>
            <FaCalendarAlt />
          </S.StatIcon>
          <S.StatNumber>+25</S.StatNumber>
          <S.StatText>Anos de História</S.StatText>
        </S.StatItem>

        <S.StatItem>
          <S.StatIcon>
            <FaHammer />
          </S.StatIcon>
          <S.StatNumber>+1.900</S.StatNumber>
          <S.StatText>Projetos Realizados</S.StatText>
        </S.StatItem>

        <S.StatItem>
          <S.StatIcon>
            <FaStar />
          </S.StatIcon>
          <S.StatNumber>Excelência</S.StatNumber>
          <S.StatText>em Design e Qualidade</S.StatText>
        </S.StatItem>
      </S.StatsContainer>
      <S.SubText>
        Compromisso com projetos que unem design, qualidade e responsabilidade.
      </S.SubText>
    </S.SectionWrapper>
  );
};

export default LegacySection;
