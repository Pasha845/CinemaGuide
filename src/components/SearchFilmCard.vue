<template>
  <router-link class="search__item" :to="'/film/' + search.id">
    <img :src="search.posterUrl" alt="" width="40" height="52">
    <div>
      <div class="search__cube flex">
        <p class="search__rating search__margin flex" :class="[{'green' : search.tmdbRating >= 7 && search.tmdbRating < 8, 'gray' : search.tmdbRating <= 7 && search.tmdbRating >= 4, 'red' : search.tmdbRating < 4}, 'yellow']">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_8311_1335)">
            <path d="M5.00041 7.60831L2.06148 9.2534L2.71786 5.94994L0.245117 3.66323L3.58972 3.26667L5.00041 0.208313L6.41108 3.26667L9.75566 3.66323L7.28295 5.94994L7.93933 9.2534L5.00041 7.60831Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_8311_1335">
            <rect width="10" height="10" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          {{ search.tmdbRating }}
        </p>
        <p class="search__elem search__margin">{{ search.releaseYear }}</p>
        <p class="search__elem search__margin" v-for="genre in search.genres" :key="genre.id">{{ genre }}</p>
        <p class="search__elem">
          {{ search.runtime > 60 && search.runtime < 120 ? ' 1 h ' + (search.runtime - 60) + ' min' : search.runtime > 120 && search.runtime < 180 ? ' 2 h ' + (search.runtime - 120) + ' min' : search.runtime > 180 ? ' 3 h ' + (search.runtime - 180) + ' min' : search.runtime < 60 + ' min'}} 
        </p>
      </div>
      <h3 class="search__title">{{ search.title }}</h3>
    </div>
  </router-link>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  defineProps<{
    search: string,
    index: number
  }>();
</script>

<style scoped>
  .search__item {
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 20px 8px;
  }

  .search__item:hover {
    border: 1px solid #FFFFFF80;
    padding: 19px 7px;
  }

  .search__item img {
    margin-right: 16px;
  }

  .search__cube {
    margin-bottom: 8px;
  }

  .search__rating {
    border-radius: 16px;
    padding: 2px 8px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    color: #FFFFFF;
  }

  .search__rating svg {
    margin-right: 4px;
  }

  .search__elem {
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFFB2;
  }

  .search__margin {
    margin-right: 12px;
  }

  .search__title {
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
  }
</style>