// src/app/layout.tsx
import StyledComponentsRegistry from '@/lib/registry';
import  Providers  from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Primor Móveis - Marcenaria de Excelência',
  description: 'Móveis planejados com design e qualidade.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            {/* NENHUMA TAG <l> AQUI */}
            <Header />
            {children}
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}