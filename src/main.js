import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as bootstrap from 'bootstrap'  
import {router } from `./router`

createApp(App).use(router).mount('#app');
