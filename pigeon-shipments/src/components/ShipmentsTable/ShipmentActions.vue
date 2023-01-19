<template>
  <div class="shipmentActions">
    <Button type="primary" @click="onClick">Open tracker</Button>
  </div>
</template>

<script lang="ts" setup>
import { Button } from "pigeon-components-library";
import { navigateTo } from "@/routes/routes";

const props = defineProps({
  params: Object,
});

const onClick = () => {
  navigateTo({
    path: `/tracker`,
    query: { shipmentId: props.params?.data.shipmentId },
  });
};
</script>

<style lang="scss" scoped>
.shipmentActions {
  display: flex;
  height: 100%;
  align-items: center;
  gap: 10px;
}
</style>
