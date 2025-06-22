import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const zoomIn = keyframes`
  from { transform: translateY(-20px) scale(0.95); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
  padding: 1rem;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacings.xlarge};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 500px;
  width: 100%;
  animation: ${zoomIn} 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

export const IconWrapper = styled.div<{ $isError?: boolean }>`
  font-size: 3.5rem;
  color: ${({ theme, $isError }) =>
    $isError ? "#dc3545" : "#198754"}; // Vermelho para erro, verde para sucesso
  margin-bottom: ${({ theme }) => theme.spacings.medium};
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacings.small};
`;

export const Message = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.darkGray};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacings.large};
`;

export const CloseButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  font-size: 1rem;
  padding: ${({ theme }) => theme.spacings.small} ${({ theme }) => theme.spacings.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;
