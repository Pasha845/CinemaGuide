<template>
  <router-link class="search__item" :to="'/film/' + search.id">
    <div v-if="cardLoading" class="search__load load">
      <div class="loader"></div>
    </div>
    <img @load="loadCard" class="search__img" :src="search.posterUrl" :alt="search.title" width="40" height="52">
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
    search: object,
    index: number
  }>();

  const cardLoading = ref(true);

  const loadCard = () => {
    cardLoading.value = false;
  };
</script>

<style lang="scss">
  .search {
    &__item {
      position: relative;
      display: flex;
      justify-content: flex-start;
      box-sizing: border-box;
      border: 1px solid #393B3C;
      border-radius: 6px;
      padding: 19px 7px;
      width: 543px;
      transition: border-color .3s;
      img {
        margin-right: 16px;
        width: 40px;
        height: 52px;
      }
    }

    &__item:hover {
      border-color: #FFFFFF80;
    }

    &__load {
      top: 19px;
      left: 7px;
      width: 40px;
      height: 52px;
      .loader {
        top: calc(50% - 10px);
        left: calc(50% - 10px);
        border: 2px solid #FFFFFF;
        width: 20px;
      }
    }

    &__cube {
      margin-bottom: 8px;
    }

    &__rating {
      border-radius: 16px;
      padding: 2px 8px;
      font-size: 12px;
      line-height: 16px;
      font-weight: 700;
      color: #FFFFFF;
      svg {
        margin-right: 4px;
      }
    }

    &__elem {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: #FFFFFFB2;
    }

    &__margin {
      margin-right: 12px;
    }

    &__title {
      font-size: 18px;
      line-height: 24px;
      font-weight: 700;
      color: #FFFFFF;
    }

    &__item:focus {
      outline: none;
    }
  }

  @media (max-width: 1024px) {
    .search {
      &__item {
        width: calc(100% - 14px);
      }
    }
  }

  @media (max-width: 576px) {
    .search {
      &__item {
        flex-direction: column;
        padding: 0;
        img {
          margin: 0;
          margin-bottom: 16px;
          width: 158px;
          height: 206px;
        }
      }

      &__load {
        top: 0;
        left: 0;
        width: 158px;
        height: 206px;
        .loader {
          top: calc(50% - 15px);
          left: calc(50% - 15px);
          border: 3px solid #FFFFFF;
          width: 30px;
        }
      }

      &__cube {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        width: 220px;
      }

      &__margin {
        margin: 0;
      }
    }
  }
</style>