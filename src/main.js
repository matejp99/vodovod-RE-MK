// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './rounter/index.js'

import './index.css' // if using Tailwind

const app = createApp(App)
app.use(router)
app.mount('#app')
