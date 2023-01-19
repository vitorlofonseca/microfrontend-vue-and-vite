export const loadShipments = async () => {
  if (sessionStorage.getItem("shipmentsData")) {
    return JSON.parse(sessionStorage.getItem("shipmentsData") ?? "[]");
  }

  const shipmentsRequest = await fetch(
    "https://raw.githubusercontent.com/vitorlofonseca/microfrontend-and-third-components-vue/main/pigeon-shipments/src/mocks/shipments.json"
  );

  const shipmentsData = await shipmentsRequest.json();

  sessionStorage.setItem("shipmentsData", JSON.stringify(shipmentsData));

  return shipmentsData;
};
