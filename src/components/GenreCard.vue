<template>
  <router-link class="genre__item" :to="'/types/' + genre" :genre="genre">
    <img class="genre__img" :src="array[index].img" alt="Genre image" width="290" height="220">
    <p class="genre__text">{{ genre }}</p>
  </router-link>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  defineProps<{
    genre: string,
    index: number
  }>();
  
  const array = ref([
    {
      img: '/img/history.jpg'
    },
    {
      img: '/img/horror.jpg'
    },
    {
      img: '/img/scifi.jpg'
    },
    {
      img: '/img/stand-up.jpg'
    },
    {
      img: '/img/fantasy.jpg'
    },
    {
      img: '/img/drama.jpg'
    },
    {
      img: '/img/mystery.jpg'
    },
    {
      img: '/img/family.jpg'
    },
    {
      img: '/img/comedy.jpg'
    },
    {
      img: '/img/romance.jpg'
    },
    {
      img: '/img/music.jpg'
    },
    {
      img: '/img/crime.jpg'
    },
    {
      img: '/img/tv-movie.jpg'
    },
    {
      img: '/img/documentary.jpg'
    },
    {
      img: '/img/action.jpg'
    },
    {
      img: '/img/thriller.jpg'
    },
    {
      img: '/img/western.jpg'
    },
    {
      img: '/img/animation.jpg'
    },
    {
      img: '/img/war.jpg'
    },
    {
      img: '/img/adventure.jpg'
    }
  ])
</script>

<style scoped>
  .genre__item {
    display: flex;
    flex-direction: column;
    border: 1px solid #FFFFFF40;
    border-radius: 24px;
    box-sizing: border-box;
    width: 290px;
    height: 304px;
    background: #616161;
    box-shadow: 0px 0px 80px 0px #FFFFFF54;
    transition: .8s;
  }

  .genre__item:hover {
    transform: scale(1.2);
  }

  .genre__img {
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    width: 100%;
    height: 100%;
  }

  .genre__text {
    text-transform: capitalize;
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

  @media (max-width: 576px) {
    .genre__item {
      width: 333px;
      height: 302px;
    }
  }
</style>