import styled from 'styled-components';
// Você pode adicionar estilos específicos para esta página se necessário
const SobrePageWrapper = styled.div`
  // Sem padding aqui, as seções internas controlarão seu próprio padding
`;

const SobreHeroSection = styled.section`
  background-color: ${({ theme }) => theme.colors.lightBackground}; // Fundo marrom escuro
  color: ${({ theme }) => theme.colors.textOnLight};
  padding: ${({ theme }) => theme.spacings.xxlarge} ${({ theme }) => theme.spacings.medium};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40vh; // Altura ajustável
flex-direction: column;
  // Você pode adicionar uma imagem de fundo sutil aqui também, se desejar
  // background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/caminho/para/imagem-sobre-hero.jpg');
  // background-size: cover;
  // background-position: center;

  h1 {
    font-size: 2.8rem;
    color: ${({ theme }) => theme.colors.primary}; // Título claro
    margin-bottom: ${({ theme }) => theme.spacings.small};
    font-family: ${({ theme }) => theme.fonts.headings};
  }

  p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    opacity: 0.9;
  }

  @media (min-width: 768px) {
    min-height: 50vh;
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;

const MainContentSection = styled.section`
  padding: ${({ theme }) => theme.spacings.xxlarge} 0; // Espaçamento vertical
  background-color: ${({ theme }) => theme.colors.background};

  .container { // Reutilizando a classe container dos GlobalStyles
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacings.medium};

    @media (min-width: 768px) {
      padding: 0 ${({ theme }) => theme.spacings.large};
    }
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacings.xlarge};
    align-items: center;

    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr; // Duas colunas em telas maiores
    }
  }

  .text-content {
    h2 {
      font-size: 2.2rem;
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: ${({ theme }) => theme.spacings.medium};
      &::after { /* Detalhe de subtítulo */
        content: '';
        display: block;
        width: 60px;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.secondary};
        margin-top: ${({ theme }) => theme.spacings.small};
      }
    }
    p {
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: ${({ theme }) => theme.spacings.medium};
      color: ${({ theme }) => theme.colors.darkGray};
    }
  }

  .image-content {
    border-radius: ${({ theme }) => theme.borderRadius};
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    max-height: 450px; // Limita altura da imagem
    img, .next-image { // Para <Image> do Next.js ou <img>
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const ValuesSection = styled.section`
  padding: ${({ theme }) => theme.spacings.xxlarge} 0;
  background-color: ${({ theme }) => theme.colors.lightBackground}; // Fundo alternativo
  text-align: center;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacings.medium};
     @media (min-width: 768px) {
      padding: 0 ${({ theme }) => theme.spacings.large};
    }
  }

  h2 { // Título da seção de valores
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacings.medium};
    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.secondary};
      margin: 0.5rem auto ${({ theme }) => theme.spacings.xlarge} auto;
    }
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${({ theme }) => theme.spacings.large};
  }
`;

const ValueCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacings.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 8px 25px rgba(0,0,0,0.07);
  text-align: center;

  .icon {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacings.medium};
  }

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: ${({ theme }) => theme.spacings.small};
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.darkGray};
    line-height: 1.6;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  
  img {
    object-fit: cover !important;
    width: 100% !important;
    height: 100% !important;
  }
`;

export const ContentSection = styled.section`
  padding: 4rem 2rem;
  .container { max-width: 1100px; margin: 0 auto; }
  .content-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: center; @media (min-width: 992px) { grid-template-columns: 1.2fr 1fr; } }
  .text-content h2 { font-size: 2.2rem; color: ${({ theme }) => theme.colors.primary}; }
  .text-content p { font-size: 1.1rem; line-height: 1.8; margin-bottom: 1rem; color: ${({ theme }) => theme.colors.darkGray}; }
  .text-content ul { font-size: 1.1rem; line-height: 1.8; margin-bottom: 1rem; color: ${({ theme }) => theme.colors.darkGray}; }
  .image-content { 
    border-radius: 8px; 
    overflow: hidden; 
    width: 100%;
  }
`;

export const CategorySection = styled(ContentSection)`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  .content-grid { @media (min-width: 992px) { grid-template-columns: 1fr 1.2fr; } } // Inverte a ordem
`;

export { SobrePageWrapper, SobreHeroSection, MainContentSection, ValuesSection, ValueCard };

export const RevealWrapper = styled.div`
  position: relative;
  overflow: hidden;
  line-height: 0;

  /* A "cortina" colorida que revela a imagem */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    
    /* MUDANÇA 1: A cortina agora começa cobrindo a imagem */
    transform: translateX(0);
    
    /* A transição agora é um pouco mais lenta e suave */
    transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1);
    z-index: 1; // Para ficar sobre a imagem
  }

  /* A imagem em si */
  .reveal-image {
    /* MUDANÇA 2: A imagem agora começa visível (opacity: 1), mas atrás da cortina */
    opacity: 1;
    transform: scale(1.1); // Começa com um leve zoom para dar mais dinamismo
    transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1);
  }

  /* Quando o componente está visível na tela */
  &.in-view {
    &::after {
      /* MUDANÇA 3: A "cortina" desliza para a direita, saindo de vista e revelando a imagem */
      transform: translateX(101%);
    }
    .reveal-image {
      /* A imagem volta ao tamanho normal, criando um efeito de zoom reverso */
      transform: scale(1);
    }
  }
`;