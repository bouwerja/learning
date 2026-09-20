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

Timers lets you run a function after a delay or at fixed intervals.

|Function|Description|
|--------|-----------|
|`setTimeout()`|Runs a function once after a delay.|
|`setInterval()`|Runs a function repeatedly.|
|`clearTimeout()`|Cancels a timeout.|
|`clearInterval()`|Stops an interval.|

```JS

setTimeout(function, milliseconds);
setTimeout(myFunction, 3000);

function myFunction() {
  console.log("Hello!");
}

setTimeout( () => {
  return "Hello!";
}, 3000);

setInterval(function, milliseconds);
setInterval(showTime, 1000);

function showTime() {
  const date = new Date();
  myDisplayer(date.toLocaleTimeString());
}
```

--- 

# JavaScript Objects 

**Objects** are variables that can store both **values** and **functions**.

**Values** are stored as **key:value** pais called **properties.**
**Functions** are stored as **key:function()** pairs called **methods.**

## **JavaScript Objects:** 

Variables that hold both values and functions.

```js
const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};
```
> `type`, `model`, and `color` are **properties.**
> `"Fiat"`, `"500"`, and `"white"` are **property values.**

* Object Literals

An object literal "literally" describes an object using a concise syntax with zero or more key:value pairs.

These can be inside curly braces to describe all the object properties.

```js 
{
  firstName: "john",
  lastName: "doe",
  age: 50,
  eyeColor: "blue",
}
```

### **Object Properties** 

Collections of dynamic key-value pairs that can be modified, added, or removed.

You can access object properties in two ways:
  1. Dot notation.
  2. Bracket notation.

```js 
// dot notation
objectName.propertyName;

// bracket notation
objectName["propertyName"];
```

**Changing Properties**
`person.age = 10;`

**Adding new properties**
`person.nationality = "English";`

**Deleting properties**
```js 
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

delete person.age;
```
> The `delete` keyword deletes both the value and the property.
> After deleting, the property is removed. Accessing it will return `undefined`.

**Check if a property exists**
```js 
const person = {
  firstName: "John",
  lastName: "Doe"
};

let result = ("firstName" in person); 
```

**Nested Objects**
```js 
myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
};

myObj.myCars.car2;
```

### **Object Methods** 

Functions stored as property values that perform actions on the object.

Objects can also have **methods.**

Object methods are **actions** that can be performed on objects.
Object methods are **function definitions** stored as **property values.**

```js 
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

person.fullName();
```
> In an object method, `this` refers to **the object.**

**Adding a Method to an Object**
```js 
person.name = function () {
  return this.firstName + " " + this.lastName;
};
```

### **Object Display**

Techniques for displaying properties via direct property names, loops, `Object.values()`, or `JSON.stringify()`.

*Why do I See `[object Object]`?*

`[Object Object]` appears when you try to put an object (a data structure with properties) into a context where a string is expected.

`[Object Object]` how JavaScript deals with this situation.

Some solutions to display JavaScript objects are:
1. Displaying the Object Properties by name
2. Displaying the Object Properties in a Loop
3. Displaying the Object using Object.values()
4. Displaying the Object using JSON.stringify()

```js 
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Add Properties
let text = person.name + "," + person.age + "," + person.city;
```

**Using a For ... in loop**
```js 
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Build a Text
let text = "";
for (let x in person) {
  text += person[x] + " ";
};
```

**Object.values()**

`Object.values()` creates an array from the property values.
```js 
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const myArray = Object.values(person);

let text = myArray.toString(); 
// output: "John,30,New York"
```

**Object.entries()**

`Object.entries()` makes it simple to use objects in loops.
```js
const fruits = {
  Bananas: 300,
  Oranges: 200,
  Apples: 500,
};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}
```

**JSON.stringify()**

JavaScript objects can be converted to a string with JSON method `JSON.stringify()`
> JSON : JavaScript Object Notation.
```js 
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let text = JSON.stringify(person);
// output : {"name":"John","age":30,"city":"New York"}
```

### JavaScript Object Constructors

Functions used to create multiple instances of a specific object type.

* **Constructor Function:** A blueprint used to create multiple objects of the same type (conventionally named with a capital letter, e.g., `Person`).
* **`this` Keyword:** Refers to the new object being created when called with `new`.

```js 
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}
```

