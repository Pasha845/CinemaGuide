<template>
  <router-link :class="['item']" :to="'/film/' + film.id">
    <img :src="film.posterUrl" alt="Films image">
  </router-link>
</template>

<script setup lang="ts">
  import type { IGenreFilms } from "../types/product";

  const props = defineProps<{ film: IGenreFilms }>()
</script>

<style scoped>

</style>