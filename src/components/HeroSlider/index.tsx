"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";

// Importe os estilos do Swiper
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import * as S from "./styles";

const slidesData = [
  {
    id: 1,
    imageSrc: "/448879247_18110376001391916_7126232848381205299_n.jpg",
    keyword: "Sofisticação",
    caption:
      "Estética refinada, materiais nobres e um olhar apurado para o detalhe.",
  },
  {
    id: 2,
    imageSrc: "/271276842_281033080729086_6437836219440912397_n.jpg",
    keyword: "Design",
    caption: "Funcionalidade aliada à beleza.",
  },
  {
    id: 3,
    imageSrc: "/247186102_1040634840003920_3498541855514689556_n (1).jpg",
    keyword: "Acabamento",
    caption: "A diferença está nos detalhes.",
  },
  {
    id: 4,
    imageSrc: "/481143838_18135045238391916_6356660076397256996_n.jpg",
    keyword: "Compromisso",
    caption: "Pontualidade, transparência e respeito ao seu sonho.",
  },
  {
    id: 5,
    imageSrc: "/106906366_2699743146931892_839206458578922905_n.jpg",
    keyword: "Excelência",
    // 1. Legenda transformada em um array para a quebra de linha
    caption: [
      "Buscamos o mais alto nível em cada projeto.",
      "Da concepção à instalação, a excelência é o nosso padrão.",
    ],
  },
];

const HeroSlider = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.SliderWrapper>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <S.SlideContent>
              <Image
                src={slide.imageSrc}
                alt={slide.keyword}
                layout="fill"
                objectFit="cover"
                objectPosition={slide.id === 1 ? "center 70%" : "center"}
                priority={slide.id === 1}
              />
              <S.SlideOverlay />
              <S.SlideTextContainer>
                <S.Keyword>{slide.keyword}</S.Keyword>
                <S.Caption>
                  {/* 2. Lógica para renderizar a legenda com quebra de linha se for um array */}
                  {Array.isArray(slide.caption)
                    ? slide.caption.map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {index < slide.caption.length - 1 && <br />}
                        </React.Fragment>
                      ))
                    : slide.caption}
                </S.Caption>
              </S.SlideTextContainer>

              {/* 3. Adição da marca d'água */}
              <S.Watermark>Foto: Primor Móveis © {currentYear}</S.Watermark>
            </S.SlideContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.SliderWrapper>
  );
};

export default HeroSlider;
