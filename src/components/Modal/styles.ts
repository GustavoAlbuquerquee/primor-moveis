import styled, { keyframes } from 'styled-components';

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
  padding: 0.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: default;
  animation: ${zoomIn} 0.3s ease-out;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 90vw;
    max-height: 90vh;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 800px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-height: 65vh;
  }
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
`;

export const TextContainer = styled.div`
  padding: ${({ theme }) => theme.spacings.medium};
  background-color: ${({ theme }) => theme.colors.background};
  overflow-y: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacings.large};
  }
`;

export const ModalTitle = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacings.small};
  line-height: 1.3;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.8rem;
  }
`;

export const ModalDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textOnLight};
  line-height: 1.5;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0,0,0,0.3);
  border: none;
  color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 15px;
    right: 15px;
    width: 35px;
    height: 35px;
    font-size: 1.1rem;
  }

  &:hover {
    background-color: rgba(0,0,0,0.6);
    transform: scale(1.1);
  }
`;