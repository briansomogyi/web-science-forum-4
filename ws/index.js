import { createServer } from "http";
import WebSocket from "ws";
import express from "express";

const app = express();
const server = createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.on("message", (message) => {
        const parsed = JSON.parse(message);

        if (parsed.type === "new_post") {
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ type: "post_created", data: parsed.data }));
                }
            });
        }

        if (parsed.type === "new_community") {
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ type: "community_created", data: parsed.data }));
                }
            });
        }
    });

    ws.on("close", () => console.log("Client disconnected"));
});

server.listen(3001, () => console.log("WebSocket Server on http://localhost:3001"));
