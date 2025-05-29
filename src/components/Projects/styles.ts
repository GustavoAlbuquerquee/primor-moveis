import styled from 'styled-components';

export const Container = styled.section`
  padding: 4rem 2rem;

  h2 {
    color: #a2834b;
    margin-bottom: 2rem;
  }
`;

export const Gallery = styled.div`
  display: flex;
  gap: 1rem;

  img {
    width: 100%;
    max-width: 300px;
    border-radius: 8px;
  }
`;