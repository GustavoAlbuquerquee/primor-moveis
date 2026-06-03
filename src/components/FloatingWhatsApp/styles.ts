import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow:
      0 4px 20px rgba(37, 211, 102, 0.5),
      0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  50% {
    box-shadow:
      0 4px 20px rgba(37, 211, 102, 0.5),
      0 0 0 12px rgba(37, 211, 102, 0);
  }
  100% {
    transform: scale(1);
    box-shadow:
      0 4px 20px rgba(37, 211, 102, 0.5),
      0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #25D366 0%, #20BA5A 100%);
  color: #FFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.9rem;
  box-shadow:
    0 4px 20px rgba(37, 211, 102, 0.5),
    0 8px 32px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  text-decoration: none;
  animation: ${pulse} 2.5s ease-in-out infinite;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.6;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    bottom: 25px;
    right: 25px;
    width: 60px;
    height: 60px;
    font-size: 2.1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    bottom: 30px;
    right: 30px;
    width: 64px;
    height: 64px;
    font-size: 2.3rem;
  }

  &:hover {
    animation: ${float} 0.6s ease-in-out infinite;
    transform: scale(1.1) rotate(10deg);
    color: #FFF;
    box-shadow:
      0 8px 32px rgba(37, 211, 102, 0.6),
      0 12px 48px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: scale(0.95);
  }
`;