"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import Image from "next/image";
import Modal from "@/components/Modal";
import * as S from "./styles";
import { FaInstagram, FaPlus } from "react-icons/fa"; // Importando o ícone de 'Mais'
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

type ProjectType = {
  id: string;
  category: string;
  name: string;
  description: string;
  imageSrc: string;
};

// Função para embaralhar array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const allProjectsBase = [
  // Quartos - 5 projetos preenchidos
  {
    id: "q1",
    category: "Quartos",
    name: "Suíte Master Elegante com Painel Ripado",
    description:
      "Um refúgio de sofisticação e conforto. Implementada por um imponente painel ripado com iluminação indireta, criando uma atmosfera de aconchego.",
    imageSrc: "/projects/Quarto_1.jpg",
  },
  {
    id: "q2",
    category: "Quartos",
    name: "Quarto Jovem com Marcenaria Integrada",
    description:
      "Solução completa que integra cama, estante com nicho decorativo e um banco-baú na janela, otimizando o espaço com funcionalidade.",
    imageSrc: "/projects/Quarto_2.jpg",
  },
  {
    id: "q3",
    category: "Quartos",
    name: "Quarto com Bancada e Painel Iluminado",
    description:
      "Projeto que combina diferentes texturas, com cabeceira estofada e painel de madeira com iluminação embutida e armário espelhado.",
    imageSrc: "/projects/Quarto_3.jpg",
  },
  {
    id: "q4",
    category: "Quartos",
    name: "Armário de madeira Planejado do Piso ao Teto",
    description:
      "Aproveitamento máximo do espaço com armário do piso ao teto. O nicho em tom azul cria um ponto de cor e personalidade no projeto.",
    imageSrc: "/projects/Quarto_4.jpg",
  },
  {
    id: "q5",
    category: "Quartos",
    name: "Bancada Iluminada e Multifuncional para Quarto",
    description:
      "Espaço de estudos e beleza com bancada que inclui penteadeira com espelho iluminado, nichos organizadores e baú de apoio.",
    imageSrc: "/projects/Quarto_5.jpg",
  },

  // Sala - 7 projetos
  {
    id: "s1",
    category: "Sala",
    name: "Home Theater com Iluminação",
    description:
      "Painel para TV com fundo em porcelanato e iluminação embutida, combinado com estante lateral decorativa para um design leve e sofisticado.",
    imageSrc: "/projects/Sala_1.jpg",
  },
  {
    id: "s2",
    category: "Sala",
    name: "Divisória de Ambientes em Painel",
    description:
      "Painel ripado que funciona como uma elegante divisória de ambientes, com rack suspenso e iluminação de destaque. Uma solução moderna e versátil.",
    imageSrc: "/projects/Sala_2.jpg",
  },
  {
    id: "s3",
    category: "Sala",
    name: "Estante Vazada em Madeira",
    description:
      "Estante com estrutura leve em metalon dourado e prateleiras em madeira, integrada ao painel ripado. Design que valoriza a decoração.",
    imageSrc: "/projects/Sala_3.jpg",
  },
  {
    id: "s4",
    category: "Sala",
    name: "Home Theater em Tons de Cinza",
    description:
      "Painel para TV combinando diferentes tons de cinza e textura ripada. O móvel baixo suspenso cria um visual moderno e organizado.",
    imageSrc: "/projects/Sala_4.jpg",
  },
  {
    id: "s5",
    category: "Sala",
    name: "Home Theater Minimalista 'All Black'",
    description:
      "Design minimalista e imponente com painel e rack flutuante em acabamento preto. O nicho superior com iluminação cria um ponto de destaque.",
    imageSrc: "/projects/Sala_5.jpg",
  },
  {
    id: "s6",
    category: "Sala",
    name: "Cristaleira para Sala de Jantar",
    description:
      "Aparador planejado em MDF Azul com nicho iluminado e armários superiores com portas em espelho, que ampliam e sofisticam o ambiente.",
    imageSrc: "/projects/Sala_6.jpg",
  },
  {
    id: "s7",
    category: "Sala",
    name: "Rack com Painel Decorativo com pé direito duplo",
    description:
      "Rack baixo e suspenso de design minimalista, com detalhe ripado para ventilação. O painel lateral em tom escuro delimita o espaço da TV.",
    imageSrc: "/projects/Sala_7.jpg",
  },
  // Cozinha - 6 projetos
  {
    id: "c1",
    category: "Cozinha",
    name: "Cozinha com portas caneladas ",
    description: "Detalhes que trazem beleza e valorizam o ambiente",
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

  // Corporativos - 5 projetos
  {
    id: "corp1",
    category: "Corporativos",
    name: "Entrada com Porta Pivotante",
    description:
      "Porta pivotante em madeira que cria uma entrada imponente e sofisticada, integrando-se perfeitamente à arquitetura do ambiente.",
    imageSrc: "/projects/Corporativo_1.jpg",
  },
  {
    id: "corp2",
    category: "Corporativos",
    name: "Cabines para descanso e jogos",
    description:
      "Cabines com estofado sob medida, criando espaços privativos para reuniões rápidas ou momentos de descompressão e foco.",
    imageSrc: "/projects/Corporativo_2.jpg",
  },
  {
    id: "corp3",
    category: "Corporativos",
    name: "Auditório com Painel e Palco",
    description:
      "Estrutura completa em marcenaria para auditório, incluindo painel para vídeo wall e palco curvo com acabamento premium.",
    imageSrc: "/projects/Corporativo_3.jpg",
  },
  {
    id: "corp4",
    category: "Corporativos",
    name: "Escritório Executivo com Painel ",
    description:
      "Painel ripado em tom escuro que confere sobriedade e elegância ao ambiente, complementando a mesa de design moderno.",
    imageSrc: "/projects/Corporativo_4.jpg",
  },
  {
    id: "corp5",
    category: "Corporativos",
    name: "Lounge com Iluminação Integrada",
    description:
      "Painéis de madeira com iluminação de LED embutida, criando um ambiente acolhedor para recepções e áreas de convivência.",
    imageSrc: "/projects/Corporativo_5.jpg",
  },

  // Banheiros - 5 projetos
  {
    id: "b1",
    category: "Banheiros",
    name: "Banheiro com frentes ripadas",
    description:
      "Aconchego e textura da madeira ripada em um design moderno, com bancada e cuba esculpidas.",
    imageSrc: "/projects/Banheiro_1.jpg",
  },
  {
    id: "b2",
    category: "Banheiros",
    name: "Lavabo Sofisticado e Compacto",
    description:
      "Elegância e funcionalidade para espaços compactos com bancada em quartzo preto.",
    imageSrc: "/projects/Banheiro_2.jpg",
  },
  {
    id: "b3",
    category: "Banheiros",
    name: "Design Moderno e Iluminado",
    description:
      "Gabinete suspenso em alto brilho, com nicho decorativo e iluminação de LED para um ambiente sofisticado.",
    imageSrc: "/projects/Banheiro_3.jpg",
  },
  {
    id: "b4",
    category: "Banheiros",
    name: "Armário laqueado brilhante",
    description:
      "Design clean com gabinete em laca branca e espelheira ampla, perfeitamente integrados ao mármore.",
    imageSrc: "/projects/Banheiro_4.jpg",
  },
  {
    id: "b5",
    category: "Banheiros",
    name: "Gabinete Minimalista ",
    description:
      "Gabinete em grafite fosco com puxadores fresados e o destaque da imponente cuba esculpida em pedra.",
    imageSrc: "/projects/Banheiro_5.jpg",
  },

  // Home Office - 4 projetos
  {
    id: "ho1",
    category: "Home Office",
    name: " Bancada Suspensa",
    description:
      "Ambiente clean e organizado, com bancada suspensa e armários em tons neutros. A iluminação de LED e os detalhes em dourado trazem sofisticação.",
    imageSrc: "/projects/Home_office_1.jpg",
  },
  {
    id: "ho2",
    category: "Home Office",
    name: "Estação de Trabalho Completa",
    description:
      "Estação de trabalho completa com ampla bancada, armários superiores e prateleira com detalhes em metalon, criando um visual executivo e moderno.",
    imageSrc: "/projects/Home_office_2.jpg",
  },
  {
    id: "ho3",
    category: "Home Office",
    name: "Bancada de Estudos Iluminada",
    description:
      "Ampla bancada de trabalho que aproveita todo o espaço, com gaveteiro de apoio. As prateleiras superiores contam com iluminação embutida.",
    imageSrc: "/projects/Home_office_3.jpg",
  },
  {
    id: "ho4",
    category: "Home Office",
    name: "Solução Compacta para Escritório",
    description:
      "Solução inteligente que integra um cantinho de estudos ao quarto. A marcenaria otimiza o espaço com cama, gaveteiros e bancada de trabalho.",
    imageSrc: "/projects/Home_office_4.jpg",
  },

  // Projetos Especiais - 6 projetos
  {
    id: "pe1",
    category: "Projetos Especiais",
    name: "Móvel em Laca para quarto",
    description:
      "Acabamento primoroso em laca de alto brilho. O design geométrico com bordas chanfradas cria uma peça moderna e escultural.",
    imageSrc: "/projects/Especiais_1.jpg",
  },
  {
    id: "pe2",
    category: "Projetos Especiais",
    name: "Cabeceira Estofada com Iluminação",
    description:
      "Conforto e sofisticação com cabeceira estofada sob medida, integrada a um painel de madeira e com iluminação de LED embutida.",
    imageSrc: "/projects/Especiais_2.jpg",
  },
  {
    id: "pe3",
    category: "Projetos Especiais",
    name: "Armário com portas em vidro refletente",
    description:
      "Armário sofisticado com portas de correr em vidro refletente bronze. Sofisticação e bom gosto num só projeto..",
    imageSrc: "/projects/Especiais_7.jpg", // Note que usei a imagem Especiais_7.jpg aqui
  },
  {
    id: "pe4",
    category: "Projetos Especiais",
    name: "Estante Expositora com Iluminação",
    description:
      "Projeto especial de estante com prateleiras flutuantes e iluminação de LED embutida para valorizar e exibir coleções e troféus.",
    imageSrc: "/projects/Especiais_4.jpg",
  },
  {
    id: "pe5",
    category: "Projetos Especiais",
    name: "Marcenaria para Domo Geodésico",
    description:
      "Execução de marcenaria complexa para a estrutura interna e assoalho de um domo geodésico, criando um espaço único e acolhedor.",
    imageSrc: "/projects/Especiais_5.jpg",
  },
  {
    id: "pe6",
    category: "Projetos Especiais",
    name: "Armário Mimetizado em Painel",
    description:
      "Armário planejado do piso ao teto com portas de abertura por toque, criando um painel de madeira uniforme e minimalista.",
    imageSrc: "/projects/Especiais_6.jpg",
  },
];

