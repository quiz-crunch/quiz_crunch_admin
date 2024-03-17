import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import {Icon} from '@iconify/vue';
import './public.scss'
import './style.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.component('Icon', Icon)

app.mount('#app')
