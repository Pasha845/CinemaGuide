<template>
  <section class="genre padding">
    <div class="container">
      <h1 class="genre__title title">Жанры фильмов</h1>
      <div class="list">
        <GenreCard
          v-for="genre in genres"
          :key="genre.id"
          genre="genre"
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

loadGenreFilms()
</script>

<style scoped>
  .genre__list {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    row-gap: 64px;
  }

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
