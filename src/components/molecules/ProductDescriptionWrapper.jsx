import React from "react";

import { ProductDescriptionInfo } from "../atoms";

export default function ProductDescriptionWrapper() {
  return (
    <div className="h-a w-66 bg-lCyan gap rounded pad-16">
      <h2>Descrição do produto</h2>
      <br />
      <ProductDescriptionInfo />
    </div>
  );
}
