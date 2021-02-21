import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";
import Blog from "../views/blog.vue";
import ArticleDetail from "../views/articleDetail.vue";
import Category from "../views/category.vue";
import Archive from "../views/archive.vue";
import LeaveMessage from "../views/leaveMessage.vue";

// 初始化 VueRouter 插件
Vue.use(VueRouter);

// 创建路由
export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/article-detail",
      name: "detail",
      component: ArticleDetail,
    },
    {
      path: "/category",
      name: "category",
      component: Category,
    },
    {
      path: "/archive",
      name: "archive",
      component: Archive,
    },
    {
      path: "/leave-message",
      name: "leave_message",
      component: LeaveMessage,
    },
  ],
});
