import Vue from "vue";
import App from "./App.vue";
// 导入模块
import VueParticles from "vue-particles";
import VueRouter from "vue-router";
import router from "./router/router.js";

// 注册
Vue.use(VueRouter);
Vue.use(VueParticles);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router, // 注入路由对象
}).$mount("#app");
