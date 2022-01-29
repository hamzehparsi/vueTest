import { createApp } from 'vue'
import App from './App.vue'

import store from './store/index'
import router from './router'

import './index.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
app.use(store)
