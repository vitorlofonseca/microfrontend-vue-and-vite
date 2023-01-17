<template>
  <div class="shipmentsContainer">
    <h2>Shipments</h2>

    <ShipmentsTable />
  </div>
</template>

<script lang="ts" setup>
import ShipmentsTable from "@/components/ShipmentsTable/ShipmentsTable.vue";
import { loadShipments } from "@/services/shipment";

await loadShipments();
</script>

<style lang="scss" scoped>
.shipmentsContainer {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
