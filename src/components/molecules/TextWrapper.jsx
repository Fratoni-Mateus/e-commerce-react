import React from "react";
import { TextBody, TextTitle } from "../atoms";

export default function TextWrapper() {
  return (
    <div className="h-a w-66 bg-lCyan gap rounded pad-16">
      <TextTitle />
      <TextBody />
    </div>
  );
}
