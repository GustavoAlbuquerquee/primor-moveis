"use client";
import Contact from "@/components/Contact";
import styled from "styled-components";

const ContatoPageWrapper = styled.div`
  padding-top: 1rem;
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 2rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors?.primary || "#DAA520"};
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
    margin-top: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.2rem;
    margin-top: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 2.5rem;
  }

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background-color: ${(props) => props.theme.colors?.secondary || "#B8860B"};
    margin: 0.5rem auto 0;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 70px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 80px;
    }
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
