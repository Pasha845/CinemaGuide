<template>
  <section class="genre padding">
    <div class="container">
      <h1 class="title">Movie genres</h1>
      <div class="genre__list list">
        <GenreCard
          v-for="genre in genres"
          :key="genre.id"
          :genre="genre"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import {getGenreFilms} from "@/api/product"
  import GenreCard from "@/components/GenreCard.vue"
  import type { IProduct } from '@/types/product';

  const genres = ref<IProduct[]>([])

  const loadGenreFilms = async () => {
    const response = await getGenreFilms()
    genres.value = response
  }

  console.log(genres)

  loadGenreFilms()
</script>

<style scoped>
  .genre__item {
    display: flex;
    flex-direction: column;
    border: 1px solid #FFFFFF40;
    border-radius: 24px;
    box-sizing: border-box;
    width: 290px;
    background: #616161;
    box-shadow: 0px 0px 80px 0px #FFFFFF54;
  }

  .genre__item img {
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
  }

  @media (max-width: 576px) {
    .genre {
      padding-top: 24px;
      padding-bottom: 40px;
    }

    .genre__list {
      gap: 24px;
    }

    .genre__item {
      width: 100%;
    }
  }
</style>
