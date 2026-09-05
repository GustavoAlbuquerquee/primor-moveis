import styled, { keyframes } from "styled-components";

const kenburns = keyframes`
  0% {
    transform: scale(1.0) translateY(0);
  }
  100% {
    transform: scale(1.1) translateY(-10px);
  }
`;

const textReveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 75vh;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 85vh;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 90vh;
  }

  .swiper {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .swiper-pagination {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }

  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.3);
    width: 8px;
    height: 8px;
    opacity: 1;
    border: 2px solid rgba(255, 255, 255, 0.5);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    margin: 0 6px;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 10px;
      height: 10px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 10px;
      height: 10px;
    }

    &:hover {
      transform: scale(1.3);
      background: rgba(255, 255, 255, 0.6);
    }
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    width: 32px;
    border-radius: 6px;
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}80;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 36px;
    }
  }
`;

export const SlideContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  > img {
    animation: ${kenburns} 30s ease-out infinite alternate;
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    z-index: 0;
  }

  & > span {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    z-index: 0;

    & > img {
      animation: ${kenburns} 30s ease-out infinite alternate;
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
    }
  }
`;

export const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(96, 56, 41, 0.25) 50%,
    rgba(0, 0, 0, 0.65) 100%
  );
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, 0.02) 2px,
        rgba(0, 0, 0, 0.02) 4px
      );
    opacity: 0.6;
    pointer-events: none;
  }
`;

export const SlideTextContainer = styled.div`
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.colors.textOnDark};
  text-align: center;
  padding: 1rem;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem;
  }

  .swiper-slide-active & {
    animation: ${textReveal} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
  }
`;

export const Keyword = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.textOnDark};
  text-shadow:
    2px 2px 8px rgba(0, 0, 0, 0.9),
    0 0 40px rgba(240, 160, 45, 0.4);
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
    letter-spacing: 3px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3.5rem;
    letter-spacing: 4px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 4.5rem;
    letter-spacing: 5px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.primary},
      transparent
    );
    border-radius: 2px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 100px;
      height: 5px;
      bottom: -16px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: 140px;
    }
  }
`;

export const Caption = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
  text-shadow:
    1px 1px 6px rgba(0, 0, 0, 0.9),
    0 0 30px rgba(0, 0, 0, 0.6);
  white-space: pre-line;
  letter-spacing: 0.5px;
  padding-top: 1.2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.05rem;
    line-height: 1.8;
    padding-top: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.2rem;
    line-height: 1.9;
    padding-top: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.35rem;
    line-height: 2;
  }
`;

export const Watermark = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 3;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.7rem;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  pointer-events: none;
  user-select: none;
  backdrop-filter: blur(4px);
  padding: 6px 12px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    bottom: 15px;
    right: 15px;
    font-size: 0.75rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    bottom: 20px;
    right: 20px;
    font-size: 0.8rem;
  }
`;

export const HeroFrame = styled.div`
  position: absolute;
  inset: 0;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem 4.5rem;
  pointer-events: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2.5rem 2rem 5.5rem;
  }
`;

export const Tagline = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  color: rgba(255, 255, 255, 0.85);
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.9);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.85rem;
    letter-spacing: 3px;
  }
`;

export const CtaButton = styled.a`
  pointer-events: auto;
  display: inline-block;
  padding: 0.85rem 2rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
    filter: brightness(1.08);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.textOnDark};
    outline-offset: 3px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem 2.75rem;
    font-size: 1.05rem;
  }
`;
