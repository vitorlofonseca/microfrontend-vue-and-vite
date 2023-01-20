<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Input, Button } from "pigeon-components-library";
import ShipmentTemplate from "./components/Shipment/Shipment.vue";
import { loadShipments } from "./services/shipment";
import "pigeon-components-library/dist/style.css";
import type { Shipment } from "./components/Shipment/Shipment";

const shipmentId = ref();
const search = ref("");
const shipment = ref();
const shipments = ref();

const loadShipmentById = (id: string) => {
  shipmentId.value = id;
  shipment.value = shipments.value.filter(
    (s: Shipment) => s.shipmentId === id
  )[0];
};

onMounted(async () => {
  shipments.value = await loadShipments();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  shipmentId.value = urlParams.get("shipmentId");

  if (shipmentId.value !== undefined) {
    shipment.value = shipments.value.filter(
      (s: Shipment) => s.shipmentId === shipmentId.value
    )[0];
  }
});

const openShipment = () => {
  const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?shipmentId=${search.value}`;
  window.history.pushState({ path: newurl }, "", newurl);
  loadShipmentById(search.value);
};
</script>

<template>
  <div class="shipmentContainer">
    <div class="header">
      <h2>
        {{
          shipment
            ? `Tracking of ${shipment.shipmentId}`
            : `Search for a shipment`
        }}
      </h2>

      <div class="searchBox">
        <Input
          v-model="search"
          class="searchInput"
          placeholder="Search for a shipment here"
        ></Input>
        <Button type="primary" @click="openShipment">Search</Button>
      </div>
    </div>

    <ShipmentTemplate v-if="shipment" :shipment="shipment" />

    <div v-if="shipmentId && !shipment" class="shipmentNotFound">
      <h3>Shipment not found</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shipmentContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.header {
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .searchBox {
    display: flex;
    gap: 10px;
    .searchInput {
      max-width: 200px;
    }
  }

  .shipmentNotFound {
    text-align: center;
  }
}
</style>
