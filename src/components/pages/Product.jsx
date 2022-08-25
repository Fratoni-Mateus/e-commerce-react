import React from 'react'
import Default from '../templates/Default';

import clock from "../../assets/Alarm.png";
import delivery from "../../assets/Delivery.png";
import safety from "../../assets/shield.png";
import basket from "../../assets/cesta.png"


export default function Product() {
  return <Default>
    <main>
      <div id="main-wrapper" className="flex-column space-evenly align-center">
        <div className="flex space-evenly h-a w-66 bg-lCyan gap rounded pad-16">
            <div className="flex-column w-100">
            <img className="w-100" src={clock} alt="Relógio" />
            <ul className="list-none flex space-evenly">
                <li className="gap">
                <img
                    className="w-100 h-100 cover rounded bg-lOrange"
                    src={clock}
                    alt="Relógio"
                />
                </li>
                <li className="gap">
                <img
                    className="w-100 h-100 cover rounded bg-lOrange"
                    src={clock}
                    alt="Relógio"
                />
                </li>
                <li className="gap">
                <img
                    className="w-100 h-100 cover rounded bg-lOrange"
                    src={clock}
                    alt="Relógio"
                />
                </li>
                <li className="gap">
                <img
                    className="w-100 h-100 cover rounded bg-lOrange"
                    src={clock}
                    alt="Relógio"
                />
                </li>
                <li className="gap">
                <img
                    className="w-100 h-100 cover rounded bg-lOrange"
                    src={clock}
                    alt="Relógio"
                />
                </li>
            </ul>
            </div>
            <div className="flex-column w-100">
            <ul className="flex-column space-evenly w-100 list-none">
                <li className="gap flex w-100 h-100 cover rounded">
                <h2>Relógio mostrador de hora</h2>
                </li>
                <li className="gap flex w-100 h-100 cover rounded">R$ 120,00</li>
                <li className="gap flex w-100 h-100 cover rounded">
                <img
                    className="gap w-016 cover rounded"
                    src={delivery}
                />Envio para todo Brasil
                </li>
                <li className="gap flex w-100 h-100 cover rounded">
                <img
                    className="gap w-016 cover rounded"
                    src={safety}
                />Embalagem discreta e segura
                </li>
                <li className="gap flex w-100 h-100 cover rounded">
                <img
                    className="gap w-016 cover rounded"
                    src={clock}
                />Cor: preta
                </li>
                <li className="gap flex w-066 h-a al-it-center space-around cover rounded bg-dOrange">
                <p className="gap ">Adicionar ao carrinho.</p>
                <img
                    className="gap icon-50 cover rounded"
                    src={basket}
                />
                </li>
            </ul>
            </div>
        </div>
        <div className="h-a w-66 bg-lCyan gap rounded pad-16">
            <h2>Descrição do produto</h2>
            <br />
            <h4>
            Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent
            taciti sociosqu ad litora torquent. Tá deprimidis, eu conheço uma
            cachacis que pode alegrar sua vidis. Suco de cevadiss, é um leite
            divinis, qui tem lupuliz, matis, aguis e fermentis.In elementis mé
            pra quem é amistosis quis leo.
            </h4>
        </div>
        </div>
    </main>
  </Default>
}
