import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueMapboxTs from "vue-mapbox-ts";

const app = createApp(App)

app.use(VueMapboxTs).use(router).mount('#app')

// createApp(App).mount('#app')
