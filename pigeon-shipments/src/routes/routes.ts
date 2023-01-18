export const navigateTo = (path: string) => {
  const evt = new CustomEvent("remoteNavigateTo", { detail: path });
  document.dispatchEvent(evt);
};
