<template>
  <button variant="flat" color="secondary" @click="onClickButton">
    <slot />
  </button>
</template>

<script lang="ts" setup>
const onClickButton = () => console.log("Button was clicked");
</script>

<style lang="scss" scoped></style>
