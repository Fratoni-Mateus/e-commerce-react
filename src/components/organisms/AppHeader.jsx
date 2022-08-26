import React from "react";

import logo from "../../assets/logo.png";
import catalog from "../../assets/catalogo.png";
import cart from "../../assets/Shopping-cart.png";

export default function AppHeader() {
  return (
    <header className="container-header bg-dCyan align-center">
      <ul className="flex space-between list-none align-center pd-12 font-24 h-100px">
        <li>
          <a link="../../index.html">
            <img className="img-logo" src={logo} alt="Logo" />
          </a>
        </li>
        <li>
          <a className="flex h-35px" link="#">
            <img
              className="h-35px margin-right align-center"
              src={catalog}
              alt="catalogo"
            />
          </a>
        </li>
        <li>
          <input
            className="search-bar h-35px icon rounded"
            type="text"
            placeholder="BUSCAR"
          />
        </li>
        <li>
          <a link="login.html" target="_self">
            ENTRE
          </a>
        </li>
        <li>
          <a link="#">
            <img className="icon-50" src={cart} />
          </a>
        </li>
      </ul>
    </header>
  );
}
