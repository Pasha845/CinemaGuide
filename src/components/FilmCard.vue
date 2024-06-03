<template>
  <router-link :class="['films__item item']" to="/film">
    <img :src="product.posterUrl" alt="Films image">
  </router-link>
</template>

<script setup lang="ts">
  import type { IProduct } from "@/types/product";

  const props = defineProps<{ product: IProduct }>()
</script>

<style scoped>

</style>