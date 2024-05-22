<template>
  <section class="genre padding">
    <div class="container">
      <h1 class="genre__title title">Жанры фильмов</h1>
      <ul class="list">
        <router-link class="genre__item" to="/types">
          <img src="" alt="Genre" width="290" height="220">
          <p class="genre__text">Детектив</p>
        </router-link>
        <router-link class="genre__item" to="/types">
          <img src="/img/genre.png" alt="Genre" width="290" height="220">
          <p class="genre__text">Детектив</p>
        </router-link>
        <router-link class="genre__item" to="/types">
          <img src="/img/genre.png" alt="Genre" width="290" height="220">
          <p class="genre__text">Детектив</p>
        </router-link>
        <router-link class="genre__item" to="/types">
          <img src="/img/genre.png" alt="Genre" width="290" height="220">
          <p class="genre__text">Детектив</p>
        </router-link>
        <router-link class="genre__item" to="/types">
          <img src="/img/genre.png" alt="Genre" width="290" height="220">
          <p class="genre__text">Детектив</p>
        </router-link>
        <router-link class="genre__item" to="/types">
          <img src="/img/genre.png" alt="Genre" width="290" height="220">
          <p class="genre__text">Детектив</p>
        </router-link>
        <router-link class="genre__item" to="/types">
          <img src="/img/genre.png" alt="Genre" width="290" height="220">
          <p class="genre__text">Детектив</p>
        </router-link>
        <router-link class="genre__item" to="/types">
          <img src="/img/genre.png" alt="Genre" width="290" height="220">
          <p class="genre__text">Детектив</p>
        </router-link>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">

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
