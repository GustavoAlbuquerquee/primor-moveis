// src/styles/global.ts
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 100%; /* Garante que 1rem = 16px por padrão, mas permite zoom do usuário */
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors?.text ?? '#000'};
    background-color: ${({ theme }) => theme.colors?.background ?? '#fff'};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.headings};
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spacings.medium};
    color: ${({ theme }) => theme.colors.text}; /* ou uma cor específica para títulos */
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
      text-decoration: underline;
    }
  }

  button {
    cursor: pointer;
    border: none;
    font-family: ${({ theme }) => theme.fonts.main};
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul, ol {
    list-style: none;
  }

  // Helper para seções padrão
  .section-padding {
    padding: ${({ theme }) => theme.spacings.xxlarge} ${({ theme }) => theme.spacings.medium};

    @media (min-width: 768px) {
      padding: ${({ theme }) => `calc(${theme.spacings.xxlarge} * 1.5)`} ${({ theme }) => theme.spacings.large};
    }
  }

  .container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: ${({ theme }) => theme.spacings.medium};
    padding-right: ${({ theme }) => theme.spacings.medium};
  }
`;

export default GlobalStyles;