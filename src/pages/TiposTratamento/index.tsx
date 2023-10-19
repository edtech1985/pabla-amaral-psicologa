import React, { useEffect } from "react";
import ListaDeTratamentos from "./ListaTratamentos";
import {
  Container,
  Titulo,
  TextoPrincipal,
  Subtitulo,
} from "./TiposTratamento";

import AOS from "aos";
import "aos/dist/aos.css";

export default function TiposTratamento() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <Container>
      <div className="animation" data-aos="fade-up">
        <Titulo>TIPOS DE TRATAMENTO</Titulo>

        <TextoPrincipal>
          Se faz sentir, faz sentido! Não menospreze sua dor, busque ajuda, aqui
          você será acolhido sem julgamentos.
        </TextoPrincipal>

        <Subtitulo>
          Alguns dos <span>tratamentos</span> oferecidos:
        </Subtitulo>

        <ListaDeTratamentos />
      </div>
    </Container>
  );
}
