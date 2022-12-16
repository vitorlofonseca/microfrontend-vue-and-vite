<template>
  <nav>
    <div class="brand">
      <img
        alt="Pigeon logo"
        class="logo"
        src="@/assets/pigeon.png"
        width="50"
        height="50"
      />

      <h1>Courier Pigeon</h1>
    </div>

    <div class="links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/tracker">Tracker</RouterLink>
      <RouterLink to="/shipments">Shipments</RouterLink>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
nav {
  padding: 0.7rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d8e0f0;
  box-shadow: 0 2px 10px #747982;
  margin-bottom: 20px;

  .brand {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .links {
    display: flex;
    gap: 20px;
  }
}
</style>
