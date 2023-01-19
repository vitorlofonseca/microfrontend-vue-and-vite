<template>
  <div>
    <Timeline :items="timelineItems"></Timeline>
  </div>
</template>

<script lang="ts" setup>
import { Timeline } from "pigeon-components-library";

const timelineItems = [
  {
    content: "Package received",
    timestamp: "2018-04-15",
  },
  {
    content: "Package accepted",
    timestamp: "2018-04-13",
  },
  {
    content: "In transit",
    timestamp: "2018-04-11",
  },
  {
    content: "Delivering",
    timestamp: "2018-05-11",
  },
  {
    content: "Delivered",
    timestamp: "2018-06-11",
  },
];
</script>

<style lang="scss" scoped></style>
