import { createApp } from 'vue'
import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
