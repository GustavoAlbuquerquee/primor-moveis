'use client';

import * as S from './styles';

const About = () => {
  return (
    <S.AboutWrapper id="sobre"> {/* id para navegação interna se necessário */}
      <S.SectionTitle>Sobre Nós</S.SectionTitle>
      <S.Content>
        <S.Text>
          A Primor Móveis dedica-se a criar móveis planejados que combinam design inovador,
          funcionalidade e materiais de alta qualidade. Com anos de experiência no mercado,
          nossa equipe de profissionais está pronta para entender suas necessidades e
          transformar seus ambientes.
        </S.Text>
        <S.Text>
          Nosso compromisso é com a sua satisfação, desde o primeiro contato até a entrega
          e montagem final do seu projeto. Valorizamos a transparência, o cumprimento de
          prazos e, acima de tudo, a excelência em cada detalhe.
        </S.Text>
        {/* Você pode adicionar uma imagem aqui */}
        {/* <S.AboutImage src="/caminho/para/imagem-sobre.jpg" alt="Sobre a Primor Móveis" /> */}
      </S.Content>
    </S.AboutWrapper>
  );
};

export default About;