"use client";

import React, { useEffect } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import * as S from "./styles";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  title?: string;
  isError?: boolean;
  children?: React.ReactNode; // 1. Adicionamos a propriedade 'children'
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  message,
  title = "Sucesso!",
  isError = false,
  children, // 2. Recebemos a propriedade 'children'
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <S.ModalBackdrop onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.IconWrapper $isError={isError}>
          {isError ? <FaTimesCircle /> : <FaCheckCircle />}
        </S.IconWrapper>
        <S.Title>{isError ? "Ops!" : title}</S.Title>
        <S.Message>{message}</S.Message>

        {/* 3. Lógica condicional: Se passarmos 'children', ele os renderiza. Senão, mostra o botão padrão. */}
        {children ? (
          children
        ) : (
          <S.CloseButton onClick={onClose}>Ok</S.CloseButton>
        )}
      </S.ModalContent>
    </S.ModalBackdrop>
  );
};

export default ConfirmationModal;
