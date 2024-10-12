<template>
  <router-link class="types__item" :class="['item']" :to="'/film/' + film.id">
    <div v-if="cardLoading" class="loader"></div>
    <img @load="loadCard" :src="film.posterUrl" :alt="film.title">
  </router-link>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import type { IGenreFilms } from "../types/product";

  defineProps<{ film: IGenreFilms }>();

  const cardLoading = ref(true);

  const loadCard = () => {
    cardLoading.value = false;
  };
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