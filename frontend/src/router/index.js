import Vue from "vue";
import VueRouter from "vue-router";
import MemoList from "../views/MemoList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MemoList,
  },
  {
    path: "/writeform",
    name: "writeform",
    component: function () {
      return import("../views/WriteForm.vue");
    },
  },
  {
    path: "/list/:id",
    name: "list",
    component: function () {
      return import("../views/PageView.vue");
    },
  },

  {
    // 수정페이지 추가
    path: "/updateform/:id",
    component: function () {
      return import("../views/UpdateForm.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
