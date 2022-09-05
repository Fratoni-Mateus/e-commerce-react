import React from "react";
import { TextWrapper } from "../molecules";
import Default from "../templates/Default";

export default function Text() {
  return (
    <Default>
      <main>
        <div
          id="main-wrapper"
          className="flex-column space-evenly align-center"
        >
          <TextWrapper />
        </div>
      </main>
    </Default>
  );
}
