"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  padding: 20px;

  @media (max-width: 768px) {
    min-height: 70vh;
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    min-height: 60vh;
  }
`;

const LoginForm = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-top: 5px solid ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 350px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    max-width: 300px;
    border-radius: 6px;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.headings};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: 4px;
  font-size: 1rem;
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
    margin-bottom: 1.2rem;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  padding: 0.8rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;

  &:hover {
    filter: brightness(1.1);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.mediumGray};
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
`;

const ErrorMessage = styled.p`
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-top: 0.8rem;
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        router.push("/admin/dashboard");
      } else {
        const data = await response.json();
        setError(data.error || "Ocorreu um erro.");
      }
    } catch (err) {
      setError("Falha na comunicação com o servidor.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginPageWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Painel Administrativo</Title>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
          required
        />
        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? "Entrando..." : "Entrar"}
        </SubmitButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </LoginForm>
    </LoginPageWrapper>
  );
}