* **Creating Objects:** Use `new` to instantiate an object (e.g., `const user = new Person(...)`).
```js 
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");
```

* **Default Values:** Set defaults inside the constructor using `this.propertyName = "value"`.
* **Adding to One Instance:** Assign directly to that instance (`myMother.changeName = ...`). It will **not** affect other objects.
* **Adding to All Instances:** You **cannot** add properties/methods directly to the constructor. You must add them to the **prototype**:
```js 
  // this will not work
  Person.nationality = "English";

  // this will work
  Person.prototype.nationality = "English";

  // you can also add methods to constructors
  Person.prototype.changeName = function (name) {
    this.lastName = name;
  };
```

Use literals instead of built-in constructors (new):
* Use {} instead of new Object()
* Use [] instead of new Array()
* Use /pattern/ instead of new RegExp()
* Use () => {} instead of new Function()

---

# JavaScirpt Scope

## Scope = Visibility

JavaScirpt variables have 3 types of scope:
* Global 
* Function
* Block 

## Scope Examples

Variables declared with `var`, `let`, and `const` are quite similar when declared outside a block.

```JavaScirpt
let carName = "Volvo"; // Global scope

function myFunction(value) {
  if (true) {
    var message = "This is block scope";

    let secureMessage = "This is function scope";
  }

  if (value === 1) {
    console.log(message);
    // console.log(message);
  }

  if (value === 2) {
    console.log(secureMessage);
    // Error! secureMessage does not exist outside the if-statement block
  }

  if (value === 3) {
    console.log(carName)
  }
}

myFunction(1); // This prints the message

myFunction(2); // This throws a reference error

myFunction(3); // This prints the carName
```

## Variable Lifetime

The lifetime of a variable starts when it is declared.

Function `(local)` variables are deleted when the function is completed.

In a web browser, global variables are deleted when you close the browser window `(or tab)`.

**Always use const by default.**
It prevents accidental reassignments and makes your code more predictable.

**Only use let when:**
You know its value needs to change later (inside a loop or a mathematical counter).

**Never use var.**
Its unpredictable scoping and the redeclaration rules are known to cause bugs.

## `use strict`

Makes it easier to write "secure" JavaScirpt.

For example, mistyping a variable name creates a new global variable. In scrict mode,
this will throw an error, making it impossible to accidentally create a global variable.

In strict mode, any assignment to a non-writable property, a getter-only property, 
a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

---

# JS Dates 

```html
<html>
    <body>
        <p>Time below</p> <br />
        <p id="time_elmt"></p>
    </body>

    <script lang="js">
        "use strict";
        
        const now = new Date();
        
        console.log(now.toLocaleDateString());
        
        document.getElementById("time_elmt").textContent = now.toLocaleDateString();
    </script>
</html>
```

## Getter Methods

| Method | Description |
| :--- | :--- |
| `getFullYear()` | Get year as a four digit number (yyyy) |
| `getMonth()` | Get month as a number (0-11) |
| `getDate()` | Get day as a number (1-31) |
| `getDay()` | Get weekday as a number (0-6) |
| `getHours()` | Get hour (0-23) |
| `getMinutes()` | Get minute (0-59) |
| `getSeconds()` | Get second (0-59) |
| `getMilliseconds()` | Get millisecond (0-999) |
| `getTime()` | Get time (milliseconds since January 1, 1970) |

## Setter Methods

| Method | Description |
| :--- | :--- |
| `setDate()` | Set the day as a number (1-31) |
| `setFullYear()` | Set the year (yyyy) |
| `setHours()` | Set the hour (0-23) |
| `setMilliseconds()` | Set the milliseconds (0-999) |
| `setMinutes()` | Set the minutes (0-59) |
| `setMonth()` | Set the month (0-11) |
| `setSeconds()` | Set the seconds (0-59) |
| `setTime()` | Set the time (milliseconds since January 1, 1970) |

---

# JS Arrays 

An array is an object type designed for storing data collections.
 * **Element:** An array is a list of values, known as elements.
 * **Ordered:** Ordered based on their index.
 * **Zero Indexed:** The first element starts at index 0.
 * **Dynamic size:** Can grow or shrink as elements are added or removed.
 * **Heterogeneous:** Arrays can store elements of different data types.

