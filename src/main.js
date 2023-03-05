import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui"; // 引入组件
import "element-ui/lib/theme-chalk/index.css"; // 引入样式
import router from "./router";
const AV = require("leancloud-storage");
AV.init({
  appId: "7H4TC8BG7PKkt9zb25kKXxQg-gzGzoHsz",
  appKey: "WUvMpqhSaTyG6DLeCE5vJtI5",
  serverURL: "https://pc-api.windliang.wang",
});
window.$AV = AV;
Vue.config.productionTip = false;
Vue.use(ElementUI); // 全局引入
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
