import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/permission'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import xbutton from '@/components/x-button'
import '@/style/index.scss'

const app = createApp(App)
app
    .use(store)
    .use(ElementPlus)
    .use(router)
    .component('x-button', xbutton)
    .mount('#app')

