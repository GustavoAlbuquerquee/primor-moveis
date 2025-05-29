import { Container } from '@/components/Header/styles';

export default function Header() {
  return (
    <Container>
      <h1>Primor Móveis</h1>
      <nav>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#testimonials">Avaliações</a>
        <a href="#contact">Contato</a>
      </nav>
    </Container>
  );
}