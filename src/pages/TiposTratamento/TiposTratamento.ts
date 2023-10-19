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

export const TextoPrincipal = styled.p`
  font-size: 1.1rem;
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 600px) {
    font-size: 0.85rem;
    margin-bottom: 1rem;
    line-height: 1.35;
  }
`;

export const Subtitulo = styled.h2`
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 1rem;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const Lista = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;

  li {
    font-size: 1.2rem;
    color: var(--text);
    background-color: var(--light-beige);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
    text-align: center;

    @media only screen and (max-width: 600px) {
      font-size: 1rem;
      padding: 0.75rem;
    }
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    line-height: 0.5;
  }
  @media only screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;
