<script setup lang="ts">
import { RouterView } from "vue-router";
import Topbar from "./components/Topbar/Topbar.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <Topbar />
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
