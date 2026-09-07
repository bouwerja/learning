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

Here is a concise summary of the selected text:

### Overview of JavaScript Conditionals

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
