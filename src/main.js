import { createApp } from 'vue'
import { createPinia } from 'pinia'
import TheHeader from './components/globalComponents/TheHeader.vue'
import ContainerSlot from './components/slots/ContainerSlot.vue'
import TheLoader from './components/globalComponents/TheLoader.vue'

import App from './App.vue'
import router from './router'

import './assets/main.scss'
const app = createApp(App)
app.component('TheHeader', TheHeader)
app.component('ContainerSlot', ContainerSlot)
app.component('TheLoader', TheLoader)

app.use(createPinia())
app.use(router)

app.mount('#app')
