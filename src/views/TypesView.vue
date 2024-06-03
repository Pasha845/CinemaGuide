<template>
  <section class="types padding">
    <div class="container">
      <h1 class="types__title title flex">
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.04701 11.0012L13.2967 19.2507L10.9397 21.6077L0.333008 11.0012L10.9397 0.394531L13.2967 2.75155L5.04701 11.0012Z" fill="white"/>
        </svg>
        Fantastic
      </h1>
      <ul class="list mb-64">
        <router-link class="item" to="/film">
          <img src="" alt="Films image" width="224" height="336">
        </router-link>
      </ul>
      <button class="btn">Show more</button>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .types {
    text-align: center;
  }

  .types__title svg {
    margin-right: 30px;
  }
</style>