import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/PicPage/index.vue";
import ToolPage from "../pages/ToolPage/index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/tool",
    name: "tool",
    component: ToolPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
