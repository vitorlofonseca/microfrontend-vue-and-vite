<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import Topbar from "./components/Topbar/Topbar.vue";

const resolutionIsTooLow = ref(false);

const checkIfResolutionIsLow = () =>
  (resolutionIsTooLow.value = window.innerWidth < 540);

onMounted(checkIfResolutionIsLow);

window.addEventListener("resize", checkIfResolutionIsLow);
</script>

<template>
  <div v-if="resolutionIsTooLow" class="low-resolution-message">
    <h1>Sorry, this app isn't supported in low resolutions</h1>
  </div>
  <div v-else>
    <header>
      <div class="wrapper">
        <Topbar />
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
.low-resolution-message {
  display: flex;
  align-items: center;
  text-align: center;
  height: 100vh;
}
</style>
