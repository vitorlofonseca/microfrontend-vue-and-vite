export const navigateTo = (route: Object) => {
  const evt = new CustomEvent("remoteNavigateTo", { detail: route });
  document.dispatchEvent(evt);
};
