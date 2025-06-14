"use client";

import React, { useState } from "react";
import * as S from "./styles";

const Contact = () => {
  // Estados para controlar o status do envio do formulário
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previne o recarregamento da página
    setStatus("Enviando...");

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // AVISO: A abordagem FormData simples não lida bem com arquivos para envio via JSON.
    // A lógica de upload de arquivos precisaria ser tratada separadamente e é mais complexa.
    // Esta implementação focará no envio dos campos de texto.

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        (event.target as HTMLFormElement).reset(); // Limpa o formulário
      } else {
        throw new Error("Falha ao enviar a mensagem.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Erro ao enviar. Por favor, tente novamente mais tarde.");
    }
  };

  return (
    <S.ContactWrapper id="contato">
      <S.SectionTitle>Peça seu Orçamento</S.SectionTitle>
      <S.ContactContainer>
        <S.ContactInfo>
          <h3>Fale Conosco</h3>
          <p>Tem alguma dúvida ou quer solicitar um orçamento?</p>
          <p>
            <strong>Telefone/WhatsApp:</strong>
            <a
              href="https://wa.me/5531999884688"
              target="_blank"
              rel="noopener noreferrer"
            >
              (31) 99988-4688
            </a>
          </p>
          <p>
            <strong>Email:</strong> faleconosco@primormoveis.com.br
          </p>
          <p>
            <strong>Endereço:</strong> Rua Teodomira Diniz Lara, 48 - Sagrada
            Família, Belo Horizonte - MG
          </p>
        </S.ContactInfo>

        <S.ContactForm onSubmit={handleSubmit}>
          <h3>Envie os Detalhes do Seu Projeto</h3>
          <S.Input
            type="text"
            name="Nome"
            placeholder="Seu nome completo"
            required
            disabled={status === "Enviando..."}
          />
          <S.Input
            type="email"
            name="Email"
            placeholder="Seu melhor e-mail"
            required
            disabled={status === "Enviando..."}
          />
          <S.Input
            type="tel"
            name="Telefone"
            placeholder="Seu telefone (WhatsApp)"
            disabled={status === "Enviando..."}
          />
          <S.Textarea
            name="Mensagem"
            rows={6}
            placeholder="Descreva qual móvel deseja fazer ou vários móveis com o máximo de informação possível."
            required
            disabled={status === "Enviando..."}
          />
          <S.FileInputWrapper>
            <label htmlFor="file-upload">
              Anexar fotos ou projeto (funcionalidade em desenvolvimento)
            </label>
            <S.Input
              as="input"
              id="file-upload"
              type="file"
              name="anexo"
              multiple
              disabled={true}
            />
            {/* O input de anexo está desabilitado por enquanto */}
          </S.FileInputWrapper>

          <S.SubmitButton type="submit" disabled={status === "Enviando..."}>
            {status === "Enviando..." ? "Enviando..." : "Enviar Solicitação"}
          </S.SubmitButton>

          {/* Exibe a mensagem de status para o usuário */}
          {status && (
            <p style={{ marginTop: "1rem", textAlign: "center" }}>{status}</p>
          )}
        </S.ContactForm>
      </S.ContactContainer>
    </S.ContactWrapper>
  );
};

export default Contact;
