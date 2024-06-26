<template>
  <div class="modal" v-if="isShowModalTrailer">
    <div class="modal-trailer">
      <button class="modal-exit" @click="closeModalTrailer">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5859 10L0.792969 2.20706L2.20718 0.792847L10.0001 8.5857L17.793 0.792847L19.2072 2.20706L11.4143 10L19.2072 17.7928L17.793 19.2071L10.0001 11.4142L2.20718 19.2071L0.792969 17.7928L8.5859 10Z" fill="black"/>
        </svg>
      </button>
      <video :src="film.trailerUrl" :poster="film.posterUrl">
        <source  type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="modal-trailer-background">
        <p class="modal-title">{{ film.title }}</p>
      </div>
    </div>
  </div>
  
  <section class="hero">
    <div class="hero__container container">
      <img :src="film.backdropUrl" alt="Film image" width="900" height="680">
      <div class="hero__item">
        <div class="hero__wrapper flex">
          <p class="hero__rating flex" :class="[{'green' : film.tmdbRating >= 7 && film.tmdbRating < 8, 'gray' : film.tmdbRating <= 7 && film.tmdbRating >= 4, 'red' : film.tmdbRating < 4}, 'yellow']">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.00105 12.1733L3.29875 14.8054L4.34897 9.51991L0.392578 5.86118L5.74394 5.22669L8.00105 0.333313L10.2581 5.22669L15.6095 5.86118L11.6531 9.51991L12.7033 14.8054L8.00105 12.1733Z" fill="white"/>
            </svg>
            {{ film.tmdbRating }}
          </p>
          <p class="hero__year">{{ film.releaseYear }}</p>
          <p class="hero__genre" v-for="genre in film.genres" :key="genre.id">{{ genre }}</p>
          <p class="hero__length">
            {{ film.runtime > 60 && film.runtime < 120 ? ' 1 h ' + (film.runtime - 60) + ' min' : film.runtime > 120 && film.runtime < 180 ? ' 2 h ' + (film.runtime - 120) + ' min' : film.runtime > 180 ? ' 3 h ' + (film.runtime - 180) + ' min' : film.runtime < 60 + ' min' }} 
          </p>
        </div>
        <h1 class="hero__title title">{{ film.title }}</h1>
        <p class="hero__text">{{ film.plot }}</p>
        <div class="hero__cube flex">
          <button class="hero__btn hero__mobile-btn btn" @click="showModalTrailer">Trailer</button>
          <button class="hero__new" :class="{ hero__favorite: isActive }" @click="favorite">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 0C17.5376 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.35997 0 9 1 10 2C11 1 12.64 0 14.5 0ZM10.9339 15.6038C11.8155 15.0485 12.61 14.4955 13.3549 13.9029C16.3337 11.533 18 8.9435 18 6C18 3.64076 16.463 2 14.5 2C13.4241 2 12.2593 2.56911 11.4142 3.41421L10 4.82843L8.5858 3.41421C7.74068 2.56911 6.5759 2 5.5 2C3.55906 2 2 3.6565 2 6C2 8.9435 3.66627 11.533 6.64514 13.9029C7.39 14.4955 8.1845 15.0485 9.0661 15.6038C9.3646 15.7919 9.6611 15.9729 10 16.1752C10.3389 15.9729 10.6354 15.7919 10.9339 15.6038Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="about">
    <div class="container">
      <h2 class="about__title mb-64">About the film</h2>
      <ul class="about__cube">
        <li class="about__item">Original language
          <span class="about__span">{{ film.language == null ? 'unknown' : film.language }}</span>
        </li>
        <li class="about__item">Budget
          <span class="about__span">{{ film.budget == null ? 'unknown' : film.budget + ' $' }}</span>
        </li>
        <li class="about__item">Revenue
          <span class="about__span">{{ film.revenue == null ? 'unknown' : film.revenue + ' $' }}</span>
        </li>
        <li class="about__item">Director
          <span class="about__span">{{ film.director == null ? 'unknown' : film.director }}</span>
        </li>
        <li class="about__item">Production
          <span class="about__span">{{ film.production == null ? 'unknown' : film.production }}</span>
        </li>
        <li class="about__item">Awards
          <span class="about__span">{{ film.awardsSummary == null ? 'unknown' : film.awardsSummary }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { getFilm } from "@/api/product";
  import type { IFilm } from '@/types/product';

  const film = ref<IFilm[]>([])
  const isShowModalTrailer = ref(false)
  const isActive = ref(false)

  const loadFilm = async () => {
    const response = await getFilm()
    film.value = response
  }

  function showModalTrailer () {
    isShowModalTrailer.value = true
  }

  function closeModalTrailer () {
    isShowModalTrailer.value = false
  }

  function favorite () {
    isActive.value = !isActive.value;
  }

  loadFilm()
</script>

<style scoped>
  .about {
    padding-top: 40px;
    padding-bottom: 120px;
  }

  .about__title {
    font-size: 40px;
    line-height: 48px;
    font-weight: 700;
  }

  .about__cube {
    width: 500px;
  }

  .about__item {
    display: flex;
    align-items: baseline;
  }

  .about__item::before {
    content: '';
    border-bottom: 1px dashed #ffffff80;
    flex-grow: 1;
    order: 2;
    margin: 0 8px;
  }

  .about__item span {
    order: 3;
  }

  .about__item:not(:last-child) {
    margin-bottom: 24px;
  }

  @media (max-width: 576px) {
    .about {
      padding: 32px 0;
    }

    .about__title {
      margin-bottom: 40px;
      font-size: 24px;
      line-height: 32px;
    }

    .about__cube {
      width: auto;
    }

    .about__item {
      flex-direction: column;
      font-size: 14px;
      line-height: 20px;
      color: rgba(255, 255, 255, .5);
    }

    .about__span {
      margin-top: 4px;
      font-size: 18px;
      line-height: 24px;
      color: white;
    }

    .about__item:before {
      border-bottom: none;
      margin: 0;
    }

    .about__item:not(:last-child) {
      margin-bottom: 12px;
    }
  }
</style>