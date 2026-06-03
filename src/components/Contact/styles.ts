import { fadeInAnimation } from "@/styles/global";
import styled, { css } from "styled-components"; 

export const ContactWrapper = styled.section`
  padding: ${({ theme }) => theme.spacings.large} ${({ theme }) => theme.spacings.small};
  background-color: ${({ theme }) => theme.colors.background};
  ${fadeInAnimation}

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacings.xlarge} ${({ theme }) => theme.spacings.medium};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacings.xxlarge} ${({ theme }) => theme.spacings.medium};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => `calc(${theme.spacings.xxlarge} * 1.5)`} ${({ theme }) => theme.spacings.large};
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  text-align: center;
  position: relative;
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 2.8rem;
  }

  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.secondary};
    margin: 0.5rem auto ${({ theme }) => theme.spacings.large} auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 60px;
      height: 4px;
      margin: 0.75rem auto ${({ theme }) => theme.spacings.xlarge} auto;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 70px;
    }
  }
`;

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacings.large};
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacings.xlarge};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1.5fr;
    gap: ${({ theme }) => theme.spacings.xxlarge};
  }
`;

export const ContactInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  padding: ${({ theme }) => theme.spacings.medium};
  border-radius: ${({ theme }) => theme.borderRadius};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacings.large};
  }

  h3 {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacings.medium};
    font-family: ${({ theme }) => theme.fonts.headings};

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.5rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.6rem;
    }
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textOnLight};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacings.medium};

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 0.95rem;
      line-height: 1.7;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1rem;
    }
  }

  strong {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ContactForm = styled.form`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  padding: ${({ theme }) => theme.spacings.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacings.large};
  display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacings.large};
    font-family: ${({ theme }) => theme.fonts.headings};

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.5rem;
        display: flex;
    flex-direction: column;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.6rem;
        display: flex;
    flex-direction: column;
    }

  }
`;

const InputStyles = css`
  width: 100%;
  padding: ${({ theme }) => theme.spacings.small};
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  border: 2px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 0.9rem;
  font-family: ${({ theme }) => theme.fonts.main};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textOnLight};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacings.medium};
    font-size: 1rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}80;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow:
      0 0 0 4px ${({ theme }) => `${theme.colors.primary}20`},
      0 4px 12px ${({ theme }) => `${theme.colors.primary}30`};
    transform: translateY(-2px);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.darkGray};
    opacity: 0.6;
    transition: opacity 0.3s ease;
  }

  &:focus::placeholder {
    opacity: 0.4;
  }
`;

export const Input = styled.input`
  ${InputStyles}
`;

export const Textarea = styled.textarea`
  ${InputStyles}
  min-height: 120px;
  resize: none;
`;

export const SubmitButton = styled.button`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.primary}dd 100%
  );
  color: white;
  padding: ${({ theme }) => theme.spacings.small} ${({ theme }) => theme.spacings.large};
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 4px 16px ${({ theme }) => theme.colors.primary}40,
    0 8px 24px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacings.medium} ${({ theme }) => theme.spacings.xlarge};
    font-size: 1.1rem;
  }

  &:hover {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.secondary} 0%,
      ${({ theme }) => theme.colors.secondary}dd 100%
    );
    transform: translateY(-3px) scale(1.02);
    box-shadow:
      0 8px 24px ${({ theme }) => theme.colors.secondary}50,
      0 12px 40px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const FileInputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.medium};

  label {
    display: block;
    font-weight: 500;
    margin-bottom: ${({ theme }) => theme.spacings.small};
    color: ${({ theme }) => theme.colors.darkGray};
  }

  input[type="file"] {
    width: 100%;
    font-size: 0.9rem;

    &::file-selector-button {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};
      padding: ${({ theme }) => theme.spacings.small} ${({ theme }) => theme.spacings.medium};
      border-radius: ${({ theme }) => `calc(${theme.borderRadius} / 2)`};
      cursor: pointer;
      transition: all 0.2s ease;
      font-weight: bold;
      margin-right: ${({ theme }) => theme.spacings.medium};

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;

function calc(
  $: any,
  arg1: number
): import("styled-components").Interpolation<
  import("styled-components").FastOmit<
    import("react").DetailedHTMLProps<
      import("react").HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    never
  >
> {
  throw new Error("Function not implemented.");
}

export const UploadedFilesList = styled.div`
  margin-top: ${({ theme }) => theme.spacings.medium};
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  padding: ${({ theme }) => theme.spacings.small};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.borderRadius};

  p {
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: ${({ theme }) => theme.spacings.small};
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const UploadedFileItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacings.small};
  background-color: #f9f9f9;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacings.small};

  &:last-child {
    margin-bottom: 0;
  }

  span {
    font-size: 0.9rem;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 1rem;
  }
`;

export const RemoveFileButton = styled.button`
  background: transparent;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.2rem;
  display: flex;
  align-items: center;

  &:hover {
    color: #dc3545; 
  }
`;
