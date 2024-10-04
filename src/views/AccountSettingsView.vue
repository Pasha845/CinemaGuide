<template>
  <div class="mb-64">
    <div class="account__item flex">
      <div class="account__icon">
        <div>{{ authStore.profile.name + authStore.profile.surname }}</div>
      </div>
      <div>
        <p class="account__subtext">Name Surname</p>
        <p class="account__text">{{ authStore.profile.name }} {{ authStore.profile.surname }}</p>
      </div>
    </div>
    <div class="account__item flex">
      <div class="account__icon">
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 0C21.5523 0 22 0.44772 22 1V17.0066C22 17.5552 21.5447 18 21.0082 18H2.9918C2.44405 18 2 17.5551 2 17.0066V16H20V4.3L12 11.5L2 2.5V1C2 0.44772 2.44772 0 3 0H21ZM8 12V14H0V12H8ZM5 7V9H0V7H5ZM19.5659 2H4.43414L12 8.8093L19.5659 2Z" fill="white"/>
        </svg>
      </div>
      <div>
        <p class="account__subtext">Email</p>
        <p class="account__text">{{ authStore.profile.email }}</p>
      </div>
    </div>
  </div>
  <router-link class="btn" @click="authStore.LoginOut" to="/">Log out of your account</router-link>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useAuthStore } from '@/stores/auth';

  const authStore = useAuthStore();

  onMounted(() => {
    authStore.GetProfile()
  });
</script>

<style lang="scss">
  .account {
    &__item:not(:last-child) {
      margin-bottom: 40px;
    }
  
    &__icon {
      position: relative;
      border-radius: 50%;
      margin-right: 16px;
      width: 60px;
      height: 60px;
      background: rgba(255, 255, 255, .5);
    }

    &__icon div,
    &__icon svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &__subtext {
      margin-bottom: 4px;
    }

    &__icon,
    &__text {
      font-size: 24px;
      line-height: 32px;
      font-weight: 700;
    }
  }

  @media (max-width: 576px) {
    .account {
      &__icon {
        width: 48px;
        height: 48px;
      }

      &__subtext {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        opacity: .5;
      }

      &__text {
        font-size: 18px;
        line-height: 24px;
      }
    }
  }
</style>