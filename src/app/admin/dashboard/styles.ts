"use client";
import styled, { css } from "styled-components";

export const DashboardWrapper = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  min-height: calc(100vh - 250px);

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem auto;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin: 0.5rem auto;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 1rem;
  }

  /* Estilização da scrollbar */
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.mediumGray} transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.mediumGray};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
  overflow-x: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
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
  white-space: nowrap;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 1.5rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
`;

export const ProjectTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  table-layout: fixed;
  min-width: 600px; /* Largura mínima para manter estrutura em dispositivos pequenos */

  @media (max-width: 768px) {
    font-size: 0.9rem;
    min-width: 500px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    min-width: 450px;
  }

  th,
  td {
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
    text-align: left;
    vertical-align: middle;

    @media (max-width: 768px) {
      padding: 0.8rem 0.5rem;
    }

    @media (max-width: 480px) {
      padding: 0.6rem 0.3rem;
    }
  }

  th {
    font-family: ${({ theme }) => theme.fonts.headings};
    color: ${({ theme }) => theme.colors.darkGray};

    &:nth-child(1) {
      width: 35%;
    }
    &:nth-child(2) {
      width: 20%;
    }
    &:nth-child(3) {
      width: 25%;
    }
    &:nth-child(4) {
      width: 20%;
    }
  }

  td {
    color: ${({ theme }) => theme.colors.textOnLight};

    &:nth-child(1) {
      width: 35%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &:nth-child(2) {
      width: 20%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &:nth-child(3) {
      width: 25%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  tbody tr:hover {
    background-color: ${({ theme }) => theme.colors.lightBackground};
  }
`;

export const ActionsCell = styled.td`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  width: 20% !important;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    transition: all 0.2s ease;
    padding: 0.5rem;
    border-radius: 6px;
    min-width: 30px;
    min-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    &:hover {
      background-color: #e9ecef;
      transform: scale(1.05);
    }

    &.edit {
      color: ${({ theme }) => theme.colors.primary};

      &:hover {
        background-color: ${({ theme }) => `${theme.colors.primary}20`};
      }
    }

    &.delete {
      color: #dc3545;

      &:hover {
        background-color: #dc354520;
      }
    }

    &:disabled {
      color: #ccc;
      cursor: not-allowed;

      &:hover {
        background-color: transparent;
        transform: none;
      }
    }
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 400px;
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    max-width: 300px;
    gap: 0.6rem;
  }

  h2 {
    margin-bottom: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 0.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.3rem;
      margin-bottom: 0.6rem;
    }
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

  @media (max-width: 768px) {
    padding: 0.7rem 0.8rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0.7rem;
    font-size: 0.9rem;
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

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

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

    @media (max-width: 768px) {
      padding: 0.4rem 0.8rem;
      font-size: 0.85rem;
      margin-right: 0.8rem;
    }

    @media (max-width: 480px) {
      padding: 0.3rem 0.6rem;
      font-size: 0.8rem;
      margin-right: 0.5rem;
    }

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

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const ConfirmationActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
    margin-top: 1.2rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.6rem;
    margin-top: 1rem;
  }
`;

export const ModalButton = styled.button`
  font-weight: bold;
  padding: 0.6rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.mediumGray};
  background: transparent;
  color: ${({ theme }) => theme.colors.darkGray};
  cursor: pointer;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    padding: 0.5rem 1.2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    width: 100%;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

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
