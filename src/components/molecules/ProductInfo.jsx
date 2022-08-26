import React from "react";

import { Delivery, Safety, Color, AddToBasket } from "./";

export default function ProductInfo() {
  return (
    <div className="flex-column w-100">
      <ul className="flex-column space-evenly w-100 list-none">
        <li className="gap flex w-100 h-100 cover rounded">
          <h2>Relógio mostrador de hora</h2>
        </li>
        <li className="gap flex w-100 h-100 cover rounded">R$ 120,00</li>
        <Delivery />
        <Safety />
        <Color />
        <AddToBasket />
      </ul>
    </div>
  );
}
