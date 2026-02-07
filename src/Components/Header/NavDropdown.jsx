import { useState, useRef, useEffect } from "react";
import "./header.css";

import MenuSection from "./MenuSection";

import Units from "../../assets/images/icon-units.svg";
import Dropdown from "../../assets/images/icon-dropdown.svg";

import {
  TEMP_OPTIONS,
  WIND_OPTIONS,
  PRECIP_OPTIONS,
} from "../../config/unitPresets";

// const METRIC_UNITS = {
//   temperature: "celsius",
//   windSpeed: "kmh",
//   precipitation: "mm",
// };

// const IMPERIAL_UNITS = {
//   temperature: "fahrenheit",
//   windSpeed: "mph",
//   precipitation: "in",
// };

export default function NavDropdown({ unitSystem, setUnitSystem }) {
  const [isOpen, setIsOpen] = useState(false);

  // const [units, setUnits] = useState(METRIC_UNITS);

  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const switchUnitsPreset = () => {
    setUnitSystem((prev) => (prev === "metric" ? "imperial" : "metric"));
  };

  // const isImperial =
  //   units.temperature === IMPERIAL_UNITS.temperature &&
  //   units.windSpeed === IMPERIAL_UNITS.windSpeed &&
  //   units.precipitation === IMPERIAL_UNITS.precipitation;

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  // function updateUnit(category, value) {
  //   setUnits((prev) => ({ ...prev, [category]: value }));
  // }
  return (
    <div className="units-dropdown">
      <button
        ref={buttonRef}
        className="units-button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span aria-hidden="true" className="dropdown-icon">
          <img src={Units} />
        </span>
        Units
        <span aria-hidden="true" className="dropdown-icon">
          <img src={Dropdown} />
        </span>
      </button>

      {isOpen && (
        <div ref={menuRef} role="menu" className="units-menu">
          {/* ====== SWITCH BETWEEN IMPERIAL AND METRIC  ===== */}
          <button
            className="menu-preset"
            role="menuitem"
            onClick={switchUnitsPreset}
          >
            Switch to {unitSystem === "metric" ? "Imperial" : "Metric"}
          </button>

          {/* ===== TEMPERATURE ===== */}
          <MenuSection
            title="Temperature"
            selected={unitSystem}
            options={TEMP_OPTIONS}
            onSelect={setUnitSystem}
          />
          <hr className="menu-divider" />

          {/* ===== WIND SPEED ===== */}
          <MenuSection
            title="Wind Speed"
            selected={unitSystem}
            options={WIND_OPTIONS}
            onSelect={setUnitSystem}
          />
          <hr className="menu-divider" />

          {/* ===== PRECIPITATION ===== */}
          <MenuSection
            title="Precipitation"
            selected={unitSystem}
            options={PRECIP_OPTIONS}
            onSelect={setUnitSystem}
          />
        </div>
      )}
    </div>
  );
}