const categories = [
  "Todos",
  ...Array.from(new Set(allProjectsBase.map((p) => p.category))),
];

function ProjetosContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Obter categoria dos parâmetros da URL ou usar "Todos" como padrão
  const [activeCategory, setActiveCategory] = useState(() => {
    return searchParams?.get('categoria') || "Todos";
  });
  
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [shuffledProjects, setShuffledProjects] = useState<ProjectType[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Sincronizar estado com parâmetros da URL
  useEffect(() => {
    const categoria = searchParams?.get('categoria');
    if (categoria && categoria !== activeCategory) {
      setActiveCategory(categoria);
    } else if (!categoria && activeCategory !== "Todos") {
      setActiveCategory("Todos");
    }
  }, [searchParams, activeCategory]);

  // Embaralhar projetos apenas no cliente para evitar erro de hidratação
  useEffect(() => {
    setShuffledProjects(shuffleArray(allProjectsBase));
    setIsMounted(true);
  }, []);

  // Preload das primeiras imagens
  useEffect(() => {
    if (isMounted && shuffledProjects.length > 0) {
      const imagesToPreload = shuffledProjects.slice(0, 6);
      imagesToPreload.forEach((project) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = project.imageSrc;
        link.as = "image";
        document.head.appendChild(link);
      });
    }
  }, [shuffledProjects, isMounted]);

  const handleCategoryChange = (category: string) => {
    setIsTransitioning(true);
    setActiveCategory(category);

    // Atualizar URL com parâmetros
    const params = new URLSearchParams();
    if (category !== "Todos") {
      params.set('categoria', category);
    }
    
    const newUrl = params.toString() 
      ? `/projetos?${params.toString()}` 
      : '/projetos';
    
    router.push(newUrl, { scroll: false });

    // Pequeno delay para efeito visual
    setTimeout(() => {
      setIsTransitioning(false);
    }, 150);
  };

  const filteredProjects = useMemo(() => {
    if (!isMounted) return allProjectsBase; // Mostrar projetos originais durante SSR

    if (activeCategory === "Todos") {
      return shuffledProjects;
    }
    return shuffledProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory, shuffledProjects, isMounted]);

  return (
    <>
      <main>
        <S.GalleryWrapper>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <S.PageTitle>Nossos Projetos</S.PageTitle>
          </motion.div>
          <S.FilterContainer>
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <S.FilterButton
                  $isActive={activeCategory === category}
                  onClick={() => handleCategoryChange(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  as={motion.button}
                >
                  {category}
                </S.FilterButton>
              </motion.div>
            ))}
          </S.FilterContainer>
          <S.ProjectsGrid>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={false}
                animate={{
                  opacity: isTransitioning ? 0.3 : 1,
                  scale: isTransitioning ? 0.95 : 1,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                layout
                layoutId={project.id}
              >
                <S.ProjectCard onClick={() => setSelectedProject(project)}>
                  <div className="image-container">
                    <Image
                      src={project.imageSrc}
                      alt={project.name}
                      fill
                      style={{ objectFit: "cover" }}
                      priority={index < 6} // Prioridade para as primeiras 6 imagens
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjNmNGY2O3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlNWU3ZWI7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIgLz4KICA8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxMjUiIHI9IjIwIiBmaWxsPSIjZGRkZGRkIiBvcGFjaXR5PSIwLjYiLz4KPC9zdmc+"
                      quality={85}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading={index < 6 ? "eager" : "lazy"}
                    />
                    <S.CardOverlay></S.CardOverlay>
                  </div>
                  <div className="info-container">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                </S.ProjectCard>
              </motion.div>
            ))}
          </S.ProjectsGrid>
          <S.InstagramButtonWrapper>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <S.InstagramButton
                  href="https://instagram.com/primormoveisbh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                  Ver mais projetos em nosso Instagram
                </S.InstagramButton>
              </motion.div>
            </motion.div>
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

export default function ProjetosPage() {
  return (
    <Suspense fallback={
      <main>
        <S.GalleryWrapper>
          <S.PageTitle>Nossos Projetos</S.PageTitle>
          <S.FilterContainer>
            {categories.map((category) => (
              <S.FilterButton key={category} $isActive={false}>
                {category}
              </S.FilterButton>
            ))}
          </S.FilterContainer>
          <S.ProjectsGrid>
            {/* Loading skeleton ou spinner */}
            <div>Carregando projetos...</div>
          </S.ProjectsGrid>
        </S.GalleryWrapper>
      </main>
    }>
      <ProjetosContent />
    </Suspense>
  );
}
