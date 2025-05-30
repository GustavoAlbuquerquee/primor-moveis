import styled from 'styled-components';
import Link from 'next/link';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary}; // Usando o marrom escuro do tema
  color: ${({ theme }) => theme.colors.textLight}BF; // Texto claro com um pouco de transparência (BF = ~75%)
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
  color: ${({ theme }) => theme.colors.textLight}BF;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    color: ${({ theme }) => theme.colors.textLight};
    text-decoration: underline;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.medium};

  a {
    color: ${({ theme }) => theme.colors.textLight}BF;
    font-size: 1.4rem; // Para ícones
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.colors.primary}; // Dourado no hover para ícones sociais
    }
  }
`;