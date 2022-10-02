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
  

  return (
    <>
      <Navbar />
      <div className="main_parentbtnsheetdiv">
        <div
          className="parentbtnsheetdiv"
          onClick={show === true ? handleHide : ""}
        >
          <button className="btn_opensheet" onClick={handleShowClick}>
            {show ? "Close ButtonSheet" : "Show ButtonSheet"}
          </button>

          <ButtonSheet show={show} onHide={handleHide}>
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
