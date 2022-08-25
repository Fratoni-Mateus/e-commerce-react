import React from 'react'

import logo from "../../assets/logo.png";
import catalog from "../../assets/catalogo.png";
import cart from "../../assets/Shopping-cart.png";
import twitter from "../../assets/Twitter.png";
import facebook from "../../assets/Facebook.png";
import instagram from "../../assets/Instagram.png";


export default function Register() {
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
                <form action="index.html" className="flex-column  container-login  align-center space-around margin-auto w-33">
                    <div className="w-066">
                        <label id="name-label" htmlFor="name">Nome:</label>
                        <input id="name" name="name" type="text" className="formOption w-100" placeholder="Digite seu nome" required/>
                    </div>
                    <div className="w-066">
                        <label id="e-mail-label" htmlFor="e-mail">E-mail:</label>
                        <input id="e-mail" name="e-mail" type="email" className="formOption w-100" placeholder="Digite seu e-mail" required/>
                    </div>
                    <div className="w-066">
                        <label id="password-label" htmlFor="password">Senha:</label>
                        <input id="password" name="password" type="password" className="formOption w-100" placeholder="Digite sua senha" required/>
                    </div>
                    <div className="w-066">
                        <label id="password-check-label" htmlFor="password-check">Confirmação de senha:</label>
                        <input id="password-check" name="password-check" type="password" className="formOption w-100" placeholder="Confirme sua senha" required/>
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
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
