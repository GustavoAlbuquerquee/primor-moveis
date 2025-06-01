"use client";
import Projects from "@/components/Projects"; // Reutilizando o componente Projects
import styled from "styled-components";

const ProjetosPageWrapper = styled.div`
  padding-top: 2rem; // Adiciona um pouco de espaço no topo
  background-color: #fbf7f4;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors?.primary || "#DAA520"};
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 2rem; /* Adicionado para dar espaço após o header */

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 3px;
    background-color: ${(props) => props.theme.colors?.secondary || "#B8860B"};
    margin: 0.5rem auto 0;
  }
`;

export default function ProjetosPage() {
  return (
    <main>
      <ProjetosPageWrapper>
        <PageTitle>Galeria de Projetos</PageTitle>
        {/* O componente Projects já tem um título "Nossos Projetos" e um grid.
            Você pode querer modificar o componente Projects para aceitar mais itens
            ou uma prop para não mostrar o botão "Ver Galeria Completa" nesta página.
            Ou criar uma versão estendida dele. */}
        <Projects />
        {/* Aqui você poderia adicionar mais projetos, filtros, ou paginação */}
      </ProjetosPageWrapper>
    </main>
  );
}
