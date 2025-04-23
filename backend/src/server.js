const { WebSocketServer } = require('ws');
const dotenv = require('dotenv');

dotenv.config();

const wss = new WebSocketServer({ host: '0.0.0.0', port: process.env.PORT || 2705 });

wss.on('connection', (ws) => {
    ws.on("error", console.error)

    ws.on("message", (data) => {
        wss.clients.forEach((client) => client.send(data.toString()))
        
    })
    console.log("Client connceted")
});