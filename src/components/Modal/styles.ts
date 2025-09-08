import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const zoomIn = keyframes`
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  cursor: pointer;
  animation: ${fadeIn} 0.3s ease-out;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.25rem;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 800px;
  max-height: 90vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: default;
  animation: ${zoomIn} 0.3s ease-out;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 95vw;
    max-height: 95vh;
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    max-width: 98vw;
    max-height: 98vh;
    border-radius: 4px;
  }

  .generic-content {
    padding: ${({ theme }) => theme.spacings.large};
    overflow-y: auto;

    @media (max-width: 768px) {
      padding: ${({ theme }) => theme.spacings.medium};
    }

    @media (max-width: 480px) {
      padding: ${({ theme }) => theme.spacings.small};
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
`;

export const TextContainer = styled.div`
  padding: ${({ theme }) => theme.spacings.large};
  background-color: ${({ theme }) => theme.colors.background};
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacings.medium};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacings.small};
  }
`;

export const ModalTitle = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacings.small};
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const ModalDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textOnLight};
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  color: #fff;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    top: 8px;
    right: 8px;
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    transform: scale(1.1);

    @media (max-width: 480px) {
      transform: scale(1.05);
    }
  }
`;
