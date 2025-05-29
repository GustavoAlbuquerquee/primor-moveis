import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1f1f1f;
  color: white;
  position: sticky;
  top: 0;
  z-index: 10;

  nav a {
    margin-left: 2rem;
    color: white;
    text-decoration: none;
  }
`;