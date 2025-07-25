"use client";

import * as S from "./styles";
import ImageReveal from "@/components/ImageReveal"; // Importe o componente ImageReveal

export default function SobrePage() {
  return (
    <main>
      <S.SobrePageWrapper>
        <S.SobreHeroSection>
          <h1>Mais de 25 Anos Construindo Sonhos</h1>
          <p>
            Com sede em Belo Horizonte, somos especialistas em transformar
            ambientes com móveis planejados de alto padrão.
          </p>
        </S.SobreHeroSection>

        <S.ContentSection>
          <div className="container">
            <div className="content-grid">
              <div className="text-content">
                <h2>Nossa História</h2>
                <p>
                  Fundada há mais de duas décadas em Belo Horizonte, a Primor
                  Móveis nasceu da paixão pela marcenaria de precisão. Com mais
                  de <strong>1500 projetos realizados</strong>, consolidamos uma
                  trajetória de compromisso com a qualidade, design inovador e,
                  acima de tudo, a satisfação total de nossos clientes.
                  Atendemos em toda BH e região metropolitana, levando soluções
                  inteligentes para lares e empresas.
                </p>
              </div>
              <div className="image-content">
                {/* Use o componente ImageReveal aqui */}
                <ImageReveal
                  src="/velho_fofo.jpg"
                  alt="Detalhe de móvel Primor Móveis"
                  width={500} // Ajuste as dimensões conforme necessário
                  height={400}
                />
              </div>
            </div>
          </div>
        </S.ContentSection>

        <S.CategorySection>
          <div className="container">
            <div className="content-grid">
              <div className="image-content">
                {/* Use o componente ImageReveal aqui */}
                <ImageReveal
                  src="/Atendimento.jpg"
                  alt="Ambiente residencial com móveis planejados"
                  width={500}
                  height={400}
                />
              </div>
              <div className="text-content">
                <h2>Atendimento Residencial e Corporativo</h2>
                <p>
                  Entendemos que cada espaço tem sua própria identidade. Por
                  isso, desenvolvemos projetos tanto para o conforto e aconchego
                  do seu <strong>lar (residencial)</strong>, quanto para a
                  funcionalidade e sofisticação do seu{" "}
                  <strong>ambiente de trabalho (corporativo)</strong>. Nossa
                  equipe está preparada para criar cozinhas, quartos, salas,
                  home offices, escritórios, lojas e consultórios que refletem a
                  personalidade e atendem às necessidades de cada cliente.
                </p>
              </div>
            </div>
          </div>
        </S.CategorySection>

        <S.ContentSection>
          <div className="container">
            <div className="content-grid">
              <div className="text-content">
                <h2>Projetos Especiais e Acabamentos</h2>
                <p>
                  Nossa expertise vai além do convencional. Somos especialistas
                  em <strong>projetos especiais</strong> que exigem um alto
                  nível de detalhamento técnico e estético. Dominamos uma vasta
                  gama de acabamentos e materiais, incluindo:
                </p>
                <ul>
                  <li>✓ Laqueamento de alta precisão</li>
                  <li>✓ Estruturas em Metalon</li>
                  <li>✓ Cabeceiras estofadas sob medida</li>
                  <li>✓ Aplicação de vidros, espelhos e tecidos</li>
                  <li>✓ Pinturas e acabamentos personalizados</li>
                </ul>
              </div>
              <div className="image-content">
                {/* Use o componente ImageReveal aqui */}
                <ImageReveal
                  src="/297159615_1232909324178406_8282355693598399566_n.jpg"
                  alt="Detalhe de acabamento com metalon e laqueamento"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </S.ContentSection>
      </S.SobrePageWrapper>
    </main>
  );
}
