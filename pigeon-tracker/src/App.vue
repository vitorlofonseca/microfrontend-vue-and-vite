<script setup lang="ts">
import { ref } from "vue";

const shipmentId = ref();

const getShipmentIdFromUrl = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  shipmentId.value = urlParams.get("shipmentId");
};

getShipmentIdFromUrl();
</script>

<template>
  <div></div>
  <h2>
    {{ shipmentId ? `Tracking of ${shipmentId}` : `Search for a shipment` }}
  </h2>
</template>
