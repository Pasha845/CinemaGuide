<template>
  <div class="modal" v-if="isSignInModalOpen">
    <div class="modal-container">
      <button class="modal-exit" @click.prevent="$emit('close')">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5859 10L0.792969 2.20706L2.20718 0.792847L10.0001 8.5857L17.793 0.792847L19.2072 2.20706L11.4143 10L19.2072 17.7928L17.793 19.2071L10.0001 11.4142L2.20718 19.2071L0.792969 17.7928L8.5859 10Z" fill="black"/>
        </svg>
      </button>
      <img class="modal-logo" src="/img/logo.svg" alt="Logo" width="180" height="24">
      <form class="modal-form">
        <label class="modal-label flex">
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 0C21.5523 0 22 0.44772 22 1V17.0066C22 17.5552 21.5447 18 21.0082 18H2.9918C2.44405 18 2 17.5551 2 17.0066V16H20V4.3L12 11.5L2 2.5V1C2 0.44772 2.44772 0 3 0H21ZM8 12V14H0V12H8ZM5 7V9H0V7H5ZM19.5659 2H4.43414L12 8.8093L19.5659 2Z" fill="currentColor"/>
          </svg>
          <input class="modal-input" type="email" placeholder="Email" required>
        </label>
        <label class="modal-label modal-label-last flex">
          <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.917 7C11.441 9.8377 8.973 12 6 12C2.68629 12 0 9.3137 0 6C0 2.68629 2.68629 0 6 0C8.973 0 11.441 2.16229 11.917 5H22V7H20V11H18V7H16V11H14V7H11.917ZM6 10C8.20914 10 10 8.2091 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.2091 3.79086 10 6 10Z" fill="currentColor"/>
          </svg>
          <input class="modal-input" type="password" placeholder="Password" required>
        </label>
        <button class="btn modal-btn mb-24" type="submit">Sign in</button>
      </form>
      <button class="modal-link" @click.prevent="$emit('close'), isRegModalOpen = true">Registration</button>
    </div>
  </div>

  <div class="modal" v-if="isRegModalOpen">
    <div class="modal-container modal-regist">
      <button class="modal-exit" @click="isRegModalOpen = false">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5859 10L0.792969 2.20706L2.20718 0.792847L10.0001 8.5857L17.793 0.792847L19.2072 2.20706L11.4143 10L19.2072 17.7928L17.793 19.2071L10.0001 11.4142L2.20718 19.2071L0.792969 17.7928L8.5859 10Z" fill="black"/>
        </svg>
      </button>
      <img class="modal-logo" src="/img/logo.svg" alt="Logo" width="180" height="24">
      <p class="modal-title mb-24">Registration</p>
      <form class="modal-form">
        <label class="modal-label flex">
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 0C21.5523 0 22 0.44772 22 1V17.0066C22 17.5552 21.5447 18 21.0082 18H2.9918C2.44405 18 2 17.5551 2 17.0066V16H20V4.3L12 11.5L2 2.5V1C2 0.44772 2.44772 0 3 0H21ZM8 12V14H0V12H8ZM5 7V9H0V7H5ZM19.5659 2H4.43414L12 8.8093L19.5659 2Z" fill="currentColor"/>
          </svg>
          <input class="modal-input" type="email" placeholder="Email" required>
        </label>
        <label class="modal-label flex">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="currentColor"/>
          </svg>
          <input class="modal-input" type="text" placeholder="Name" required>
        </label>
        <label class="modal-label flex">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="currentColor"/>
          </svg>
          <input class="modal-input" type="text" placeholder="Surname" required>
        </label>
        <label class="modal-label flex">
          <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.917 7C11.441 9.8377 8.973 12 6 12C2.68629 12 0 9.3137 0 6C0 2.68629 2.68629 0 6 0C8.973 0 11.441 2.16229 11.917 5H22V7H20V11H18V7H16V11H14V7H11.917ZM6 10C8.20914 10 10 8.2091 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.2091 3.79086 10 6 10Z" fill="currentColor"/>
          </svg>
          <input class="modal-input" type="password" placeholder="Password" required>
        </label>
        <label class="modal-label modal-label-last flex">
          <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.917 7C11.441 9.8377 8.973 12 6 12C2.68629 12 0 9.3137 0 6C0 2.68629 2.68629 0 6 0C8.973 0 11.441 2.16229 11.917 5H22V7H20V11H18V7H16V11H14V7H11.917ZM6 10C8.20914 10 10 8.2091 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.2091 3.79086 10 6 10Z" fill="currentColor"/>
          </svg>
          <input class="modal-input" type="password" placeholder="Confirm password" required>
        </label>
        <button class="btn modal-btn mb-24" type="submit">Create an account</button>
      </form>
      <button class="modal-link" @click.prevent="$emit('open'), isRegModalOpen = false">I have a password</button>
    </div>
  </div>

  <div class="modal" v-if="isCompleteModalOpen">
    <div class="modal-container">
      <button class="modal-exit" @click="isCompleteModalOpen = false">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5859 10L0.792969 2.20706L2.20718 0.792847L10.0001 8.5857L17.793 0.792847L19.2072 2.20706L11.4143 10L19.2072 17.7928L17.793 19.2071L10.0001 11.4142L2.20718 19.2071L0.792969 17.7928L8.5859 10Z" fill="black"/>
        </svg>
      </button>
      <img class="modal-logo" src="/img/logo.svg" alt="Logo" width="180" height="24">
      <p class="modal-title mb-24">Registration is completed</p>
      <p class="modal-text mb-24">Use your email to login</p>
      <button class="btn modal-btn" @click.prevent="$emit('open'), isCompleteModalOpen = false">Sign in</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  defineEmits(['close', 'open']);
  defineProps({isSignInModalOpen: Boolean});
  const isRegModalOpen = ref(false);
  const isCompleteModalOpen = ref(false);
</script>