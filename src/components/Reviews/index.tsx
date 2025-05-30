'use client';

import * as S from './styles';

// Dados de exemplo para depoimentos
const sampleReviews = [
  { id: 1, name: 'Ana Silva', text: 'Amei minha cozinha nova! Ficou exatamente como sonhei. Atendimento nota 10!', stars: 5, initials: 'AS' },
  { id: 2, name: 'Carlos Pereira', text: 'Profissionais competentes e material de primeira. Recomendo a Primor Móveis.', stars: 5, initials: 'CP' },
  { id: 3, name: 'Juliana Costa', text: 'Meu home office ficou incrível, super funcional e bonito. Entrega no prazo.', stars: 4, initials: 'JC' },
];

// Função para gerar estrelas
const renderStars = (count: number) => {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    stars += i < count ? '★' : '☆'; // ★ para preenchida, ☆ para vazia
  }
  return stars;
};

const Reviews = () => {
  return (
    <S.ReviewsWrapper id="depoimentos">
      <S.SectionTitle>O que Nossos Clientes Dizem</S.SectionTitle>
      <S.ReviewsContainer>
        {sampleReviews.map((review) => (
          <S.ReviewCard key={review.id}>
            <S.CardHeader>
              <S.AvatarPlaceholder>{review.initials}</S.AvatarPlaceholder>
              <div>
                <S.ReviewAuthorName>{review.name}</S.ReviewAuthorName>
                <S.ReviewStars>{renderStars(review.stars)}</S.ReviewStars>
              </div>
            </S.CardHeader>
            <S.QuoteIcon>“</S.QuoteIcon>
            <S.ReviewText>{review.text}</S.ReviewText>
          </S.ReviewCard>
        ))}
      </S.ReviewsContainer>
    </S.ReviewsWrapper>
  );
};

export default Reviews;