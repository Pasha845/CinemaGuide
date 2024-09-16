<template>
  <router-link class="films__item item" :to="'/film/' + product.id">
    <img v-if="!filmIsLoading" @load="handleLoad" :src="product.posterUrl" alt="Films image">
    <div v-else class="loader"></div>
  </router-link>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import type { IProduct } from "../types/product";

  const props = defineProps<{ product: IProduct }>();
  const filmIsLoading = ref(false);

  const handleLoad = () => {
    filmIsLoading.value = false;
  };
</script>