import React, { useEffect } from "react";
import { Container, Titulo, IconesContato, ItemContato } from "./Contato";
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Contato() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <Container>
      <div className="animation" data-aos="fade-up">
        <Titulo>Contato</Titulo>
        <IconesContato>
          <div className="animation" data-aos="fade-right">
            <ItemContato>
              <a
                href="https://www.linkedin.com/in/psi-pabla/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={40} color="#0077B5" />
                <span>Linkedin</span>
              </a>
            </ItemContato>
          </div>

          <div className="animation" data-aos="fade-up">
            <ItemContato>
              <a
                href="https://www.instagram.com/psipabla/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={40} color="#E1306C" />
                <span>Instagram</span>
              </a>
            </ItemContato>
          </div>

          <div className="animation" data-aos="fade-up">
            <ItemContato>
              <a
                href="https://api.whatsapp.com/send?phone=555196950402"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={40} color="#25D366" />
                <span>Whatsapp</span>
              </a>
            </ItemContato>
          </div>

          <div className="animation" data-aos="fade-left">
            <ItemContato>
              <a href="mailto:seuemail@exemplo.com">
                <FaEnvelope size={40} color="#D44638" />
                <span>Email</span>
              </a>
            </ItemContato>
          </div>
        </IconesContato>
      </div>
    </Container>
  );
}
