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
