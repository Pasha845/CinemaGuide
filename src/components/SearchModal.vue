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

  defineEmits(['close']);
  defineProps<{
    isSearchModalOpen: Boolean,
    quest: Search
  }>();
</script>

<style scoped>
  .search__modal {
    position: absolute;
    width: auto;
    height: auto;
    background: none;
  }

  .search__container {
    top: 72px;
    left: 0;
    text-align: left;
    border-radius: 8px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding: 8px;
    background: #393B3C;
    transform: translate(0);
  }
</style>