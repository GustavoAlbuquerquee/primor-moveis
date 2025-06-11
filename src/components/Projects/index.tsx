"use client";

import React, { useState, useMemo } from "react";
import styled from "styled-components";
import Image from "next/image";
import * as S from "./styles";

// --- DADOS DOS PROJETOS ---
// **IMPORTANTE**: Substitua com seus projetos REAIS.
// Use as descrições do Instagram e adicione a categoria correta.
const allProjects = [
  // Quartos
  {
    id: "q1",
    category: "Quartos",
    name: "Quarto Casal Aconchegante",
    description: "Descrição do Instagram aqui...",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },
  {
    id: "q2",
    category: "Quartos",
    name: "Quarto Solteiro Moderno",
    description: "Descrição do Instagram aqui...",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },
  // Sala
  {
    id: "s1",
    category: "Sala",
    name: "Painel de TV Ripado",
    description: "Descrição do Instagram aqui...",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },
  {
    id: "s2",
    category: "Sala",
    name: "Estante para Livros",
    description: "Descrição do Instagram aqui...",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },
  // Cozinha
  {
    id: "c1",
    category: "Cozinha",
    name: "Cozinha com Ilha Central",
    description: "Descrição do Instagram aqui...",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },
  // Corporativos
  {
    id: "corp1",
    category: "Corporativos",
    name: "Recepção de Empresa",
    description: "Descrição do Instagram aqui...",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },
  // Banheiros
  {
    id: "b1",
    category: "Banheiros",
    name: "Gabinete de Banheiro",
    description: "Descrição do Instagram aqui...",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },
  // Home Office
  {
    id: "ho1",
    category: "Home Office",
    name: "Escritório Planejado",
    description: "Descrição do Instagram aqui...",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },
  // Projetos Especiais
  {
    id: "pe1",
    category: "Projetos Especiais",
    name: "Painel com Metalon e Laqueado",
    description: "Descrição do Instagram aqui...",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },
  {
    id: "pe2",
    category: "Projetos Especiais",
    name: "Cabeceira Estofada",
    description: "Descrição do Instagram aqui...",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },
];

const categories = [
  "Todos",
  ...Array.from(new Set(allProjects.map((p) => p.category))),
];

export default function ProjetosPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Todos") {
      return allProjects;
    }
    return allProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main>
      <S.GalleryWrapper>
        <S.PageTitle>Nossos Projetos</S.PageTitle>
        <S.FilterContainer>
          {categories.map((category) => (
            <S.FilterButton
              key={category}
              $isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </S.FilterButton>
          ))}
        </S.FilterContainer>
        <S.ProjectsGrid>
          {filteredProjects.map((project) => (
            <S.ProjectCard key={project.id}>
              <div className="image-container">
                <Image
                  src={project.imageSrc}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="info-container">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </S.ProjectCard>
          ))}
        </S.ProjectsGrid>
      </S.GalleryWrapper>
    </main>
  );
}
