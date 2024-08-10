<template>
  <section class="genre padding">
    <div class="container">
      <h1 class="title">Movie genres</h1>
      <div class="genre__list list">
        <GenreCard
          v-for="(genre, index) in genres"
          :key="genre.id"
          :genre="genre"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { getGenres } from "@/api/product"
  import GenreCard from "@/components/GenreCard.vue"
  import type { IGenre } from '@/types/product';

  const genres = ref<IGenre[]>([])

  const loadGenreFilms = async () => {
    const response = await getGenres()
    genres.value = response
  }

  loadGenreFilms()
</script>

<style scoped>
  @media (max-width: 576px) {
    .genre {
      padding-top: 24px;
      padding-bottom: 40px;
    }

    .genre__list {
      gap: 24px;
    }
  }
</style>
