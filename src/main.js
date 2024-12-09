import './assets/main.css'
// Components definition
import './components/lit/SeliaDrawer/SeliaDrawer'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
