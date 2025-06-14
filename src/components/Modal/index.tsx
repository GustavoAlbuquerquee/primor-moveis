"use client";

import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import * as S from "./styles";

interface ModalProps {
  imageUrl: string;
  title?: string; // Título agora é uma prop opcional
  description?: string; // Descrição agora é uma prop opcional
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  imageUrl,
  title,
  description,
  onClose,
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <S.ModalBackdrop onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose} aria-label="Fechar modal">
          <FaTimes />
        </S.CloseButton>

        <S.ImageContainer>
          <S.ModalImage
            src={imageUrl}
            alt={title || "Visualização ampliada do projeto"}
          />
        </S.ImageContainer>

        {/* Renderiza a área de texto apenas se houver um título ou descrição */}
        {(title || description) && (
          <S.TextContainer>
            {title && <S.ModalTitle>{title}</S.ModalTitle>}
            {description && (
              <S.ModalDescription>{description}</S.ModalDescription>
            )}
          </S.TextContainer>
        )}
      </S.ModalContent>
    </S.ModalBackdrop>
  );
};

export default Modal;
