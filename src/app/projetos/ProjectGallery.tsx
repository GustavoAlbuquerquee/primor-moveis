"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Modal from "@/components/Modal";
import * as S from "./styles";
import { FaInstagram, FaPlus } from "react-icons/fa";

type ProjectType = {
  id: string;
  name: string;
  description: string;
  category: string;
  imageSrc: string;
  createdAt: Date;
  updatedAt: Date;
};

export default function ProjectGallery({
  projects,
}: {
  projects: ProjectType[];
}) {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const desiredOrder = [
    "Todos",
    "Quartos",
    "Sala",
    "Cozinha",
    "Corporativos",
    "Banheiros",
    "Home Office",
    "Projetos Especiais",
  ];

  const categories = [
    "Todos",
    ...desiredOrder
      .slice(1)
      .filter((cat) => projects.some((p) => p.category === cat)),
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Todos") {
      return projects;
    }
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <>
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
              <S.ProjectCard
                key={project.id}
                onClick={() => setSelectedProject(project)}
              >
                <div className="image-container">
                  <Image
                    src={project.imageSrc}
                    alt={project.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <S.CardOverlay>
                    <FaPlus />
                  </S.CardOverlay>
                </div>
                <div className="info-container">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </S.ProjectCard>
            ))}
          </S.ProjectsGrid>
          <S.InstagramButtonWrapper>
            <S.InstagramButton
              href="https://instagram.com/primormoveisbh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
              Ver mais projetos em nosso Instagram
            </S.InstagramButton>
          </S.InstagramButtonWrapper>
        </S.GalleryWrapper>
      </main>

      {selectedProject && (
        <Modal
          imageUrl={selectedProject.imageSrc}
          title={selectedProject.name}
          description={selectedProject.description}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
