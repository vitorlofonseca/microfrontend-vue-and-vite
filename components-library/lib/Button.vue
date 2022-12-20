<script setup lang="ts">
const onBtnClick = () => console.log("Button was clicked");
</script>

<template>
  <button @click="onBtnClick"><slot /></button>
</template>

<style scoped>
button {
  background-color: #ccd132;
  border-radius: 50px;
  padding: 10px 20px;
  border: 1px solid;
  box-shadow: 0px 2px 5px grey;
  cursor: pointer;
}

button:active {
  box-shadow: unset;
}
</style>
