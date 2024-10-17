<template>
  <transition>
    <div class="modal" v-if="isLogInModalOpen">
      <div class="modal-container">
        <button class="modal-exit" @click.prevent="closeLogin">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5859 10L0.792969 2.20706L2.20718 0.792847L10.0001 8.5857L17.793 0.792847L19.2072 2.20706L11.4143 10L19.2072 17.7928L17.793 19.2071L10.0001 11.4142L2.20718 19.2071L0.792969 17.7928L8.5859 10Z" fill="black"/>
          </svg>
        </button>
        <img class="modal-logo" src="/img/logo.svg" alt="Logo" width="180" height="24">
        <form class="modal-form" @submit.prevent="logInModal">
          <label class="modal-label flex" :class="{'modal-label-error' : emailNone || emailError}">
            <span class="modal-error" v-if="emailNone">Enter email</span>
            <span class="modal-error" v-if="emailError">Incorrect email format</span>
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 0C21.5523 0 22 0.44772 22 1V17.0066C22 17.5552 21.5447 18 21.0082 18H2.9918C2.44405 18 2 17.5551 2 17.0066V16H20V4.3L12 11.5L2 2.5V1C2 0.44772 2.44772 0 3 0H21ZM8 12V14H0V12H8ZM5 7V9H0V7H5ZM19.5659 2H4.43414L12 8.8093L19.5659 2Z" fill="currentColor"/>
            </svg>
            <input class="modal-input" v-model="logInEmail" type="text" placeholder="Email">
          </label>
          <label class="modal-label modal-label-last flex" :class="{'modal-label-error' : passNone}">
            <span class="modal-error" v-if="passNone">Enter password</span>
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.917 7C11.441 9.8377 8.973 12 6 12C2.68629 12 0 9.3137 0 6C0 2.68629 2.68629 0 6 0C8.973 0 11.441 2.16229 11.917 5H22V7H20V11H18V7H16V11H14V7H11.917ZM6 10C8.20914 10 10 8.2091 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.2091 3.79086 10 6 10Z" fill="currentColor"/>
            </svg>
            <input class="modal-input" v-model="logInPass" type="password" placeholder="Password">
          </label>
          <button class="btn modal-btn mb-24" type="submit">Log in</button>
        </form>
        <button class="modal-link" @click.prevent="openSignIn">Sign up</button>
      </div>
    </div>
  </transition>

  <transition>
    <div class="modal" v-if="isSignInModalOpen">
      <div class="modal-container modal-regist">
        <button class="modal-exit" @click="closeSignIn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5859 10L0.792969 2.20706L2.20718 0.792847L10.0001 8.5857L17.793 0.792847L19.2072 2.20706L11.4143 10L19.2072 17.7928L17.793 19.2071L10.0001 11.4142L2.20718 19.2071L0.792969 17.7928L8.5859 10Z" fill="black"/>
          </svg>
        </button>
        <img class="modal-logo" src="/img/logo.svg" alt="Logo" width="180" height="24">
        <p class="modal-title mb-24">Sign up</p>
        <form class="modal-form" @submit.prevent="signInModal">
          <label class="modal-label flex" :class="{'modal-label-error' : emailNone || emailError}">
            <span class="modal-error" v-if="emailNone">Enter email</span>
            <span class="modal-error" v-if="emailError">Incorrect email format</span>
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 0C21.5523 0 22 0.44772 22 1V17.0066C22 17.5552 21.5447 18 21.0082 18H2.9918C2.44405 18 2 17.5551 2 17.0066V16H20V4.3L12 11.5L2 2.5V1C2 0.44772 2.44772 0 3 0H21ZM8 12V14H0V12H8ZM5 7V9H0V7H5ZM19.5659 2H4.43414L12 8.8093L19.5659 2Z" fill="currentColor"/>
            </svg>
            <input class="modal-input" v-model="signInEmail" type="text" placeholder="Email">
          </label>
          <label class="modal-label flex" :class="{'modal-label-error' : nameNone || nameError}">
            <span class="modal-error" v-if="nameNone">Enter name</span>
            <span class="modal-error" v-if="nameError">Name is too short</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="currentColor"/>
            </svg>
            <input class="modal-input" v-model="signInName" type="text" placeholder="Name">
          </label>
          <label class="modal-label flex" :class="{'modal-label-error' : surnameNone || surnameError}">
            <span class="modal-error" v-if="surnameNone">Enter surname</span>
            <span class="modal-error" v-if="surnameError">Surname is too short</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="currentColor"/>
            </svg>
            <input class="modal-input" v-model="signInSurname" type="text" placeholder="Surname">
          </label>
          <label class="modal-label flex" :class="{'modal-label-error' : passNone || passError}">
            <span class="modal-error" v-if="passNone">Enter password</span>
            <span class="modal-error" v-if="passError">Password is too short</span>
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.917 7C11.441 9.8377 8.973 12 6 12C2.68629 12 0 9.3137 0 6C0 2.68629 2.68629 0 6 0C8.973 0 11.441 2.16229 11.917 5H22V7H20V11H18V7H16V11H14V7H11.917ZM6 10C8.20914 10 10 8.2091 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.2091 3.79086 10 6 10Z" fill="currentColor"/>
            </svg>
            <input class="modal-input" v-model="signInPass" type="password" placeholder="Password">
          </label>
          <label class="modal-label modal-label-last flex" :class="{'modal-label-error' : passTwoNone}">
            <span class="modal-error" v-if="passTwoNone">Confirm password</span>
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.917 7C11.441 9.8377 8.973 12 6 12C2.68629 12 0 9.3137 0 6C0 2.68629 2.68629 0 6 0C8.973 0 11.441 2.16229 11.917 5H22V7H20V11H18V7H16V11H14V7H11.917ZM6 10C8.20914 10 10 8.2091 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.2091 3.79086 10 6 10Z" fill="currentColor"/>
            </svg>
            <input class="modal-input" v-model="signInTwoPass" type="password" placeholder="Confirm password">
          </label>
          <button class="btn modal-btn mb-24" type="submit">Create an account</button>
        </form>
        <button class="modal-link" @click.prevent="openLogin">I have a password</button>
      </div>
    </div>
  </transition>

  <transition>
    <div class="modal" v-if="isCompleteModalOpen">
      <div class="modal-container">
        <button class="modal-exit" @click="isCompleteModalOpen = false">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5859 10L0.792969 2.20706L2.20718 0.792847L10.0001 8.5857L17.793 0.792847L19.2072 2.20706L11.4143 10L19.2072 17.7928L17.793 19.2071L10.0001 11.4142L2.20718 19.2071L0.792969 17.7928L8.5859 10Z" fill="black"/>
          </svg>
        </button>
        <img class="modal-logo" src="/img/logo.svg" alt="Logo" width="180" height="24">
        <p class="modal-title mb-24">Sign up is completed</p>
        <p class="modal-text mb-24">Use your email to login</p>
        <button class="btn modal-btn" @click.prevent="$emit('open'), isCompleteModalOpen = false">Log in</button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '../stores/auth';

  const emit = defineEmits(['close', 'open']);
  defineProps({isLogInModalOpen: Boolean});
  const isSignInModalOpen = ref(false);
  const isCompleteModalOpen = ref(false);
  const router = useRouter();
  const authStore = useAuthStore();

  const logInEmail = ref('');
  const logInPass = ref('');

  const signInEmail = ref('');
  const signInName = ref('');
  const signInSurname = ref('');
  const signInPass = ref('');
  const signInTwoPass = ref('');

  const emailNone = ref(false);
  const passNone = ref(false);
  const nameNone = ref(false);
  const surnameNone = ref(false);
  const emailError = ref(false);
  const nameError = ref(false);
  const surnameError = ref(false);
  const passError = ref(false);
  const passTwoNone = ref(false);

  const openLogin = () => {
    resetSignIn();
    emit('open');
    isSignInModalOpen.value = false;
  };

  const closeLogin = () => {
    resetLogin();
    emit('close');
  };

  const openSignIn = () => {
    closeLogin();
    isSignInModalOpen.value = true;
  };

  const closeSignIn = () => {
    resetSignIn();
    isSignInModalOpen.value = false;
  };

  const resetLogin = () => {
    logInEmail.value = '';
    logInPass.value = '';
    emailNone.value = false;
    passNone.value = false;
    emailError.value = false;
  };

  const resetSignIn = () => {
    signInEmail.value = '';
    signInName.value = '';
    signInSurname.value = '';
    signInPass.value = '';
    signInTwoPass.value = '';
    emailNone.value = false;
    nameNone.value = false;
    surnameNone.value = false;
    passNone.value = false;
    passTwoNone.value = false;
    emailError.value = false;
    nameError.value = false;
    surnameError.value = false;
    passError.value = false;
  };

  function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const logInModal = () => {
    if (logInEmail.value && isValidEmail(String(logInEmail.value)) && logInPass.value) {
      authStore.LogIn(logInEmail.value, logInPass.value);
      closeLogin();
      router.push({name: 'favorites'});
    } else {
      if (!logInEmail.value) {
        emailNone.value = true;
        emailError.value = false;
      } else if (logInEmail.value && !isValidEmail(String(logInEmail.value))) {
        emailNone.value = false;
        emailError.value = true;
      } else if (logInEmail.value) {
        emailNone.value = false;
      } if (!logInPass.value) {
        passNone.value = true;
      } else if (logInPass.value) {
        passNone.value = false;
      };
    };
  };

  const signInModal = () => {
    if (signInEmail.value && isValidEmail(String(signInEmail.value)) && signInName.value && signInSurname.value && signInPass.value && signInPass.value === signInTwoPass.value) {
      /*authStore.SignUp(signInEmail.value, signInPass.value, signInName.value, signInSurname.value);*/
      closeSignIn();
      isCompleteModalOpen.value = true;
    } else {
      if (!signInEmail.value) {
        emailNone.value = true;
        emailError.value = false;
      } else if (signInEmail.value && !isValidEmail(String(signInEmail.value))) {
        emailNone.value = false;
        emailError.value = true;
      } else if (signInEmail.value) {
        emailNone.value = false;
      } if (!signInName.value) {
        nameNone.value = true;
        nameError.value = false;
      } else if (signInName.value && signInName.value.length < 4) {
        nameError.value = true;
        nameNone.value = false;
      } else if (signInName.value) {
        nameNone.value = false;
      } if (!signInSurname.value) {
        surnameNone.value = true;
        surnameError.value = false;
      } else if (signInSurname.value && signInSurname.value.length < 6) {
        surnameError.value = true;
        surnameNone.value = false;
      } else if (signInSurname.value) {
        surnameNone.value = false;
      } if (!signInPass.value) {
        passNone.value = true;
        passError.value = false;
      } else if (signInPass.value && signInPass.value.length < 9) {
        passNone.value = false;
        passError.value = true;
      } else if (signInPass.value) {
        passNone.value = false;
      } if (signInPass.value !== signInTwoPass.value) {
        passTwoNone.value = true;
      } else if (signInPass.value === signInTwoPass.value) {
        passTwoNone.value = false;
      };
    };
  };
</script>