import styled, { css } from 'styled-components';
import { DefaultTheme } from 'styled-components';

// Adicionei a tipagem explícita para o tema na declaração existente
const InputStyles = css<{ theme: DefaultTheme }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacings.medium};
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => `calc(${theme.borderRadius} / 2)`}; // Bordas mais sutis para inputs
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.main};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}33`}; // Sombra de foco suave
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.darkGray};
    opacity: 0.7;
  }
`;

export const ContactWrapper = styled.section`
  padding: ${({ theme }) => theme.spacings.xxlarge} ${({ theme }) => theme.spacings.medium};
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: 768px) {
    padding: ${({ theme }) => `calc(${theme.spacings.xxlarge} * 1.5)`} ${({ theme }) => theme.spacings.large};
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  text-align: center;
  position: relative;
  display: block;

  &::after {
    content: '';
    display: block;
    width: 70px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.secondary};
    margin: 0.75rem auto ${({ theme }) => theme.spacings.xlarge} auto;
  }

   @media (min-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacings.xlarge};
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1.5fr; // Lado a lado, formulário um pouco maior
    gap: ${({ theme }) => theme.spacings.xxlarge};
  }
`;

export const ContactInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.spacings.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  // box-shadow: 0 4px 15px rgba(0,0,0,0.05); // Sombra sutil se o fundo da seção for branco

  h3 {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacings.medium};
    font-family: ${({ theme }) => theme.fonts.headings};
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.darkGray};
    line-height: 1.7;
    margin-bottom: ${({ theme }) => theme.spacings.medium};
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
  }

  // Adicionar estilos para ícones aqui se usar
`;

export const ContactForm = styled.form`
  background-color: ${({ theme }) => theme.colors.lightGray}; // Ou background para contraste
  padding: ${({ theme }) => theme.spacings.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  // box-shadow: 0 4px 15px rgba(0,0,0,0.05);

  h3 {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacings.large};
    font-family: ${({ theme }) => theme.fonts.headings};
  }
`;

export const Input = styled.input<{ theme: DefaultTheme }>`
  ${InputStyles}
`;

export const Textarea = styled.textarea<{ theme: DefaultTheme }>`
  ${InputStyles}
  min-height: 120px;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => theme.spacings.medium} ${({ theme }) => theme.spacings.xlarge};
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }
`;