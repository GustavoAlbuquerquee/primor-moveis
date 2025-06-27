"use client";

import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import * as S from "./styles";

// 1. Importe o Swiper e os módulos necessários
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// 2. Importe os estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useInView } from "react-intersection-observer";
const sampleReviews = [
  {
    id: 1,
    name: "João Paulo",
    text: "Serviço muito bem executado. São bem transparentes em todo o processo. Uma empresa bem séria! Indico com segurança!!!!",
    stars: 5,
    avatarUrl: "/jp.png",
  },
  {
    id: 2,
    name: "Gustavo Castro",
    text: "Profissionais competentes e material de primeira. Recomendo a Primor Móveis.",
    stars: 5,
    avatarUrl: "/unnamed.jpg",
  },
  {
    id: 3,
    name: "Barbara Ribas",
    text: "Sem dúvida a melhor escolha pra móveis planejados! Fiquei super satisfeita, são pontuais e muito cuidadosos! Serviço de primeira linha! Indico de olhos fechados!!!",
    stars: 5,
    avatarUrl: "/barbara.png",
  },
];

// Função para gerar estrelas (continua a mesma)
const renderStars = (count: number) => {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    stars += i < count ? "★" : "☆";
  }
  return stars;
};

const Reviews = () => {
  // Link para a sua página de avaliações no Google
  const googleReviewsUrl =
    "https://www.google.com/search?q=primor+moveis+bh+reviews&rlz=1C1GCEA_enBR1147BR1147&oq=primor+moveis&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzINCAEQLhivARjHARiABDIJCAIQRRg5GIAEMgYIAxBFGEAyBwgEEAAYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg0NzcyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0xa69701b98f6acd:0x977586db7596b7a0,1,,,,"; // **SUBSTITUA PELA URL REAL**
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <S.ReviewsWrapper
      id="depoimentos"
      ref={ref}
      className={inView ? "in-view" : ""}
    >
      <S.SectionTitle>O que Nossos Clientes Dizem</S.SectionTitle>
      <S.ReviewsContainer>
        {sampleReviews.map((review) => (
          // O card inteiro agora é um link
          <S.ReviewCardLink
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            key={review.id}
          >
            <S.CardHeader>
              <S.AvatarImage
                src={review.avatarUrl}
                alt={`Foto de ${review.name}`}
                width={50}
                height={50}
              />
              <S.AuthorInfo>
                <S.ReviewAuthorName>{review.name}</S.ReviewAuthorName>
                <S.ReviewStars>{renderStars(review.stars)}</S.ReviewStars>
              </S.AuthorInfo>
              <S.GoogleIcon>
                <FaGoogle />
              </S.GoogleIcon>
            </S.CardHeader>
            <S.ReviewText>"{review.text}"</S.ReviewText>
          </S.ReviewCardLink>
        ))}
      </S.ReviewsContainer>
      <S.ViewMoreButton
        href={googleReviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Clique aqui para ver mais avaliações de nossos clientes
      </S.ViewMoreButton>
    </S.ReviewsWrapper>
  );
};

export default Reviews;
