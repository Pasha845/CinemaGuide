<template>
  <section class="types padding">
    <div class="container">
      <h1 class="types__title title flex">
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.04701 11.0012L13.2967 19.2507L10.9397 21.6077L0.333008 11.0012L10.9397 0.394531L13.2967 2.75155L5.04701 11.0012Z" fill="white"/>
        </svg>
        {{ genre }}
      </h1>

      <div class="films__list list mb-64">
        <GenreFilmCard
          v-for="film in films"
          :key="film.id"
          :film="film"
        />
      </div>
      <button class="btn">Show more</button>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute } from "vue-router";
  import { getGenreFilms } from "../api/product";
  import type { IGenreFilms } from '../types/product';
  import GenreFilmCard from "@/components/GenreFilmCard.vue";

  const films = ref<IGenreFilms[]>([]);
  const route = useRoute();
  const genre = route.params.id;

  const loadGenreFilms = async () => {
    const response = await getGenreFilms()
    films.value = response
  }

  loadGenreFilms();
</script>

<style scoped>
  .types {
    text-align: center;
  }

  .types__title {
    text-transform: capitalize;
  }
  
  .types__title svg {
    margin-right: 16px;
    padding: 9.4px 13.3px;
    padding-right: 13.7px;
  }
</style>