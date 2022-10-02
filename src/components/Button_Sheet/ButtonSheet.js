import React from "react";
import "./ButtonSheet.css";

const ButtonSheet = ({ show, onHide, children }) => {
  return (
    <div
      style={show ? { transform: `translateY(calc()}))` } : {}}
      className={`bottom-sheet${show ? " show" : ""}
      }`}
    >
      <div className="bottomsheet_item">{children}</div>
    </div>
  );
};

export default ButtonSheet;
