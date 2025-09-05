"use client";
import styled, { css } from "styled-components";

// 1. AJUSTE PARA O FOOTER FIXO
export const DashboardWrapper = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  min-height: calc(
    100vh - 250px
  ); // Garante que o conteúdo ocupe a altura da tela
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap; // Para telas menores
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const ProjectTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  th,
  td {
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
    text-align: left;
    vertical-align: middle;
  }

  th {
    font-family: ${({ theme }) => theme.fonts.headings};
    color: ${({ theme }) => theme.colors.darkGray};
  }

  td {
    color: ${({ theme }) => theme.colors.textOnLight};
  }

  tbody tr:hover {
    background-color: ${({ theme }) => theme.colors.lightBackground};
  }
`;

// 2. BOTÕES DE AÇÃO REFINADOS
export const ActionsCell = styled.td`
  display: flex;
  gap: 1rem;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    transition: all 0.2s ease;
    padding: 0.5rem;
    border-radius: 50%;

    &:hover {
      background-color: #e9ecef;
      transform: scale(1.1);
    }

    &.edit {
      color: ${({ theme }) => theme.colors.primary};
    }
    &.delete {
      color: #dc3545;
    }
    &:disabled {
      color: #ccc;
      cursor: not-allowed;
    }
  }
`;

// 3. ESTILOS REFINADOS PARA O FORMULÁRIO DO MODAL
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    margin-bottom: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const inputStyles = css`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: 4px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}4D`};
  }
`;

export const FormInput = styled.input`
  ${inputStyles}
`;

export const FormTextarea = styled.textarea`
  ${inputStyles}
  resize: vertical;
  min-height: 100px;
`;

export const FormSelect = styled.select`
  ${inputStyles}
`;

export const FormFileInput = styled.input`
  font-size: 0.9rem;
  &::file-selector-button {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-weight: bold;
    margin-right: 1rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const UploadStatus = styled.p`
  font-size: 0.8rem;
  opacity: 0.8;
  margin-top: -0.5rem;
`;
export const ConfirmationActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
`;

// Botão genérico para Cancelar, OK, etc.
export const ModalButton = styled.button`
  font-weight: bold;
  padding: 0.6rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.mediumGray};
  background: transparent;
  color: ${({ theme }) => theme.colors.darkGray};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

// Botão de perigo, para Excluir
export const DangerButton = styled(ModalButton)`
  border-color: #dc3545;
  background-color: #dc3545;
  color: white;

  &:hover {
    border-color: #a71d2a;
    background-color: #a71d2a;
    color: white;
  }
`;
