// src/app/providers.tsx
'use client';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/global'; // Verifique o caminho
import { theme } from '@/styles/theme';    // Verifique o caminho e se 'theme' é exportado corretamente

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>  {/* Certifique-se de que 'theme' aqui é o seu objeto de tema importado */}
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}