import React from "react";
import "./header.css";

import Checkmark from "../../assets/images/icon-checkmark.svg";

export default function MenuSection({ title, options, selected, onSelect }) {
  return (
    <div className="menu-section">
      <p className="menu-title">{title}</p>

      <ul role="group">
        {options.map((option) => (
          <li key={option.value}>
            <button
              role="menuitemradio"
              aria-checked={selected === option.value}
              className="menu-item"
              onClick={() => onSelect(option.value)}
            >
              {option.label}
              {selected === option.value && (
                <span aria-hidden="true" className="checkmark-icon">
                  <img src={Checkmark} />
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
