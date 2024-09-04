<template>
  <div class="modal" v-if="isTrailerModalOpen">
    <div class="modal-trailer">
      <button class="modal-exit" @click.prevent="$emit('close')">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5859 10L0.792969 2.20706L2.20718 0.792847L10.0001 8.5857L17.793 0.792847L19.2072 2.20706L11.4143 10L19.2072 17.7928L17.793 19.2071L10.0001 11.4142L2.20718 19.2071L0.792969 17.7928L8.5859 10Z" fill="black"/>
        </svg>
      </button>
      <iframe class="modal-video" width="960" height="540" :src="'https://www.youtube.com/embed/' + random.trailerUrl.split('=')[1] + '?showinfo=0&controls=0&iv_load_policy=3&modestbranding=1&fs=0&rel=0'" frameborder="0" allowfullscreen></iframe>
      <div class="modal-trailer-background">
        <p class="modal-title">{{ random.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { IRandomFilm } from "../types/product";

  defineEmits(['close']);
  defineProps<{
    random: IRandomFilm,
    isTrailerModalOpen: Boolean
  }>();
</script>
