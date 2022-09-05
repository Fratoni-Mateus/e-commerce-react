import React from "react";
import brandableBox from "../../assets/brandable-box.jpg";
import manufacture from "../../assets/manufacture.jpg";

export default function TextCardsWrapper() {
  return (
    <div class="flex">
      <div class="h-26 w-33 bg-lCyan gap first-child rounded relative inline-block">
        <div id="text-box1" class="absolute h-100 w-100 t-al-center">
          <a link="./texto.html">
            <h2 class="inline-block bg-dOrange rounded pad-4">Leia mais</h2>
          </a>
        </div>
        <img src={brandableBox} class="w-100 h-100 cover rounded block" />
      </div>
      <div class="h-26 w-33 bg-lCyan gap last-child rounded relative inline-block">
        <div id="text-box2" class="absolute h-100 w-100 t-al-center">
          <a link="./texto.html">
            <h2 class="inline-block bg-dOrange rounded pad-4 z-1p">
              Leia mais
            </h2>
          </a>
        </div>
        <img src={manufacture} class="w-100 h-100 cover rounded" />
      </div>
    </div>
  );
}
