import React from "react";

export default function Navbar({ onFilterChange }) {
  // This is the navigation elements array created to navigate between different todo actions
  const links = ["all", "active", "completed"];
  const clickHandler = (currentValue) => {
    onFilterChange(currentValue);
  };
  return (
    <div>
      <ul className="nav nav-pills todo-nav">
        {/* Map function used to navigate between different todo actions*/}
        {links.map((item) => {
          return (
            <li
              key={item}
              role="presentation"
              className="nav-item all-task active"
              onClick={() => clickHandler(item)}
            >
              <a
                className="nav-link"
                style={{ cursor: "pointer", textTransform: "capitalize" }}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
