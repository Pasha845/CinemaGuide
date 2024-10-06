<template>
  <router-link class="types__item" :class="['item']" :to="'/film/' + film.id">
    <img :src="film.posterUrl" :alt="film.title">
  </router-link>
</template>

<script setup lang="ts">
  import type { IGenreFilms } from "../types/product";

  defineProps<{ film: IGenreFilms }>()
</script>

<style lang="scss">
  .types {
    &__item {
      height: 334px;
    }
  }

  @media (max-width: 576px) {
    .types {
      &__item {
        width: 333px;
        height: 500px;
      }
    }
  }
</style>