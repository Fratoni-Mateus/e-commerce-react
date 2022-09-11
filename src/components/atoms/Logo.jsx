import React from "react";
import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <a link="../../index.html">
      <img className="img-logo" src={logo} alt="Logo" />
    </a>
  );
}
