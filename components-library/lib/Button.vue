<script setup lang="ts">
import { ElButton } from "element-plus";
import { EpPropMergeType } from "element-plus/es/utils";

type Props = {
  type: EpPropMergeType<
    StringConstructor,
    | ""
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "info"
    | "danger"
    | "text",
    unknown
  >;
};

const props = defineProps<Props>();
</script>

<template>
  <el-button :type="props.type"><slot /></el-button>
</template>

<style scoped></style>
