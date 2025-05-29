import { Container, TestimonialCard } from '@/components/Reviews/styles';

export default function Testimonials() {
  return (
    <Container id="testimonials">
      <h2>Avaliações</h2>
      <TestimonialCard>
        <p>"Excelente atendimento e qualidade impecável!"</p>
        <span>- João Silva</span>
      </TestimonialCard>
      <TestimonialCard>
        <p>"Transformaram minha cozinha em um sonho!"</p>
        <span>- Maria Oliveira</span>
      </TestimonialCard>
    </Container>
  );
}