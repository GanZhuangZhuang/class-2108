import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入全局样式
import './styles/index.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import installIcons from './icons/index.js'

const app = createApp(App)
installIcons(app)

app.use(ElementPlus).use(store).use(router).mount('#app')
