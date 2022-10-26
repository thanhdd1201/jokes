import { createRouter, createWebHistory } from "vue-router";
import { ScreenLayout } from "./model/screenLayout";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: { layout: ScreenLayout.DEFAULT_LAYOUT },
    },
    {
      path: "/detail/:id",
      name: "detail",
      meta: { layout: ScreenLayout.DEFAULT_LAYOUT },
      props: true,
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
