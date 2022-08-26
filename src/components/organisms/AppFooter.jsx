import React from "react";

import logo from "../../assets/logo.png";
import twitter from "../../assets/Twitter.png";
import facebook from "../../assets/Facebook.png";
import instagram from "../../assets/Instagram.png";

export default function AppFooter() {
  return (
    <footer className="bg-lGrey flex-column pd-24 font-14 font-light">
      <div className="flex space-evenly">
        <a link="../../index.html">
          <img src={logo} className="img-logo" />
        </a>
        <div className="social-media-wrapper flex-column">
          <p>Redes sociais</p>
          <div className="flex space-evenly">
            <a link="https://www.instagram.com/">
              <img className="icon-24" src={instagram} alt="Instagram" />
            </a>
            <a link="https://www.facebook.com/">
              <img className="icon-24" src={facebook} alt="Facebook" />
            </a>
            <a link="https://twitter.com/">
              <img className="icon-24" src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>
        <a link="../../texto.html">Sobre nós</a>
        <a link="../../texto.html">Política de privacidade</a>
        <a link="../../texto.html">Contato</a>
        <a link="../../texto.html">Termos e condições</a>
      </div>
      <div className="pd-12">
        <ul className="list-none flex space-evenly font-light font-12">
          <li>Copyright© 2022 Fratoni & Carvalho</li>
          <li>
            CNPJ: 01.234.567/0001-89 /Av. Fictícia no mundo, nº 1.234, Bairro,
            Cidade/UF - CEP 01234-567
          </li>
        </ul>
      </div>
    </footer>
  );
}
