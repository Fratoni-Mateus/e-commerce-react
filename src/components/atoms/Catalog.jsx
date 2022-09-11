import React from "react";
import catalog from "../../assets/catalogo.png";

export default function Catalog() {
  return (
    <a className="flex h-35px" link="#">
      <img
        className="h-35px margin-right align-center"
        src={catalog}
        alt="catalogo"
      />
    </a>
  );
}
