import React from "react";

import { SafetyIcon } from "../atoms/";

export default function Safety() {
  return (
    <li className="gap flex w-100 h-100 cover rounded">
      <SafetyIcon />
      Embalagem discreta e segura
    </li>
  );
}
