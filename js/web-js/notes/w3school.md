# Where to JS

## HTML Tags
JavaScript can be written in HTML.
The script tags can be placeed in the both the `<head>` and `<body>` tags.
```html
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>

<h2>Demo JavaScript in Head</h2>

<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html> 
```

## External JavaScript
Scripts can also be place in external files.
External scripts are practial when the same code is used in many different web pages.

```js
// script.js

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph change."
}
```

To use external scripts, put the name of the script file in the `src` attribute of a `<script>` tag.
```html
<script src="script.js"></script>
<body>
    <p id="demo"></p>
</body>
```

---

# JS Output

## innerHTML

To access the HTML element, you can use the `document.getElementById(id)` method.
Use the `id` attribute to identify the HTML element.
Then use the `innerHTML` property to modify the HTML content of the HTML tag.

```html
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p> <!-- Display: paragraph || h2 value -->

<script>
document.getElementById("demo").innerHTML = "<h2>Hello World</h2>";
</script>

</body>
</html>
```

## innerText

Use the `innerText` property to change the text of the HTML element.

```html
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p> <!-- Displays: <h2>Hello World</h2> -->

<script>
document.getElementById("demo").innerText = "<h2>Hello World</h2>";
</script>

</body>
</html>
```

## document.write()

For testing it is convient to use `document.write()`

```html
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<button type="button" onclick="document.write(5 + 6)">Try it</button>

</body>
</html>
```
> Using document.write() after an HTML document is loaded, will delete all existing HTML

## window.alert()

You can use an alert box to display data

```html
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html>
```

You can skip the `window` keyword. In JS the `window` is a global scope object.
This means that variables, properties, and methods by default belong to the window.

```html
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
alert(5 + 6);
</script>

</body>
</html>
```

## console.log()

For debugging you can call `console.log()`. 

```html
<html>
<body>

<script>
console.log(5 + 6);
</script>

</body>
</html>
```

## JavaScript Print

JavaScript does not have any print object or method.

The only exception is that you can call `window.print()` method in the browser.

```html
<html>
<body>

<button onclick="window.print()">Print this page</button>

</body>
</html>
```

---

# JS Syntax

- Literals (Fixed values)
- Variables (Variable values)

**Numbers** are written with or without decimals:
```text
10.59

1001
```

**Strings** are text, written with double or single quotes
```text
"John Doe"

'John Snow'
```

**Keywords** are used to define actions.
`let` or `const`
```JS
let x = 5;

const fname = "John";
```

> Keywords are case-sensitive.
> `LET` or `Let` are not the same as `let`

**Variales** must have **unique names.**
```JS
let x;

x = 6;
```

Rules for **identifiers:**
- Must start with a letter, _, or $.
- Can contain digits after the first character.
- Cannot be a reserved keyword (`let`, `const`, `if`, etc).
- Are case-sensitive.

**assingment operators** (=) assign values to variables.
```JS
let x = 8;
let y = 6;
let sum = x + y;
```

**arithmetic operators** `+`, `-`, `*`, `/`
```JS
let multiple = 5 * 10;
```

## JS Datatypes

|Type|Description|
|----|-----------|
|String|A text of characters enclosed in quotes|
|Number|A number representing a mathematical value|
|Bigint|A number representing a large integer|
|Boolean|A data type representing true or false|
|Object|A collection of key-value pairs of data|
|Undefined|A primitive variable with no assigned value|
|Null|A primitive value representing object absence|
|Symbol|A unique and primitive identifier|

---

# JS Operators

|Operator|Description|
|--------|-----------|
`+` 	|Addition|
`-` 	|Subtraction|
`*` 	|Multiplication|
`**`	|Exponentiation|
`/` 	|Division|
`%` 	|Modulus (Division Remainder)|
`++` 	|Increment|
`--` 	|Decrement|
`==` 	|equal to|
`===` 	|equal value and equal type|
`!=` 	|not equal|
`!==` 	|not equal value or not equal type|
`>` 	|greater than|
`<` 	|less than|
`>=` 	|greater than or equal to|
`<=` 	|less than or equal to|
`&&` 	|logical and|
`||` 	|logical or|
`!` 	|logical not|

## Assingment

| Operator | Example | Same As | Result | Description |
| :--- | :--- | :--- | :--- | :--- |
| `=` | `x = y` | `x = y` | `5` | Simple assignment operator |
| `+=` | `x += y` | `x = x + y` | `15` | Addition assignment (also works on strings) |
| `-=` | `x -= y` | `x = x - y` | `5` | Subtraction assignment |
| `*=` | `x *= y` | `x = x * y` | `50` | Multiplication assignment |
| `**=` | `x **= y` | `x = x ** y` | `100000` | Exponentiation assignment |
| `/=` | `x /= y` | `x = x / y` | `2` | Division assignment |
| `%=` | `x %= y` | `x = x % y` | `0` | Remainder assignment |

| Operator | Example | Behavior |
| :--- | :--- | :--- |
| `&&=` | `x &&= y` | Assigns `y` to `x` only if `x` is truthy |
| `||=` | `x ||= y` | Assigns `y` to `x` only if `x` is falsy |
| `??=` | `x ??= y` | Assigns `y` to `x` only if `x` is null or undefined |

