import './assets/main.css'
// Components definition
import './components/lit/molecules/SeliaDrawer/SeliaDrawer.js'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
