import React from "react";

import Default from "../templates/Default";
import {
  ProductWrapper,
  ProductInfo,
  ProductDescriptionWrapper,
} from "../molecules";

export default function Product() {
  return (
    <Default>
      <main>
        <div
          id="main-wrapper"
          className="flex-column space-evenly align-center"
        >
          <div className="flex space-evenly h-a w-66 bg-lCyan gap rounded pad-16">
            <ProductWrapper />
            <ProductInfo />
          </div>
          <ProductDescriptionWrapper />
        </div>
      </main>
    </Default>
  );
}
