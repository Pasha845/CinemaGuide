<template>
  <router-link class="films__item item" :to="'/film/' + top.id">
    <div v-if="cardLoading" class="loader"></div>
    <img @load="loadCard" @error="errorCard" :src="top.posterUrl" :alt="top.title">
  </router-link>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import type { ITopFilms } from "../types/product";

  defineProps<{ top: ITopFilms }>();
  const cardLoading = ref(true);

  const loadCard = () => {
    cardLoading.value = false;
  };

  const errorCard = () => {
    cardLoading.value = false;
  };
</script>

<style lang="scss">
  .films {
    &__item {
      position: relative;
      display: inline-block;
    }

    &__item:before {
      content: counter(num);
      counter-increment: num;
      position: absolute;
      top: -12px;
      left: -12px;
      z-index: 5;
      border-radius: 50px;
      padding: 8px 24px;
      font-size: 24px;
      line-height: 32px;
      font-weight: 700;
      color: #6A5DC2;
      background: white;
    }
  }

  @media (max-width: 576px) {
    .films {
      &__item {
        padding: 167px 111px;
        height: 0;
        img {
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
</style>