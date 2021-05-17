import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
    },
    {
        path: "/Jobs",
        name: "Jobs",
        component: () => import(/* webpackChunkName: "about" */ "../views/Jobs.vue"),
    },
    {
        path: "/CreateJob",
        name: "CreateJob",
        component: () => import(/* webpackChunkName: "about" */ "../views/CreateJob.vue"),
    },
    {
        path: "/Managers",
        name: "Managers",
        component: () => import(/* webpackChunkName: "about" */ "../views/Managers.vue"),
    },
    {
        path: "/Models",
        name: "Models",
        component: () => import(/* webpackChunkName: "about" */ "../views/Models.vue"),
    },
    {
        path: "/Expenses",
        name: "Expenses",
        component: () => import(/* webpackChunkName: "about" */ "../views/Expenses.vue"),
    },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
