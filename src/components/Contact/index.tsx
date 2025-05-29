'use client';

import * as S from './styles';

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Lógica de envio do formulário aqui
    alert('Formulário enviado! (Implementação pendente)');
  };

  return (
    <S.ContactWrapper id="contato">
      <S.SectionTitle>Entre em Contato</S.SectionTitle>
      <S.ContactContainer>
        <S.ContactInfo>
          <h3>Fale Conosco</h3>
          <p>Tem alguma dúvida ou quer solicitar um orçamento?</p>
          <p><strong>Telefone:</strong> (XX) XXXXX-XXXX</p>
          <p><strong>Email:</strong> contato@primormoveis.com.br</p>
          <p><strong>Endereço:</strong> Rua Exemplo, 123, Bairro, Cidade - UF</p>
          {/* Adicione ícones de redes sociais se desejar */}
        </S.ContactInfo>
        <S.ContactForm onSubmit={handleSubmit}>
          <h3>Envie uma Mensagem</h3>
          <S.Input type="text" name="name" placeholder="Seu nome completo" required />
          <S.Input type="email" name="email" placeholder="Seu melhor e-mail" required />
          <S.Input type="tel" name="phone" placeholder="Seu telefone (opcional)" />
          <S.Textarea name="message" rows={5} placeholder="Sua mensagem" required />
          <S.SubmitButton type="submit">Enviar Mensagem</S.SubmitButton>
        </S.ContactForm>
      </S.ContactContainer>
    </S.ContactWrapper>
  );
};

export default Contact;