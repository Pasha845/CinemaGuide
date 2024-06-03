<template>
  <router-link class="genre__item" to="/types">
    <img src="" alt="Genre image" width="290" height="220">
    <p class="genre__text">{{ genre }}</p>
  </router-link>
</template>

<script setup lang="ts">
  import type { IProduct } from "@/types/product";

  const props = defineProps<{ genre: IProduct }>()
</script>

<style scoped>
  .genre__text {
    text-align: center;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    padding-top: 22px;
    padding-bottom: 30px;
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    background: #0A0B0B;
  }
</style>