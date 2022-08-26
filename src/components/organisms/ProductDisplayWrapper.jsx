import React from "react";

import {
  ProductDisplayFirstChild,
  ProductDisplayLastChild,
  ProductDisplayMiddle,
} from "../molecules";

export default function ProductDisplayWrapper() {
  return (
    <div class="flex">
      <ProductDisplayFirstChild />
      <ProductDisplayMiddle />
      <ProductDisplayMiddle />
      <ProductDisplayLastChild />
    </div>
  );
}
