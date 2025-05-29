import styled from 'styled-components';

export const Container = styled.section`
  height: 90vh;
  background: url('/hero.jpg') center/cover no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  color: white;
  text-align: center;
  z-index: 1;

  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;
