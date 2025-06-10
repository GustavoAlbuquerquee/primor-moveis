// src/components/Footer/styles.ts
import styled from 'styled-components';
import Link from 'next/link';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary}; // Marrom Escuro
  color: ${({ theme }) => `${theme.colors.textOnDark}BF`}; // Branco com ~75% opacidade
  padding: ${({ theme }) => theme.spacings.xlarge} ${({ theme }) => theme.spacings.medium};
  text-align: center;

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacings.xxlarge} ${({ theme }) => theme.spacings.large};
  }
`;

export const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.medium};

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
  gap: ${({ theme }) => theme.spacings.medium};
  align-items: center;

   @media (max-width: 767px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacings.small};
  }
`;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => `${theme.colors.textOnDark}BF`}; // Branco com opacidade
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary}; // Laranja Amarelado no hover
    text-decoration: none;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.medium};

  a {
    color: ${({ theme }) => `${theme.colors.textOnDark}BF`}; // Branco com opacidade
    font-size: 1.4rem;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.colors.primary}; // Laranja Amarelado no hover
    }
  }
`;

export const ContactInfo = styled.div`
  text-align: left;
  font-size: 0.9rem;
  p { margin: 0; line-height: 1.5; }
  strong { color: #fff; }
  @media (max-width: 767px) {
    text-align: center;
    margin-bottom: 1rem;
  }
`;