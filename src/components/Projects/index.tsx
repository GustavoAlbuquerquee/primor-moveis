'use client';

import * as S from './styles';

// Dados de exemplo para projetos com placeholders
const sampleProjects = [
  {
    id: 1,
    name: 'Cozinha Moderna Detalhada',
    imageUrl: 'https://via.placeholder.com/600x400/DDDDDD/808080?text=Cozinha+Moderna',
    description: 'Cozinha planejada com ilha central, armários otimizados e acabamentos premium em tons neutros.'
  },
  {
    id: 2,
    name: 'Dormitório Casal Aconchegante',
    imageUrl: 'https://via.placeholder.com/600x400/CCCCCC/808080?text=Dormitório+Casal',
    description: 'Armários embutidos com portas de correr espelhadas, painel de TV e cabeceira personalizada.'
  },
  {
    id: 3,
    name: 'Sala de Estar Integrada',
    imageUrl: 'https://via.placeholder.com/600x400/B0B0B0/FFFFFF?text=Sala+Integrada',
    description: 'Painel de TV ripado, estante com nichos iluminados e rack suspenso com design contemporâneo.'
  },
  {
    id: 4,
    name: 'Escritório Home Office Funcional',
    imageUrl: 'https://via.placeholder.com/600x400/A0A0A0/FFFFFF?text=Home+Office',
    description: 'Mobiliário ergonômico, bancada ampla, gaveteiros e prateleiras para organização e produtividade.'
  },
  // Adicione mais projetos se desejar
  // {
  //   id: 5,
  //   name: 'Banheiro Sofisticado',
  //   imageUrl: 'https://via.placeholder.com/600x400/C9C9C9/808080?text=Banheiro+Luxo',
  //   description: 'Gabinete suspenso, espelheira com iluminação LED e nichos embutidos.'
  // },
];

interface ProjectsProps {
  showViewMoreButton?: boolean;
}

const Projects = ({ showViewMoreButton = true }: ProjectsProps) => { // Adicione a prop
  return (
    <S.ProjectsWrapper id="projetos">

      <S.ProjectsGrid>
        {sampleProjects.map((project) => (
          <S.ProjectCard key={project.id}>
            <S.ProjectImage src={project.imageUrl} alt={project.name} />
            <S.ProjectInfo>
              <S.ProjectName>{project.name}</S.ProjectName>
              <S.ProjectDescription>{project.description}</S.ProjectDescription>
            </S.ProjectInfo>
          </S.ProjectCard>
        ))}
      </S.ProjectsGrid>
      {showViewMoreButton && ( // Condicional para o botão
        <S.ViewMoreButton href="/projetos">Ver Galeria Completa</S.ViewMoreButton>
      )}
    </S.ProjectsWrapper>
  );
};

export default Projects;