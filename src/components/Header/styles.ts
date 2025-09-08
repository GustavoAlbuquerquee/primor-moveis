import styled from "styled-components";
import Link from "next/link";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacings.medium} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacings.small};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacings.medium};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacings.large};
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: ${({ theme }) => theme.spacings.small};
`;

export const Logo = styled.img`
  height: 30px;
  width: auto;
  display: block;
  transition: opacity 0.3s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 35px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 40px;
  }

  ${LogoContainer}:hover & {
    opacity: 0.8;
  }
`;

export const LogoText = styled.span`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1;
  transition: color 0.3s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.75rem;
  }

  ${LogoContainer}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.small};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacings.large};
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textOnLight};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: ${({ theme }) => theme.spacings.small} 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};

    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    &::after {
      transform: scaleX(1);
    }
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    &::after {
      transform: scaleX(1);
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: block;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textOnLight};
  font-size: 1.2rem;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacings.small};
  transition:
    color 0.3s ease,
    transform 0.2s ease;
  z-index: 1001;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.1);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacings.large};
  box-shadow: ${({ $isOpen }) =>
    $isOpen ? "0 0 20px rgba(0, 0, 0, 0.3)" : "none"};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacings.large};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  margin-bottom: ${({ theme }) => theme.spacings.large};
`;

export const MobileMenuTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 1.5rem;
  margin: 0;
  font-weight: bold;
`;

export const MobileCloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textOnLight};
  font-size: 1.5rem;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacings.small};
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.lightBackground};
    transform: rotate(90deg);
  }

  &:active {
    transform: rotate(90deg) scale(0.9);
  }
`;

export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.medium};
  flex: 1;
  justify-content: flex-start;
  padding-top: ${({ theme }) => theme.spacings.medium};
`;

export const MobileNavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textOnLight};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  padding: ${({ theme }) => theme.spacings.medium};
  transition: all 0.3s ease;
  border-radius: ${({ theme }) => theme.borderRadius};
  border-left: 3px solid transparent;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.lightBackground};
    border-left-color: ${({ theme }) => theme.colors.primary};
    transform: translateX(5px);
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.lightBackground};
    border-left-color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;
