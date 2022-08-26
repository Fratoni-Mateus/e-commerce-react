import React from "react";

import basketIcon from "../../assets/cesta-botao.png";
import { ProductDisplayImage, ProductDisplayName } from "../atoms";

export default function ProductDisplayLastChild() {
  return (
    <div class="h-26 w-16 bg-lCyan gap last-child rounded flex-column flow-wrap space-evenly">
      <a link="product.html">
        <ProductDisplayImage />
        <ProductDisplayName />
        <div class="flex space-evenly gap">
          <h4>R$ 120,00</h4>
          <a link="#">
            <img src={basketIcon} class="icon-24" />
          </a>
        </div>
      </a>
    </div>
  );
}