```JavaScirpt
const array_name = [item1, item2, ...];

const cars = [
  "Saab",
  "Volvo",
  "BMW"
]; 

const carsAgain = [];
carsAgain[0] = "Saab";
carsAgain[1] = "Volvo";
carsAgain[2] = "BMW";
```

## Constant Arrays

The keyword `const` is a little misleading.

It does **NOT** define a constant array. It defines a constant reference to an array.

Because of this, we can still change the elements of a constant array.

## Converting an Array

### to a String

The method `toString()` converts an array to a string of (comma separated) array values.

```JavaScirpt
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
// Result: Banana,Orange,Apple,Mango
```

### using JSON

```JavaScirpt
const cars = ["Saab", "Volvo", "BMW"];

let text = JSON.strinify(cars);
```

## Elements

### First element

```JavaScirpt
let firstCar = cars[0];
```

### Last element

```JavaScirpt
let lastCar = cars[cars.lenght - 1];
```

### Looping

```JavaScirpt
const cars = ["Saab", "Volvo", "BMW"];

let carLen = cars.length;

let text = "<ul>";
for (let i = 0; i < carLen; i++) {
  text += "<li>" + cars[i] + "</li>";
}

text += "</ul>";

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
} 
```

### Adding

```JavaScirpt
const fruits = ["Banana", "Orange", "Apple"];

fruits.push("Lemon");  // Adds a new element (Lemon) to fruits 

fruits[fruits.length] = "Lime";  // Adds "Lime" to fruits 
```

### Array Methods

| Method / Property | Description |
| :--- | :--- |
| `[ ]` | Creates a new Array |
| `new Array()` | Creates a new Array |
| `at()` | Returns an indexed element of an array |
| `concat()` | Joins arrays and returns an array with the joined arrays |
| `constructor` | Returns the function that created the Array prototype |
| `copyWithin()` | Copies array elements within the array, to and from specified positions |
| `entries()` | Returns a key/value pair Array Iteration Object |
| `every()` | Checks if every element in an array pass a test |
| `fill()` | Fill the elements in an array with a static value |
| `filter()` | Creates a new array with every element in an array that pass a test |
| `find()` | Returns the value of the first element in an array that pass a test |
| `findIndex()` | Returns the index of the first element in an array that pass a test |
| `findLast()` | Returns the value of the last element in an array that pass a test |
| `findLastIndex()` | Returns the index of the last element in an array that pass a test |
| `flat()` | Concatenates sub-array elements |
| `flatMap()` | Maps all array elements and creates a new flat array |
| `forEach()` | Calls a function for each array element |
| `from()` | Creates an array from an object |
| `includes()` | Check if an array contains the specified element |
| `indexOf()` | Search the array for an element and returns its position |
| `isArray()` | Checks whether an object is an array |
| `join()` | Joins all elements of an array into a string |
| `keys()` | Returns a Array Iteration Object, containing the keys of the original array |
| `lastIndexOf()` | Search the array for an element, starting at the end, and returns its position |
| `length` | Sets or returns the number of elements in an array |
| `map()` | Creates a new array with the result of calling a function for each array element |
| `of()` | Creates an array from a number of arguments |
| `pop()` | Removes the last element of an array, and returns that element |
| `prototype` | Allows you to add properties and methods to an Array object |
| `push()` | Adds new elements to the end of an array, and returns the new length |
| `reduce()` | Reduce the values of an array to a single value (going left-to-right) |
| `reduceRight()` | Reduce the values of an array to a single value (going right-to-left) |
| `reverse()` | Reverses the order of the elements in an array |
| `shift()` | Removes the first element of an array, and returns that element |
| `slice()` | Selects a part of an array, and returns the new array |
| `some()` | Checks if any of the elements in an array pass a test |
| `sort()` | Sorts the elements of an array |
| `splice()` | Adds or Removes array elements |
| `toReversed()` | Reverses the order of array elements (to a new array) |
| `toSorted()` | Sorts the elements of an array (to a new array) |
| `toSpliced()` | Adds or Removes array elements (to a new array) |
| `toString()` | Converts an array to a string, and returns the result |
| `unshift()` | Adds new elements to the beginning of an array, and returns the new length |
| `valueOf()` | Returns the primitive value of an array |
| `with()` | Returns a new array with updated elements |

---

# JavaScript Sets

Collection of unique values.

Can be of any type, primitive values or objects.

