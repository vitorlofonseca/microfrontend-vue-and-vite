<template>
  <div class="shipmentActions">
    <Button type="primary" @click="onClick">Open shipment</Button>
  </div>
</template>

<script lang="ts" setup>
import { Button } from "pigeon-components-library";

const props = defineProps({
  params: Object,
});

const onClick = () => console.log(props.params?.data);
</script>

<style lang="scss" scoped>
.shipmentActions {
  display: flex;
  height: 100%;
  align-items: center;
  gap: 10px;
}
</style>
