import { useEffect, useState, useRef } from "react";

import Dropdown from "../../assets/images/icon-dropdown.svg";

export default function ForecastDropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  //   close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      <div className="days-dropdown">
        <button
          ref={buttonRef}
          className="days-button"
          aria-haspopup="dayslistbox"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {value}
          <span aria-hidden="true" className="dropdown-icon">
            <img src={Dropdown} />
          </span>
        </button>

        {open && (
          <ul ref={menuRef} className="dropdown-menu" role="listbox">
            {options.map((option) => {
              const selected = option === value;

              return (
                <li
                  key={option}
                  role="option"
                  aria-selected={selected}
                  className={`dropdown-item ${selected ? "selected" : ""}`}
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
