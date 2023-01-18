import { v4 as uuidv4 } from "uuid";

export const loadShipments = async () => {
  const shipmentsRequest = await fetch(
    "https://raw.githubusercontent.com/vitorlofonseca/microfrontend-and-third-components-vue/67bc8dda18a1e3f88542f7c0e27059c11ea0decf/pigeon-shipments/src/mocks/shipments.json"
  );

  let shipmentsData = await shipmentsRequest.json();

  shipmentsData = shipmentsData.map((shipment: any) => {
    shipment["shipmentId"] = uuidv4();
    return shipment;
  });

  window.sessionStorage.setItem("shipmentsData", JSON.stringify(shipmentsData));
};
