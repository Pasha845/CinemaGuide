<template>
  <router-link class="account__item item" :to="'/film/' + fav.id">
    <button class="account__exit" @click="delFavorite">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.9997 5.5865L11.9495 0.636719L13.3637 2.05093L8.4139 7.0007L13.3637 11.9504L11.9495 13.3646L6.9997 8.4149L2.04996 13.3646L0.635742 11.9504L5.5855 7.0007L0.635742 2.05093L2.04996 0.636719L6.9997 5.5865Z" fill="black" />
      </svg>
    </button>
    <div v-if="cardLoading" class="loader"></div>
    <img @load="loadCard" :src="fav.posterUrl" :alt="fav.title" width="224" height="336">
  </router-link>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/auth';

  const newFav = defineProps<{ fav: { id: number, posterUrl: string, title: string } }>();
  const authStore = useAuthStore();

  const cardLoading = ref(true);

  const loadCard = () => {
    cardLoading.value = false;
  };

  const delFavorite = async (event: MouseEvent) => {
    event.preventDefault();
    await authStore.DeleteFavorites(newFav.fav.id);
    await authStore.GetFavorites();
  };
</script>

<style lang="scss">
  .account {
    &__item {
      position: relative;
    }

    &__exit {
      position: absolute;
      z-index: 10;
      top: -20px;
      right: -20px;
      border: none;
      border-radius: 50%;
      padding: 13.64px;
      line-height: 1px;
      opacity: 0;
      background: white;
      cursor: pointer;
      transition: opacity .3s;
    }

    &__item:hover {
      border-color: white;
    }

    &__item:hover &__exit {
      opacity: 1;
    }
  }

  @media (max-width: 576px) {
    .account {
      &__item {
        padding: 167px 111px;
        height: 0;
        img {
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
</style>