// src/styles/theme.ts
export const theme = {
  colors: {
    // ... suas cores continuam aqui ...
    primary: "#F0A02D",
    secondary: "#603829",
    textOnLight: "#603829",
    textOnDark: "#FFFFFF",
    background: "#FFFFFF",
    lightBackground: "#fbf7f4",
    mediumGray: "#e0e0e0",
    darkGray: "#5a5a5a",
  },
  fonts: {
    // 4. ATUALIZE AQUI para usar as variáveis CSS
    main: "var(--font-lato)", // Fonte para textos
    headings: "var(--font-montserrat)", // Fonte para títulos
  },
  spacings: {
    // ... seus espaçamentos ...
    small: "8px",
    medium: "16px",
    large: "24px",
    xlarge: "32px",
    xxlarge: "48px",
  },
  breakpoints: {
    mobile: "400px",
    tablet: "768px",
    desktop: "1024px",
    wide: "1200px",
  },
  borderRadius: "8px",
};
