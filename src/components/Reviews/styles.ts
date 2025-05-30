import styled from 'styled-components';

export const ReviewsWrapper = styled.section`
  padding: 4rem 2rem; /* Aumentei o padding vertical */
  background-color: #f8f9fa; /* Um fundo levemente acinzentado para destacar os cards */
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.4rem; /* Um pouco maior */
  color: ${(props) => props.theme.colors?.primary || '#DAA520'};
  margin-bottom: 3rem; /* Mais espaço abaixo do título */
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 70px; /* Barra um pouco maior */
    height: 4px; /* Barra um pouco mais espessa */
    background-color: ${(props) => props.theme.colors?.secondary || '#B8860B'};
    margin: 0.75rem auto 0;
  }
`;

export const ReviewsContainer = styled.div`
  display: grid; /* Usando grid para melhor controle */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsivo */
  gap: 2rem; /* Espaço entre os cards */
  max-width: 1200px; /* Aumentei a largura máxima */
  margin: 0 auto;
`;

export const ReviewCard = styled.div`
  background-color: #fff;
  border: 1px solid #e9ecef;
  border-top: 5px solid ${(props) => props.theme.colors?.primary || '#DAA520'}; /* Borda superior colorida */
  padding: 2rem; /* Mais padding interno */
  border-radius: 12px; /* Bordas mais arredondadas */
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08); /* Sombra mais suave e moderna */
  text-align: left; /* Alinhar texto à esquerda dentro do card */
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const AvatarPlaceholder = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors?.secondary || '#B8860B'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 1rem;
`;

export const ReviewAuthorName = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #343a40;
  margin: 0;
`;

export const ReviewStars = styled.div`
  color: #ffc107; /* Cor amarela para estrelas */
  font-size: 1.1rem; /* Tamanho das estrelas */
  margin-top: 0.25rem;
`;

export const QuoteIcon = styled.div`
  font-size: 3rem;
  color: ${(props) => props.theme.colors?.primary || '#DAA520'};
  line-height: 1;
  margin-bottom: 0.5rem;
  /* Para um ícone de aspas mais estilizado, você pode usar um SVG ou uma fonte de ícones */
  /* Exemplo simples com caractere: */
  /* content: '“'; // Se usar como ::before em ReviewText, por exemplo */
`;

export const ReviewText = styled.p`
  font-size: 1rem;
  font-style: normal; /* Removi o itálico padrão, pode ser opcional */
  color: #495057; /* Cor de texto um pouco mais suave */
  line-height: 1.7; /* Melhor espaçamento entre linhas */
  margin-bottom: 0; /* Removido margin-bottom pois o card já tem padding */
  flex-grow: 1; /* Para o texto ocupar o espaço e alinhar autores caso os textos tenham tamanhos diferentes */
`;

// O antigo ReviewAuthor foi substituído por ReviewAuthorName dentro do CardHeader
// export const ReviewAuthor = styled.p`
//   font-size: 1rem;
//   font-weight: bold;
//   color: #333;
//   text-align: right;
// `;