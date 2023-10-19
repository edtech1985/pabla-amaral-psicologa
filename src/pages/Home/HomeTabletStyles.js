import styled from "styled-components";

export const TabletContainer = styled.div`
  display: none;
  max-width: 90vw;
  margin: 0 auto;

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    display: block;
  }
`;

export const TabletContainerFoto = styled.div`
  display: flex; /* Adicione display flex */
  justify-content: center; /* Centralize horizontalmente */
  align-items: center; /* Centralize verticalmente */
  max-width: 100%;
  max-height: 100%;
`;

export const ContainerText = styled.div`
  width: 100%;
  vertical-align: middle;
  margin-top: auto;
  margin-bottom: auto;
`;

export const ImagemPsicoTablet = styled.img`
  max-width: 40vw;
  max-height: 50vh;
  padding: 1rem;
  border-radius: 45%;
`;

export const TabletTopDiv = styled.div`
  display: flex;
`;

export const TabletBottomDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const Titulo = styled.h1`
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const TextoPrincipal = styled.p`
  font-size: 1.1rem;
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: left;
`;

export const Subtitulo = styled.h2`
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 1rem;
`;

export const TextoSecundario = styled.p`
  font-size: 1rem;
  color: var(--text);
  line-height: 1.6;
  text-align: left;
`;
