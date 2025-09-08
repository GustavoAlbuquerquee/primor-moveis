import styled from 'styled-components';
const SobrePageWrapper = styled.div`
`;

const SobreHeroSection = styled.section`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  color: ${({ theme }) => theme.colors.textOnLight};
  padding: ${({ theme }) => theme.spacings.large} ${({ theme }) => theme.spacings.small};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacings.xlarge} ${({ theme }) => theme.spacings.medium};
    min-height: 35vh;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacings.xxlarge} ${({ theme }) => theme.spacings.medium};
    min-height: 40vh;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 50vh;
  }

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacings.small};
    font-family: ${({ theme }) => theme.fonts.headings};

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 2.4rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2.8rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 3.5rem;
    }
  }

  p {
    font-size: 1rem;
    max-width: 700px;
    margin: 0 auto;
    opacity: 0.9;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.1rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.2rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 1.4rem;
    }
  }
`;

const MainContentSection = styled.section`
  padding: ${({ theme }) => theme.spacings.large} 0;
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacings.xlarge} 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacings.xxlarge} 0;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacings.small};

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 0 ${({ theme }) => theme.spacings.medium};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 0 ${({ theme }) => theme.spacings.large};
    }
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacings.large};
    align-items: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      gap: ${({ theme }) => theme.spacings.xlarge};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .text-content {
    h2 {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: ${({ theme }) => theme.spacings.medium};

      @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1.8rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 2rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 2.2rem;
      }

      &::after {
        content: '';
        display: block;
        width: 50px;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.secondary};
        margin-top: ${({ theme }) => theme.spacings.small};

        @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
          width: 60px;
        }
      }
    }
    p {
      font-size: 0.95rem;
      line-height: 1.7;
      margin-bottom: ${({ theme }) => theme.spacings.medium};
      color: ${({ theme }) => theme.colors.darkGray};

      @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1rem;
        line-height: 1.75;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 1.05rem;
        line-height: 1.8;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 1.1rem;
      }
    }
  }

  .image-content {
    border-radius: ${({ theme }) => theme.borderRadius};
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    max-height: 350px;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      max-height: 400px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      max-height: 450px;
    }

    img, .next-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const ValuesSection = styled.section`
  padding: ${({ theme }) => theme.spacings.xxlarge} 0;
  background-color: ${({ theme }) => theme.colors.lightBackground}; 
  text-align: center;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacings.medium};
     @media (min-width: 768px) {
      padding: 0 ${({ theme }) => theme.spacings.large};
    }
  }

  h2 { 
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
  .content-grid { @media (min-width: 992px) { grid-template-columns: 1fr 1.2fr; } } 
`;

export { SobrePageWrapper, SobreHeroSection, MainContentSection, ValuesSection, ValueCard };

export const RevealWrapper = styled.div`
  position: relative;
  overflow: hidden;
  line-height: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    
    transform: translateX(0);
    
    transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1);
    z-index: 1; 
  }

  .reveal-image {
    opacity: 1;
    transform: scale(1.1); 
    transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1);
  }

  &.in-view {
    &::after {
      transform: translateX(101%);
    }
    .reveal-image {
      transform: scale(1);
    }
  }
`;