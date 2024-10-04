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
  import { useAuthStore } from '@/stores/auth';
  import AccountCard from "@/components/AccountCard.vue";

  const authStore = useAuthStore();

  onMounted(() => {
    authStore.GetFavorites()
  });
</script>

<style lang="scss">
  .account {
    &__list {
      justify-content: flex-start;
    }
  }
</style>