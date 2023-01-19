<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Input } from "pigeon-components-library";
import ShipmentTemplate from "./components/Shipment/Shipment.vue";
import { loadShipments } from "./services/shipment";
import "pigeon-components-library/dist/style.css";
import type { Shipment } from "./components/Shipment/Shipment";

const shipmentId = ref();
const search = ref("");
const shipment = ref();

onMounted(async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  shipmentId.value = urlParams.get("shipmentId");

  if (shipmentId.value !== undefined) {
    const shipments = await loadShipments();

    shipment.value = shipments.filter(
      (s: Shipment) => s.shipmentId === shipmentId.value
    )[0];
  }
});
</script>

<template>
  <div class="header">
    <h2>
      {{ shipmentId ? `Tracking of ${shipmentId}` : `Search for a shipment` }}
    </h2>

    <Input
      v-model="search"
      class="searchBox"
      placeholder="Search for a shipment here"
    ></Input>
  </div>

  <ShipmentTemplate v-if="shipment" :shipment="shipment" />
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .searchBox {
    max-width: 200px;
  }
}
</style>
