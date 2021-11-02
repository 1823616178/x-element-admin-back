import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/permission'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/style/index.scss'
import '@/assets/index.scss'
import xButton from '@/components/x-button'
import XTabs from '@/components/x-tabs'
import XCard from '@/components/x-card'
import XSelect from '@/components/x-select'
import XInput from '@/components/x-input'
import XPagination from '@/components/x-pagination'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)
app
    .use(store)
    .use(ElementPlus, {
        locale: zhCn,
    })
    .use(router)
    .component('x-tabs', XTabs)
    .component('x-button', xButton)
    .component('x-card', XCard)
    .component('x-select', XSelect)
    .component('x-input', XInput)
    .component('x-pagination', XPagination)
    .mount('#app')

