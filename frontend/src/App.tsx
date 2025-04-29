import ChatCard from "./components/ChatCard/chat-card";
import Login from "./components/Login/login";
import { useState } from "react";

export default function App() {
  const [userLogged, setUserLogged] = useState(localStorage.getItem("userLogged"));

  const handleLogin = (userName: string) => {
    localStorage.setItem("userLogged", userName);
    setUserLogged(userName); // troca a tela
  };

  return (
    <>
      {userLogged ? <ChatCard /> : <Login onLogin={handleLogin} />}
    </>
  );
}
