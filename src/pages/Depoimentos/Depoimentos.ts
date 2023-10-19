import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  max-width: 85vw;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const Titulo = styled.h1`
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 1rem;
  margin-top: 1rem;

  @media only screen and (max-width: 600px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`;

export const Depoimento = styled.p`
  font-size: 1.1rem;
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 2rem;
  position: relative;
  text-align: left;

  .stars {
    font-size: 1rem;
    color: gold;
    display: block;
    margin-top: 0.5rem;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;

    .stars {
      font-size: 0.75rem;
    }
  }
`;
