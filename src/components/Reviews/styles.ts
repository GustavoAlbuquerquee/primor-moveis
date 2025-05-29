import styled from 'styled-components';

export const ReviewsWrapper = styled.section`
  padding: 3rem 2rem;
  background-color: #fff;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors?.primary || '#DAA520'};
  margin-bottom: 2.5rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: ${(props) => props.theme.colors?.secondary || '#B8860B'};
    margin: 0.5rem auto 0;
  }
`;

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row; // Lado a lado em telas maiores
    justify-content: space-around;
  }
`;

export const ReviewCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-left: 5px solid ${(props) => props.theme.colors?.primary || '#DAA520'};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  flex: 1; // Para que os cards dividam o espaço igualmente em row
`;

export const ReviewText = styled.p`
  font-size: 1rem;
  font-style: italic;
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

export const ReviewAuthor = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  text-align: right;
`;

// export const ReviewStars = styled.div`
//   color: #ffd700; // Cor de estrela
//   font-size: 1.2rem;
//   text-align: right;
//   margin-top: 0.5rem;
// `;