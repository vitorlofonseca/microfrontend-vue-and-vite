<script setup lang="ts"></script>

<template>
  <div class="container">
    <h1>Welcome to Pigeon Courier</h1>

    <div class="description">
      This is a proof of concept with Vue3, to show one of many ways to design a
      microfrontend. This was done using:

      <ul class="description__tools-list">
        <li>Vue 3</li>
        <li>Vite as bundle pack tool</li>
        <li>
          <a
            href="https://github.com/originjs/vite-plugin-federation"
            target="_blank"
          >
            vite-plugin-federation
          </a>
          as a Module federation tool
        </li>
      </ul>

      <br />On the topbar you have some options, where you can track a shipment
      you prefer, or check the information about all your past shipments. Each
      one of these options (excluding Home) are separated microfrontends, using
      components published on a central NPM package. <br /><br />Feel
      comfortable to navigate on the topbar to do what you want, and remember:
      don't be evil with the pigeon
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  h1,
  .description {
    max-width: 90%;
  }

  .description {
    &__tools-list {
      margin-top: 20px;
    }
  }
}
</style>
