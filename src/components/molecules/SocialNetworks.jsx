import React from "react";

import { Instagram, Facebook, Twitter } from "../atoms";

export default function SocialNetworks() {
  return (
    <div className="social-media-wrapper flex-column">
      <p>Redes sociais</p>
      <div className="flex space-evenly">
        <Instagram />
        <Facebook />
        <Twitter />
      </div>
    </div>
  );
}
