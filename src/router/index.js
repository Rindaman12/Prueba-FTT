import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "inicio" */ "../views/Home.vue"),
  },
  {
    path: "/sobre",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "sobre" */ "../views/About.vue"),
  },

  {
    path: "/servicios",
    name: "servicios",
    component: () =>
      import(/* webpackChunkName: "servicios" */ "../views/servicios.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
