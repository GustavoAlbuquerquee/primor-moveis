import styled from 'styled-components';

export const ContactWrapper = styled.section`
  padding: 3rem 2rem;
  background-color: #f0f0f0;
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors?.primary || '#DAA520'};
  margin-bottom: 2.5rem;
  text-align: center;
  position: relative;
  display: block; // Para centralizar o after corretamente

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: ${(props) => props.theme.colors?.secondary || '#B8860B'};
    margin: 0.5rem auto 0;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const ContactInfo = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);

  h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors?.primary || '#DAA520'};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.7;
    margin-bottom: 0.8rem;
  }
`;

export const ContactForm = styled.form`
  flex: 1.5; // Formulário um pouco maior
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);

  h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors?.primary || '#DAA520'};
    margin-bottom: 1.5rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors?.primary || '#DAA520'};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors?.secondary || '#B8860B'}33;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
  box-sizing: border-box;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors?.primary || '#DAA520'};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors?.secondary || '#B8860B'}33;
  }
`;

export const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.colors?.primary || '#DAA520'};
  color: white;
  padding: 0.8rem 1.8rem;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors?.secondary || '#B8860B'};
  }
`;