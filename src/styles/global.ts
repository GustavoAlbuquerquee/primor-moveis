import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.textOnLight};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.headings};
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spacings.medium};
    color: ${({ theme }) => theme.colors.secondary};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
      text-decoration: none;
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

  .section-padding {
    padding: ${({ theme }) => theme.spacings.large} ${({ theme }) => theme.spacings.small};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: ${({ theme }) => theme.spacings.xlarge} ${({ theme }) => theme.spacings.medium};
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: ${({ theme }) => theme.spacings.xxlarge} ${({ theme }) => theme.spacings.medium};
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      padding: ${({ theme }) => `calc(${theme.spacings.xxlarge} * 1.5)`} ${({ theme }) => theme.spacings.large};
    }
  }

  .container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: ${({ theme }) => theme.spacings.small};
    padding-right: ${({ theme }) => theme.spacings.small};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding-left: ${({ theme }) => theme.spacings.medium};
      padding-right: ${({ theme }) => theme.spacings.medium};
    }
  }
`;

export const fadeInAnimation = css`
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;

  &.in-view {
    opacity: 1;
    transform: translateY(0);
  }
`;
export default GlobalStyles;
