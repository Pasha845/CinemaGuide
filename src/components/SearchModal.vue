<template>
  <div class="search__modal modal" v-if="isSearchModalOpen">
    <div class="search__container modal-container">
      <SearchCard
        v-for="(search, index) in quest"
        :key="search.id"
        :search="search"
        :index="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Search } from "../types/product";
  import SearchCard from "@/components/SearchCard.vue";

  defineEmits(['close']);
  defineProps<{
    isSearchModalOpen: Boolean,
    quest: Search
  }>();
</script>

<style lang="scss">
  .search {
    &__modal {
      position: absolute;
      width: auto;
      height: auto;
      background: none;
    }

    &__container {
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
  }

  @media (max-width: 576px) {
    .search {
      &__container {
        display: flex;
        white-space: nowrap;
        gap: 16px;
        overflow-x: scroll;
        top: 64px;
        border-radius: 8px;
        padding: 24px 20px;
        max-width: 295px;
      }
    }
  }
</style>