```JavaScript
// Create a Set
const letters = new Set(["a", "b", "c"]);

// Add values to a set
letters.add("d");

// Create and add variables to a set

const e = "e";
letters.add(e);

// List all elements
let text = "";
for (const x of letters) {
  text += x;
}
```

## JavaScript Set Methods

| Method / Property | Description |
| :--- | :--- |
| `new Set()` | Creates a new Set object |
| `add()` | Adds a new element with a specified value to the Set |
| `clear()` | Removes all elements from the Set |
| `delete()` | Removes a specified element from the Set |
| `entries()` | Returns an Iterator containing `[value, value]` pairs for each element |
| `forEach()` | Executes a provided function once for each element in the Set |
| `has()` | Returns `true` if a specified value exists in the Set |
| `keys()` | Same as `values()`; returns an Iterator for the values in the Set |
| `values()` | Returns an Iterator containing all the values in the Set |
| `size` | Returns the total number of elements in the Set |

| Method | Description | 
| ----- | ----- | 
| `union()` | Returns a new Set containing all elements from both this Set and the given Set | 
| `difference()` | Returns a new Set containing elements in this Set that are not in the given Set | 
| `intersection()` | Returns a new Set containing elements present in both this Set and the given Set | 
| `isDisjointFrom()` | Returns `true` if this Set has no elements in common with the given Set | 
| `isSubsetOf()` | Returns `true` if all elements of this Set are in the given Set | 
| `isSupersetOf()` | Returns `true` if this Set contains all elements of the given Set | 
| `symmetricDifference()` | Returns a new Set containing elements that are in either Set, but not both | 

## JavaScript WeakSet

A **WeakSet** in JavaScript is a collection of garbage-collectable, unique objects (and non-registered symbols). 
Unlike a standard Set, a WeakSet holds "weak" references to its values.

The references to objects in a WeakSet are held weakly. 
If an object stored in a WeakSet has no other remaining references anywhere else in your code, 
JavaScript's garbage collector can remove it from memory.

---

# JavaScript Maps

A **Map** is an object that can store collections of key-value pairs, similar to a **dictionary**.

Maps differ from standard objects in that **keys can be of any data type.**

* **Key Types**
Map keys can be any type (strings, numbers, objects, etc).

* **Insertion Order**
The Map remembers the original insertion order of the keys.

* **Size**
The number of items in a Map is easily retrieved using the size property.

* **Performance**
Maps are optimized for frequent additions and removals of key-value pairs.

* **Iteration**
Maps are iterable, allowing for direct use of for...of loops or methods like `forEach()`.

```JavaScript 
const fruits = new Map();

// Set Map values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// Change Map values
fruits.set("apples", 100);

// Get the values of a key in a Map
fruits.get("apples"); // Returns: 100
```

## WeakMap

A **WeakMap** is a collection of key/value pairs where the **keys must be objects**.

## Map Methods

| Method / Property | Description |
| :--- | :--- |
| `new Map()` | Creates a new Map object |
| `clear()` | Removes all the elements from a Map |
| `delete()` | Removes a Map element specified by a key |
| `entries()` | Returns an iterator object with the `[key, value]` pairs in a Map |
| `forEach()` | Invokes a callback for each key/value pair in a Map |
| `get()` | Gets the value for a key in a Map |
| `groupBy()` | Groups object elements according to returned callback values |
| `has()` | Returns `true` if a key exists in a Map |
| `keys()` | Returns an iterator object with the keys in a Map |
| `set()` | Sets the value for a key in a Map |
| `size` | Returns the number of Map elements |
| `values()` | Returns an iterator object of the values in a Map |

# JavaScript Loops

`for`: Executes a block of code a known number of times. Composed of three expressions:
```JavaScript
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
```

* Initialization (exp1): Runs once before the loop starts.

* Condition (exp2): Evaluates before each iteration; code executes as long as this is true.

* Increment/Decrement (exp3): Runs after every iteration.

`while`: Repeats a code block as long as a specified condition remains true. Requires manual updates to condition variables to prevent infinite loops.
```JavaScript
while (i < 10) {
  text += "The number is " + i;
  i++;
}
```

`do...while`: Similar to while, but guarantees the code block runs at least once before evaluating the condition.
```js
do {
  text += "The number is " + i;
  i++;
}
while (i < 10); 
```

