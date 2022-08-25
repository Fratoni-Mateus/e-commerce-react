import React from 'react'

import logo from "../../assets/logo.png";
import catalog from "../../assets/catalogo.png";
import cart from "../../assets/Shopping-cart.png";
import twitter from "../../assets/Twitter.png";
import facebook from "../../assets/Facebook.png";
import instagram from "../../assets/Instagram.png";

export default function Text() {
  return (
<div>
      <header className="container-header bg-dCyan align-center">
          <ul className="flex space-between list-none align-center pd-12 font-24 h-100px">
              
              <li><a link="../../index.html"><img className="img-logo" src={logo} alt="Logo"/></a></li>
              <li><a className="flex h-35px" link="#"><img className="h-35px margin-right align-center" src={catalog} alt="catalogo"/></a></li>
              <li><input className="search-bar h-35px icon rounded" type="text" placeholder="BUSCAR"/></li>
              <li><a link="login.html" target="_self">ENTRE</a></li>
              <li><a link="#"><img className="icon-50" src={cart}/></a></li>
          </ul>
      </header>
      <main>
        <div id="main-wrapper" className="flex-column space-evenly align-center">
            <div className="h-a w-66 bg-lCyan gap rounded pad-16">
                <h2>Título da página</h2>
                <h4>Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.In elementis mé pra quem é amistosis quis leo.</h4>
                <h4>Manduma pindureta quium dia nois paga. Atirei o pau no gatis, per gatis num morreus.Interagi no mé, cursus quis, vehicula ac nisi. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.</h4>
                <h4>Sapien in monti palavris qui num significa nadis i pareci latim. A ordem dos tratores não altera o pão duris. Atirei o pau no gatis, per gatis num morreus.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!</h4>
                <h4>Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Pra lá , depois divoltis porris, paradis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Interagi no mé, cursus quis, vehicula ac nisi</h4>
                <h4>Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Interagi no mé, cursus quis, vehicula ac nisi. Viva Forevis aptent taciti sociosqu ad litora torquent.</h4>
            </div>
        </div>
    </main>
      <footer className="bg-lGrey flex-column pd-24 font-14 font-light">
      <div className="flex space-evenly">
        <a link="../../index.html"
          ><img src={logo} className="img-logo"
        /></a>
        <div className="social-media-wrapper flex-column">
          <p>Redes sociais</p>
          <div className="flex space-evenly">
            <a link="https://www.instagram.com/"
              ><img
                className="icon-24"
                src={instagram}
                alt="Instagram"
            /></a>
            <a link="https://www.facebook.com/"
              ><img className="icon-24" src={facebook} alt="Facebook"
            /></a>
            <a link="https://twitter.com/"
              ><img className="icon-24" src={twitter} alt="Twitter"
            /></a>
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
    </div>
  )
}
