<script setup lang="ts">
import Button from "../lib/Button/Button.vue";
import Table from "../lib/Table/Table.vue";
import Input from "../lib/Input/Input.vue";
import { ref } from "vue";
import Timeline from "../lib/Timeline/Timeline.vue";

const inputTest = ref();

const timelineItems = [
  {
    content: "Event start",
    timestamp: "2018-04-15",
  },
  {
    content: "Approved",
    timestamp: "2018-04-13",
  },
  {
    content: "Success",
    timestamp: "2018-04-11",
  },
];
</script>

<template>
  <Button type="primary">Click here</Button>
  <Table></Table>
  <Input v-model="inputTest" placeholder="Input test"></Input>
  <Timeline :items="timelineItems"></Timeline>
</template>
