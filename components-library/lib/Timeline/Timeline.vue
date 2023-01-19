<script setup lang="ts">
import { ElTimeline, ElTimelineItem } from "element-plus";
import { TimelineItem } from "./TimelineItem";

const props = defineProps<{
  items: Array<TimelineItem>;
}>();
</script>

<template>
  <el-timeline>
    <el-timeline-item
      v-for="(item, index) in props.items"
      :key="index"
      :timestamp="item.timestamp"
      v-bind="$props"
    >
      {{ item.content }}
    </el-timeline-item>
  </el-timeline>
</template>

<style scoped></style>
