# Setup a Vue.js app with Vuetify

## Step 1: Create a Vue Project

Created vue-vuetify-tailwindcss-guide.md successfully.

```bash
npm create vue@latest my-app
```

Follow the interactive prompts to configure your project features (TypeScript, Pinia, Vue Router, etc.). Once completed, navigate into your project folder and install dependencies:

```bash
cd my-app
npm install
```

## Step 2: Install Vuetify and Tailwind CSS

Install Vuetify, Material Design Icons, Tailwind CSS, and the @tailwindcss/vite plugin:
```bash
npm install vuetify @mdi/font
npm install -D tailwindcss @tailwindcss/vite
```

## Step 3: Configure Vite Plugins

Update your vite.config.js (or vite.config.ts) to include the Vue and Tailwind plugins:
```typeScript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

## Step 4: Initialize Vuetify Plugin

Create a new plugin file at src/plugins/vuetify.js (or src/plugins/vuetify.ts):
```typeScript
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const vuetify = createVuetify({
  components,
  directives,
})
```

## Step 5: Import Tailwind and Register Plugins in main.js

Add the Tailwind import to your global stylesheet at `src/assets/main.css`:
```CSS
@import "tailwindcss";
```

Next, update `src/main.js` (or `src/main.ts`) to register Vuetify and import your CSS:
```TypeScript

import { createApp } from 'vue'
import App from './App.vue'
import { vuetify } from './plugins/vuetify'
import './assets/main.css'

const app = createApp(App)

app.use(vuetify)
app.mount('#app')
```

## Step 6: Test the Setup

Replace the content of src/App.vue to confirm both Tailwind utilities and Vuetify components are functioning:
```HTML

<template>
  <v-app>
    <v-main class="p-8 bg-slate-100 flex flex-col items-center justify-center min-h-screen">
      <div class="p-6 bg-white rounded-xl shadow-lg border border-slate-200 text-center max-w-md">
        <h1 class="text-2xl font-bold text-slate-800 mb-2">
          Vue + Vuetify + Tailwind
        </h1>
        <p class="text-slate-600 mb-4">
          Utility classes and component frameworks working together!
        </p>

        <v-btn color="primary" variant="elevated" icon="mdi-thumb-up">
          <v-icon>mdi-thumb-up</v-icon>
        </v-btn>
      </div>
    </v-main>
  </v-app>
</template>
```

Start the development server:
```Bash

npm run dev
```

## Important Notes

* CSS Preflight Conflicts: Both Vuetify and Tailwind include base CSS resets. If you notice styling overrides or unexpected component resets, check the import order in src/main.js or configure explicit CSS layer ordering.

* Icons: Material Design Icons (@mdi/font) are imported in the Vuetify plugin file to enable iconography inside Vuetify elements (v-icon).