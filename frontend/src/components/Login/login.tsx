import React, { useRef } from "react";
import "./login.css";

export default function Login() {
  const loginInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const userName = loginInputRef.current?.value;
    console.log("User Name:", userName);
  };

  return (
    <section className="login">
      <h2>Login</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="login__input"
          placeholder="Seu nome"
          required
          ref={loginInputRef}
        />
        <button type="submit" className="login__button">
          Entrar
        </button>
      </form>
    </section>
  );
}
