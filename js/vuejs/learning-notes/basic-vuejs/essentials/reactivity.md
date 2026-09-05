# Reactivity

## Declaring Reactive State

`ref()`

```js
import { ref } from 'vue';

const count = ref(0);
```

`ref()` takes the argument and returns it wrapped within a ref object with a `.value` property
```js
const count = ref(0);

console.log(count) // { value : 0 }
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```

To access refs in a componenet's template `Component.vue`, declare and return them from a `component.ts` componenet's `setup()` function: 
`component.js`
```Javascript
import { ref } from 'vue';

export default {
    setup() {
        const count = ref(0);

        function increment() {
            count.value++
        }

        return {
            count,
            increment
        }
    }
}
```

`Component.vue`
```html
<div>{{ count }}</div>

<button @click="increment">
    {{ count }}
</button>
```

> refs are automatically unwrapped when used inside templates

You can also mutate a ref directly in the even handler
```html
<button @click="count++">
    {{ count }}
</button>
```

---

`<script setup>`

Creating `component.ts` manually can be a bit verbose. Luckily, it can be avoided by creating Single-File Components (SFC). 
You can just declare the `JS` or `TS` functions in `<script setup>` tags.
```html
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>
</template>
```

---

`reactive()`

Unlike a `ref` which wraps the inner value in a special object, `reactive()` makes an object itself reactive.
* `reactive()` deals with objects.
* `ref()` deals with singular values.

```html
<script setup>
import { reactive } from 'vue';

const some_object = { count : 0 }
const state = reactive(some_object)
</script>

<button @click="state.count++">
    {{ state.count }}
</button>
```

`reactive()` creates a proxy of the orginal object.
Only the proxy is reactive - mutating the original object will not trigger updates. 
Therefore, the best practice when working with Vue's reactivity system is to exclusively use the proxied versions of your state.

### `reactive()` limitations
* Only works with object types (objects, arrays, and collection types such as `Map` and `Set`).
* Replacing a reative object cuts the connection to the original object and references a new one
```js
let state = reactive({ count: 0 })

// the above reference ({ count: 0 }) is no longer being tracked
// (reactivity connection is lost!)
state = reactive({ count: 1 })
```
* when we destructure a reactive object's primitive type property into local variables, or when we pass that property into a function, we will lose the reactivity connection
```js
const state = reactive({ count: 0 })

// count is disconnected from state.count when destructured.
let { count } = state
// does not affect original state
count++

// the function receives a plain number and
// won't be able to track changes to state.count
// we have to pass the entire object in to retain reactivity
callSomeFunction(state.count)
```