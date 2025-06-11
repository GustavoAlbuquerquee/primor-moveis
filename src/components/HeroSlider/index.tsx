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

// --- DADOS DOS SLIDES ---
// **IMPORTANTE**: Substitua os 'imageSrc' pelos links das suas imagens REAIS.
// Eu usei placeholders pois não consigo acessar os links do Instagram diretamente.
const slidesData = [
  {
    id: 1,
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg", // **SUBSTITUA** pelo seu link do instagram
    keyword: "Sofisticação",
    caption:
      "Estética refinada, materiais nobres e um olhar apurado para o detalhe.",
  },
  {
    id: 2,
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg", // **SUBSTITUA** pelo seu link do instagram
    keyword: "Design",
    caption: "Funcionalidade aliada à beleza.",
  },
  {
    id: 3,
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg", // **SUBSTITUA** pelo seu link do instagram
    keyword: "Acabamento",
    caption: "A diferença está nos detalhes.",
  },
  {
    id: 4,
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg", // **SUBSTITUA** pelo seu link do instagram
    keyword: "Compromisso",
    caption: "Pontualidade, transparência e respeito ao seu sonho.",
  },
  {
    id: 5,
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg", // **SUBSTITUA** pelo seu link do instagram
    keyword: "Excelência",
    caption:
      "Buscamos o mais alto nível em cada projeto. Da concepção à instalação, a excelência é o nosso padrão.",
  },
];

const HeroSlider = () => {
  return (
    <S.SliderWrapper>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000, // Troca a cada 5 segundos
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
                priority={slide.id === 1} // Prioriza o carregamento da primeira imagem
              />
              <S.SlideOverlay />
              <S.SlideTextContainer>
                <S.Keyword>{slide.keyword}</S.Keyword>
                <S.Caption>{slide.caption}</S.Caption>
              </S.SlideTextContainer>
            </S.SlideContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.SliderWrapper>
  );
};

export default HeroSlider;
