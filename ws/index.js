import { createServer } from "http";
import WebSocket from "ws";
import express from "express";

const app = express();
const server = createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
    console.log("New client connected");

    ws.on("message", (message) => {
        console.log(`Received message: ${message}`);

        // Broadcast to all clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on("close", () => {
        console.log("Client disconnected");
    });
});

server.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});
