<template>
  <el-button type="primary" @click="onClickButton"><slot /></el-button>
</template>

<script lang="ts" setup>
import { ElButton } from "element-plus";

const onClickButton = () => console.log("Button was clicked");
</script>

<style lang="scss" scoped></style>
