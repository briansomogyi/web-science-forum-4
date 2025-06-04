import { WebSocketServer } from "ws";
const ws = new WebSocketServer({ port: 8080 });
const clients = [];
ws.on("connection", (ws) => {
    console.log("Client connected");
    clients.push(ws);
    ws.on("message", (data) => {
        console.log(`Message from client: `,
            data.toString());
        clients.forEach((client) => {
            client.send(data.toString());
        });
    });
    ws.on("close", () => {
        console.log("Client disconected");
    });
});