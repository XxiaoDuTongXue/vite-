import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
// 引入组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入自定义插件 注册整个项目全局组件
import glabalcomponents from "@/components/index"
// svg插件需要配置代码
import 'virtual:svg-icons-register'
// 引入模板全局样式
import '@/style/index.scss'
import axios from 'axios'
// 引入路由
import router from './router'
//@ts-ignore
import  zhCn  from 'element-plus/es/locale/lang/zh-cn.mjs'
const app = createApp(App)
// 安装element-plus插件
app.use(ElementPlus,{
    locale:zhCn
});
// console.log(import.meta.env);
app.use(glabalcomponents)
app.use(router)

// 挂载
app.mount('#app')


