import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../pages/LoginPage/index.vue";

Vue.use(VueRouter);
const asyncRoutes = [
  {
    path: "/",
    name: "/",
    component: () => import(`../pages/PicPage/index.vue`),
    meta: {
      title: "画廊",
      icon: "el-icon-picture-outline",
    },
  },
  {
    path: "/tool",
    name: "tool",
    component: () => import(`../pages/ToolPage/index.vue`),
    meta: {
      title: "工具导航",
      icon: "el-icon-suitcase-1",
    },
  },
];
const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
];

const router = new VueRouter({
  routes,
});
let ifAddRoutes = false;
// 添加路由守卫--导航守卫
// 作用是通过判断来决定当前的路由跳转到底能不能进行
// 这种守卫，只要进行路由的跳转就会自动的触发，不能人为调用
router.beforeEach(async (to, from, next) => {
  // to:目标路由
  // from:源路由
  // next:下一步的操作，就是用户当前需要进行的操作
  // 判断当前用户是否登陆，如果登陆了则可以跳转，否则重定向到登陆页
  // 获取用户登陆之后的token，进行token的判断
  if (to.path !== "/login") {
    // 非登录页面验证是否存在token
    let token = localStorage.getItem("token");
    if (token) {
      if (ifAddRoutes) {
        next();
      } else {
        ifAddRoutes = true;
        const routes = await $get("/api/getRoutes");
        routes.forEach((name) => {
          router.addRoute(asyncRoutes.find((item) => item.name === name));
        });
        next({ ...to, replace: true });
      }
    } else {
      // 说明没有登陆，则重定向到登陆页
      next({ name: "login", replace: true });
    }
  } else {
    next();
  }
});
export default router;
