<template>
  <div class="shipmentData">
    <ShipmentTracking />
    <ShipmentData :shipment="props.shipment" />
  </div>
</template>

<script lang="ts" setup>
import type { Shipment } from "./Shipment";
import ShipmentData from "./ShipmentData.vue";
import ShipmentTracking from "./ShipmentTracking.vue";

const props = defineProps<{
  shipment: Shipment;
}>();
</script>

<style lang="scss" scoped>
.shipmentData {
  display: flex;
  width: 100%;
  gap: 82px;
  margin-top: 30px;
  max-width: 1000px;
}
</style>
