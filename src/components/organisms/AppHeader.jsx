import React from "react";

import { Catalog, Logo, SearchBar, Login, Cart } from "../atoms";

export default function AppHeader() {
  return (
    <header className="container-header bg-dCyan align-center">
      <ul className="flex space-between list-none align-center pd-12 font-24 h-100px">
        <li>
          <Logo />
        </li>
        <li>
          <Catalog />
        </li>
        <li>
          <SearchBar />
        </li>
        <li>
          <Login />
        </li>
        <li>
          <Cart />
        </li>
      </ul>
    </header>
  );
}
