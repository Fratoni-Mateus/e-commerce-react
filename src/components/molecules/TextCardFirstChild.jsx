import React from "react";
import brandableBox from "../../assets/brandable-box.jpg";
import { ReadMore } from "../atoms";

export default function TextCardFirstChild() {
  return (
    <div class="h-26 w-33 bg-lCyan gap first-child rounded relative inline-block">
      <div id="text-box1" class="absolute h-100 w-100 t-al-center">
        <ReadMore />
      </div>
      <img src={brandableBox} class="w-100 h-100 cover rounded block" />
    </div>
  );
}
