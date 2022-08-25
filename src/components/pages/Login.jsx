import React from 'react'
import Default from '../templates/Default';


export default function Login() {
    return (
        <Default>
            <main className="">
                <div className="flex  container-login  align-center space-around margin-auto">
                    <form action="cadastro.html" className="criar-acc justify-center align-center flex">
                        <ul className="list-none">
                            <li>Quero criar uma conta</li>
                            <li>E-mail <input required type="email" placeholder="exemplo@seuemail.com"/></li>
                            <li><button type="submit">Continuar</button></li>
                        </ul>
                    </form>
                    <form className="login-acc justify-center align-center flex">
                        <ul className="list-none">
                            <li>Já sou cliente</li>
                            <li>E-mail <input type="email" required placeholder="exemplo@seuemail.com"/></li>
                            <li>Senha <input type="password" required placeholder="Digite sua senha"/></li>
                            <li><button type="submit">Continuar</button></li>
                        </ul>
                    </form>
                </div>
            </main>
        </Default>
    )
}
