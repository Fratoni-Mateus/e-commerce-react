import logo from "./assets/logo.png";
import catalogo from "./assets/catalogo.png";
import carrinho from "./assets/Shopping-cart.png";
import twitter from "./assets/Twitter.png";
import facebook from "./assets/Facebook.png";
import instagram from "./assets/Instagram.png";
import relogio from "./assets/Alarm.png";
import entrega from "./assets/Delivery.png";
import seguranca from "./assets/shield.png";
import cesta from "./assets/cesta.png"


import "./styles/style.css";
import "./styles/flickty.css";

function App() {
  return (
    <div>
      <header className="container-header bg-dCyan align-center">
          <ul className="flex space-between list-none align-center pd-12 font-24 h-100px">
              
              <li><a link="./index.html"><img className="img-logo" src={logo} alt="Logo"/></a></li>
              <li><a className="flex h-35px" link="#"><img className="h-35px margin-right align-center" src={catalogo} alt="catalogo"/></a></li>
              <li><input className="search-bar h-35px icon rounded" type="text" placeholder="BUSCAR"/></li>
              <li><a link="login.html" target="_self">ENTRE</a></li>
              <li><a link="#"><img className="icon-50" src={carrinho}/></a></li>
          </ul>
      </header>
      <main>
        <div id="main-wrapper" className="flex-column space-evenly align-center">
          <div className="flex space-evenly h-a w-66 bg-lCyan gap rounded pad-16">
            <div className="flex-column w-100">
              <img className="w-100" src={relogio} alt="Relógio" />
              <ul className="list-none flex space-evenly">
                <li className="gap">
                  <img
                    className="w-100 h-100 cover rounded bg-lOrange"
                    src={relogio}
                    alt="Relógio"
                  />
                </li>
                <li className="gap">
                  <img
                    className="w-100 h-100 cover rounded bg-lOrange"
                    src={relogio}
                    alt="Relógio"
                  />
                </li>
                <li className="gap">
                  <img
                    className="w-100 h-100 cover rounded bg-lOrange"
                    src={relogio}
                    alt="Relógio"
                  />
                </li>
                <li className="gap">
                  <img
                    className="w-100 h-100 cover rounded bg-lOrange"
                    src={relogio}
                    alt="Relógio"
                  />
                </li>
                <li className="gap">
                  <img
                    className="w-100 h-100 cover rounded bg-lOrange"
                    src={relogio}
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
                    src={entrega}
                  />Envio para todo Brasil
                </li>
                <li className="gap flex w-100 h-100 cover rounded">
                  <img
                    className="gap w-016 cover rounded"
                    src={seguranca}
                  />Embalagem discreta e segura
                </li>
                <li className="gap flex w-100 h-100 cover rounded">
                  <img
                    className="gap w-016 cover rounded"
                    src={relogio}
                  />Cor: preta
                </li>
                <li className="gap flex w-066 h-a al-it-center space-around cover rounded bg-dOrange">
                  <p className="gap ">Adicionar ao carrinho.</p>
                  <img
                    className="gap icon-50 cover rounded"
                    src={cesta}
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
      <footer className="bg-lGrey flex-column pd-24 font-14 font-light">
      <div className="flex space-evenly">
        <a href="./index.html"
          ><img src={logo} className="img-logo"
        /></a>
        <div className="social-media-wrapper flex-column">
          <p>Redes sociais</p>
          <div className="flex space-evenly">
            <a href="https://www.instagram.com/"
              ><img
                className="icon-24"
                src={instagram}
                alt="Instagram"
            /></a>
            <a href="https://www.facebook.com/"
              ><img className="icon-24" src={facebook} alt="Facebook"
            /></a>
            <a href="https://twitter.com/"
              ><img className="icon-24" src={twitter} alt="Twitter"
            /></a>
          </div>
        </div>
        <a href="./texto.html">Sobre nós</a>
        <a href="./texto.html">Política de privacidade</a>
        <a href="./texto.html">Contato</a>
        <a href="./texto.html">Termos e condições</a>
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
  );
}

export default App;
