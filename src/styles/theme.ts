// src/styles/theme.ts
export const theme = {
  colors: {
    primary: '#F0A02D',      // Laranja Amarelado (seu destaque principal)
    secondary: '#603829',    // Marrom Escuro (para textos principais, fundos escuros, acentos secundários)

    textOnLight: '#603829',  // Marrom Escuro para texto em fundos claros
    textOnDark: '#FFFFFF',   // Branco para texto em fundos escuros (como o Marrom ou Laranja)

    background: '#FFFFFF',   // Fundo principal do site (Branco)
    lightBackground: '#fbf7f4', // Um off-white/bege muito sutil para seções alternadas

    mediumGray: '#e0e0e0',     // Para bordas sutis
    darkGray: '#5a5a5a',       // Para textos secundários menos importantes
  },
  fonts: {
    main: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    headings: "'Georgia', serif", // Considere uma fonte mais moderna se 'Georgia' não se encaixar no "clean"
  },
  spacings: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
    xxlarge: '48px',
  },
  borderRadius: '8px',
};