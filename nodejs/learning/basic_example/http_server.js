import http from "node:http";
import os from "node:os";

const platform = os.platform();

console.log(`Current Platform: ${platform}`);

console.log("Starting the server ...");

const portNumber = 8080;

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
}).listen(portNumber);

console.log(`Server is running on port: ${portNumber}`);
