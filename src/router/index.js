import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: HomeView,
      },
    },
    {
      path: "/networked-media",
      name: "networked media",
      component: () => import("../views/NetworkedMediaView.vue"),
    },
    {
      path: "/links",
      name: "links",
      component: () => import("../views/LinkView.vue"),
    },
  ],
});

export default router;
