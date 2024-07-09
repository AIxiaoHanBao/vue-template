import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import piniaPersist from 'pinia-plugin-persistedstate';
import { createPinia } from 'pinia';


const pinia = createPinia();
pinia.use(piniaPersist);
// @ts-ignore
createApp(App)
    .use(router)
    .use(ElementPlus)
    .use(pinia)


    .mount('#app')
