import React from "react";
import { TextCardFirstChild, TextCardLastChild } from "../molecules";

export default function TextCardsWrapper() {
  return (
    <div class="flex">
      <TextCardFirstChild />
      <TextCardLastChild />
    </div>
  );
}
