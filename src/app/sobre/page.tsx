'use client';

import Image from 'next/image'; // Para imagens otimizadas
import { SobrePageWrapper, SobreHeroSection, MainContentSection, ValuesSection, ValueCard } from './styles';
import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa'; // Ícones de exemplo

export default function SobrePage() {
  return (
    <main>
      <SobrePageWrapper>
        <SobreHeroSection>
          <div> {/* Wrapper para conteúdo do Hero */}
            <h1>Conheça a Essência da Primor Móveis</h1>
            <p>Tradição, qualidade e inovação na arte da marcenaria, transformando seus ambientes com móveis planejados sob medida.</p>
          </div>
        </SobreHeroSection>

        <MainContentSection>
          <div className="container">
            <div className="content-grid">
              <div className="text-content">
                <h2>Nossa Paixão pela Marcenaria</h2>
                <p>
                  Na Primor Móveis, cada peça é mais do que um móvel; é a materialização de um sonho,
                  construída com a precisão de artesãos experientes e a paixão por transformar madeira
                  em arte funcional. Desde [Ano de Fundação], dedicamo-nos a entender as necessidades
                  individuais de cada cliente, criando soluções personalizadas que aliam estética,
                  ergonomia e durabilidade.
                </p>
                <p>
                  Utilizamos apenas materiais de primeira linha, selecionados com rigor, e investimos
                  constantemente em tecnologia e aperfeiçoamento de técnicas para garantir que cada projeto
                  entregue exceda as expectativas. Nosso compromisso vai além da entrega: buscamos construir
                  relacionamentos de confiança, pautados pela transparência e pelo respeito aos prazos.
                </p>
              </div>
              <div className="image-content">
                {/* Coloque uma imagem representativa aqui. Ex: oficina, detalhe de móvel, equipe */}
                <Image
                  src="/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg" // SUBSTITUA PELA SUA IMAGEM
                  alt="Ambiente da marcenaria Primor Móveis"
                  width={600}
                  height={450}
                  className="next-image" // Para aplicar estilos se necessário
                />
              </div>
            </div>
          </div>
        </MainContentSection>

        <ValuesSection>
          <div className="container">
            <h2>Nossos Pilares</h2>
            <div className="values-grid">
              <ValueCard>
                <div className="icon"><FaBullseye /></div>
                <h3>Missão</h3>
                <p>Criar móveis planejados de alta qualidade que inspirem e melhorem a vida das pessoas, combinando design inovador com funcionalidade e atendimento personalizado.</p>
              </ValueCard>
              <ValueCard>
                <div className="icon"><FaEye /></div>
                <h3>Visão</h3>
                <p>Ser referência em marcenaria sob medida, reconhecida pela excelência, inovação e pela capacidade de transformar os sonhos dos nossos clientes em realidade.</p>
              </ValueCard>
              <ValueCard>
                <div className="icon"><FaHeart /></div>
                <h3>Valores</h3>
                <p>Qualidade, Compromisso, Inovação, Transparência, Paixão pelo que fazemos e Respeito ao cliente e ao meio ambiente.</p>
              </ValueCard>
            </div>
          </div>
        </ValuesSection>

        {/* Você pode adicionar mais seções aqui, como "Nossa História" ou "Nossa Equipe" */}

      </SobrePageWrapper>
    </main>
  );
}