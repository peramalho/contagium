import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 600px;
  width: auto;
  margin: 0 auto;

  @media(max-width: 800px) {
    /* max-width: 200px; */
  }
`;

export const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 400;
  letter-spacing: 0.3em;
  color: #555;
  margin: 5px 0 10px 0;

  @media(max-width: 800px) {
    margin: 20px 0 20px 0;
  }
`;