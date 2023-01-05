<script setup lang="ts">
import { ElButton } from "element-plus";
</script>

<template>
  <el-button v-bind="$props"><slot /></el-button>
</template>

<style scoped></style>
