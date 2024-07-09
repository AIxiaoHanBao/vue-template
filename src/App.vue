<script setup lang="ts">
import mainRouter from "./router/mainRouter.ts";
import { useUserStore } from "./store/modules/UserStore.ts";
import {onMounted} from "vue";
import router from "@/router";
import checkAccess from "@/access/checkAccess.ts";
onMounted(()=>{
  userToken.setToken("8848")
})

// 路由权限校验
router.beforeEach(async (to, from, next)=>{
   if (checkAccess(JSON.parse(localStorage?.getItem("token")??"")?.token??""),to.meta.needAccess){
     next()
   }
})

const userToken = useUserStore()

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
<!--遍历路由-->
  <div  style="display: flex;">
    <div style="margin-right: 10px" v-for="item in mainRouter" :key="item.path">
      <router-link  :to="item.path">{{item.path}}</router-link>
    </div>
  </div>

  <router-view></router-view>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
