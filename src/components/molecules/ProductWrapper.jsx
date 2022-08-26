import React from "react";

import { PrimaryImage, SecondaryImage } from "../atoms/";

export default function ProductWrapper() {
  return (
    <div className="flex-column w-100">
      <PrimaryImage />
      <div className="list-none flex r-flow-wrap h-35px">
        <SecondaryImage />
        <SecondaryImage />
        <SecondaryImage />
        <SecondaryImage />
        <SecondaryImage />
      </div>
    </div>
  );
}
