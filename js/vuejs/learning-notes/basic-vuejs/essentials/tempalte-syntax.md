# Introduction

## Text Interpolation

```HTML
<span>Message: {{ msg }}</span>
```

The mustache tag `{{ msg }}` will be replace with the value of the `msg` property.
It will also be updated whenever the `msg` property changes.

## Output Raw HTML
```html
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

**OUTPUT**
```text
Using text interpolation: <span style="color: red">This should be red.</span>
Using v-html directive: This should be red.
```

## Attribute Bindings
```html
<div v-bind:id="dynamicId"></div>
```
If the bound value is `null` or `undefined`, the attribute is removed from the rendered element.
Shorthand Syntax: `v-bind:id` can be shortened to `:id`
If the attribute name matches the variable name, it can be further shortened (e.g., `:id` instead of `:id="id"`).

```html
<button :disabled="isButtonDisabled">Button</button>
```
Attributes like `:disabled` are included if the bound value is truthy or an empty string, and omitted if falsy.

## Calling Functions
```html
<time :title="toTitleDate(date)" :datetime="date">
  {{ formatDate(date) }}
</time>
```

## Restricted Globals
Template expressions are sandboxed and only have access to a restricted list of globals. The list exposes commonly used built-in globals such as `Math` and `Date`.

Globals not explicitly included in the list, for example user-attached properties on `window`, will not be accessible in template expressions. You can, however, explicitly define additional globals for all Vue expressions by adding them to `app.config.globalProperties`.

# Directives

[List of Vue directives](https://vuejs.org/api/built-in-directives.html)

Directive attribute values are expected to be single JavaScript expressions (with the exception of `v-for`, `v-on` and `v-slot`)

```html
<p v-if="seen">Now you see me</p>
```

## Arguments
Some directives can take an "argument", denoted by the colon after the directive name.
```html
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>
```

```html
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>
```

## Dynamic Arguments
Allows you to use a JavaScript expression inside square brackets `[]` to dynamically determine an attribute or event name in Vue directives.
```html
<a v-bind:[attributeName]="some_url"> ... </a>

<!-- shorthand -->
<a :[attributeName]="url"> ... </a>
```
If the component instance has a data property name `href` then this binding will be equivalent to `v-bind:href`

```html
<a v-on:[eventName]="doSomething"> ... </a>

<!-- shorthand -->
<a @[eventName]="doSomething"> ... </a>
```
When `eventName`'s value is `"focus"`, `v-on:[eventName]` will be equivalent to `v-on:focus`.

Dynamic arguments are expected to evaluate to a string, with the exception of `null`. The special value `null` can be used to explicitly remove the binding. Any other non-string value will trigger a **warning**.

## Modifiers
Modifiers are special postfixes denoted by a dot, which indicate that a directive should be bound in some special way. 
For example, the `.prevent` modifier tells the `v-on` directive to call `event.preventDefault()` on the triggered event
```html
<form @submit.prevent="onSubmit">...</form>
```