import { Container, Gallery } from './styles';

export default function Projects() {
  return (
    <Container id="projects">
      <h2>Projetos</h2>
      <Gallery>
        <img src="/project1.jpg" alt="Projeto 1" />
        <img src="/project2.jpg" alt="Projeto 2" />
        <img src="/project3.jpg" alt="Projeto 3" />
      </Gallery>
    </Container>
  );
}
