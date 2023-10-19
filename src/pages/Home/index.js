import React, { useEffect } from "react";
import {
  Container,
  Titulo,
  TextoPrincipal,
  Subtitulo,
  TextoSecundario,
  ImagemPsicologa,
  ContainerFoto,
  ContainerText,
  MobileImageWrapper,
  OutterContainer,
  DesktopContainer,
  BottomContainerText,
  FlagsDiv,
} from "./Home";
import imgPabla from "../../img/profile2.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";
import {
  ImagemPsicoTablet,
  TabletBottomDiv,
  TabletContainer,
  TabletContainerFoto,
  TabletTopDiv,
} from "./HomeTabletStyles";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <OutterContainer>
      <DesktopContainer>
        <Container>
          <div className="animation" data-aos="zoom-in">
            <ContainerFoto>
              <ImagemPsicologa src={imgPabla} aria-label="Psicóloga" />
            </ContainerFoto>
          </div>
          <ContainerText>
            <div className="animation" data-aos="zoom-in">
              <MobileImageWrapper>
                <ImagemPsicologa src={imgPabla} aria-label="Psicóloga Pabla Amaral" />
              </MobileImageWrapper>
            </div>

            <div className="animation" data-aos="zoom-in">
              <Titulo>Psicoterapia Online</Titulo>

              <TextoPrincipal>
                Nada de espera ou chegar atrasado na sua consulta, agora suas
                <strong> sessões de terapia</strong> podem ser feitas no
                conforto da sua casa ou escritório.
                <br />A consulta virtual por vídeo e chat é 100% protegida e
                sigilosa, além de atender todas as regulamentações dos Conselhos
                Federais de Psicologia e Medicina do Brasil.
              </TextoPrincipal>
            </div>

            <div className="animation" data-aos="zoom-in">
              <Subtitulo>Praticidade e fácil acesso</Subtitulo>

              <TextoSecundario>
                O <strong>atendimento online</strong> é aria-labelamente eficiente e
                muitos estudos atestam isso. A sessão de terapia on-line
                proporciona resultados incríveis. Agende uma consulta
                psicológica em apenas alguns cliques. Atendimento para adultos,
                crianças e adolescentes.
              </TextoSecundario>
            </div>
          </ContainerText>
        </Container>

        <BottomContainerText>
          <div className="animation" data-aos="zoom-in">
            <Subtitulo>Brasileiros no Exterior</Subtitulo>
            <TextoSecundario>
              <strong>Brasileiros</strong> que moram fora do nosso país,
              procuram por terapia online porque consideram importante cuidar de
              sua saúde mental. Falar sobre saudade da família, dificuldades com
              a língua, estilo de vida, cultura,rotina, emprego, clima, relações
              e diversos outros fatores podem dificultar a adaptação no novo
              país, neste momento a terapia ajuda a ver as situações por outros
              ângulos . Já passei por essa experiência na minha vida, e sei
              exatamente os desafios enfrentados, e por esse motivo, passei a
              atender pacientes fora do país. Ofereço
              <strong> suporte personalizado </strong>com ferramentas para
              ajudar você a construir uma vida plena e significativa.
            </TextoSecundario>
          </div>
        </BottomContainerText>
        <FlagsDiv>
          <img
            src="https://flagcdn.com/120x90/us.png"
            srcset="https://flagcdn.com/240x180/us.png 2x"
            width="40"
            height="30"
            aria-label="United States"
          />

          <img
            src="https://flagcdn.com/120x90/ie.png"
            srcset="https://flagcdn.com/240x180/ie.png 2x"
            width="40"
            height="30"
            aria-label="Ireland"
          />

          <img
            src="https://flagcdn.com/120x90/br.png"
            srcset="https://flagcdn.com/240x180/br.png 2x"
            width="40"
            height="30"
            aria-label="Brazil"
          />

          <img
            src="https://flagcdn.com/120x90/gb-eng.png"
            srcset="https://flagcdn.com/240x180/gb-eng.png 2x"
            width="40"
            height="30"
            aria-label="England"
          />

          <img
            src="https://flagcdn.com/120x90/it.png"
            srcset="https://flagcdn.com/240x180/it.png 2x"
            width="40"
            height="30"
            aria-label="Italy"
          />
          <img
            src="https://flagcdn.com/120x90/de.png"
            srcset="https://flagcdn.com/240x180/de.png 2x"
            width="40"
            height="30"
            aria-label="Germany"
          />
          <img
            src="https://flagcdn.com/120x90/au.png"
            srcset="https://flagcdn.com/240x180/au.png 2x"
            width="40"
            height="30"
            aria-label="Australia"
          />
          <img
            src="https://flagcdn.com/120x90/pt.png"
            srcset="https://flagcdn.com/240x180/pt.png 2x"
            width="40"
            height="30"
            aria-label="Portugal"
          />
          <img
            src="https://flagcdn.com/120x90/ru.png"
            srcset="https://flagcdn.com/240x180/ru.png 2x"
            width="40"
            height="30"
            aria-label="Russia"
          />
          <img
            src="https://flagcdn.com/120x90/ae.png"
            srcset="https://flagcdn.com/240x180/ae.png 2x"
            width="40"
            height="30"
            aria-label="Emirate"
          />
          <img
            src="https://flagcdn.com/120x90/es.png"
            srcset="https://flagcdn.com/240x180/es.png 2x"
            width="40"
            height="30"
            aria-label="Spain"
          />
          <img
            src="https://flagcdn.com/120x90/fr.png"
            srcset="https://flagcdn.com/240x180/fr.png 2x"
            width="40"
            height="30"
            aria-label="France"
          />
          <img
            src="https://flagcdn.com/120x90/ca.png"
            srcset="https://flagcdn.com/240x180/ca.png 2x"
            width="40"
            height="30"
            aria-label="Canada"
          />
        </FlagsDiv>
      </DesktopContainer>

      {/* tablet only */}

      <TabletContainer>
        <TabletTopDiv>
          <TabletContainerFoto>
            <div className="animation" data-aos="zoom-in">
              <ImagemPsicoTablet src={imgPabla} aria-label="Psicóloga" />
            </div>
          </TabletContainerFoto>

          <ContainerText>
            <div className="animation" data-aos="zoom-in">
              <Titulo>Psicoterapia Online</Titulo>

              <TextoPrincipal>
                Nada de espera ou chegar atrasado na sua consulta, agora suas
                <strong> sessões de terapia</strong> podem ser feitas no
                conforto da sua casa ou escritório.
                <br />A consulta virtual por vídeo e chat é 100% protegida e
                sigilosa, além de atender todas as regulamentações dos Conselhos
                Federais de Psicologia e Medicina do Brasil.
              </TextoPrincipal>
            </div>
          </ContainerText>
        </TabletTopDiv>

        <TabletBottomDiv>
          <div className="animation" data-aos="zoom-in">
            <Subtitulo>Praticidade e fácil acesso</Subtitulo>

            <TextoSecundario>
              O <strong>atendimento online</strong> é aria-labelamente eficiente e
              muitos estudos atestam isso. <br />
              A sessão de terapia on-line proporciona resultados incríveis.
              <br />
              Agende uma consulta psicológica em apenas alguns cliques. <br />
              Atendimento para adultos, crianças e adolescentes.
            </TextoSecundario>
          </div>
        </TabletBottomDiv>
      </TabletContainer>

      {/* mobile only */}
    </OutterContainer>
  );
}
