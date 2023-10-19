import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw;
  background-color: var(--dark-brown);
  width: 100vw;
  max-height: 10vh;
  height: 10vh;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  box-sizing: border-box;
  position: relative;

  @media screen and (max-width: 768px) {
    padding-right: 50px;
  }
`;

export const StyledLogo = styled.img`
  width: auto;
  height: 8vh;
`;

interface StyledNavbarProps {
  open: boolean;
}

export const StyledNavbar = styled.nav<StyledNavbarProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: absolute;
    top: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--dark-brown);
    width: 100vw;
    height: 100vh;
    padding-top: 1rem; /* Ajuste do espaço para o menu */
    z-index: 999;
  }
`;

interface BurgerMenuButtonProps {
  open: boolean;
}

export const BurgerMenuButton = styled.button<BurgerMenuButtonProps>`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1.25rem;
    right: 1rem;
    z-index: 999;
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    span {
      display: block;
      width: 100%;
      height: 2px;
      margin-bottom: 6px;
      position: relative;
      background-color: var(--light-beige);
      border-radius: 2px;
      transform-origin: center;
      transition: transform 5s ease-out, opacity 5s ease-out;

      &:focus {
        outline: none;
      }

      &:first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
      }

      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

export const NavbarTitle = styled.span`
  font-size: 1.5vw;
  color: #fff;
  display: flex;
  align-items: center;
  font-family: "Dancing Script", cursive;

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 420px) {
    font-size: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 340px) {
    font-size: 0.75rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledNavItem = styled.a`
  display: block;
  padding: 1.25vw;
  color: #fff;
  text-decoration: none;
  font-size: 1.5vw;

  &:hover {
    color: var(--light-beige);
    border-radius: 10px;
  }

  &.active {
    color: var(--light-beige);
  }

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;