`for...in`: Iterates over the enumerable properties (keys) of an object.
```js
for (key in object) {
  // code block to be executed
}

const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
} 
```

`for...of`: Iterates directly over the values of iterable objects.
```js
for (variable of iterable) {
  // code block to be executed
}

const name = "W3Schools";

for (const x of name) {
  // code block to be executed
}
```
Iterable objects:
* Iterating over a String
* Iterating over an Array
* Iterating over a Set
* Iterating over a Map

## Iterators

An **Iterator** is an object that provides a standard way to access elements **sequentially**.

### `next()`

The done property returns `false` if there are more elements to iterate over, otherwise it returns `true`.

```js 
function myNumbers() {
  let n = 0;
  return {
    next: function() {
      n += 10;
      return {value:n, done:false};
    }
  };
}

// Run the Iterable
const n = myNumbers();
n.next(); // Returns 10
n.next(); // Returns 20
n.next(); // Returns 30

myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}

for (const num of myNumbers) {
  // Any Code Here
}
```

### 1. `Iterator.from()`

Creates an iterator object from an iterable or existing iterator.

```javascript
const numbers = [10, 20, 30];
const iter = Iterator.from(numbers);

console.log(iter.next().value); // 10
console.log(iter.next().value); // 20

```

### 2. `drop()`

Returns an iterator that skips a specified number of elements before yielding the rest.

```javascript
const numbers = [1, 2, 3, 4, 5];
const iter = Iterator.from(numbers).drop(2);

console.log([...iter]); // [3, 4, 5]

```

### 3. `take()`

Returns an iterator that yields a specified number of elements from the beginning.

```javascript
const numbers = [1, 2, 3, 4, 5];
const iter = Iterator.from(numbers).take(3);

console.log([...iter]); // [1, 2, 3]

```

### 4. `map()`

Returns an iterator with all elements transformed by a mapping function.

```javascript
const numbers = [1, 2, 3];
const iter = Iterator.from(numbers).map(x => x * 10);

console.log([...iter]); // [10, 20, 30]

```

### 5. `filter()`

Returns an iterator containing elements that satisfy a filter predicate function.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const iter = Iterator.from(numbers).filter(x => x % 2 === 0);

console.log([...iter]); // [2, 4, 6]

```

### 6. `flatMap()`

Returns an iterator by mapping each element and then flattening the resulting iterables.

```javascript
const words = ["hello", "world"];
const iter = Iterator.from(words).flatMap(word => word.split(""));

console.log([...iter]); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

```

### 7. `find()`

Returns the first element that satisfies a test function, or `undefined`.

```javascript
const numbers = [5, 12, 8, 130, 44];
const result = Iterator.from(numbers).find(x => x > 10);

console.log(result); // 12

```

### 8. `some()`

Returns `true` if at least one element satisfies the test function.

```javascript
const numbers = [1, 2, 3, 4, 5];
const hasEven = Iterator.from(numbers).some(x => x % 2 === 0);

console.log(hasEven); // true

```

### 9. `every()`

Returns `true` if all elements in the iterator satisfy the test function.

```javascript
const numbers = [2, 4, 6, 8];
const allEven = Iterator.from(numbers).every(x => x % 2 === 0);

console.log(allEven); // true

```

### 10. `reduce()`

Applies a reducer function against each element to accumulate a single result value.

```javascript
const numbers = [1, 2, 3, 4];
const sum = Iterator.from(numbers).reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10

```

### 11. `forEach()`

Executes a provided function once for each element in the iterator (consumes the iterator).

```javascript
const items = ["a", "b", "c"];

Iterator.from(items).forEach(item => {
  console.log(item);
});
// Logs:
// "a"
// "b"
// "c"

