import React, { useState } from "react";
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
      <StyledLogo src={logo} alt="Psicologia" />
      <NavbarTitle> Psicóloga Pabla Amaral</NavbarTitle>
      <BurgerMenuButton open={isOpen} onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </BurgerMenuButton>
      <StyledNavbar open={isOpen}>
        <StyledNavItem as={NavLink} to="/" exact onClick={handleNavItemClick}>
          Home
        </StyledNavItem>
        <StyledNavItem
          as={NavLink}
          to="/psicoterapia"
          alt="psicoterapia"
          onClick={handleNavItemClick}
        >
          <span> Psicoterapia </span>
        </StyledNavItem>
        <StyledNavItem
          as={NavLink}
          to="/tratamentos"
          alt="tratamentos"
          onClick={handleNavItemClick}
        >
          <span> Tratamentos </span>
        </StyledNavItem>
        <StyledNavItem
          as={NavLink}
          to="/depoimentos"
          alt="depoimentos"
          onClick={handleNavItemClick}
        >
          Depoimentos
        </StyledNavItem>
        <StyledNavItem
          as={NavLink}
          to="/sobre"
          alt="sobre"
          onClick={handleNavItemClick}
        >
          Sobre Mim
        </StyledNavItem>
        <StyledNavItem
          as={NavLink}
          to="/contato"
          alt="contato"
          onClick={handleNavItemClick}
        >
          Contato
        </StyledNavItem>
      </StyledNavbar>
    </StyledHeader>
  );
}

export default Header;
