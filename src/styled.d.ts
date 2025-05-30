// src/styled.d.ts
import 'styled-components';

// 👇👇 ESTA LINHA É CRÍTICA 👇👇
// Certifique-se de que o caminho './styles/theme' está CORRETO
// e aponta para o arquivo ONDE VOCÊ DEFINIU E EXPORTOU seu objeto 'theme'.
// Se o seu arquivo de tema está, por exemplo, em 'src/config/theme.ts',
// então aqui deveria ser import { theme } from './config/theme';
import { theme } from './styles/theme'; // Onde está seu arquivo theme.ts?

// Se a importação acima falhar ou 'theme' for 'undefined' aqui,
// o AppTheme não será inferido corretamente.
type AppTheme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppTheme {}
}