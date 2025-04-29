import React, { useState } from "react";
import "./login.scss";

interface LoginProps {
  onLogin: (userName: string) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [userName, setUserName] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(userName); // avisa o App
  };

  return (
    <section className="container">
      <div className="login">
        <h2>Login</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="login__input"
            placeholder="Seu nome"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button type="submit" className="login__button">
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
}
