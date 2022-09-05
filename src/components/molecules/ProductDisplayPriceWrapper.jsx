import React from "react";

import basketIcon from "../../assets/cesta-botao.png";

export default function ProductDisplayPriceWrapper() {
  return (
    <div class="flex space-evenly gap">
      <h4>R$ 120,00</h4>
      <a link="#">
        <img src={basketIcon} class="icon-24" />
      </a>
    </div>
  );
}
