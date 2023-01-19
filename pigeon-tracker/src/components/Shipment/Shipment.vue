<template>
  <div class="shipmentContainer">
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
.shipmentContainer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;
}
</style>
