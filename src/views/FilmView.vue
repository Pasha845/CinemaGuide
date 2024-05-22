<template>
  <section class="hero">
    <img src="/img/hero.png" alt="Film" width="900" height="680">
    <div class="container">
      <div class="hero__item">
        <div class="hero__wrapper flex">
          <p class="hero__rating flex">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.00105 12.1733L3.29875 14.8054L4.34897 9.51991L0.392578 5.86118L5.74394 5.22669L8.00105 0.333313L10.2581 5.22669L15.6095 5.86118L11.6531 9.51991L12.7033 14.8054L8.00105 12.1733Z" fill="white"/>
            </svg>
            7,5
          </p>
          <p class="hero__year">1979</p>
          <p class="hero__genre">детектив</p>
          <p class="hero__length">1 ч 7 мин</p>
        </div>
        <h1 class="hero__title title">Шерлок Холмс и доктор Ватсон: Знакомство</h1>
        <p class="hero__text">Увлекательные приключения самого известного сыщика всех времен</p>
        <div class="hero__cube flex">
          <a class="btn" href="#">Трейлер</a>
          <a class="hero__sublink" href="#">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 0C17.5376 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.35997 0 9 1 10 2C11 1 12.64 0 14.5 0ZM10.9339 15.6038C11.8155 15.0485 12.61 14.4955 13.3549 13.9029C16.3337 11.533 18 8.9435 18 6C18 3.64076 16.463 2 14.5 2C13.4241 2 12.2593 2.56911 11.4142 3.41421L10 4.82843L8.5858 3.41421C7.74068 2.56911 6.5759 2 5.5 2C3.55906 2 2 3.6565 2 6C2 8.9435 3.66627 11.533 6.64514 13.9029C7.39 14.4955 8.1845 15.0485 9.0661 15.6038C9.3646 15.7919 9.6611 15.9729 10 16.1752C10.3389 15.9729 10.6354 15.7919 10.9339 15.6038Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="about">
    <div class="container">
      <h2 class="about__title mb-64">О фильме</h2>
      <ul class="about__cube">
        <li class="about__item flex">
          <p>Язык оригинала</p>
          <p>Русский</p>
        </li>
        <li class="about__item flex">
          <p>Бюджет</p>
          <p>250 000 руб.</p>
        </li>
        <li class="about__item flex">
          <p>Выручка</p>
          <p>2 835 000 руб.</p>
        </li>
        <li class="about__item flex">
          <p>Режиссёр</p>
          <p>Игорь Масленников</p>
        </li>
        <li class="about__item flex">
          <p>Продакшен</p>
          <p>Ленфильм</p>
        </li>
        <li class="about__item flex">
          <p>Награды</p>
          <p>Топ-250, 33 место</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">

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
    justify-content: space-between;
  }

  .about__item:not(:last-child) {
    margin-bottom: 24px;
  }
</style>