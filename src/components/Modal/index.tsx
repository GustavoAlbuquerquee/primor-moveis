"use-client";

import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import * as S from "./styles";

interface ModalProps {
  onClose: () => void;
  imageUrl?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  imageUrl,
  title,
  description,
  children,
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

        {imageUrl && (
          <>
            <S.ImageContainer>
              <S.ModalImage
                src={imageUrl}
                alt={title || "Visualização ampliada do projeto"}
              />
            </S.ImageContainer>

            {(title || description) && (
              <S.TextContainer>
                {title && <S.ModalTitle>{title}</S.ModalTitle>}
                {description && (
                  <S.ModalDescription>{description}</S.ModalDescription>
                )}
              </S.TextContainer>
            )}
          </>
        )}

        {children && <div className="generic-content">{children}</div>}
      </S.ModalContent>
    </S.ModalBackdrop>
  );
};

export default Modal;