| Category | Values | Key Notes |
| :--- | :--- | :--- |
| **8 Falsy Values** | `false`, `0`, `-0`, `0n`, `""` (empty string), `null`, `undefined`, `NaN` | Evaluate to `false` in boolean contexts |
| **Common Truthy Values** | `"0"`, `"false"`, `[]` (empty array), `{}` (empty object) | Non-empty strings and objects/arrays evaluate to `true` |

**Spread (`...`) Operator**
The `...` operator splits iterables into individual elements.
```JS
let text = "12345";

let min = Math.min(...text);
let max = Math.max(...text);
```

## Comparison

Assuming `x = 5`:

| Operator | Description | Comparison | Result |
| --- | --- | --- | --- |
| `==` | equal to | `x == 8` | `false` |
| `==` | equal to | `x == 5` | `true` |
| `==` | equal to | `x == "5"` | `true` |
| `===` | equal value and equal type | `x === 5` | `true` |
| `===` | equal value and equal type | `x === "5"` | `false` |
| `!=` | not equal | `x != 8` | `true` |
| `!==` | not equal value or not equal type | `x !== 5` | `false` |
| `!==` | not equal value or not equal type | `x !== "5"` | `true` |
| `!==` | not equal value or not equal type | `x !== 8` | `true` |
| `>` | greater than | `x > 8` | `false` |
| `<` | less than | `x < 8` | `true` |
| `>=` | greater than or equal to | `x >= 8` | `false` |
| `<=` | less than or equal to | `x <= 8` | `true` |

## Conditional

Conditional statements execute different blocks of code based on whether a specified condition evaluates to `true` or `false`.

**`if` Statement**
Executes a block of code if a condition is `true`.

```JS
if (condition) {
  // code to execute if condition is true
}

```

**`else` Statement**
```JS
if (condition) {
  // code if true
} else {
  // code if false
}

```
**`else if` Statement**
```JS
if (condition1) {
  // code if condition1 is true
} else if (condition2) {
  // code if condition2 is true
} else {
  // code if both conditions are false
}

```

**`switch` Statement**
**Use:** To specify **many** alterative code blocks.
```JS
let x = 0;

switch(x) {
  case 1:
    text = "x equals one";
    break;
  case 2:
    text = "x equals two";
    break;
  default:
    text = "x is not one or two";
}

```

**Ternary Operator (`? :`)**
**Use:** shorthand for `if ... else`.
```JS
let age_var_one = 18;
let age_var_two = 17;

let text;

// condition ? expression1 : expression2
text = (age_var_one < 18) ? "Minor" : "Adult"; // sets text equal to Adult
text = (age_var_two < 18) ? "Minor" : "Adult"; // sets text equal to Minor
```

---

# JavaScript Loops

**for loop**
```JS
const cars = ["BMW", "Toyota", "Volvo", "Audi"];

for (let i = 0; i < cars.lenght; i++) {
    text += cars[i] + "<br>";
}
```

**while loop**
```JS
let i = 0;

while (i < 10) {
    text += "The number is " + i;
    i++;
}
```

**`break`**
The `break` statement "jumps out" of loops and switches.

```JS
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break;
    }

    text += "The number is " + i + "<br>";
}
```

* **Labeled break**
```JS
let text = "";

loop1: for (let i = 1; i < 5; i++) {
    loop2: for (let j = 1; j < 5; j++) {
        if (j === 3) {
            break loop1;
        }

        text += i;
    }
}
```

This code will execute and set `text` to **`"11"`**.

Here is how it behaves step-by-step:

1. **`i = 1` (Outer loop starts):**
* **`j = 1`:** The check `j === 3` is false. `i` (`1`) is appended to `text`. (`text = "1"`)
* **`j = 2`:** The check `j === 3` is false. `i` (`1`) is appended to `text`. (`text = "11"`)
* **`j = 3`:** The condition `j === 3` is true.


2. **The Break:**
* `break loop1;` immediately terminates the outer loop (`loop1`) entirely—not just the inner loop.


3. **Termination:**
* Loops stop, and execution moves past the outer loop. No further iterations occur for `i` or `j`.

**`continue`**

The `continue` statement skips the current iteration in a loop.

```JS
for (let i = 1; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
```

* **`continue` to LableName**

```JS
let text = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop1; }
    text += i;
   }
}
```

This code will set `text` to **`"12121212"`**.

* **Outer Loop (`j = 1`):**
* `i = 1`: `i === 3` is false. Appends `"1"` to `text` (`text = "1"`).
* `i = 2`: `i === 3` is false. Appends `"2"` to `text` (`text = "12"`).
* `i = 3`: `i === 3` is true. `continue loop1;` immediately skips the rest of the inner loop and jumps directly to the next iteration of the outer loop (`j = 2`).

* **Outer Loops (`j = 2, 3, 4`):**
* The exact same pattern repeats for each remaining iteration of `j`. In every cycle, `i = 1` and `i = 2` append `"12"`, and `i = 3` triggers `continue loop1;`.

