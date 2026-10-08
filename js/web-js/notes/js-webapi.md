# JavaScript Window BOM (Browser Object Model)

All global JavaScript objects, functions, and variables **automatically** become members of the `window` object.

```JavaScript
window.document.getElementById("header");
```
is the same as 
```js
document.getElementById("header");
```

## Window Size

Two properties can be used to determine the size of a window.

Both return the sizes in pixels:
- `window.innerHeight` 
- `window.innerWidth`

*Other window methods*
- `window.open()` - open a new window
- `window.close()` - close the current window
- `window.moveTo()` - move the current window
- `window.resizeTo()` - resize the current window

## Window Screen

The `window.screen` object can be written without the window prefix.
- `screen.widht` - returns the width of the visitor's screen
- `screen.height` - returns the height of the visitor's screen
- `screen.availWidth`
- `screen.availHeight`

## Window location

The `window.location` object can be used to get the current page address (URL) and to redirect the browser to a new page.

The `window.location` can be written without the window prefix.
- `window.location.href` returns the href (URL) of the current page
- `window.location.hostname` returns the domain name of the web host
- `window.location.pathname` returns the path and filename of the current page
- `window.location.protocol` returns the web protocol used (http: or https:)
- `window.location.assign()` loads a new document

## JavaScript History API

The History API is accessed with the `window.history` object.

The `history` object can be written without the window prefix.

The most common methods are:
- `history.back()` - same as clicking back in the browser
- `history.forward()` - same as clicking forward in the browser

## JavaScript Window Navigator

The `navigator` object contains information about the visitor's browser.

- `navigator.cookieEnabled` - returns true if cookies are enabled.
- `navigator.language` - browser's language.
- `navigator.onLine` - true if the browser is online

## JavaScript Popup Boxes

JavaScript has 3 kinds of popup boxes:
1. Alert box `alert("sometext");`
2. Confirm box `confirm("sometext");`
3. Prompt box `prompt("sometext", "defaultText");`

## JavaScript Cookies

Cookies are data, stored in small text files, on your computer.

Cookies solve the problem "how to remember information about the user."

```js
// cookie can be created 
document.cookie = "username=John Doe";

// expiry date || By default cookies are deleted when the browser is closed
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

// With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

// read a cookie
let x = document.cookie;

// change a cookie the same way that it is created.
document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

// delete a cookie by setting the expiry parameter to the past
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```

### Set cookie function
```js
function setCookie(cname, cvalue, exdays) {  
  const d = new Date();  
  d.setTime(d.getTime() + (exdays*24*60*60*1000));  
  let expires = "expires="+ d.toUTCString();  
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";  
}
```

### Get cookie
```js
function getCookie(cname) {  
  let name = cname + "=";  
  let decodedCookie = decodeURIComponent(document.cookie);  
  let ca = decodedCookie.split(';');  
  for(let i = 0; i <ca.length; i++) {  
    let c = ca[i];  
    while (c.charAt(0) == ' ') {  
      c = c.substring(1);  
    }  
    if (c.indexOf(name) == 0) {  
      return c.substring(name.length, c.length);  
    }  
  }  
  return "";  
}
```

### Check a cookie

We create a function that checks if a cookie is set.
```js
function checkCookie() {  
  let username = getCookie("username");  
  if (username != "") {  
   alert("Welcome again " + username);  
  } else {  
    username = prompt("Please enter your name:", "");  
    if (username != "" && username != null) {  
      setCookie("username", username, 365);  
    }  
  }  
}
```

---

# JavaScript Fetch API

JavaScript Fetch API is used to make asynchronous network requests to web servers.