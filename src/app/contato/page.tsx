"use client";
import Contact from '@/components/Contact'; // Reutilizando o componente Contact
import styled from 'styled-components';

const ContatoPageWrapper = styled.div`
  padding-top: 2rem;
  min-height: calc(100vh - 200px); // Exemplo para ocupar mais espaço vertical
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors?.primary || '#DAA520'};
  text-align: center;
  margin-bottom: 1rem; /* Reduzido um pouco pois o componente Contact já tem um título */
  margin-top: 2rem; /* Adicionado para dar espaço após o header */

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background-color: ${(props) => props.theme.colors?.secondary || '#B8860B'};
    margin: 0.5rem auto 0;
  }
`;


export default function ContatoPage() {
  return (
    <main>
      <ContatoPageWrapper>
        {/* O componente Contact já tem um título "Entre em Contato",
            então um título de página aqui é opcional ou pode ser diferente. */}
        {/* <PageTitle>Fale Conosco</PageTitle> */}
        <Contact />
      </ContatoPageWrapper>
    </main>
  );
}