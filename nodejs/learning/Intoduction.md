
# What can you build with Node.js?

Node.js uses an **event-driven**, **non-blocking** model.

It can handle many connections at once without waiting fro one to finish before starting another.

**Examples:**
- Web server and websites
- REST APIs
- Real-Time apps (like chat)
- Command-line tools
- Working with files and databases
- IoT and hardware control

## Run Node.js Code

```bash
node app.js
```

```js
let http = require("http");

http.createServer(function (req, res) {
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.end("Hello, World!");
}).listen(8080);
```