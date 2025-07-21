"use client";

import React, { useState } from "react";
import ConfirmationModal from "@/components/ConfirmationModal";
import { FaTimes } from "react-icons/fa"; // Ícone para o botão de remover
import * as S from "./styles";
import { useInView } from "react-intersection-observer";
// Criando um tipo para nosso objeto de arquivo, para melhor organização
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
  // O estado agora guarda uma lista de objetos {nome, url}
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFileType[]>([]);

  const [modalState, setModalState] = useState({
    isOpen: false,
    isError: false,
    message: "",
  });

  // Função para formatar o telefone brasileiro
  const formatPhoneNumber = (value: string) => {
    // Remove tudo que não é número
    const phoneNumber = value.replace(/\D/g, "");

    // Aplica a máscara baseada no tamanho
    if (phoneNumber.length <= 10) {
      // Telefone fixo: (xx) xxxx-xxxx
      return phoneNumber
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      // Celular: (xx) xxxxx-xxxx
      return phoneNumber
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
  };

  // Função para lidar com a mudança no campo de telefone
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(event.target.value);
    setPhoneValue(formattedValue);
  };

  // Função para lidar com o upload de múltiplos arquivos
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setUploadStatus(`Enviando ${files.length} anexo(s)...`);

    // Usamos Promise.all para fazer todos os uploads em paralelo
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
          // Retorna o nome e a URL
          return { name: file.name, url: newBlob.url };
        });
      });

      const newFiles = await Promise.all(uploadPromises);

      // Adiciona os novos arquivos à lista existente, em vez de substituir
      setUploadedFiles((currentFiles) => [...currentFiles, ...newFiles]);
      setUploadStatus(`${files.length} anexo(s) enviado(s) com sucesso!`);
    } catch (error: any) {
      console.error("Erro no upload:", error);
      setUploadStatus(`Erro no upload: ${error.message}`);
    }
  };

  // Nova função para remover um arquivo da lista
  const handleRemoveFile = (fileUrlToRemove: string) => {
    setUploadedFiles((currentFiles) =>
      currentFiles.filter((file) => file.url !== fileUrlToRemove)
    );
  };

  // Função principal de envio do formulário
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Extrai apenas as URLs para enviar para a API
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
        setUploadedFiles([]); // Limpa a lista de arquivos
        setPhoneValue(""); // Limpa o valor do telefone
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

            {/* Nova seção para listar os arquivos enviados */}
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
