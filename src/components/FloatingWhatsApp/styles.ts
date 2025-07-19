import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(44, 175, 44, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 15px rgba(44, 175, 44, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(44, 175, 44, 0); }
`;

export const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #25D366;
  color: #FFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
  z-index: 1000;
  text-decoration: none;
  animation: ${pulse} 2s infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    bottom: 25px;
    right: 25px;
    width: 55px;
    height: 55px;
    font-size: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    font-size: 2.2rem;
  }

  &:hover {
    animation: none;
    transform: scale(1.1);
    color: #FFF;
  }
`;