'use client';

import  * as S from './styles';

// Dados de exemplo para projetos
const sampleProjects = [
  { id: 1, name: 'Cozinha Moderna', imageUrl: 'https://via.placeholder.com/300x200/CCCCCC/808080?text=Projeto+Cozinha', description: 'Cozinha planejada com ilha central e acabamentos premium.' },
  { id: 2, name: 'Dormitório Casal', imageUrl: 'https://via.placeholder.com/300x200/DDDDDD/808080?text=Projeto+Dormitório', description: 'Armários embutidos e cabeceira personalizada.' },
  { id: 3, name: 'Sala de Estar', imageUrl: 'https://via.placeholder.com/300x200/EEEEEE/808080?text=Projeto+Sala', description: 'Painel de TV e estante com design contemporâneo.' },
  { id: 4, name: 'Escritório Home Office', imageUrl: 'https://via.placeholder.com/300x200/BABABA/808080?text=Projeto+Escritório', description: 'Mobiliário ergonômico e funcional para trabalho remoto.' },
];

const Projects = () => {
  return (
    <S.ProjectsWrapper id="projetos">
      <S.SectionTitle>Nossos Projetos</S.SectionTitle>
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
      <S.ViewMoreButton href="/galeria-completa">Ver Galeria Completa</S.ViewMoreButton>
    </S.ProjectsWrapper>
  );
};

export default Projects;