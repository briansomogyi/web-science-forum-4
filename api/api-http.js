import http from "http";
const hostname = '0.0.0.0';
const port = 3000;
const server = http.createServer((req, res) => {
    console.log("Headers ", req.rawHeaders);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});