import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui"; // 引入组件
import "element-ui/lib/theme-chalk/index.css"; // 引入样式

Vue.config.productionTip = false;
Vue.use(ElementUI); // 全局引入
new Vue({
  render: (h) => h(App),
}).$mount("#app");
