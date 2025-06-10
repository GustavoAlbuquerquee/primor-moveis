'use client';

import * as S from './styles';

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Formulário enviado! (Implementação pendente)');
  };

  return (
    <S.ContactWrapper id="contato">
      <S.SectionTitle>Peça seu Orçamento</S.SectionTitle>
      <S.ContactContainer>
        <S.ContactInfo>
          <h3>Fale Conosco</h3>
          <p>Tem alguma dúvida ou quer solicitar um orçamento?</p>
          <p><strong>Telefone/WhatsApp:</strong> {/** Adicionado o link do WhatsApp */}
            <a href="https://wa.me/5531999884688" target="_blank" rel="noopener noreferrer">
              (31) 99988-4688
            </a>
          </p>
          <p><strong>Email:</strong> faleconosco@primormoveis.com.br</p> {/* Corrigi o email */}
          <p><strong>Endereço:</strong> Rua Teodomira Diniz Lara, 48 - Sagrada Família, Belo Horizonte - MG</p>
        </S.ContactInfo>

        <S.ContactForm onSubmit={handleSubmit}>
          <h3>Envie os Detalhes do Seu Projeto</h3>
          <S.Input type="text" name="name" placeholder="Seu nome completo" required />
          <S.Input type="email" name="email" placeholder="Seu melhor e-mail" required />
          <S.Input type="tel" name="phone" placeholder="Seu telefone (WhatsApp)" />
          {/* Texto do placeholder atualizado */}
          <S.Textarea
            name="message"
            rows={6}
            placeholder="Descreva qual móvel deseja fazer ou vários móveis com o máximo de informação possível."
            required
          />
          <S.FileInputWrapper>
            <label htmlFor="file-upload">Anexar fotos ou projeto (opcional)</label>
            <S.Input as="input" id="file-upload" type="file" name="attachment" multiple />
          </S.FileInputWrapper>
          <S.SubmitButton type="submit">Enviar Solicitação</S.SubmitButton>
        </S.ContactForm>
      </S.ContactContainer>
    </S.ContactWrapper>
  );
};

export default Contact;