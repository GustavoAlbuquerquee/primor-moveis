"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import * as S from "./styles";

const whatsappUrl = `https://wa.me/5531997115473?text=${encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento."
)}`;

const slidesData = [
  {
    id: 1,
    imageSrc: "/hero-sala-painel-tv-madeira.jpg",
    alt: "Sala de estar com painel de TV em madeira e rack planejado sob medida",
    objectPosition: "center 70%",
    keyword: "Sofisticação",
    caption:
      "Estética refinada, materiais nobres e um olhar apurado para o detalhe.",
  },
  {
    id: 2,
    imageSrc: "/hero-sala-estante-iluminada.jpg",
    alt: "Sala de estar com estante iluminada e painel de TV em porcelanato marmorizado",
    objectPosition: "center",
    keyword: "Design",
    caption: "Funcionalidade aliada à beleza.",
  },
  {
    id: 3,
    imageSrc: "/hero-lounge-corporativo-madeira.jpg",
    alt: "Lounge corporativo com paredes revestidas em madeira clara e iluminação linear embutida",
    objectPosition: "center",
    keyword: "Acabamento",
    caption: "A diferença está nos detalhes.",
  },
  {
    id: 4,
    imageSrc: "/hero-estante-metalon-nichos.jpg",
    alt: "Estante vazada em metalon preto com nichos de madeira e plantas",
    objectPosition: "center",
    keyword: "Compromisso",
    caption: "Pontualidade, transparência e respeito ao seu sonho.",
  },
  {
    id: 5,
    imageSrc: "/hero-cozinha-ilha-granito.jpg",
    alt: "Cozinha planejada com ilha em granito preto e armários amadeirados",
    objectPosition: "top",
    keyword: "Excelência",
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
                alt={slide.alt}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: slide.objectPosition,
                }}
                priority={slide.id === 1}
                sizes="100vw"
              />
              <S.SlideOverlay />
              <S.SlideTextContainer>
                <S.Keyword>{slide.keyword}</S.Keyword>
                <S.Caption>
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

              <S.Watermark>Foto: Primor Móveis © {currentYear}</S.Watermark>
            </S.SlideContent>
          </SwiperSlide>
        ))}
      </Swiper>

      <S.HeroFrame>
        <S.Tagline>Móveis planejados sob medida em Belo Horizonte</S.Tagline>
        <S.CtaButton
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Peça seu orçamento
        </S.CtaButton>
      </S.HeroFrame>
    </S.SliderWrapper>
  );
};

export default HeroSlider;
