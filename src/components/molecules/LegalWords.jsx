import React from "react";

import { AddressAndCNPJ, Copyright } from "../atoms/";

export default function LegalWords() {
  return (
    <ul className="list-none flex space-evenly font-light font-12">
      <Copyright />
      <AddressAndCNPJ />
    </ul>
  );
}
