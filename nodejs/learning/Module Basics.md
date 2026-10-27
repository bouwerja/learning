
# Resources & Prerequisites

Please read [[Asynchronous]] first.

---

# Node Modules

## What is a Module in Node.js?

Modules are the building blocks of Node.js applications.

They allow you to organize code into logical, reusable components.

They help in:
- Organizing code into manageable files.
- Encapsulating functionality.
- Preventing global namespace pollution.
- Improving code maintainability and reusablility.

---

## Core Built-in Modules

| Module Name   | Description                |
| ------------- | -------------------------- |
| `fs`          | File system operations     |
| `http`        | HTTP server and client     |
| `path`        | File path utilities        |
| `os`          | Operating system utilities |
| `events`      | Event handling             |
| `util`        | Utility functions          |
| `stream`      | Stream handling            |
| `crypto`      | Cryptographic functions    |
| `url`         | URL parsing                |
| `querystring` | URL query string handling  |

## Creating and Exporting Modules

In Node.js any file with `.js` extension is a module.

You can export functionality from a module in several ways:

### 1. Exporting Multiple Items

Add properties to the `exports` object.

```js
// Exporting multiple functions  
const getCurrentDate = () => new Date().toISOString();  
  
const formatCurrency = (amount, currency = 'USD') => {  
  return new Intl.NumberFormat('en-US', {  
    style: 'currency',  
    currency: currency  
  }).format(amount);  
};  
  
// Method 1: Exporting multiple items  
exports.getCurrentDate = getCurrentDate;  
exports.formatCurrency = formatCurrency;  
  
// Method 2: Exporting an object with multiple properties  
// module.exports = { getCurrentDate, formatCurrency };
```

### 2. Exporting a Single Item

Assign it to `module.exports`

```js
class Logger {
	constructor(name) {
		this.name = name;
	}
	
	log(message) {
		console.log(`[${this.name}] ERROR: ${message}`);
	}
	
	error(error) {
		console.error(`[${this.name}] ERROR: `, error.message)
	}
}

// Exporting a single class

module.exports = Logger;
```

### 3. Using Your Modules

Import and use your custom modules using `require()` with a relative or absolute path.

```js
const http = require('http');  
const path = require('path');  
  
// Importing custom modules  
const { getCurrentDate, formatCurrency } = require('./utils');  
const Logger = require('./logger');  
  
// Create a logger instance  
const logger = new Logger('App');  
  
// Create server  
const server = http.createServer((req, res) => {  
  try {  
    logger.log(`Request received for ${req.url}`);  
  
    res.writeHead(200, { 'Content-Type': 'text/html' });  
    res.write(`<h1>Welcome to our app!</h1>`);  
    res.write(`<p>Current date: ${getCurrentDate()}</p>`);  
    res.write(`<p>Formatted amount: ${formatCurrency(99.99)}</p>`);  
    res.end();  
  } catch (error) {  
    logger.error(error);  
    res.writeHead(500, { 'Content-Type': 'text/plain' });  
    res.end('Internal Server Error');  
  }  
});  
  
// Start server  
const PORT = process.env.PORT || 3000;  
server.listen(PORT, () => {  
  logger.log(`Server running at http://localhost:${PORT}`);  
});
```

## Module Loading and Caching

Node.js caches modules after the first time they are loaded.

This means that subsequent `require()` calls return the cached version.

---

# Node.js ES Modules

```js
// math.js
export function add(a, b) {
	return a + b;
}

export function subtract(a, b) {
	return a - b;
}

// app.js
import { add, subtract } from "./math.js";
console.log(add(5, 3));
```

## Enabling ES Modules

There are several ways to enable ES Modules in Node.js:

### 1. Using the `.mjs` File Extension

The simplest way is to use the `.mjs` extension for your files.

### 2. Setting `type` : `module` in package.json

To use ES Modules with regular `.js` files, add the following to you package.json

```json
{  
  "name": "my-package",  
  "version": "1.0.0",  
  "type": "module"  
}
```

## Import and Export Syntax

ES Modules provide more flexible ways to import and export code compared to *CommonJS*.

### Export Syntax

**Named Exports**
```js
// Multiple named exports  
export function sayHello() {  
  console.log('Hello');  
}  
  
export function sayGoodbye() {  
  console.log('Goodbye');  
}  
  
// Alternative: export list at the end  
function add(a, b) {  
  return a + b;  
}  
  
function subtract(a, b) {  
  return a - b;  
}  
  
export { add, subtract };
```

**Default Export**
```js
// Only one default export per module  
export default function() {  
  console.log('I am the default export');  
}  
  
// Or with a named function/class/object  
function mainFunction() {  
  return 'Main functionality';  
}  
  
export default mainFunction;
```

### Import Syntax

**Importing Named Exports**
```js
// Import specific named exports  
import { sayHello, sayGoodbye } from './greetings.mjs';  
sayHello(); // Hello  
  
// Rename imports to avoid naming conflicts  
import { add as sum, subtract as minus } from './math.mjs';  
console.log(sum(5, 3)); // 8  
  
// Import all named exports as an object  
import * as math from './math.mjs';  
console.log(math.add(7, 4)); // 11
```

**Importing Default Exports**
```js
// Import the default export  
import mainFunction from './main.mjs';  
mainFunction();  
  
// You can name the default import anything you want  
import anyNameYouWant from './main.mjs';  
anyNameYouWant();
```

## Dynamic Imports

ES Modules support dynamic imports.

Allowing you to load modules conditionally or on-demand.

```js
// app.mjs  
async function loadModule(moduleName) {  
  try {  
    // Dynamic import returns a promise  
    const module = await import(`./${moduleName}.mjs`);  
    return module;  
  } catch (error) {  
    console.error(`Failed to load ${moduleName}:`, error);  
  }  
}  
  
