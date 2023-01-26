import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tracker",
      name: "tracker",
      component: () => import("pigeon_tracker/App"),
      children: [
        {
          path: "/:id",
          name: "trackerWithId",
          component: () => import("pigeon_tracker/App"),
        },
      ],
    },

    {
      path: "/shipments",
      name: "shipments",
      component: () => import("pigeon_shipments/App"),
    },
  ],
});

export default router;