```

## Core Concept

JavaScript Generators are special functions that can be paused and resumed, preserving their internal state between executions. 

While regular functions return a single value, generators can yield multiple values sequentially.

## Syntax & Fundamentals

* **Declaration:** Defined using the `function*` syntax (e.g., `function* myGenerator() {}`).
* **Yield Keyword:** Pauses execution and returns a value to the caller. Execution resumes from the exact point of the `yield` when triggered again.
* **Return Value:** Calling a generator function returns a **Generator Object**, which implements both the iterable and iterator protocols.

## Generator Object Methods

* **`next()`:** Resumes execution until the next `yield` or `return`. Returns an object in the format `{ value: any, done: boolean }`.
* **`return()`:** Forcefully finishes execution and returns the provided value.
* **`throw()`:** Throws an exception inside the generator at its current execution point.

## Iteration & Usage Notes

* **`for...of` Loops:** Generator objects can be looped over directly.
* **Handling `return` vs. `yield`:** A `for...of` loop ignores values returned via `return` because it exits as soon as `done: true` is reached. To ensure all values are included during iteration, use `yield` instead of `return`.

## Key Use Cases

* **Custom Iterators:** Simplifies creating custom iteration logic for complex data structures.
* **On-Demand & Infinite Streams:** Efficiently handles large or infinite data sets by generating values lazily as needed.
* **Flow Control:** Offers fine-grained execution management and was historically combined with Promises for async control before `async/await`.

---

# JavaScript Datatypes

## Primitive Data Types

| Data Type | Description | 
 | ----- | ----- | 
| `Number` | A number representing a numeric value | 
| `BigInt` | A number representing a large integer | 
| `String` | A text of characters enclosed in quotes | 
| `Boolean` | A data type representing true or false | 
| `Undefined` | A variable with no assigned value | 
| `Null` | A value representing object absence | 
| `Symbol` | A unique primitive identifier | 

## Structural & Object Data Types

| Type / Object | Description | 
 | ----- | ----- | 
| `Object` | A collection of key-value pairs of data | 
| `Array` | Array of values accessed by a numerical index | 
| `Map` | Key-value pairs where the keys can be of any data type | 
| `Set` | Collection of unique values where each value can only appear once | 
| `WeakMap` | A type of Map with weak references to the stored objects | 
| `WeakSet` | A type of Set with weak references to the stored objects | 
| `Math` | An object that provides math constants and functions like `PI` and `random()` | 
| `Date` | Object for working with dates and times | 
| `RegExp` | Object for working with regular expressions | 
| `Error` | Object represents error conditions during program execution | 
| `JSON` | Object with methods for parsing values between JSON and objects | 
| `Promise` | Object representing the completion or failure of an asynchronous operation | 

## Typed Arrays

| Typed Array | Description | 
 | ----- | ----- | 
| `Int8Array` | Array for storing fixed-size 8-bit integer values | 
| `Int16Array` | Array for storing fixed-size 16-bit integer values | 
| `Int32Array` | Array for storing fixed-size 32-bit integer values | 
| `Float16Array` | Array for storing fixed-size 16-bit floating-point values | 
| `Float32Array` | Array for storing fixed-size 32-bit floating-point values | 
| `Float64Array` | Array for storing fixed-size 64-bit floating-point values | 
| `BigInt64Array` | Array for storing fixed-size 64-bit big integer values | 

```js 
// Number
let length = 16;
let weight = 7.5;

// BigInt
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)
// Strings
let color = "Yellow";
let lastName = "Johnson";

// Boolean
let x = true;
let y = false;

// Undefined
let x;
let y;

// Null
let x = null;
let y = null;

// Symbol
const x = Symbol();
const y = Symbol();

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array Object
const cars = ["Saab", "Volvo", "BMW"];

// Date Object
const date = new Date("2022-03-25");
```

* A variable without a value is `undefined`
```js
let car;

console.log(car); // Result: undefined
```

* `NaN` is short for *Not a Number*.
```js 
let x = 10 / "Apple";

