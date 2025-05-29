"use client";
import About from '@/components/About'; // Reutilizando o componente About
import * as S from './styles';

export default function SobrePage() {
  return (
    <main>
      <S.SobrePageWrapper>
        {/* Você pode ter um título diferente ou um banner aqui se quiser */}
        <About /> {/* O componente About já tem um título "Sobre Nós" */}

        <S.AdditionalInfoSection>
          <h2>Nossa História e Valores</h2>
          <p>
            Aqui você pode detalhar mais sobre a história da Primor Móveis,
            a paixão pela marcenaria, os valores que guiam seu trabalho,
            a equipe, ou qualquer outra informação que julgar relevante para
            que seus clientes conheçam melhor a empresa.
          </p>
          <p>
            Fale sobre os tipos de materiais que vocês utilizam, o processo
            de criação, o atendimento personalizado, e o compromisso com a
            qualidade e satisfação do cliente.
          </p>
          {/* Adicione mais parágrafos, imagens, etc. */}
        </S.AdditionalInfoSection>
      </S.SobrePageWrapper>
    </main>
  );
}