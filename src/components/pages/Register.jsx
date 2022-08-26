import React from "react";
import Default from "../templates/Default";

export default function Register() {
  return (
    <Default>
      <main>
        <form
          action="index.html"
          className="flex-column  container-login  align-center space-around margin-auto w-33"
        >
          <div className="w-066">
            <label id="name-label" htmlFor="name">
              Nome:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="formOption w-100"
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div className="w-066">
            <label id="e-mail-label" htmlFor="e-mail">
              E-mail:
            </label>
            <input
              id="e-mail"
              name="e-mail"
              type="email"
              className="formOption w-100"
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div className="w-066">
            <label id="password-label" htmlFor="password">
              Senha:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="formOption w-100"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <div className="w-066">
            <label id="password-check-label" htmlFor="password-check">
              Confirmação de senha:
            </label>
            <input
              id="password-check"
              name="password-check"
              type="password"
              className="formOption w-100"
              placeholder="Confirme sua senha"
              required
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </main>
    </Default>
  );
}
