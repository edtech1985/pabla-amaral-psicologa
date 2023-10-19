import styled from "styled-components";
import suaImagemDeBackground from "../img/logo.png";

export const Main = styled.main`
  max-width: 100vw;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative; /* Defina a posição como relative */
  z-index: 0; /* Defina o z-index como 0 para que o conteúdo fique acima deste valor */

  @media only screen and (max-width: 600px) {
    min-height: 100vh;
    height: auto;
    max-height: 100%;
  }

  /* Adicione a div para o background image */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${suaImagemDeBackground});
    background-size: auto;
    background-position: fixed;
    background-repeat: repeat;
    opacity: 0.5; /* Ajuste o valor de 0 a 1 para controlar a transparência */
    z-index: -1; /* Defina o z-index como -1 para que fique abaixo do conteúdo */
  }
`;
