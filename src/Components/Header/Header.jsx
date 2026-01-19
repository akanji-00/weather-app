import React from "react";
import "./header.css";
import NavDropdown from "./NavDropdown";
import Logo from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={Logo} alt="Weather App Logo" />

      <NavDropdown />
    </header>
  );
}
