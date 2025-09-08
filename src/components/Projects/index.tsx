"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import * as S from "./styles";

const featuredProjects = [
  {
    id: "featured-1",
    name: "Suíte Master Elegante",
    category: "Quartos",
    imageSrc: "/projects/Quarto_1.jpg",
  },
  {
    id: "featured-2",
    name: "Home Theater Moderno",
    category: "Sala",
    imageSrc: "/projects/Sala_1.jpg",
  },
  {
    id: "featured-3",
    name: "Cozinha Gourmet",
    category: "Cozinha",
    imageSrc: "/projects/Cozinha_1.jpg",
  },
  {
    id: "featured-4",
    name: "Escritório Executivo",
    category: "Corporativos",
    imageSrc: "/projects/Corporativo_1.jpg",
  },
];

export default function Projects() {
  return (
    <S.ProjectsSection>
      <S.Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <S.SectionTitle>Nossos Projetos</S.SectionTitle>
          <S.SectionSubtitle>
            Conheça alguns dos nossos trabalhos mais marcantes
          </S.SectionSubtitle>
        </motion.div>

        <S.ProjectsGrid>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <S.ProjectCard>
                <S.ProjectImageWrapper>
                  <Image
                    src={project.imageSrc}
                    alt={project.name}
                    fill
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjNmNGY2O3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlNWU3ZWI7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIgLz4KICA8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxMjUiIHI9IjIwIiBmaWxsPSIjZGRkZGRkIiBvcGFjaXR5PSIwLjYiLz4KPC9zdmc+"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <S.ProjectOverlay />
                </S.ProjectImageWrapper>
                <S.ProjectInfo>
                  <S.ProjectCategory>{project.category}</S.ProjectCategory>
                  <S.ProjectName>{project.name}</S.ProjectName>
                </S.ProjectInfo>
              </S.ProjectCard>
            </motion.div>
          ))}
        </S.ProjectsGrid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <S.ViewAllButton>
            <Link href="/projetos">Ver Todos os Projetos</Link>
          </S.ViewAllButton>
        </motion.div>
      </S.Container>
    </S.ProjectsSection>
  );
}
