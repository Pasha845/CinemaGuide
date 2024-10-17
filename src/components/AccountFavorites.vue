<template>
  <div class="account__list list">
    <AccountCard
      v-for="fav in authStore.fav"
      :key="fav.id"
      :fav="fav"
    />
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useAuthStore } from '../stores/auth';
  import AccountCard from "../components/AccountCard.vue";

  const authStore = useAuthStore();

  onMounted(() => {
    if (authStore.isAuth) {
      authStore.GetFavorites();
    };
  });
</script>

<style lang="scss">
  .account {
    &__list {
      justify-content: flex-start;
    }
  }

  @media (max-width: 576px) {
    .account {
      &__list {
        justify-content: flex-start;
        flex-wrap: nowrap;
        white-space: nowrap;
        overflow-x: scroll;
        padding: 32px 20px;
        padding-top: 40px;
      }
    }
  }
</style>