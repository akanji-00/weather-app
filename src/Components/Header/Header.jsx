import React from "react";
import "./header.css";
import NavDropdown from "./NavDropdown";
import Logo from "../../assets/images/logo.svg";

export default function Header({ unitSystem, setUnitSystem }) {
  return (
    <header className="header">
      <img className="header-logo" src={Logo} alt="Weather App Logo" />

      <NavDropdown unitSystem={unitSystem} setUnitSystem={setUnitSystem} />
    </header>
  );
}
