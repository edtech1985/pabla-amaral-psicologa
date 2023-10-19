import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  NavbarTitle,
  StyledHeader,
  StyledLogo,
  StyledNavbar,
  StyledNavItem,
  BurgerMenuButton,
} from "./Header";
import logo from "../../img/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = () => {
    setIsOpen(false);
  };



  return (
    <StyledHeader>
      <StyledLogo src={logo} aria-label="Psicologia" />
      <NavbarTitle> Psicóloga Pabla Amaral</NavbarTitle>
      <BurgerMenuButton open={isOpen} onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </BurgerMenuButton>
      <StyledNavbar open={isOpen}>
      <StyledNavItem
          as={NavLink}
          to="/" aria-label="home"
          onClick={handleNavItemClick}
        >
          Home
        </StyledNavItem>
        <StyledNavItem
          as={NavLink}
          to="/psicoterapia"
          aria-label="psicoterapia"
          onClick={handleNavItemClick}
        >
          <span> Psicoterapia </span>
        </StyledNavItem>
        <StyledNavItem
          as={NavLink}
          to="/tratamentos"
          aria-label="tratamentos"
          onClick={handleNavItemClick}
        >
          <span> Tratamentos </span>
        </StyledNavItem>
        <StyledNavItem
          as={NavLink}
          to="/depoimentos"
          aria-label="depoimentos"
          onClick={handleNavItemClick}
        >
          Depoimentos
        </StyledNavItem>
        <StyledNavItem
          as={NavLink}
          to="/sobre"
          aria-label="sobre"
          onClick={handleNavItemClick}
        >
          Sobre Mim
        </StyledNavItem>
        <StyledNavItem
          as={NavLink}
          to="/contato"
          aria-label="contato"
          onClick={handleNavItemClick}
        >
          Contato
        </StyledNavItem>
      </StyledNavbar>
    </StyledHeader>
  );
}

export default Header;
