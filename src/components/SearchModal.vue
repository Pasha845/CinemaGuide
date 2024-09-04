<template>
  <div class="search__modal modal" v-if="isSearchModalOpen">
    <div class="search__container modal-container">
      <SearchFilmCard
        v-for="search in quest"
        :key="search.id"
        :search="search"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Search } from "../types/product";
  import SearchFilmCard from "@/components/SearchFilmCard.vue";

  defineProps<{
    isSearchModalOpen: Boolean,
    quest: Search
  }>();
</script>

<style scoped>
  .search__modal {
    background: none;
  }

  .search__container {
    top: 84px;
    text-align: left;
    border-radius: 8px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding: 8px;
    background: #393B3C;
    transform: translate(-50%, 0);
  }
</style>