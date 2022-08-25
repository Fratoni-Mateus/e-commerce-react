import React from 'react'
import Default from '../templates/Default';

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
    <Default>
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
    </Default>
  )
}
