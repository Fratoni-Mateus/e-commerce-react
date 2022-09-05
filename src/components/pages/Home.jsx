import React from "react";
import Default from "../templates/Default";

import watch1 from "../../assets/watch1.jpg";
import { ProductDisplayWrapper, TextCardsWrapper } from "../organisms";

export default function Home() {
  return (
    <Default>
      <main>
        <div id="main-wrapper" class="flex-column space-evenly align-center">
          <div
            id="carrousel"
            class="h-26 w-66 bg-lCyan gap rounded js-flickity"
            data-flickity-options='{ "cellAlign": "left", "contain": true}'
          >
            <a class="w-100 h-100 cover rounded" link="product.html">
              <img
                src={watch1}
                class="w-100 h-100 cover rounded"
                alt="Relógio de pulso com ponteiros brancos e marcadores de hora em preto, pulseira em couro marrom e coroa em metal."
              />
            </a>
            {/* <a class="w-100 h-100 cover rounded" link="product.html"><img src={watch2} class="w-100 h-100 cover rounded" alt="Relógio de pulso com ponteiros fosforescente e fundo em azul escuro, detalhes em vermelho e indicadores de horas em fosforescente e pulseira em metal."/></a>
                <a class="w-100 h-100 cover rounded" link="product.html"><img src={watch3} class="w-100 h-100 cover rounded" alt="Relógio de pulso com ponteiros prateados, marcadores de hora prateados em fundo preto, coroa prateada e pulseira em couro marrom com costuras creme."/></a>
                <a class="w-100 h-100 cover rounded" link="product.html"><img src={watch4} class="w-100 h-100 cover rounded" alt="Relógio com ponteiros brancos e o ponteiro dos segundos em amarelo, marcadores de horas com números brancos em um fundo preto, coroa prateada e pulseira em metal de cor cinza escuro."/></a>
                <div id="controller-button1" class="flex round-button bg-lOrange gap pointer"></div>
                <div id="controller-button2" class="flex round-button bg-lOrange gap pointer"></div>
                <div id="controller-button3" class="flex round-button bg-lOrange gap pointer"></div>
                <div id="controller-button4" class="flex round-button bg-lOrange gap pointer"></div> */}
          </div>
          <ProductDisplayWrapper />
          <TextCardsWrapper />
        </div>
      </main>
    </Default>
  );
}
