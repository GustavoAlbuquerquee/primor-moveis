"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Modal from "@/components/Modal";
import * as S from "./styles";
import { FaInstagram, FaPlus } from "react-icons/fa"; // Importando o ícone de 'Mais'

type ProjectType = {
  id: string;
  category: string;
  name: string;
  description: string;
  imageSrc: string;
};

const allProjects = [
  // Quartos - 6 projetos
  {
    id: "q1",
    category: "Quartos",
    name: "Quarto Casal Aconchegante",
    description: "Móveis planejados com design moderno e funcional para casal",
    imageSrc: "/projects/Quarto_1.jpg",
  },
  {
    id: "q2",
    category: "Quartos",
    name: "Quarto Solteiro Moderno",
    description:
      "Ambiente otimizado com soluções inteligentes de armazenamento",
    imageSrc: "/projects/Quarto_2.jpg",
  },
  {
    id: "q3",
    category: "Quartos",
    name: "Quarto Infantil Criativo",
    description: "Design lúdico e seguro para o desenvolvimento das crianças",
    imageSrc: "/projects/Quarto_3.jpg",
  },
  {
    id: "q4",
    category: "Quartos",
    name: "Suíte Master Elegante",
    description:
      "Ambiente sofisticado com closet integrado e acabamentos premium",
    imageSrc: "/projects/Quarto_4.jpg",
  },
  {
    id: "q5",
    category: "Quartos",
    name: "Quarto Jovem Contemporâneo",
    description: "Espaço moderno para adolescentes com área de estudos",
    imageSrc: "/projects/Quarto_5.jpg",
  },
  {
    id: "q6",
    category: "Quartos",
    name: "Quarto Compacto Funcional",
    description: "Aproveitamento máximo do espaço com móveis multifuncionais",
    imageSrc: "/projects/Quarto_6.jpg",
  },

  // Sala - 6 projetos
  {
    id: "s1",
    category: "Sala",
    name: "Painel de TV Ripado",
    description: "Design moderno com textura em madeira e iluminação LED",
    imageSrc: "/projects/Sala_1.jpg",
  },
  {
    id: "s2",
    category: "Sala",
    name: "Estante para Livros",
    description: "Biblioteca planejada com nichos decorativos e funcionais",
    imageSrc: "/projects/Sala_2.jpg",
  },
  {
    id: "s3",
    category: "Sala",
    name: "Sala de Estar Integrada",
    description: "Ambiente amplo e aconchegante para convívio familiar",
    imageSrc: "/projects/Sala_3.jpg",
  },
  {
    id: "s4",
    category: "Sala",
    name: "Home Theater Sofisticado",
    description: "Espaço dedicado ao entretenimento com acústica planejada",
    imageSrc: "/projects/Sala_4.jpg",
  },
  {
    id: "s5",
    category: "Sala",
    name: "Sala de Jantar Elegante",
    description: "Mesa e buffet planejados para receber convidados",
    imageSrc: "/projects/Sala_5.jpg",
  },
  {
    id: "s6",
    category: "Sala",
    name: "Living Minimalista",
    description: "Design clean com linhas retas e cores neutras",
    imageSrc: "/projects/Sala_6.jpg",
  },

  // Cozinha - 6 projetos
  {
    id: "c1",
    category: "Cozinha",
    name: "Cozinha com Ilha Central",
    description: "Ilha multifuncional com cooktop e área de preparo ampliada",
    imageSrc: "/projects/Cozinha_1.jpg",
  },
  {
    id: "c2",
    category: "Cozinha",
    name: "Cozinha Americana Integrada",
    description: "Integração perfeita com sala de estar e jantar",
    imageSrc: "/projects/Cozinha_2.jpg",
  },
  {
    id: "c3",
    category: "Cozinha",
    name: "Cozinha Gourmet Completa",
    description: "Equipamentos de alta qualidade e acabamentos premium",
    imageSrc: "/projects/Cozinha_3.jpg",
  },
  {
    id: "c4",
    category: "Cozinha",
    name: "Cozinha Compacta Funcional",
    description: "Otimização de espaço sem perder funcionalidade",
    imageSrc: "/projects/Cozinha_4.jpg",
  },
  {
    id: "c5",
    category: "Cozinha",
    name: "Cozinha Industrial Residencial",
    description: "Estilo industrial com praticidade e durabilidade",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },
  {
    id: "c6",
    category: "Cozinha",
    name: "Cozinha Clássica Atemporal",
    description: "Design tradicional com toques contemporâneos",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },

  // Corporativos - 6 projetos
  {
    id: "corp1",
    category: "Corporativos",
    name: "Recepção de Empresa",
    description: "Primeira impressão profissional com design corporativo",
    imageSrc: "/projects/Corporativo_1.jpg",
  },
  {
    id: "corp2",
    category: "Corporativos",
    name: "Sala de Reuniões Executiva",
    description: "Ambiente profissional para reuniões e apresentações",
    imageSrc: "/projects/Corporativo_2.jpg",
  },
  {
    id: "corp3",
    category: "Corporativos",
    name: "Escritório Diretoria",
    description: "Móveis executivos com design imponente e funcional",
    imageSrc: "/projects/Corporativo_3.jpg",
  },
  {
    id: "corp4",
    category: "Corporativos",
    name: "Open Office Moderno",
    description: "Estações de trabalho integradas e colaborativas",
    imageSrc: "/projects/Corporativo_4.jpg",
  },
  {
    id: "corp5",
    category: "Corporativos",
    name: "Sala de Treinamento",
    description: "Ambiente versátil para capacitações e workshops",
    imageSrc: "/projects/Corporativo_5.jpg",
  },
  {
    id: "corp6",
    category: "Corporativos",
    name: "Lounge Corporativo",
    description: "Área de descanso e networking para funcionários",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },

  // Banheiros - 6 projetos
  {
    id: "b1",
    category: "Banheiros",
    name: "Gabinete de Banheiro",
    description: "Móvel sob medida com acabamento resistente à umidade",
    imageSrc: "/projects/Banheiro_1.jpg",
  },
  {
    id: "b2",
    category: "Banheiros",
    name: "Banheiro Suite Master",
    description: "Design luxuoso com banheira e acabamentos premium",
    imageSrc: "/projects/Banheiro_2.jpg",
  },
  {
    id: "b3",
    category: "Banheiros",
    name: "Lavabo Elegante",
    description: "Pequeno espaço com grande impacto visual",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },
  {
    id: "b4",
    category: "Banheiros",
    name: "Banheiro Social Moderno",
    description: "Design contemporâneo com praticidade no dia a dia",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },
  {
    id: "b5",
    category: "Banheiros",
    name: "Banheiro Infantil Lúdico",
    description: "Móveis coloridos e seguros para crianças",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },
  {
    id: "b6",
    category: "Banheiros",
    name: "Banheiro Minimalista",
    description: "Linhas clean com foco na funcionalidade",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },

  // Home Office - 6 projetos
  {
    id: "ho1",
    category: "Home Office",
    name: "Escritório Planejado",
    description: "Ambiente produtivo com organização e conforto",
    imageSrc: "/projects/Home_office_1.jpg",
  },
  {
    id: "ho2",
    category: "Home Office",
    name: "Home Office Executivo",
    description: "Móveis sofisticados para profissionais liberais",
    imageSrc: "/projects/Home_office_2.jpg",
  },
  {
    id: "ho3",
    category: "Home Office",
    name: "Estúdio Criativo",
    description: "Espaço inspirador para artistas e designers",
    imageSrc: "/projects/Home_office_3.jpg",
  },
  {
    id: "ho4",
    category: "Home Office",
    name: "Cantinho de Estudos",
    description: "Área compacta e funcional para estudos",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },
  {
    id: "ho5",
    category: "Home Office",
    name: "Biblioteca com Escritório",
    description: "Combinação perfeita de trabalho e conhecimento",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },
  {
    id: "ho6",
    category: "Home Office",
    name: "Escritório Compartilhado",
    description: "Espaço para casais que trabalham em casa",
    imageSrc: "/360_F_250493771_IXqI9j7XfRFIDXpKw0lAo427B7sj5BjE.jpg",
  },

  // Projetos Especiais - 6 projetos
  {
    id: "pe1",
    category: "Projetos Especiais",
    name: "Painel com Metalon e Laqueado",
    description: "Combinação única de materiais para um visual exclusivo",
    imageSrc: "/projects/Especiais_1.jpg",
  },
  {
    id: "pe2",
    category: "Projetos Especiais",
    name: "Cabeceira Estofada",
    description: "Conforto e elegância para o quarto principal",
    imageSrc: "/projects/Especiais_2.jpg",
  },
  {
    id: "pe3",
    category: "Projetos Especiais",
    name: "Bar Residencial",
    description: "Espaço para entretenimento com adega integrada",
    imageSrc: "/projects/Especiais_3.jpg",
  },
  {
    id: "pe4",
    category: "Projetos Especiais",
    name: "Closet de Luxo",
    description: "Guarda-roupa dos sonhos com iluminação especial",
    imageSrc: "/projects/Especiais_4.jpg",
  },
  {
    id: "pe5",
    category: "Projetos Especiais",
    name: "Sala de Música",
    description: "Acústica planejada para instrumentos musicais",
    imageSrc: "/projects/Especiais_5.jpg",
  },
  {
    id: "pe6",
    category: "Projetos Especiais",
    name: "Móvel de Apoio Curvilíneo",
    description: "Design orgânico com formas exclusivas",
    imageSrc: "/projects/Especiais_6.jpg",
  },
];

const categories = [
  "Todos",
  ...Array.from(new Set(allProjects.map((p) => p.category))),
];

export default function ProjetosPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Todos") {
      return allProjects;
    }
    return allProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

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
                  />
                  <S.CardOverlay></S.CardOverlay>
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
              href="https://instagram.com/primormoveisbh" // Corrigi para o seu insta
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
