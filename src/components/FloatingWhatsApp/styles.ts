import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(44, 175, 44, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 15px rgba(44, 175, 44, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(44, 175, 44, 0); }
`;

export const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: #25D366; // Cor oficial do WhatsApp
  color: #FFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
  z-index: 1000;
  text-decoration: none;
  animation: ${pulse} 2s infinite;

  &:hover {
    animation: none;
    transform: scale(1.1);
    color: #FFF;
  }
`;