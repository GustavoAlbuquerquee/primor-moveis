import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { fadeInAnimation } from "@/styles/global";

export const ReviewsWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  text-align: center;
  ${fadeInAnimation}// 2. Aplique a animação aqui
`;

export const SectionTitle = styled.h2`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    display: block;
    width: 70px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.secondary};
    margin: 0.75rem auto 0;
  }
`;

export const ReviewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

// O card agora é um Link estilizado
export const ReviewCardLink = styled(Link)`
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-top: 5px solid ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  text-align: left;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  text-decoration: none; // Remove o sublinhado do link

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
    color: inherit; // Garante que a cor do texto não mude no hover do link
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

// Estilo para a imagem do avatar
export const AvatarImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover; // Garante que a imagem preencha o círculo
  margin-right: 1rem;
`;

export const AuthorInfo = styled.div`
  flex-grow: 1; // Ocupa o espaço disponível, empurrando o ícone do Google para a direita
`;

export const ReviewAuthorName = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
`;

export const ReviewStars = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
  margin-top: 0.25rem;
`;

// Estilo para o ícone do Google
export const GoogleIcon = styled.div`
  font-size: 1.5rem;
  color: #dddddd; // Um cinza sutil para o ícone
`;

export const ReviewText = styled.p`
  font-size: 1rem;
  font-style: italic; // Mantive o itálico para depoimentos
  color: ${({ theme }) => theme.colors.textOnLight};
  line-height: 1.7;
  margin-bottom: 0;
  flex-grow: 1;

  &::before {
    // Usando aspas de citação estilizadas
    content: "“";
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.primary};
    line-height: 0;
    margin-right: 0.5rem;
    vertical-align: -0.6em;
    font-style: normal;
  }
`;

export const ViewMoreButton = styled(Link)`
  display: inline-block;
  margin-top: 2.5rem; // Espaço entre o carrossel e o botão
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary}; // Cor do texto (Laranja)
  border: 2px solid ${({ theme }) => theme.colors.primary}; // Borda Laranja
  padding: ${({ theme }) => `${theme.spacings.small} ${theme.spacings.large}`};
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 0.3s ease; // Usar 'all' para uma transição completa
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textOnDark};
    transform: translateY(-3px); // Efeito de "levantar"
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15); // Sombra mais pronunciada
  }
`;
