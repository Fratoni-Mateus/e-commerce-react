import React from "react";

import { ProductDisplayImage, ProductDisplayName } from "../atoms";
import { ProductDisplayPriceWrapper } from "./";

export default function ProductDisplayFirstChild() {
  return (
    <div class="h-26 w-16 bg-lCyan gap first-child rounded flex-column flow-wrap space-evenly">
      <a link="product.html">
        <ProductDisplayImage />
        <ProductDisplayName />
        <ProductDisplayPriceWrapper />
      </a>
    </div>
  );
}
