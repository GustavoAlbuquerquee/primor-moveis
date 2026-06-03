"use client";

import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.95);
  }
`;

const LoaderOverlay = styled.div<{ $isHiding: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.lightBackground} 100%
  );
  z-index: 10000;
  animation: ${({ $isHiding }) => ($isHiding ? fadeOut : fadeIn)} 0.5s ease-out forwards;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 80px,
        rgba(240, 160, 45, 0.02) 80px,
        rgba(240, 160, 45, 0.02) 160px
      );
    pointer-events: none;
  }
`;

const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 1;
`;

const LogoText = styled.h1`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 3s linear infinite;
  margin: 0;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`;

const Spinner = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border: 4px solid ${({ theme }) => theme.colors.lightBackground};
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-right-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
`;

const SpinnerInner = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 60px;
  height: 60px;
  border: 3px solid transparent;
  border-bottom-color: ${({ theme }) => theme.colors.secondary};
  border-left-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  animation: ${spin} 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite reverse;
`;

const LoadingText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textOnLight};
  font-weight: 500;
  animation: ${pulse} 1.5s ease-in-out infinite;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ProgressBar = styled.div`
  width: 250px;
  height: 4px;
  background: ${({ theme }) => theme.colors.mediumGray};
  border-radius: 2px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const ProgressFill = styled.div<{ $progress: number }>`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  width: ${({ $progress }) => $progress}%;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
`;

interface PageLoaderProps {
  onLoadComplete?: () => void;
}

export default function PageLoader({ onLoadComplete }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isHiding, setIsHiding] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simula progresso de carregamento
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 10;
      });
    }, 200);

    // Verifica quando a página está completamente carregada
    const handleLoad = () => {
      setProgress(100);

      setTimeout(() => {
        setIsHiding(true);

        setTimeout(() => {
          setIsLoading(false);
          onLoadComplete?.();
        }, 500);
      }, 300);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(progressInterval);
      window.removeEventListener("load", handleLoad);
    };
  }, [onLoadComplete]);

  if (!isLoading) return null;

  return (
    <LoaderOverlay $isHiding={isHiding}>
      <LoadingContent>
        <LogoText>Primor Móveis</LogoText>

        <SpinnerContainer>
          <Spinner />
          <SpinnerInner />
        </SpinnerContainer>

        <LoadingText>Carregando experiência premium</LoadingText>

        <ProgressBar>
          <ProgressFill $progress={progress} />
        </ProgressBar>
      </LoadingContent>
    </LoaderOverlay>
  );
}
