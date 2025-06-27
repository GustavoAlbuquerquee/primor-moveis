"use client";
import React from "react";
import { FaCalendarAlt, FaHammer, FaStar } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import * as S from "./styles";

// 1. CRIAMOS UM NOVO COMPONENTE SÓ PARA O NÚMERO ANIMADO
const AnimatedNumber = ({
  end,
  separator,
  prefix,
}: {
  end: number;
  separator?: string;
  prefix?: string;
}) => {
  // A lógica de visibilidade agora fica encapsulada aqui dentro
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <span ref={ref}>
      {/* O CountUp só renderiza quando o 'span' está visível */}
      {inView && (
        <CountUp
          start={0}
          end={end}
          duration={2.5}
          separator={separator}
          prefix={prefix}
        />
      )}
    </span>
  );
};

const LegacySection = () => {
  return (
    <S.SectionWrapper>
      <S.Title>Nossa Trajetória de Confiança</S.Title>

      <S.StatsContainer>
        {/* O 'StatItem' e 'StatNumber' agora são mais simples */}
        <S.StatItem>
          <S.StatIcon>
            <FaCalendarAlt />
          </S.StatIcon>
          <S.StatNumber>
            <AnimatedNumber end={25} prefix="+" />
          </S.StatNumber>
          <S.StatText>Anos de Experiência</S.StatText>
        </S.StatItem>

        <S.StatItem>
          <S.StatIcon>
            <FaHammer />
          </S.StatIcon>
          <S.StatNumber>
            <AnimatedNumber end={1900} separator="." prefix="+" />
          </S.StatNumber>
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
