export const listenRemoteRoutes = () => {
  document.addEventListener("remoteNavigateTo", ((event: CustomEvent) => {
    console.log(event.detail);
  }) as EventListener);
};
