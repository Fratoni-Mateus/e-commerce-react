import React from "react";
import manufacture from "../../assets/manufacture.jpg";
import { ReadMore } from "../atoms";

export default function TextCardLastChild() {
  return (
    <div class="h-26 w-33 bg-lCyan gap last-child rounded relative inline-block">
      <div id="text-box2" class="absolute h-100 w-100 t-al-center">
        <ReadMore />
      </div>
      <img src={manufacture} class="w-100 h-100 cover rounded" />
    </div>
  );
}
