Vue applications start with 

```js
import { createApp } from 'vue';

const app = createApp({
    /* root component options */
});
```
> The `Root Component` is the top-level component that acts as the entry point of the application. It acts as the *parent* contianer that holds, organizes, and manages all other smaller components. 
We are passing the root component into the `createApp` function (usually `App.vue`)
```js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
```

After an application instance has been created you need to mount it.
The `.mount()` method should always be called after all app configurations and asset registrations are done.
The `.mount()` method is like plugging a fully assembled appliance into an outlet—it connects your finished Vue code to a specific spot in your HTML file so it actually appears on the screen.
```html
 <!-- DOM element with id app --->
 <!-- this is in your index.html --->
 <div id="app"></div>
```
```js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// #app refers to the id of the div in the inner.html file
app.mount('#app')
```

Defining error handlers
 * Create and modify `./views/Error.vue`
 * Create and modify `router/index.ts`

`router/index.ts`
```js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorView from '../views/Error.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/error', name: 'Error', component: ErrorView }
  ]
})

export default router
```

`index.ts`
```js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'

const app = createApp(App);

app.use(router)

app.config.errorHandler = (err, instance, info) => {
    console.error('Captured Global Error: ', err)
    console.log('Error Details: ', info)

    if (router.currentRoute.value.name !== 'Error') {
        router.push({ name : 'Error' })
    }
}

app.mount('#app')
```