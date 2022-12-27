<script setup lang="ts">
import { ElButton } from "element-plus";

const onBtnClick = () => console.log("Button was clicked");
</script>

<template>
  <el-button type="success" @click="onBtnClick"><slot /></el-button>
</template>

<style scoped></style>
