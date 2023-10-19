import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  StyledDevelopedBy,
  StyledFooter,
  StyledIconItem,
  StyledIconList,
  StyledRightsReserved,
} from "./Footer";

function Footer() {
  return (
    <StyledFooter>
      <StyledIconList>
        <StyledIconItem>
          <a
            href="https://www.instagram.com/psipabla/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </StyledIconItem>
        <StyledIconItem>
          <a
            href="https://www.linkedin.com/in/psi-pabla/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </StyledIconItem>

        <StyledIconItem>
          <a
            href="https://api.whatsapp.com/send?phone=555196950402&text=Olá%20Pabla,%20gostaria%20de%20mais%20informações%20sobre%20a%20psicoterapia.
            "
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </StyledIconItem>
      </StyledIconList>
      <StyledRightsReserved>
        © 2023 Direitos Reservados | <span>Psicóloga Pabla Amaral</span>
      </StyledRightsReserved>
      <StyledDevelopedBy>
        Developed by{" "}
        <a
          href="https://www.edtech1985.com.br/"
          target="_blank"
          rel="noreferrer"
          aria-label="Desenvolvedor Web edtech1985"
        >
          <span>edtech1985</span>
        </a>
      </StyledDevelopedBy>
    </StyledFooter>
  );
}

export default Footer;
