import React, { useEffect } from "react";
import { Container, Titulo, TextoPrincipal } from "./Psicoterapia";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Psicoterapia() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <Container>
      <div className="animation" data-aos="fade-up">
        <Titulo>O que é psicoterapia?</Titulo>
        <TextoPrincipal>
          Você já ouviu falar em <span>psicoterapia?</span> Esse é um processo
          que proporciona ao paciente adquirir consciência sobre seus próprios
          atos, é algo que precisa ser feito em médio a longo prazo, dessa
          forma, ele terá tempo para explorar totalmente a sua insegurança, dor,
          emoção ou experiência e compreender a situação.
        </TextoPrincipal>
        <TextoPrincipal>
          Acredito que a fala sobre si dá ao paciente a oportunidade de sentir e
          entrar em contato consigo mesmo. Assim, consegue perceber os conteúdos
          significativos da sua vida, dar novos sentidos e construir novas
          experiências com abordagens criativas.
        </TextoPrincipal>
        <TextoPrincipal>
          Assim, o paciente tem a oportunidade de{" "}
          <span>resolver conflitos</span> internos, desenvolver um melhor
          relacionamento consigo mesmo e com quem está ao seu redor, ao mesmo
          tempo que desenvolve o autoamor, a responsabilidade por seus atos,
          amadurecimento e autoconhecimento.
        </TextoPrincipal>
      </div>
    </Container>
  );
}
