'use client';

import { ReactNode } from 'react';
import { GlobalStyle } from '@/styles/global';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
