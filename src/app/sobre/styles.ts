import styled from 'styled-components';
export { SobrePageWrapper, AdditionalInfoSection };
// Você pode adicionar estilos específicos para esta página se necessário
const SobrePageWrapper = styled.div`
  padding: 2rem 0; // Exemplo de espaçamento para a página
  // Adicione mais estilos de container se precisar
`;

const AdditionalInfoSection = styled.section`
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 2rem;
  text-align: justify;
  line-height: 1.8;
  color: #444;

  h2 {
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors?.primary || '#DAA520'};
    margin-bottom: 1rem;
    text-align: center;
  }
`;

