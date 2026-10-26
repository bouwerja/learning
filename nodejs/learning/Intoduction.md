# General Knowledge

## What can you build with Node.js?

Node.js uses an **event-driven**, **non-blocking** model.

It can handle many connections at once without waiting for one to finish.

**Examples:**

- Web server and websites
- REST APIs
- Real-Time apps (like chat)
- Command-line tools
- Working with files and databases
- IoT and hardware control

### Run Node.js Code

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

ES Module

```js
import http from "node:http";

http.createServer(function (req, res) {
 res.writeHead(200, {"Content-Type" : "text/plain"});
 res.end("Hello, World!");
}).listen(8080);
```

### Built-in Modules

Node.js comes with **built-in** modules.
They help you work with:

- Files
- Servers
- paths
- operating systems
- and more.

You can use them with `require()`

```js
const os = require("os");
console.log(os.platform());
```

ES Modules

```js
import { os } from "node:os";

console.log(os.platform());
```

[Full list of Node Modules](https://www.w3schools.com/nodejs/ref_modules.asp)

## What is npm?

**npm** is the package manager for Node.js

```bash
npm install express
```

You can now use `express` in your code.

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello, World!"));
```

---

# Introduction

Node.js uses **asynchronous** programming.

```js
const fs = require("fs");

fs.readFile("myfile.txt", "utf8", (err, data) => {
	if (err) {
		console.error("Error reading file: " + err);
	}
	
	console.log("File content: " + data);
});

console.log("Reading file... (this runs first!)");
```

In this example:

1. We load the built-in `fs` module.
2. We call `readFile` to read a file.
3. Node.js continues to the next line while reading the file.
4. When the file is read, our callback function runs.

---

# JavaScript Fundamentals

## Variables and Functions

```js
let name = "Node.js";
const version = 99;

function greet(user) {
	return `Hello, ${user}`;
}

const add = (a, b) => a + b;

console.log(greet("Developer"));
console.log(add(5, 3));
```

## Objects & Arrays

```js
// Object
const user = {
	name: "Alice",
	age: 25,
	greet() {
		console.log(`Hi, I'm ${this.name}`);
	}
};

// Array
const colors = ["red", "green", "blue"];

// Array methods
colors.forEach(color => console.log(color));
const lengths = colors.map(color => color.length);
```

## Asynchronous JavaScript

```js
// Callbacks
function fetchData(callback) {
	setTimeout(() => {
		callback("Data received!");
	}, 1000);
}

// Promises
const fetchDataPromis = () => {
	return new Promise((resolve) => {
		setTimeout(() => resolve("Promise resolved!"), 1000);
	});
};

// Async/Await
async function getData() {
	const result = await fetchDataPromise();
	console.log(result);
}

getData();
```

---

# Node.js vs Browsers

[View the differences](https://www.w3schools.com/nodejs/nodejs_vs_browser.asp)

---

# Node.js Command line usage

```bash
# Run a JavaScript file
node app.js

# Run with additional arguments
node app.js arg1 arg2

# Run in watch mode (restarts on file changes)
node --watch app.js
```

## Command line arguments

Access command line arguments using `process.argv`.

```js
console.log("All Arguments: ", process.argv);
console.log("First Argument: ", process.argv[2]);
conosle.log("Second Argument: ", process.argv[3]);

// node args.js hello world  
// Output:  
// All arguments: ['/path/to/node', '/path/to/args.js', 'hello', 'world']  
// First argument: hello  
// Second argument: world
```

## Environment Variables

Access and set environment variables.

```js
// env.js
console.log("Environment: ", process.env.NODE_ENV || "development");
console.log("Custom variable: ", process.env.MY_VARIABLE);
console.log("Database URL: ", process.env.DATABASE_URL || "Not set");
```

```bash
# Set environment variables when running  
NODE_ENV=production MY_VARIABLE=test node env.js
```

## Debugging Node.js Applications

Node.js debugging system integrates with Chrome DevTools.

```bash
# Start with inspector (listens on default port 9229)
node --inspect app.js

# Break on first line of application
node --inspect-brk app.js

# Specify a custom port
node --inspect=9222 app.js

# Enable remote debugging (be careful with this in production)
node --inspect=0.0.0.0:9229 app.js
```

### Using Chrome DevTools for Debugging

1. Start your application with `node --inspect app.js`
2. Open Chrome and navigate to `chrome://inspect`
3. Click on "Open dedicated DevTools for Node"
4. Set breakpoints and debug your application

## Other useful tools

### Runtime behavior

```bash
# Check syntax without executing  
node --check app.js  
  
# Show stack traces for warnings  
node --trace-warnings app.js  
  
# Set max memory (in MB)  
node --max-old-space-size=4096 app.js  
  
# Preload a module before execution  
node --require dotenv/config app.js
```

### Performance & Optimization

```bash
# Enable ES module loader  
node --experimental-modules app.mjs  
  
# Enable experimental features  
node --experimental-repl-await  
  
# Enable experimental worker threads  
node --experimental-worker
```

---

# Node.js Architecture

1. Client Response Phase
    - Clients send requests to the server
    - Each request is added to the **Event Queue**
2. Event Loop Phase
    - Continuously checking the **Event Queue**
    - Picks up requests one by one in a loop
3. Request Processing
    - Simple *(non-blocking)* tasks are handled immediately by the main thread.
    - Complex/blocking tasks are offloaded to the **Thread Pool**
4. Response Phases
    - When blocking tasks are completed their callbacks are placed in the **Callback Queue**
    - Event loop processes callbacks and sends responses.

```js
const fs = require('fs');

// Blocking code example  
console.log('Start of blocking code');  
const data = fs.readFileSync('myfile.txt', 'utf8'); // Blocks here  
console.log('Blocking operation completed');  
  
// Non-blocking code example  
console.log('Start of non-blocking code');  
fs.readFile('myfile.txt', 'utf8', (err, data) => {  
  if (err) throw err;  
  console.log('Non-blocking operation completed');  
});  
console.log('This runs before the file is read');
```