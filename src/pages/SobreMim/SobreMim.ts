import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  max-width: 80vw;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    max-width: 90vw;
  }
`;

export const Titulo = styled.h1`
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 1rem;
  margin-top: 1rem;

  @media only screen and (max-width: 600px) {
    font-size: 1.25rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const Subtitulo = styled.h2`
  font-size: 1.25rem;
  color: var(--text);
  margin-bottom: 1.25rem;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const Texto = styled.p`
  font-size: 1.1rem;
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: left;

  @media only screen and (max-width: 600px) {
    font-size: 0.85rem;
    margin-bottom: 1rem;
    line-height: 1.35;
  }
`;
