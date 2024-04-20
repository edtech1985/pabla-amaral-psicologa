import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

* {
    margin: 0;
    padding: 0;
    font-family: 'Libre Baskerville', serif;
}

body {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-color: var(--nude);

    @media only screen and (max-width: 600px) {
    height: auto;
  }
}

:root {
  --text: #5d3837;
  --dark-brown: #a0746d;
  --light-brown: #D4A7A0;
  --dark-beige: #D7B7AB;
  --light-beige: #D8C2B5;
  --nude: #FDECDB;
}

`;

export default GlobalStyle;
