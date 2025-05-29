'use client';

import * as S from './styles';

// Dados de exemplo para depoimentos
const sampleReviews = [
  { id: 1, name: 'Ana Silva', text: 'Amei minha cozinha nova! Ficou exatamente como sonhei. Atendimento nota 10!', stars: 5 },
  { id: 2, name: 'Carlos Pereira', text: 'Profissionais competentes e material de primeira. Recomendo a Primor Móveis.', stars: 5 },
  { id: 3, name: 'Juliana Costa', text: 'Meu home office ficou incrível, super funcional e bonito. Entrega no prazo.', stars: 4 },
];

const Reviews = () => {
  return (
    <S.ReviewsWrapper id="depoimentos">
      <S.SectionTitle>O que Nossos Clientes Dizem</S.SectionTitle>
      <S.ReviewsContainer>
        {sampleReviews.map((review) => (
          <S.ReviewCard key={review.id}>
            <S.ReviewText>"{review.text}"</S.ReviewText>
            <S.ReviewAuthor>- {review.name}</S.ReviewAuthor>
            {/* <S.ReviewStars>{"⭐".repeat(review.stars)}</S.ReviewStars> */}
          </S.ReviewCard>
        ))}
      </S.ReviewsContainer>
    </S.ReviewsWrapper>
  );
};

export default Reviews;