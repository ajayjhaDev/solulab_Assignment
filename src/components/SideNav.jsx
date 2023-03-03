import React from "react";
import graph from "../assets/graph.svg";

const SideNav = () => {
  return (
    <>
      <div className="sidebar">
        <a href="#home" style={{ backgroundColor: "#29B712" }}>
          <img src={graph} alt="graph" />
        </a>
        <a href="#services">
          <i className="fa-solid fa-plus fs-3"></i>
          <p className="mb-5">New</p>
        </a>
        <a href="#clients">
          <i className="fa-regular fa-user fs-3"></i>
          <p className="mb-5">Patient</p>
        </a>
        <a href="#contact">
          <i className="bi bi-folder fs-3"></i>
          <p className="mb-5">FOLDER</p>
        </a>

        <a href="#contact">
          <i className="bi bi-file-earmark-arrow-up fs-3"></i>
          <p className="mb-5"> UPLOAD</p>
        </a>

        <a href="#contact">
          <i className="bi bi-file-earmark-medical fs-3"></i>
          <p className="mb-5"> REPORT</p>
        </a>

        <a href="#contact">
          <i className="bi bi-gear fs-3"></i>
          <p className="mb-5"> SETTING</p>
        </a>

        <a href="#contact">
          <i className="bi bi-box-arrow-right fs-3"></i>
          <p className="mb-5">LOGOUT</p>
        </a>
      </div>
    </>
  );
};

export default SideNav;
