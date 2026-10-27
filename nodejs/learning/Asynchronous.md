# Resources & Prerequisites

Please read the [[nodejs/learning/Introduction]] first.

---

# Node Async

General Overview: [[nodejs/learning/Introduction#Asynchronous JavaScript]]

## Avoiding Callback Hell

**Nested callbcaks** (Callback hell)
```js
getUser(userId, (err, user) => {  
  if (err) return handleError(err);  
  getOrders(user.id, (err, orders) => {  
    if (err) return handleError(err);  
    processOrders(orders, (err) => {  
      if (err) return handleError(err);  
      console.log('All done!');  
    });  
  });  
});
```

**Use Promises**
```js
getUser(userId)
	.then(user => getOrders(user.id))
	.then(orders => processOrders(orders))
	.then(() => console.log("All done!"))
	.catch(handleError);
```

**Even Better** Async/Await
```js
async function processUser(userId) {
	try {
		const user = await getUser(userId);
		const orders = await getOrders(user.id);
		
		await processOrders(orders);
		
		console.log("All done!");
	} catch (err) {
		handleError(err);
	}
}
```

### Modern Async Pattersn

#### 1. Promises

```js
const fs = require("fs").promises;

console.log("1. Reading File...");

fs.readFile("myfile.txt", "utf8")
	.then(data => {
		console.log("3. File content: ", data);
	})
	.catch(err => console.error("Error: ", err));
	
console.log("2. This runs before file is read!");
```

#### 2. Async/Await (Recommended)

```js
async function readFiles() {  
  try {  
    console.log('1. Starting to read files...');  
    const data1 = await fs.readFile('file1.txt', 'utf8');  
    const data2 = await fs.readFile('file2.txt', 'utf8');  
    console.log('2. Files read successfully!');  
    return { data1, data2 };  
  } catch (error) {  
    console.error('Error reading files:', error);  
  }  
}
```

#### 3. Parallel Execution

```js
// Run multiple async operations in parallel  
async function fetchAllData() {  
  try {  
    const [users, products, orders] = await Promise.all([  
      User.find(),  
      Product.find(),  
      Order.find()  
    ]);  
    return { users, products, orders };  
  } catch (error) {  
    console.error('Error fetching data:', error);  
    throw error;  
  }  
}
```

---

# Node.js Promises

Promises provides a cleaner way to handle asynchronous operations.

## Promise States

- *Pending*: Initial state, operation not completed.
- *Fulfilled*: Operation completed successfully.
- *Rejected*: Operation failed.

## Creating and Using Promises

Promises can be created using the `Promise` constructor.

Accepts an executor function with two parameters:
- *resolve*
- *reject*

**Basic Promise Creation**

```js
const myPromise = new Promise((reslove, reject) => {
	setTimeout(() => {
		const success = Math.random() > 0.5;
		
		if (success) {
			resolve("Operation completed successfully");
		} else {
			reject(new Error("Operation failed"));
		}
	}, 1000) // Simulate delay
});

myPromise
	.then(result => console.log("Success: ", result))
	.catch(error => console.log("Error: ", error.message));
```

**Reading a File with Promises**

```js
const fs = require('fs').promises;  
const promise1 = Promise.resolve('First result');  
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second result'), 1000));  
const promise3 = fs.readFile('myfile.txt', 'utf8'); // Read local file instead of fetch  
  
Promise.all([promise1, promise2, promise3])  
  .then(results => {  
    console.log('Results:', results);  
    // results[0] is from promise1  
    // results[1] is from promise2  
    // results[2] is the content of myfile.txt  
  })  
  .catch(error => {  
    console.error('Error in one of the promises:', error);  
  });
```

## Promise Chaining

Promises can be chained to execute asynchronous operations.

Each `.then()` is receiving the result of the previous operation.

```js
function getUser(userId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ id : userId, name : "John"});
		}, 1000);
	});
}

function getUserPosts(user) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(["Post1", "Post2", "Post3"]);
		}, 1000);
	});
}

getUser(123)  
  .then(user => {  
    console.log('User:', user);  
    return getUserPosts(user);  
  })  
  .then(posts => {  
    console.log('Posts:', posts);  
  })  
  .catch(error => {  
    console.error('Error:', error);  
  });
```

## Promise Methods

| Method                          | Description                       | Type     |
| ------------------------------- | --------------------------------- | -------- |
| `then(onFilfilled, onRejected)` | Handles fulfilment or rejection   | Instance |
| `catch(onRejected)`             | Handles rejections                | Instance |
| `finally(onFinally)`            | Runs after promise settles        | Instance |
| `Promise.all(iterable)`         | Waits for all promises to resolve | static   |
| `Promise.race(iterable)`        | Waits for first promise to settle | static   |
| `Promise.allSettled(iterable)`  | Waits fro all to settle           | static   |
| `Promise.resolve(value)`        | Creates a resolved promise        | Utility  |
| `Promise.reject(reson)`         | Creates a rejected promise        | utility  |

### `then()`

Takes up to two arguments.

The arguments are callback functions for the success or failure.

```js
myPromise  
  .then(  
    result => console.log(result),  
    error => console.error(error)  
  );
```

### `catch()`

Handles rejected promises.

Equivalent to `.then(null, errorHandle)`.

```js
myPromise  
  .then(result => console.log(result))  
  .catch(error => console.error(error));
```

### `finally()`

Executes code regardless of whether the promise is fulfilled or rejected.

```js
myPromise  
  .then(result => console.log(result))  
  .catch(error => console.error(error))  
  .finally(() => console.log('Operation completed'));
```

### `all()` for Parallel Execution

Runs multiple promises in parallel, and wait for *ALL* of them to complete.

```js
const fs = require('fs').promises;  
const promise1 = Promise.resolve('First result');  
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second result'), 1000));  
const promise3 = fs.readFile('data.txt', 'utf8'); // Read local file instead of fetch  
  
Promise.all([promise1, promise2, promise3])  
  .then(results => {  
    console.log('Results:', results);  
    // results[0] is from promise1  
    // results[1] is from promise2  
    // results[2] is the content of data.txt  
  })  
  .catch(error => {  
    console.error('Error in one of the promises:', error);  
  });
```

### `race()` for First Result

Useful when you need the result of the first settled promise, whether it is fulfilled or rejected.

```js
const promise1 = new Promise(resolve => setTimeout(() => resolve('First result'), 1000));  
const promise2 = new Promise(resolve => setTimeout(() => resolve('Second result'), 500));  
  
Promise.race([promise1, promise2])  
  .then(result => {  
    console.log('Fastest result:', result);  
    // Will log 'Second result' because promise2 is faster  
  });
```

### Error handling in Promises

Promises provide several ways to handle errors.

```js
function fetchData() {  
  return new Promise((resolve, reject) => {  
    // Simulating an error  
    reject(new Error('Network error'));  
  });  
}  
  
fetchData()  
  .then(  
    data => console.log('Data:', data),  
    error => console.log('Error handled in then:', error.message)  
  );  
  
// Alternative method using catch  
fetchData()  
  .then(data => console.log('Data:', data))  
  .catch(error => console.log('Error handled in catch:', error.message));
```

---

# Node Async/Await

## Syntax

```js
async function getData() {  
  console.log('Starting...');  
  const result = await someAsyncOperation();  
  console.log(`Result: ${result}`);  
  return result;  
}  
  
function someAsyncOperation() {  
  return new Promise(resolve => {  
    setTimeout(() => resolve('Operation completed'), 1000);  
  });  
}  
  
// Call the async function  
getData().then(data => console.log('Final data:', data));
```

## Error Handling

```js
async function fetchUserData() {  
  try {  
    const response = await fetch('https://api.example.com/users/1');  
    if (!response.ok) {  
      throw new Error(`HTTP error: ${response.status}`);  
    }  
    const user = await response.json();  
    console.log('User data:', user);  
    return user;  
  } catch (error) {  
    console.error('Error fetching user data:', error);  
    throw error; // Re-throw the error if needed  
  }  
}
```

You can mix async with Promise `.catch()` for different scenarios

```js
// Using catch with an async function  
fetchUserData().catch(error => {  
  console.log('Caught outside of async function:', error.message);  
});
```

## Running Promises in Parallel

Although async/await makes code look synchronous, sometimes you need to run operations in parallel for better performance.

```js
// Helper function to simulate an API call  
function fetchData(id) {  
  return new Promise(resolve => {  
    setTimeout(() => resolve(`Data for ID ${id}`), 1000);  
  });  
}  
  
// Sequential operation - takes ~3 seconds  
async function fetchSequential() {  
  console.time('sequential');  
  const data1 = await fetchData(1);  
  const data2 = await fetchData(2);  
  const data3 = await fetchData(3);  
  console.timeEnd('sequential');  
  return [data1, data2, data3];  
}  
  
// Parallel operation - takes ~1 second  
async function fetchParallel() {  
  console.time('parallel');  
  const results = await Promise.all([  
    fetchData(1),  
    fetchData(2),  
    fetchData(3)  
  ]);  
  console.timeEnd('parallel');  
  return results;  
}  
  
// Demo  
async function runDemo() {  
  console.log('Running sequentially...');  
  const seqResults = await fetchSequential();  
  console.log(seqResults);  
    
  console.log('\nRunning in parallel...');  
  const parResults = await fetchParallel();  
  console.log(parResults);  
}  
  
runDemo();
```

## Best Practices

When working with *async/await* in Node.js, follow these best practices:

1. Remember that async functions always return Promises

```js
async function myFunction() {  
  return 'Hello';  
}  
  
// This returns a Promise that resolves to 'Hello', not the string 'Hello' directly  
const result = myFunction();  
console.log(result); // Promise { 'Hello' }  
  
// You need to await it or use .then()  
myFunction().then(message => console.log(message)); // Hello
```

2. Use `Promise.all()` for concurrent operations
    - When operations can run in parallel, use `Promise.all()` to improve performance.

3. Always handle errors
    - Use *try/catch* blocks or chain a `.catch()` to the async function call.

4. Avoid mixing *async/await* with callbacks
    - Convert callback-based functions to Promises using `util.promisify` or custom wrappers.

```js
const util = require('util');  
const fs = require('fs');  
  
// Convert callback-based function to Promise-based  
const readFile = util.promisify(fs.readFile);  
  
async function readFileContents() {  
  const data = await readFile('file.txt', 'utf8');  
  return data;  
}
```

5. Create clean async functions
    - Keep async functions focused on a single responsibility.

---

# Error Handling

## *try/catch* with *async/await*

```js
const fs = require('fs').promises;  
  
async function loadUserData(userId) {  
  try {  
    const data = await fs.readFile(`users/${userId}.json`, 'utf8');  
    const user = JSON.parse(data);  
  
    if (!user.email) {  
      throw new Error('Invalid user data: missing email');  
    }  
  
    return user;  
  } catch (error) {  
    // Handle different error types  
    if (error.code === 'ENOENT') {  
      throw new Error(`User ${userId} not found`);  
    } else if (error instanceof SyntaxError) {  
      throw new Error('Invalid user data format');  
    }  
    // Re-throw other errors  
    throw error;  
  } finally {  
    // Cleanup code that runs whether successful or not  
    console.log(`Finished processing user ${userId}`);  
  }  
}  
  
// Usage  
(async () => {  
  try {  
    const user = await loadUserData(123);  
    console.log('User loaded:', user);  
  } catch (error) {  
    console.error('Failed to load user:', error.message);  
    // Handle error (e.g., show to user, retry, etc.)  
  }  
})();
```

## Global Error Handling

### Uncaught Exceptions

For unexpected errors, you can listen for **uncaughtException** to perform cleanup before exiting.

```js
// Handle uncaught exceptions (synchronous errors)  
process.on('uncaughtException', (error) => {  
  console.error('UNCAUGHT EXCEPTION! Shutting down...');  
  console.error(error.name, error.message);  
  
  // Perform cleanup (close database connections, etc.)  
  server.close(() => {  
    console.log('Process terminated due to uncaught exception');  
    process.exit(1); // Exit with failure  
  });  
});  
  
// Handle unhandled promise rejections  
process.on('unhandledRejection', (reason, promise) => {  
  console.error('UNHANDLED REJECTION! Shutting down...');  
  console.error('Unhandled Rejection at:', promise, 'Reason:', reason);  
  
  // Close server and exit  
  server.close(() => {  
    process.exit(1);  
  });  
});  
  
// Example of an unhandled promise rejection  
Promise.reject(new Error('Something went wrong'));  
  
// Example of an uncaught exception  
setTimeout(() => {  
  throw new Error('Uncaught exception after timeout');  
}, 1000);
```

## Custom Error Types

```js
class ValidationError extends Error {  
  constructor(message, field) {  
    super(message);  
    this.name = 'ValidationError';  
    this.field = field;  
    this.statusCode = 400;  
  }  
}  
  
class NotFoundError extends Error {  
  constructor(resource) {  
    super(`${resource} not found`);  
    this.name = 'NotFoundError';  
    this.statusCode = 404;  
  }  
}  
  
// Usage  
function getUser(id) {  
  if (!id) {  
    throw new ValidationError('User ID is required', 'id');  
  }  
  // ...  
}
```