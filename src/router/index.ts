import {createRouter, createWebHashHistory } from 'vue-router'
import mainRouter from "./mainRouter.ts";




const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    // history: createWebHashHistory(process.env.BASE_URL),
    history: createWebHashHistory(),
    routes: [...mainRouter]
})
export default router


