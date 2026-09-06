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