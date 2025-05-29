import styled from 'styled-components';
import Link from 'next/link';

export const FooterWrapper = styled.footer`
  background-color: #333; // Cor de exemplo, combine com o header
  color: #ccc;
  padding: 2rem;
  text-align: center;
`;

export const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CopyrightText = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FooterLink = styled(Link)`
  color: #ccc;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: #ccc;
    font-size: 1.2rem; // Para ícones
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
`;