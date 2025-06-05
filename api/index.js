import { createServer } from "http";
import WebSocket from "ws";
import express from "express";
import { sequelize, Post, Community } from "./database.js"; // Import Sequelize models

const app = express();
const server = createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.on("message", async (message) => {
        const { type, data } = JSON.parse(message);

        if (type === "new_post") {
            const newPost = await Post.create(data);
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ type: "post_created", data: newPost }));
                }
            });
        }

        if (type === "new_community") {
            const newCommunity = await Community.create(data);
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ type: "community_created", data: newCommunity }));
                }
            });
        }
    });

    ws.on("close", () => console.log("Client disconnected"));
});

server.listen(3000, async () => {
    await sequelize.sync(); // Ensure DB is initialized
    console.log("WebSocket Server running on http://localhost:3000");
});
