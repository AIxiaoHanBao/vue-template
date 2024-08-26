# 模板说明
## module参数
node版本 16+  

UI组件库 element-plus 

持久化 pinia

网络请求 axios

路由 vue-router

##  使用说明
1. 权限管理目录access
2. 资源目录assets
3. 组件目录components
4. 页面目录pages
5. 网络请求目录request
6. 路由目录router
7. 全局变量目录store

### 一、权限管理

accessEnum存放的是权限名的枚举

checkAccess是用于检验权限的

- 重点说明checkAccess

```ts
import ACCESS_ENUM from "@/access/accessEnum";




/**
 * 检查权限（判断当前登录用户是否具有某个权限）
 * @param loginUser 当前登录用户
 * @param needAccess 需要有的权限
 * @return boolean 有无权限
 */
const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  // 获取当前登录用户具有的权限（如果没有 loginUser，则表示未登录）
  console.log("权限验证通过")
  return true;
};

export default checkAccess;
```

自行设置条件

App.vue中自行修改

```ts
// 路由权限校验
router.beforeEach(async (to, from, next)=>{
   if (checkAccess(JSON.parse(localStorage?.getItem("token")??"")?.token??""),to.meta.needAccess){
     next()
   }
})
```

### 二、网络请求管理

需要修改的地方

request.ts中请求头设置

```ts
//http request 拦截器
axios.interceptors.request.use(
    config => {
        // 配置请求头
        // @ts-ignore
        config.headers = {
            // 'Content-Type':'application/json;charset=UTF-8',
            "Authorization":localStorage.getItem("$_token")
        };
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
```

使用整合模板的请求示例代码userService.ts

```ts
import { request } from '../request.ts'
export class UserService{
    static async getUserInfo(id:number){
        return await request('/user/info',{id},"POST")
    }
}
```

### 三、路由管理

router/index.ts是存储主要所有路由的，想要自己添加路由在routes中自行添加

```ts
import {createRouter, createWebHashHistory } from 'vue-router'
import mainRouter from "./mainRouter.ts";




const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    // history: createWebHashHistory(process.env.BASE_URL),
    history: createWebHashHistory(),
    routes: [...mainRouter]
})
export default router
```

模板路由创建mainRouter.ts

```ts
import {RouteRecordRaw} from "vue-router";
import Test1 from "../pages/Test1.vue";
import Test2 from "../pages/Test2.vue";
import ACCESS_ENUM from "../access/accessEnum.ts";

const mainRouter: Array<RouteRecordRaw> = [
    {
        name: 'Test1',
        path: '/test1',
        component: Test1,
        meta: {
            needAccess: ACCESS_ENUM.NOT_LOGIN,
        }
    },
    {
        name: 'Test2',
        path: '/text2',
        component: Test2,
        meta: {
            needAccess: ACCESS_ENUM.NOT_LOGIN,
        }
    },
]
export default mainRouter
```

### 四、全局变量管理

UserStore.ts中的模板自行修改













# 更新

## 2024.08.26

添加echarts组件

封装进``src/components/ReEcharts/index.vue``

使用案例页面

``src/pages/Test2.vue``

![image-20240826104204318](http://qiniuyun.aixiaohanbao.uk/image-20240826104204318.png)

如何使用

进入到Echarts官网的示例

[Examples - Apache ECharts](https://echarts.apache.org/examples/zh/index.html)

![image-20240826104405767](http://qiniuyun.aixiaohanbao.uk/image-20240826104405767.png)

随意点击进一个界面

复制option

![image-20240826104446462](http://qiniuyun.aixiaohanbao.uk/image-20240826104446462.png)

在引入中修改

![image-20240826104509846](http://qiniuyun.aixiaohanbao.uk/image-20240826104509846.png)

根据业务要求传入所需数据完成封装



封装博客来自于[vue3里对Echarts进行封装形成公共组件_vue3封装echarts事件怎么处理-CSDN博客](https://blog.csdn.net/A15029296293/article/details/140048019)

