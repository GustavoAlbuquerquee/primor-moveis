"use client";

import React, { useState } from "react";
import ConfirmationModal from "@/components/ConfirmationModal";
import { FaTimes } from "react-icons/fa";
import * as S from "./styles";
import { useInView } from "react-intersection-observer";
type UploadedFileType = {
  name: string;
  url: string;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFileType[]>([]);

  const [modalState, setModalState] = useState({
    isOpen: false,
    isError: false,
    message: "",
  });

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, "");

    if (phoneNumber.length <= 10) {
      return phoneNumber
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      return phoneNumber
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(event.target.value);
    setPhoneValue(formattedValue);
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setUploadStatus(`Enviando ${files.length} anexo(s)...`);

    try {
      const uploadPromises = Array.from(files).map((file) => {
        return fetch(`/api/upload?filename=${encodeURIComponent(file.name)}`, {
          method: "POST",
          body: file,
        }).then(async (response) => {
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
              errorData.error || `Falha no upload de ${file.name}.`
            );
          }
          const newBlob = await response.json();
          return { name: file.name, url: newBlob.url };
        });
      });

      const newFiles = await Promise.all(uploadPromises);

      setUploadedFiles((currentFiles) => [...currentFiles, ...newFiles]);
      setUploadStatus(`${files.length} anexo(s) enviado(s) com sucesso!`);
    } catch (error: any) {
      console.error("Erro no upload:", error);
      setUploadStatus(`Erro no upload: ${error.message}`);
    }
  };

  const handleRemoveFile = (fileUrlToRemove: string) => {
    setUploadedFiles((currentFiles) =>
      currentFiles.filter((file) => file.url !== fileUrlToRemove)
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const fileUrls = uploadedFiles.map((file) => file.url);
    const finalData = { ...data, fileUrls };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        setModalState({
          isOpen: true,
          isError: false,
          message:
            "Obrigado pela mensagem enviada, nosso prazo médio para respostas é de no máximo dois dias.",
        });
        (event.target as HTMLFormElement).reset();
        setUploadStatus("");
        setUploadedFiles([]);
        setPhoneValue("");
      } else {
        const result = await response.json();
        throw new Error(result.error || "Falha ao enviar o formulário.");
      }
    } catch (error: any) {
      console.error(error);
      setModalState({ isOpen: true, isError: true, message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setModalState({ isOpen: false, isError: false, message: "" });
  };

  return (
    <>
      <S.ContactWrapper
        id="contato"
        ref={ref}
        className={inView ? "in-view" : ""}
      >
        <S.SectionTitle>Peça seu Orçamento</S.SectionTitle>
        <S.ContactContainer>
          <S.ContactInfo>
            <h3>Fale Conosco</h3>
            <p>Tem alguma dúvida ou quer solicitar um orçamento?</p>
            <p>
              <strong>Telefone/WhatsApp:</strong>
              &nbsp;
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
              disabled={isSubmitting}
            />
            <S.Input
              type="email"
              name="Email"
              placeholder="Seu melhor e-mail"
              required
              disabled={isSubmitting}
            />
            <S.Input
              type="tel"
              name="Telefone"
              placeholder="Seu telefone (WhatsApp)"
              value={phoneValue}
              onChange={handlePhoneChange}
              maxLength={15}
              disabled={isSubmitting}
            />
            <S.Textarea
              name="Mensagem"
              rows={6}
              placeholder="Descreva qual móvel deseja fazer..."
              required
              disabled={isSubmitting}
            />

            <S.FileInputWrapper>
              <label htmlFor="file-upload">
                Anexar fotos ou projeto (pode selecionar vários)
              </label>
              <S.Input
                as="input"
                id="file-upload"
                type="file"
                name="anexo"
                onChange={handleFileChange}
                multiple
                disabled={isSubmitting}
              />
              {uploadStatus && (
                <p
                  style={{
                    fontSize: "0.8rem",
                    marginTop: "0.5rem",
                    opacity: 0.8,
                  }}
                >
                  {uploadStatus}
                </p>
              )}
            </S.FileInputWrapper>

            {uploadedFiles.length > 0 && (
              <S.UploadedFilesList>
                <p>Anexos:</p>
                {uploadedFiles.map((file) => (
                  <S.UploadedFileItem key={file.url}>
                    <span>{file.name}</span>
                    <S.RemoveFileButton
                      type="button"
                      onClick={() => handleRemoveFile(file.url)}
                      aria-label={`Remover ${file.name}`}
                    >
                      <FaTimes />
                    </S.RemoveFileButton>
                  </S.UploadedFileItem>
                ))}
              </S.UploadedFilesList>
            )}

            <S.SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
            </S.SubmitButton>
          </S.ContactForm>
        </S.ContactContainer>
      </S.ContactWrapper>

      <ConfirmationModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        message={modalState.message}
        isError={modalState.isError}
        title={modalState.isError ? "Ops!" : "Enviado com Sucesso!"}
      />
    </>
  );
};

export default Contact;
