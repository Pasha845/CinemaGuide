import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const isAuthorized = ref(true)

  return { 
    isAuthorized
  }
})