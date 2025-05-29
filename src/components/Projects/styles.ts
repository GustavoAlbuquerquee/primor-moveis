import styled from 'styled-components';
import Link from 'next/link';

export const ProjectsWrapper = styled.section`
  padding: 3rem 2rem;
  background-color: #f9f9f9; // Fundo levemente diferente para contraste
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors?.primary || '#DAA520'};
  margin-bottom: 2.5rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: ${(props) => props.theme.colors?.secondary || '#B8860B'};
    margin: 0.5rem auto 0;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 2.5rem auto;
`;

export const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px; // Altura fixa para a imagem
  object-fit: cover; // Garante que a imagem cubra a área sem distorcer
`;

export const ProjectInfo = styled.div`
  padding: 1.5rem;
  text-align: left;
  flex-grow: 1; // Para que todos os cards tenham a mesma altura se o conteúdo variar
`;

export const ProjectName = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
`;

export const ViewMoreButton = styled(Link)`
  display: inline-block;
  background-color: transparent;
  color: ${(props) => props.theme.colors?.primary || '#DAA520'};
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border: 2px solid ${(props) => props.theme.colors?.primary || '#DAA520'};
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors?.primary || '#DAA520'};
    color: white;
  }
`;