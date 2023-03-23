import React from "react";
import { StyledNavbar, NavbarList } from "./Navbar.styles";

const Navbar = () => {
  return (
    <StyledNavbar>
      <h1>FUTURE.NET</h1>
      <NavbarList>
        <li>HOME</li>
        <li>STUDIO</li>
        <li>WORKS</li>
        <li>CONTACT</li>
      </NavbarList>
    </StyledNavbar>
  );
};

export default Navbar;
