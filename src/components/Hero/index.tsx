import { Container, Overlay, Content } from "@/components/Hero/styles"

export default function Hero() {
  return (
    <Container>
      <Overlay />
      <Content>
        <h2>Móveis planejados com excelência</h2>
        <p>Transformamos seus ambientes em espaços únicos e sofisticados.</p>
      </Content>
    </Container>
  );
}