console.log(x); // Result: NaN
```

## DataType Conversion

#### Converting to Numbers

* **`Number()`**: Converts variables, literals, or expressions into numbers.
* `"3.14"` $\rightarrow$ `3.14`
* `""` or `" "` $\rightarrow$ `0`
* `false` $\rightarrow$ `0` | `true` $\rightarrow$ `1`
* Non-numeric strings (e.g., `"John"` or `"99 88"`), `undefined`, and functions $\rightarrow$ `NaN`
* `null` $\rightarrow$ `0`
* Dates $\rightarrow$ milliseconds since epoch (same as `date.getTime()`)

* **`parseInt()` & `parseFloat()**`: Parse strings into integers or floating-point numbers.
* **Unary `+` Operator**: Converts variables directly to numbers (returns `NaN` if conversion fails).

#### Converting to Strings

* **`String()` or `.toString()**`: Global method and object method to convert values to strings.
* Numbers, Booleans, Dates, and Arrays return their string representations.
* Objects (`{}`) $\rightarrow$ `"[object Object]"`

* **Number Formatting Methods**:
* `toExponential()`: Exponential notation.
* `toFixed()`: Specified number of decimals.
* `toPrecision()`: Specified length.

#### Converting to Booleans

* **Truthy vs. Falsy**:
* **Falsy** (convert to `false`): `0`, `""`, `NaN`, `null`, `undefined`, `false`.
* **Truthy** (convert to `true`): All other values, including `"0"`, `"false"`, `[]`, `{}`, `Infinity`, and non-empty strings.

### Automatic (Implicit) Type Conversion

* JavaScript automatically converts data types when performing operations on mismatched types.
* **String coercion**: JavaScript automatically calls an object's `.toString()` method when outputting a variable (e.g., in DOM manipulation).

### Key Conversion Examples Reference

| Original Value | To Number | To String | To Boolean |
| --- | --- | --- | --- |
| `false` | `0` | `"false"` | `false` |
| `true` | `1` | `"true"` | `true` |
| `""` (empty string) | `0` | `""` | `false` |
| `"20"` | `20` | `"20"` | `true` |
| `[ ]` (empty array) | `0` | `""` | `true` |
| `null` | `0` | `"null"` | `false` |
| `undefined` | `NaN` | `"undefined"` | `false` |

--- 

# JavaScript Errors

Handling errors 

```js 
let x = 5;

try {
  x = y + 1;
} catch (err) {
  let text = err.name;
}
```

> **Silent Errors** are issues that do not throw exceptions or stop execution.

```js 
let result = "Not Active.";
let isActive = false;

if (isActive = true) { // ❌ Assignment, not comparison
  let result = "Active!";
}

// NaN - no error, just wrong data
const result = parseInt("abc");

