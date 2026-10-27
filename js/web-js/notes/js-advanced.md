
# JS Classes

## Syntax

Use the keyword `class` to create a class.

Always add a method named `constructor()`

```js
class Car {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
}
```
*Think of the constructor as defining the values that a class can accept*

The example above does:
- Creates a class.
- Has two initial properties: "name" and "year".

> Classes are not objects
> Classes are *templates* for JavaScript objects.

## Using a Class

You can use the class to create objects

```js
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2020);
```

> The constructor method is used to initialize object properties.
> If you don't define a constructor method, JavaScript will add an empty constructor method.

## Class Methods

Class methods are created with the same syntax as object methods.

```js
class Car {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
	
	age() {
		const date = new Date();
		return date.getFullYear() - this.year;
	}
}

const myCar = new Car("ford", 2014);
document.getElementById("demo").innerHTML = "My car is " + myCar.age() + " years old.";
```

**You can send parameters to Class methods**
```js
class Car {  
  constructor(name, year) {  
    this.name = name;  
    this.year = year;  
  }  
  age(x) {  
    return x - this.year;  
  }  
}  
  
const date = new Date();  
let year = date.getFullYear();  
  
const myCar = new Car("Ford", 2014);  
document.getElementById("demo").innerHTML= "My car is " + myCar.age(year) + " years old.";
```

---

# Inheritance

To create a class inheritance, use the `extends` keyword.

A class created with a class inheritance inherits all the methods from another class.

```js
class Car {  
  constructor(brand) {  
    this.carname = brand;  
  }  
  present() {  
    return 'I have a ' + this.carname;  
  }  
}  
  
class Model extends Car {  
  constructor(brand, mod) {  
    super(brand);  
    this.model = mod;  
  }  
  show() {  
    return this.present() + ', it is a ' + this.model;  
  }  
}  
  
let myCar = new Model("Ford", "Mustang");  
document.getElementById("demo").innerHTML = myCar.show();
```

*The `super()` method refers to the parent class*
*Calling the `super()` method in the constructor, we call the parent's constructor method and gets access to the parent's properties and methods.*

## Getters and Setters

To add getters and setters in the classes, use the `get` and `set` keywords.

```js
class Car {  
  constructor(brand) {  
    this.carname = brand;  
  }  
  get cnam() {  
    return this.carname;  
  }  
  set cnam(x) {  
    this.carname = x;  
  }  
}  
  
const myCar = new Car("Ford");  
document.getElementById("demo").innerHTML = myCar.cnam; // displays Ford

myCar.cnam = "Volvo";
document.getElementById("demo").innerHTML = myCar.cnam; // displays Volvo
```

---

# Static Methods

```js
class Car {  
  constructor(name) {  
    this.name = name;  
  }  
  static hello() {  
    return "Hello!!";  
  }  
}  
  
const myCar = new Car("Ford");  
  
// You can call 'hello()' on the Car Class:  
document.getElementById("demo").innerHTML = Car.hello();  
  
// But NOT on a Car Object:  
// document.getElementById("demo").innerHTML = myCar.hello();  
// this will raise an error.
```

If you want to use the `myCar` object inside the `static` method, you can send it as a parameter.

```js
class Car {
	constructor(name) {
		this.name = name;
	}
	
	static hello(x) {
		return "Hello " + x.name;
	}
}

const myCar = new Car("Ford");
document.getElementById("demo").innerHTML = Car.hello(myCar);
```