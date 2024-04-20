import React, { useEffect } from "react";
import { Container, Titulo, Subtitulo, Texto } from "./SobreMim";

import AOS from "aos";
import "aos/dist/aos.css";

export default function SobreMim() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <Container>
      <div className="animation" data-aos="fade-up">
        <Titulo>Pabla Amaral</Titulo>
        <Subtitulo>CRP 07/37847</Subtitulo>

        <Texto>
          Meu nome é Pabla Amaral, sou <span>psicóloga</span> com formação pela
          Fadergs. Atualmente trabalho com a
          <span>
            {" "}
            <b>Terapia Cognitivo-Comportamental</b>
          </span>
          , e possuo capacitação adicional em Mindfulness e Terapia de Casal.
        </Texto>
        <Texto>
          Meu foco principal é na
          <span>
            <b> promoção da saúde mental</b>
          </span>
          , oferecendo um suporte completo e dedicado aos meus pacientes. Tenho
          experiência na correção e elaboração de pareceres e testes de
          personalidade, e testes de inteligência não verbal. Na minha prática
          clínica, atendo indivíduos com uma variedade de desafios, incluindo
          ansiedade, depressão, estresse, questões relacionadas a
          relacionamentos, gestação, luto, traumas e conflitos familiares, bem
          como inseguranças e outras demandas psicológicas.
        </Texto>
        <Texto>
          Busco desenvolver habilidades emocionais e sociais nos meus pacientes,
          promovendo uma melhor
          <span>
            <b> qualidade de vida</b>
          </span>{" "}
          e{" "}
          <span>
            <b>inteligência emocional</b>
          </span>{" "}
          através do autoconhecimento.
        </Texto>
        <Texto>
          Convido você a vivenciar esse{" "}
          <span>
            <b>processo terapêutico enriquecedor</b>
          </span>
          , que tem como objetivo ampliar a sua percepção, proporcionando uma
          maior compreensão de si mesmo, do mundo e das suas relações.
        </Texto>
        <Texto>
          <span>
            <b>Agende uma consulta</b>
          </span>{" "}
          e inicie o caminho rumo ao bem-estar e à realização.
        </Texto>

        <Texto>Estou pronta para ajudá-lo(a)</Texto>
      </div>
    </Container>
  );
}
