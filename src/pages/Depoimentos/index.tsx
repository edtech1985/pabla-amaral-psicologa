import React, { useEffect } from "react";
import { Container, Titulo, Depoimento } from "./Depoimentos";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Depoimentos() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <Container>
      <div className="animation" data-aos="fade-left">
        <Titulo>DEPOIMENTOS</Titulo>
      </div>

      <div className="animation" data-aos="fade-right">
        <Depoimento>
          Estou aprendendo a não me abalar com o que estão pensando a meu
          respeito, principalmente, com aquelas pessoas que provavelmente não
          vou ver nunca mais. Será que a opinião da família, dos amigos e dos
          colegas de trabalho importam? Sim, porém importa mais eu me respeitar
          e não colocar em segundo plano o que gosto e quero só para agradá-los.
          Hoje estou mais segura que posso controlar melhor minha ansiedade.” G.
          A.
          <span className="stars">⭐️⭐️⭐️⭐️⭐️</span>
        </Depoimento>
      </div>

      <div className="animation" data-aos="fade-left">
        <Depoimento>
          “Você foi uma pessoa fundamental nesta caminhada. Muito obrigada por
          tudo que você fez por nós e por mim, em especial. Você realmente é a
          psicóloga que faz a diferença na vida das pessoas. Um grande abraço!”
          P. G.
          <span className="stars">⭐️⭐️⭐️⭐️⭐️</span>
        </Depoimento>
      </div>

      <div className="animation" data-aos="fade-right">
        <Depoimento>
          “Pabla você foi tão legal comigo, entendeu rapidamente o meu problema
          e, como um “passe de mágica”, me mostrou o que fazer para poder acabar
          de vez com o que me atormentava. Sou muito feliz mesmo por estar
          fazendo essa terapia com você! Obrigada!” A.T.
          <span className="stars">⭐️⭐️⭐️⭐️⭐️</span>
        </Depoimento>
      </div>
    </Container>
  );
}
