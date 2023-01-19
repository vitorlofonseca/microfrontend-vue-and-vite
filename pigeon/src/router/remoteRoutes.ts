import type { Router } from "vue-router";

export const listenRemoteRoutes = (router: Router) => {
  document.addEventListener("remoteNavigateTo", ((event: CustomEvent) => {
    router.push(event.detail);
  }) as EventListener);
};
