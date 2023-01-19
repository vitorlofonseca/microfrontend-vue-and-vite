export const loadShipments = async () => {
  if (sessionStorage.getItem("shipmentsData")) {
    return JSON.parse(sessionStorage.getItem("shipmentsData"));
  }

  const shipmentsRequest = await fetch(
    "https://raw.githubusercontent.com/vitorlofonseca/microfrontend-and-third-components-vue/67bc8dda18a1e3f88542f7c0e27059c11ea0decf/pigeon-shipments/src/mocks/shipments.json"
  );

  const shipmentsData = await shipmentsRequest.json();

  sessionStorage.setItem("shipmentsData", JSON.stringify(shipmentsData));

  return shipmentsData;
};
