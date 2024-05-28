import { createApp } from 'vue';
import PrimeVue from 'primevue/config'
import './style.css'
import App from './App.vue'
import router from './routes/router'






createApp(App).use(router).use(PrimeVue).mount('#app')