// Accessing a missing property retuns undefined
const user = {};
let result = user.name;
```

## `try...catch` 

> JavaScript will actually create an **Error object** with two properties: **name** and **message**.

```js 
try {
  // Code that may cause an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that always runs, no matter what
}
```

**`throw` Statement**
```js 
try {
  // Code that may cause an error
} catch (error) {
  throw "An error has occured";
}
```

## Example
```js 
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";

  let x = document.getElementById("demo").value;

  try {
    if(x.trim() == "") throw "is empty";

    if(isNaN(x)) throw "is not a number";

    x = Number(x);

    if(x > 10) throw "is too high";

    if(x < 5) throw "is too low";

  } catch(err) {
    message.innerHTML = "Error: " + err + ".";
  } finally {
    document.getElementById("demo").value = "";
  }
} 
```

## Error Object Methods & Properties

| Method / Property | Description |
| :--- | :--- |
| `new Error()` | Creates a new Error object |
| `name` | Sets or returns an error name |
| `message` | Sets or returns an error message |
| `cause` | Sets or returns an error cause |
| `Error.isError(x)` | Returns `true` if a value (`x`) is an Error |

## Standard Error Names

| Error Name | Description |
| :--- | :--- |
| `EvalError` | Deprecated — use `SyntaxError` instead |
| `RangeError` | A number "out of range" has occurred |
| `ReferenceError` | An illegal reference has occurred |
| `SyntaxError` | A syntax error has occurred |
| `TypeError` | A type error has occurred |
| `URIError` | An error in `encodeURI()` has occurred |

---

# Debugging

## Core Debugging Process

Debugging is the practice of systematically finding and fixing mistakes (bugs) by checking facts rather than guessing.

* **The Debugging Habit:** Read the error $\rightarrow$ Reproduce the problem $\rightarrow$ Reduce to a small example $\rightarrow$ Fix it.
* **General Checklist:** Check the console, read error messages, log values, isolate the issue, and fix one thing at a time.

## Key Debugging Tools & Techniques

* **Browser Console:** The primary tool for finding hidden errors. Open it directly using **F12**, or navigate through your browser's Developer Tools menu.
* **`console.log()`:** Used to print messages or variable values before and after suspected code lines to track execution and verify assumptions.
* **Variable & Type Verification:** Confirm that variables hold the expected values and types (e.g., distinguishing between the number `5` and the string `"5"`).

## Common Errors & Mistakes

* **ReferenceError:** Occurs when using an undeclared or misspelled variable name.
* **TypeError:** Occurs when using a value in an impossible way (frequently involving `null` or `undefined`).
* **Assignment vs. Comparison:** Using a single equals sign (`=`) inside a conditional statement assigns a value instead of comparing it (`==` or `===`).

## Breakpoints

* **Breakpoints:** Tools in browser developer tools that pause JavaScript execution at a specific line, allowing you to inspect live variable values and step through code rather than guessing.
* **The `debugger` Keyword:** A built-in JavaScript statement that acts as a hardcoded breakpoint. It pauses execution if developer tools are open, but is ignored if no debugger is available.

### How to Set & Control Breakpoints

1. Open DevTools (**F12**) and go to the **Sources** tab.
2. Click a line number to set a breakpoint, then reload the page to trigger it.
3. Use execution controls once paused:
* **Play / Resume:** Continue code execution.
* **Step Over:** Execute the next line of code.
* **Step Into:** Enter the function being called on the current line.
* **Step Out:** Finish executing the current function and return to the caller.

### Key DevTools Panels

* **Scope Panel:** Displays active variables at the paused line and distinguishes between **Local** (function-level) and **Global** variables.
* **Watch Panel:** Enables tracking specific variables live as code executes, replacing the need for multiple `console.log()` statements.

### Best Practices & Beginner Avoidance

* **When to Use:** Use when tracking unexpected value changes, incorrect logic results, or complex function execution.
* **Common Mistakes:** Forgetting to reload the page to hit a new breakpoint, or getting caught in long loops (temporarily disable the breakpoint if it triggers too often).

## Async Errors

* **Delayed execution:** Async code does not run top-to-bottom; it executes later when an operation finishes, making errors feel invisible.
* **Common issues:** Beginners frequently encounter missing data, silent failures, and promises that never resolve (often due to a missing `return`).

### Debugging `fetch()` & Promises

* **Log early:** Always log the raw `response` object before converting or using the payload.
* **Inspect the Network tab:** Use browser DevTools to verify file paths, request statuses, and server response codes.
* **Return promises:** Always return promises inside functions to enable proper promise chaining.
```js 
fetch("data.json")
.then(response => {
  console.log(response);
  return response.json();
})
.then(data => console.log(data));
```

### Debugging `async` / `await`

* **Readability:** `async`/`await` simplifies syntax, but operations remain asynchronous.
* **Breakpoints:** Set breakpoints directly on `await` lines to step through execution as you would with synchronous code.
```js 
async function loadData() {
  let response = await fetch("data.json");
  let data = await response.json();
  console.log(data);
}

loadData();
```

### Handling Errors

* **Explicit handling:** Catch errors explicitly to prevent them from failing silently.
* **Try...Catch:** Wrap `await` calls inside `try...catch` blocks to capture and log network or parsing failures.

### Async Debugging Checklist

1. Check the console for explicit error messages.
2. Inspect the Network tab for failed HTTP requests or bad paths.
3. Log raw responses before attempting to process data.
4. Use `try...catch` blocks inside `async` functions.
5. Place breakpoints on `await` lines to trace flow.

---

# JavaScript Performance

### Optimize Loops

* **Cache array length:** Store array length in a variable outside the loop (e.g., `let l = arr.length`) so it isn't repeatedly calculated during each iteration.
* **Minimize loop statements:** Move any static statements or assignments outside the loop body.

### Minimize DOM Operations

* **Cache DOM references:** Store accessed DOM elements in local variables if they are needed multiple times to avoid repeated, slow DOM lookups.
* **Keep DOM size small:** Reduce the total number of HTML elements to improve overall page load, rendering speeds, and search query efficiency.

### Code & Execution Cleanup

* **Avoid unnecessary variables:** Eliminate temporary variables if their values do not need to be saved or reused elsewhere.
* **Do not use `with`:** Avoid the `with` keyword, as it slows execution speed, clutters scope, and is prohibited in strict mode.

### Defer Script Loading

* **Place scripts at the bottom:** Move `<script>` tags to the end of the `<body>` so script downloading does not block parallel asset downloads, HTML parsing, or page rendering.
* **Use `defer` or dynamic loading:** Use the `defer="true"` attribute on external scripts to execute them after parsing, or dynamically inject scripts after the page has loaded.