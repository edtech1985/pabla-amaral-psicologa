import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.75);
  padding: 1rem;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  max-width: 20vw;

  &:hover {
    transform: scale(1.25);
  }

  img {
    max-width: 100%; /* Isso fará com que a imagem se ajuste ao tamanho do cartão */
    height: auto; /* Isso manterá a proporção da imagem */
  }
`;

export const InstagramLink = styled.a`
  text-decoration: none;
  color: inherit;
`;
