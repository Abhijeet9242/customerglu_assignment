import Navbar from "../Navbar/Navbar";
import "./Parent_ButtonSheet.css";
import { useState } from "react";
import React from "react";
import ButtonSheet from "./ButtonSheet.js";

const Parent_ButtonSheet = () => {
  const [show, setShow] = useState(false);

  const handleShowClick = () => {
    setShow(true);
  };

  const handleHide = () => {
    setShow(false);
  };

  const handleToggling = (show) => {
    if (show) handleHide();
  };

  return (
    <>
      <Navbar />
      <div
        className={show ? "parentbtnsheetdiv bluring" : "parentbtnsheetdiv"}
        onClick={() => handleToggling(show)}
      >
        <div className="ac">
          <div className="spacing">.</div>
          <button className="btn_opensheet" onClick={handleShowClick}>
            Open ButtonSheet
          </button>

          <ButtonSheet show={show} >
            <h3>Cities Name</h3>
            <hr />
            <div>Bangalore</div>
            <br />
            <div>Hyderabad</div>
            <br />
            <div>Pune</div>
            <br />
            <div>Noida</div>
          </ButtonSheet>
        </div>
      </div>
    </>
  );
};

export default Parent_ButtonSheet;
