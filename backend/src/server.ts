import { WebSocketServer } from "ws";
import type { WebSocket } from "ws"; // <- Importa o tipo separadamente
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 2705;

const wss = new WebSocketServer({
  host: "0.0.0.0",
  port: PORT,
});

wss.on("connection", (ws: WebSocket) => {
  ws.on("error", console.error);

  ws.on("message", (data) => {
    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) { // Usa a instância 'ws'
        client.send(data.toString());
      }
    });
  });

  console.log("Client connected");
});

console.log(`WebSocket server running on ws://localhost:${PORT}`);
