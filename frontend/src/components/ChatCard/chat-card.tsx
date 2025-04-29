import { useEffect, useState } from "react";
import MessageBar from "../MessageBar/message-bar";
import "./chat-card.scss";

interface Message {
  id: string;
  userName: string;
  userColor: string;
  content: string;
}

export default function ChatCard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [socket, setSocket] = useState<WebSocket | null>(null);

  const userName = localStorage.getItem("userLogged") || "";
  const userId = localStorage.getItem("userId") || crypto.randomUUID();
  const userColor = localStorage.getItem("userColor") || getRandomColor();

  useEffect(() => {
    localStorage.setItem("userId", userId);
    localStorage.setItem("userColor", userColor);

    const ws = new WebSocket("ws://localhost:2705");
    setSocket(ws);

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (socket && input.trim() !== "") {
      const message = {
        userId,
        userName,
        userColor,
        content: input,
      };
      socket.send(JSON.stringify(message));
      setInput("");
    }
  };

  return (
    <section className="chat">
      <section className="chat__messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.userName === userName ? "message--self" : "message--other"}
          >
            {msg.userName !== userName && (
              <span className="message--sender" style={{ color: msg.userColor }}>
                {msg.userName}
              </span>
            )}
            {msg.content}
          </div>
        ))}
      </section>

      <MessageBar
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
      />
    </section>
  );
}

function getRandomColor() {
  const colors = [
    "cadetblue",
    "darkgoldenrod",
    "cornflowerblue",
    "darkkhaki",
    "hotpink",
    "gold",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
