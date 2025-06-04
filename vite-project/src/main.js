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

import axios from "axios";
axios({
    method: 'get',
    url: 'http://localhost:3000/',
})
    .then((response) => {
        console.log(response);
    });

const ws = new WebSocket('ws://localhost:8080')
ws.onopen = (ws) => {
    console.log(`Connected to server: ${ws}`)
}
ws.onmessage = (data) => {
    console.log(`Message from server: ${data}`)
}
