import styled, { keyframes } from "styled-components";

const kenburns = keyframes`
  0% {
    transform: scale(1.0) translateY(0);
  }
  100% {
    transform: scale(1.1) translateY(-10px); 
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
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }

  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.5);
    width: 8px;
    height: 8px;
    opacity: 1;
    transition: background-color 0.3s ease;
    margin: 0 4px;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 10px;
      height: 10px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 12px;
      height: 12px;
    }
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.primary};
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
  background-color: rgba(0, 0, 0, 0.4);
  pointer-events: none;
`;

export const SlideTextContainer = styled.div`
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.colors.textOnDark};
  text-align: center;
  padding: 1rem;
  max-width: 800px;
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
`;

export const Keyword = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textOnDark};
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
  margin-bottom: ${({ theme }) => theme.spacings.medium};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 3.5rem;
  }
`;

export const Caption = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  white-space: pre-line;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.2rem;
  }
`;

export const Watermark = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 3;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.7rem;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  pointer-events: none;
  user-select: none;

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