Because the outer loop runs 4 times in total (for `j = 1, 2, 3, 4`), `"12"` is appended 4 times.

--- 

# JavaScirpt Strings

Strings are for storing text values.

**Quotes**
```js
let text_one = "";
let text_two = "One";
let text_three = "Four";
```

**Quotes inside Quotes**
```JS
let answer_one = "It's alright";
let answer_two = "He is called 'Johnny'";
```

**Template Strings**
Templates are strings enclosed in backticks.
They allow single or double quotes.
```js
let text = `He's often called "Johnny"`;
```

* **Interpolation**
*Template Strings* allow variables in strings.

```js
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}`;
```

* **Expression Substitution**
interpolation of expressions in strings
```JS
let price = 10;
let vat = 0.25;

let total = `Total: ${(price * (1+ vat)).toFixed(2)}`;
```

* **HTML Templates**
```JS
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
```

**String length**
```js
let text = "123456qwerty";
let length = text.lenght;
```

**Escape Characters**
```JS
let text = "We are the so-called \"Vikings\" from the north."; 

let text= 'It\'s alright.';

let text = "The character \\ is called backslash.";
```

|Code|Result|
|----|------|
|`\b`|Backspace|
|`\f`|Form Feed|
|`\n`|New Line|
|`\r`|Carriage Return|
|`\t`|Horizontal Tabulator|
|`\v`|Vertical Tabulator|

[**String Methods**](https://www.w3schools.com/jsref/jsref_obj_string.asp)

---

# JS Numbers

JavaScript numbers are always 64-bit floating point.

**Interger Precision**

Integers are accurate up to 15 digits.
```js
let x = 999999999999999; // x will be 999999999999999
let y = 9999999999999999; // y will be 10000000000000000
```

[**Number Methods**](https://www.w3schools.com/jsref/jsref_obj_number.asp)

---

# JS Functions

Learn Functions in the right order 
1. First the idea.
2. Then how to make them.
3. Then how to use them.

**1. What are Functions?**
* Reusable code blocks.
* Executed when they are called or invoked.

```js
function sayHello() {
  return "Hello World";
}

let message = sayHello();
```

**2. Calling Functions**
* You call a function by adding *parentheses* to its name: *name()*.

* **Calling vs Referencing a Function.**
    * `sayHello` refers to the function itself. It returns the function.
    * `sayHello()` refers to the function result. It returns the result.

```js
function sayHello() {
  return "Hello World";
}

let textReference = sayHello;
let textCall = sayHello();
```

**3. Function Parameters**
* Send values to a function.
* Listed in *parentheses* in the function *definition*.

```JS
function sayHello(name) {
    return "Hello " + name;
}

let greeting = sayHello("John");
```

*Default Parameter Values*
```js
function myFunction(x, y = 10) {
    return x + y;
}

let answer1 = myFunction(1, 2);
let answer2 = myFunction(1);
```

**4. Function Return values**
* When a function reaches a **return** statement, the function **stops executing**.
* The value after the return keyword is sent back to the caller.

```js
function checkAge(age) {
    if (age < 18) {
        return "Too young";
    }

    return "Access granted";
}
```

* **Returning values to HTML**

Returned function values are often used to update HTML content.

```html
<p id="demo"></p>

<script>
function toCelsius(farenheit) {
  return (5 / 9) * (farenheit - 32);
}

document.getElementById("demo").innerHTML = toCelsius(77);
</script>
```

**5. Function Arguments**

JavaScirpt functions have a built-in object called the `arguments` object.

```js
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
```

* **Rest Parameter**

The rest parameter(`...`) allows a function to treat an indefinite number of argumetns as an array.

```JS
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += args;

    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
```

**6. Function Expressions**

A function expression is a **function stored in a variable.**

```js
// Standard Function
function multiply(a, b) {
  return a * b;
}

// Function Expression
const multiply = function(a, b) {
  return a * b;
};
```

* **Anonymous Functions**

Functions stored in varaibles don't need names.

```JS
const multiply = function (a, b) { return a * b };

let z = multiply(4, 3);
```

Because a function expression is stored in a variable, it can be used like a value.

```js
function run(fn) {
    return fn();
}

const sayHello = function() {
    return "Hello";
}

run(sayHello);
```

**7. Arrow Functions**

Arrow functions allow for a shorthand syntax.

```JS
const multiply = (a, b) => a * b;
```

An arrow function is always written as a funciton expression.

```js
const add = (a, b) => {
    return a + b;
}
```

* **Arrow functions and the `this` keyword.**

Arrow functions do not have their own `this` value.
They inherit `this` from the surrounding code.

```JS
const person = {
    name : "John",
    greet : function() {
        return this.name;
    }
};

const timer = {
    seconds : 0,
    start() {
        setInterval(() => {
            this.seconds++ // Arrow function gets `this` from start() being a function of timer.
            console.log(this.seconds);
        }, 1000);
    }
}
```

* **`this` keyword**

The `this` keyword refers to the object that is currently executing the function.

```JS

const user = {
    name : "Alex",
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

user.greet(); // Output: Hello, I'm Alex
```

---

# JS Timers