import styled from "styled-components";

export const OutterContainer = styled.section``;

export const DesktopContainer = styled.section`
  max-width: 100vw;
  padding: 1rem;

  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }
`;

export const FlagsDiv = styled.div`
  display: flex; /* Torna os itens flexíveis */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  /* padding: 0rem 2rem 1rem 2rem; */
  padding-bottom: 1rem;

  img {
    padding: 0.5rem;
    width: 2rem;
    height: 1.5rem;

    @media only screen and (max-width: 600px) {
      width: 1rem;
      height: 0.75rem;
      padding: 0.25rem;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  text-align: center;
  max-width: 100%;
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  /* Adicione outros estilos conforme necessário */

  @media only screen and (max-width: 600px) {
    max-width: 90vw;
    display: block;
  }

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    display: none;
  }
`;

export const BottomContainerText = styled.div`
  text-align: center;
  max-width: 90vw;
  display: block;
  padding: 2rem;
  padding-top: 0;
  padding-bottom: 0;

  @media only screen and (max-width: 600px) {
    max-width: 90vw;
    display: block;
  }

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    display: none;
  }
`;

export const ContainerFoto = styled.div`
  width: 35vw;
  margin: 1rem;
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  /* Adicione outros estilos conforme necessário */

  @media only screen and (max-width: 600px) {
    display: none;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 40vw;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    width: 40vw;
  }
`;

export const ContainerText = styled.div`
  width: 70vw;
  vertical-align: middle;
  margin-top: auto;
  margin-bottom: auto;
  padding: 2rem;

  @media only screen and (max-width: 600px) {
    width: 80vw;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    width: 100%;
  }
`;

export const ImagemPsicologa = styled.img`
  max-width: 40vw;
  max-height: 60vh;
  float: left;
  margin: 1rem;
  padding-right: 2rem;
  border-radius: 50%;

  @media only screen and (max-width: 600px) {
    float: none;
    padding-right: 0;
    max-width: 50vw;
  }
`;

export const MobileImageWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
    text-align: center;
  }
`;
export const DesktopImageWrapper = styled.div`
  display: block;

  @media only screen and (max-width: 600px) {
    display: none;
    text-align: center;
  }
`;

export const TabletShowWrapper = styled.div`
  display: none;

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    display: block;
  }
`;

export const TabletHideWrapper = styled.div`
  display: block;

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    display: none;
  }
`;

export const TabletDivUp = styled.div`
  display: none;
`;

export const TabletWrapper = styled.div`
  display: none;

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    display: block;
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
  margin-bottom: 2rem;
  text-align: left;

  @media only screen and (max-width: 600px) {
    font-size: 0.85rem;
    margin-bottom: 1rem;
    line-height: 1.5;
    text-align: center;
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

export const TextoSecundario = styled.p`
  font-size: 1rem;
  color: var(--text);
  line-height: 1.6;
  text-align: left;

  @media only screen and (max-width: 600px) {
    font-size: 0.85rem;
    margin-bottom: 1rem;
    line-height: 1.5;
    text-align: center;
  }
`;
