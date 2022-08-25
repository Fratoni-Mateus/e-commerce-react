import React from 'react'

import logo from "../../assets/logo.png";
import catalog from "../../assets/catalogo.png";
import cart from "../../assets/Shopping-cart.png";
import twitter from "../../assets/Twitter.png";
import facebook from "../../assets/Facebook.png";
import instagram from "../../assets/Instagram.png";
import watch1 from "../../assets/watch1.jpg";
import watch2 from "../../assets/watch2.jpg";
import watch3 from "../../assets/watch3.jpg";
import watch4 from "../../assets/watch4.jpg";
import basketIcon from "../../assets/cesta-botao.png";
import brandableBox from "../../assets/brandable-box.jpg";
import manufacture from  "../../assets/manufacture.jpg";



export default function Home() {
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
        <div id="main-wrapper" class="flex-column space-evenly align-center">
            <div id="carrousel" class="h-26 w-66 bg-lCyan gap rounded js-flickity" data-flickity-options='{ "cellAlign": "left", "contain": true}'>
                <a class="w-100 h-100 cover rounded" link="product.html"><img src={watch1} class="w-100 h-100 cover rounded" alt="Relógio de pulso com ponteiros brancos e marcadores de hora em preto, pulseira em couro marrom e coroa em metal."/></a>
                {/* <a class="w-100 h-100 cover rounded" link="product.html"><img src={watch2} class="w-100 h-100 cover rounded" alt="Relógio de pulso com ponteiros fosforescente e fundo em azul escuro, detalhes em vermelho e indicadores de horas em fosforescente e pulseira em metal."/></a>
                <a class="w-100 h-100 cover rounded" link="product.html"><img src={watch3} class="w-100 h-100 cover rounded" alt="Relógio de pulso com ponteiros prateados, marcadores de hora prateados em fundo preto, coroa prateada e pulseira em couro marrom com costuras creme."/></a>
                <a class="w-100 h-100 cover rounded" link="product.html"><img src={watch4} class="w-100 h-100 cover rounded" alt="Relógio com ponteiros brancos e o ponteiro dos segundos em amarelo, marcadores de horas com números brancos em um fundo preto, coroa prateada e pulseira em metal de cor cinza escuro."/></a>
                <div id="controller-button1" class="flex round-button bg-lOrange gap pointer"></div>
                <div id="controller-button2" class="flex round-button bg-lOrange gap pointer"></div>
                <div id="controller-button3" class="flex round-button bg-lOrange gap pointer"></div>
                <div id="controller-button4" class="flex round-button bg-lOrange gap pointer"></div> */}
            </div>
            <div class="flex">
                <div class="h-26 w-16 bg-lCyan gap first-child rounded flex-column flow-wrap space-evenly">
                    <a link="product.html"><img src={watch1} class="w-100 h-a rounded" alt="Relógio de pulso com ponteiros brancos e marcadores de hora em preto, pulseira em couro marrom e coroa em metal."/>
                    <h3 class="margin-left margin-right font-16 font-semibold font-regular">Relógio mostrador de hora</h3>
                    <div class="flex space-evenly gap">
                        <h4>R$ 120,00</h4><a link="#"><img src={basketIcon} class="icon-24"/></a>
                    </div></a>
                </div>
                <div class="h-26 w-16 bg-lCyan gap rounded flex-column flow-wrap space-evenly">
                    <a link="product.html"><img src={watch2} class="w-100 h-a rounded" alt="Relógio de pulso com ponteiros fosforescente e fundo em azul escuro, detalhes em vermelho e indicadores de horas em fosforescente e pulseira em metal."/>
                    <h3 class="margin-left margin-right font-16 font-semibold font-regular">Relógio mostrador de hora</h3>
                    <div class="flex space-evenly gap">
                        <h4>R$ 120,00</h4><a link="#"><img src={basketIcon} class="icon-24"/></a>
                    </div></a>
                </div>
                <div class="h-26 w-16 bg-lCyan gap rounded flex-column flow-wrap space-evenly">
                    <a link="product.html"><img src={watch3} class="w-100 h-a rounded" alt="Relógio de pulso com ponteiros prateados, marcadores de hora prateados em fundo preto, coroa prateada e pulseira em couro marrom com costuras creme."/>
                    <h3 class="margin-left margin-right font-16 font-semibold font-regular">Relógio mostrador de hora</h3>
                    <div class="flex space-evenly gap">
                        <h4>R$ 120,00</h4><a link="#"><img src={basketIcon} class="icon-24"/></a>
                    </div></a>
                </div>
                <div class="h-26 w-16 bg-lCyan gap last-child rounded flex-column flow-wrap space-evenly">
                    <a link="product.html"><img src={watch4} class="w-100 h-a rounded" alt="Relógio com ponteiros brancos e o ponteiro dos segundos em amarelo, marcadores de horas com números brancos em um fundo preto, coroa prateada e pulseira em metal de cor cinza escuro."/>
                    <h3 class="margin-left margin-right font-16 font-semibold font-regular">Relógio mostrador de hora</h3>
                    <div class="flex space-evenly gap">
                        <h4>R$ 120,00</h4><a link="#"><img src={basketIcon} class="icon-24"/></a>
                    </div></a>
                </div>
            </div>
            <div class="flex">
                <div class="h-26 w-33 bg-lCyan gap first-child rounded relative inline-block">
                    <div id="text-box1" class="absolute h-100 w-100 t-al-center">
                        <a link="./texto.html"><h2 class="inline-block bg-dOrange rounded pad-4">Leia mais</h2></a>
                    </div>
                    <img src={brandableBox} class="w-100 h-100 cover rounded block"/>
                </div>
                <div class="h-26 w-33 bg-lCyan gap last-child rounded relative inline-block">
                    <div id="text-box2" class="absolute h-100 w-100 t-al-center">
                        <a link="./texto.html"><h2 class="inline-block bg-dOrange rounded pad-4 z-1p">Leia mais</h2></a>
                    </div>
                    <img src={manufacture} class="w-100 h-100 cover rounded"/>
                </div>
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
