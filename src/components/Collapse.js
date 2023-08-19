import React, { useState } from "react";

function Collapse({ children, title, className }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${className}`}>
      <div style={{ display: "flex", cursor: "pointer" }} onClick={toggle}>
        <button>{isOpen ? "▼" : "►"}</button>
        <h2>{title}</h2>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

export default Collapse;
