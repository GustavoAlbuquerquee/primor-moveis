import styled from 'styled-components';

export const AboutWrapper = styled.section`
  padding: 3rem 2rem;
  background-color: #fff; // Cor de fundo de exemplo
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors?.primary || '#DAA520'};
  margin-bottom: 2rem;
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

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.8;
  color: #444;
`;

export const Text = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  text-align: justify;

  @media (min-width: 768px) {
    text-align: left; // Em telas maiores, pode justificar ou alinhar à esquerda
  }
`;

export const AboutImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;