// Load a module based on a condition  
const moduleName = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';  
  
loadModule(moduleName).then(module => {  
  module.default(); // Call the default export  
});  
  
// Or with simpler await syntax  
(async () => {  
  const mathModule = await import('./math.mjs');  
  console.log(mathModule.add(10, 5)); // 15  
})();
```

---

# Node *package.json*

*package.json* is a special file that describes your Node.js project.

It is essential for managing and sharing Node.js projects, especially when using npm.

## Creating *package.json*

```bash
npm init
```

## Example *package.json*

```json
{  
  "name": "my-node-app",  
  "version": "1.0.0",  
  "description": "A simple Node.js app",  
  "main": "index.js",  
  "scripts": {  
    "start": "node index.js"  
  },  
  "author": "Your Name",  
  "license": "ISC"  
}
```

## Adding Dependencies

When you install a package with npm, it is added to the dependencies section of *package.json*.

```bash
npm install express
```

*package.json*
```JSON
"dependencies": {  
  "express": "^5.1.0"  
}
```

## Common *package.json* fields

### Basic Metadata

```json
{  
  "name": "my-package",  
  "version": "1.0.0",  
  "description": "A brief description of your package",  
  "main": "index.js",  
  "type": "module", // or "commonjs"  
  "keywords": ["example", "package", "node"],  
  "author": "Your Name ",  
  "license": "MIT",  
  "homepage": "https://example.com/my-package"  
} 
```

### Scripts

Define custom scripts that can be run with `npm run <script-name>`

```json
"scripts": {  
  "start": "node index.js",  
  "dev": "nodemon index.js",  
  "test": "jest",  
  "build": "webpack --mode production",  
  "lint": "eslint .",  
  "prepare": "husky install"  
}
```

### Dependencies

Specify project dependencies with version ranges:

```json
"dependencies": {  
  "express": "^4.18.2",  
  "mongoose": "~7.0.0",  
  "lodash": "4.17.21"  
},
```

#### Dev Dependencies

Development-only dependencies (not installed in production)

```json
"devDependencies": {  
  "nodemon": "^2.0.22",  
  "jest": "^29.5.0",  
  "eslint": "^8.38.0"  
}
```

### Version Ranges

- `^4.17.21` - Compatible with 4.x.x (up to but not including 5.0.0)
- `~4.17.21` - Patch updates only (4.17.x)
- `4.17.21` - Exact version
- `latest` - Latest stable version
- `git+https://...` - Git repository

### Engines

Specify Node.js and npm version requirements

```json
"engines": {  
  "node": ">=14.0.0 <17.0.0",  
  "npm": ">=6.0.0"  
}
```

### Repository & Bugs

```json
"repository": {  
  "type": "git",  
  "url": "https://github.com/username/repo.git"  
},  
"bugs": {  
  "url": "https://github.com/username/repo/issues"  
}
```

## Working with *package.json*

### Adding Dependencies

```bash
# Install and save to dependencies  
npm install package-name  
  
# Install and save to devDependencies  
npm install --save-dev package-name  
  
# Install exact version  
npm install package-name@1.2.3
```

### Updating Dependencies

```bash
# Update a specific package  
npm update package-name  
  
# Update all packages  
npm update  
  
# Check for outdated packages  
npm outdated
```

### Running Scripts

```bash
# Run a script  
npm run script-name  
  
# Run start script (can be called with just 'npm start')  
npm start  
  
# Run test script (can be called with just 'npm test')  
npm test
```

---

# Package Lock Files

Lock files ensure consistent installations across different environments.

It records the exact version of each package and its dependencies.

## *package-lock.json* (npm)

This file is automatically generated when npm modifies the `node_modules` tree or `package.json`.

```json
{  
  "name": "my-app",  
  "version": "1.0.0",  
  "lockfileVersion": 3,  
  "requires": true,  
  "packages": {  
    "node_modules/express": {  
      "version": "4.18.2",  
      "resolved": "https://registry.npmjs.org/express/-/express-4.18.2.tgz",  
      "dependencies": {  
        "accepts": "~1.3.8",  
        "array-flatten": "1.1.1"  
      }  
    }  
  }  
}
```

## Dependencies & Security

### npm & Dependencies

**Check outdated packages**
```bash
npm outdated
```

**Update a Specific Package**
```bash
npm update express
```

**Update ALL packages**
```bash
npm update
```

**Update npm**
```bash
npm install -g npm@latest
```

**Using `npm-check-updates`**
```bash
# Install npm-check-updates globally
npm install -g npm-check-updates

# Check of updates
ncu

# Update pacakge.json
ncu -u

# Install updated packages
npm install
```

### npm & Security

**Audit**
```bash
npm audit
```

**Fix security vulnerabilities**
```bash
npm audit fix
```

**Force Fix All issues** (use with caution)
```bash
npm audit fix --force
```

**Check for Known Vulnerabilities**
```bash
npm audit

# or using npx with the 'audit' package
npx audit
```

## Troubleshooting Common Issues

### Clearing the npm Cache

```bash
npm cache clean --force
```

### Deleting node_modules and Reinstalling

```bash
rm -rf node_modules  
rm package-lock.json  
npm install
```

### Checking for Peer Dependency Issues

```bash
npm ls
```

### Fixing Broken Dependencies

```bash
npm rebuild
```

