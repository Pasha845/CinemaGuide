<template>
  <header class="header">
    <div class="header__container container flex">
      <router-link class="header__logo" to="/main">
        <img src="/img/logo.svg" alt="Logo" width="240" height="32">
      </router-link>
      <ul class="header__menu flex">
        <li class="header__margin-link">
          <router-link class="header__link" to="/main">Main</router-link>
        </li>
        <li class="header__margin-link">
          <router-link class="header__link" to="/genre">Genres</router-link>
        </li>
        <li class="header__margin-link">
          <label class="header__label">
            <button class="header__btn" aria-label="Поиск">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.031 14.6168L20.3137 18.8995L18.8995 20.3137L14.6168 16.031C13.0769 17.263 11.124 18 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18 11.124 17.263 13.0769 16.031 14.6168ZM14.0247 13.8748C15.2475 12.6146 16 10.8956 16 9C16 5.1325 12.8675 2 9 2C5.1325 2 2 5.1325 2 9C2 12.8675 5.1325 16 9 16C10.8956 16 12.6146 15.2475 13.8748 14.0247L14.0247 13.8748Z" fill="white" fill-opacity="0.5"/>
              </svg>              
            </button>
            <input class="header__input" type="search" placeholder="Search">
          </label>
        </li>
      </ul>
      <button class="header__link" @click.prevent="isSignInModalOpen = true">Sign in</button>
      <ul class="header__cube">
        <li class="header__margin-icon">
          <router-link class="header__icon" to="/genre" aria-label="Genres">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 11.5C4.51472 11.5 2.5 9.48528 2.5 7C2.5 4.51472 4.51472 2.5 7 2.5C9.48528 2.5 11.5 4.51472 11.5 7C11.5 9.48528 9.48528 11.5 7 11.5ZM7 21.5C4.51472 21.5 2.5 19.4853 2.5 17C2.5 14.5147 4.51472 12.5 7 12.5C9.48528 12.5 11.5 14.5147 11.5 17C11.5 19.4853 9.48528 21.5 7 21.5ZM17 11.5C14.5147 11.5 12.5 9.48528 12.5 7C12.5 4.51472 14.5147 2.5 17 2.5C19.4853 2.5 21.5 4.51472 21.5 7C21.5 9.48528 19.4853 11.5 17 11.5ZM17 21.5C14.5147 21.5 12.5 19.4853 12.5 17C12.5 14.5147 14.5147 12.5 17 12.5C19.4853 12.5 21.5 14.5147 21.5 17C21.5 19.4853 19.4853 21.5 17 21.5ZM7 9.5C8.38071 9.5 9.5 8.38071 9.5 7C9.5 5.61929 8.38071 4.5 7 4.5C5.61929 4.5 4.5 5.61929 4.5 7C4.5 8.38071 5.61929 9.5 7 9.5ZM7 19.5C8.38071 19.5 9.5 18.3807 9.5 17C9.5 15.6193 8.38071 14.5 7 14.5C5.61929 14.5 4.5 15.6193 4.5 17C4.5 18.3807 5.61929 19.5 7 19.5ZM17 9.5C18.3807 9.5 19.5 8.38071 19.5 7C19.5 5.61929 18.3807 4.5 17 4.5C15.6193 4.5 14.5 5.61929 14.5 7C14.5 8.38071 15.6193 9.5 17 9.5ZM17 19.5C18.3807 19.5 19.5 18.3807 19.5 17C19.5 15.6193 18.3807 14.5 17 14.5C15.6193 14.5 14.5 15.6193 14.5 17C14.5 18.3807 15.6193 19.5 17 19.5Z" fill="white"/>
            </svg>
          </router-link>
        </li>
        <li class="header__margin-icon">
          <button class="header__icon" aria-label="Search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="white"/>
            </svg>
          </button>
        </li>
        <li class="header__margin-icon">
          <button class="header__icon" @click.prevent="isSignInModalOpen = true" aria-label="Profile">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="white"/>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  </header>

  <SignInModal :isSignInModalOpen="isSignInModalOpen" @close="isSignInModalOpen = false" @open="isSignInModalOpen = true" />

  <router-view />

  <footer class="footer">
    <div class="footer__list container flex">
      <div class="footer__copyright flex">
        <p class="footer__text">LLC «Multimedia Vision»</p>
        <div class="flex">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2877 7.42773C13.413 5.97351 11.8195 5 10 5C7.23999 5 5 7.23999 5 10C5 12.76 7.23999 15 10 15C11.8195 15 13.413 14.0265 14.2877 12.5723L12.5729 11.5442C12.0483 12.4166 11.0927 13 10 13C8.3425 13 7 11.6575 7 10C7 8.3425 8.3425 7 10 7C11.093 7 12.0491 7.58386 12.5735 8.4568L14.2877 7.42773ZM20 10C20 4.47998 15.52 0 10 0C4.47998 0 0 4.47998 0 10C0 15.52 4.47998 20 10 20C15.52 20 20 15.52 20 10ZM2 10C2 5.57996 5.57996 2 10 2C14.42 2 18 5.57996 18 10C18 14.42 14.42 18 10 18C5.57996 18 2 14.42 2 10Z" fill="white" fill-opacity="0.7"/>
          </svg>
          <p class="footer__subtext">All rights reserved</p>
        </div>
      </div>
      <ul class="footer__cube flex">
        <li class="footer__margin-link">
          <a class="footer__link" href="#" aria-label="Vkontakte">
            <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4865 1.37968C18.6253 0.985106 18.4865 0.698125 17.8719 0.698125H15.8298C15.3144 0.698125 15.0764 0.949207 14.9377 1.21829C14.9377 1.21829 13.8869 3.51408 12.4198 5.00273C11.9439 5.4332 11.7259 5.57669 11.4682 5.57669C11.3293 5.57669 11.1509 5.4332 11.1509 5.03862V1.36173C11.1509 0.895411 10.9923 0.680176 10.5561 0.680176H7.34436C7.02714 0.680176 6.8289 0.895411 6.8289 1.11065C6.8289 1.55907 7.56243 1.66666 7.64174 2.92217V5.64843C7.64174 6.24034 7.52281 6.34793 7.26505 6.34793C6.57115 6.34793 4.88596 4.03419 3.87484 1.39763C3.67655 0.877462 3.47831 0.680176 2.96286 0.680176H0.90093C0.306165 0.680176 0.207031 0.93131 0.207031 1.20034C0.207031 1.68461 0.90093 4.12389 3.43863 7.35236C5.12388 9.55846 7.52281 10.7422 9.68383 10.7422C10.9923 10.7422 11.1509 10.4732 11.1509 10.0248V8.3568C11.1509 7.81868 11.2699 7.72904 11.6862 7.72904C11.9836 7.72904 12.5189 7.87248 13.7283 8.9307C15.1161 10.1862 15.354 10.7602 16.1272 10.7602H18.1693C18.764 10.7602 19.0416 10.4911 18.883 9.97098C18.7046 9.45087 18.0305 8.69757 17.1582 7.80073C16.6823 7.29857 15.9686 6.74256 15.7505 6.47347C15.4531 6.1148 15.5324 5.97131 15.7505 5.64843C15.7307 5.64843 18.2287 2.45585 18.4865 1.37968Z" fill="white" fill-opacity="0.8"/>
            </svg>
          </a>
        </li>
        <li class="footer__margin-link">
          <a class="footer__link" href="#" aria-label="Youtube">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0013 1.04957C14.6622 1.23093 15.1827 1.7653 15.3593 2.4439C15.6803 3.67379 15.6803 6.23997 15.6803 6.23997C15.6803 6.23997 15.6803 8.80606 15.3593 10.036C15.1827 10.7146 14.6622 11.249 14.0013 11.4305C12.8035 11.76 8.00031 11.76 8.00031 11.76C8.00031 11.76 3.19708 11.76 1.99927 11.4305C1.33835 11.249 0.817854 10.7146 0.641214 10.036C0.320312 8.80606 0.320312 6.23997 0.320312 6.23997C0.320312 6.23997 0.320312 3.67379 0.641214 2.4439C0.817854 1.7653 1.33835 1.23093 1.99927 1.04957C3.19708 0.719971 8.00031 0.719971 8.00031 0.719971C8.00031 0.719971 12.8035 0.719971 14.0013 1.04957ZM6.56028 4.0802V8.88021L10.4003 6.4803L6.56028 4.0802Z" fill="white" fill-opacity="0.8"/>
            </svg>
          </a>
        </li>
        <li class="footer__margin-link">
          <a class="footer__link" href="#" aria-label="Odnoklassniki">
            <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.91902 13.2622L10.5725 15.8238C11.116 16.3474 11.116 17.1978 10.5725 17.722C10.0294 18.2462 9.14932 18.2462 8.60687 17.722L5.99801 15.2048L3.39142 17.722C3.11963 17.9838 2.76349 18.1149 2.40735 18.1149C2.05178 18.1149 1.69621 17.9838 1.42441 17.722C0.881398 17.1978 0.881398 16.348 1.42385 15.8238L4.07758 13.2622C3.1114 13.0497 2.17958 12.6802 1.32132 12.1604C0.671803 11.7651 0.476693 10.9369 0.885942 10.3094C1.29406 9.68105 2.15232 9.49189 2.80297 9.8872C4.74612 11.0671 7.24933 11.0674 9.19362 9.8872C9.84428 9.49189 10.7023 9.68105 11.1112 10.3094C11.5205 10.9364 11.3248 11.7651 10.6753 12.1604C9.81701 12.6807 8.8852 13.0497 7.91902 13.2622Z" fill="white" fill-opacity="0.8"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.24023 4.94193C1.24023 7.46791 3.36913 9.52263 5.98679 9.52263C8.60502 9.52263 10.7333 7.46791 10.7333 4.94193C10.7333 2.41513 8.60502 0.359863 5.98679 0.359863C3.36913 0.359863 1.24023 2.41513 1.24023 4.94193ZM7.95202 4.94145C7.95202 3.89531 7.07048 3.04463 5.98672 3.04463C4.90381 3.04463 4.02141 3.89531 4.02141 4.94145C4.02141 5.98676 4.90381 6.83799 5.98672 6.83799C7.07048 6.83799 7.95202 5.98676 7.95202 4.94145Z" fill="white" fill-opacity="0.8"/>
            </svg>
          </a>
        </li>
        <li class="footer__margin-link">
          <a class="footer__link" href="#" aria-label="Telegram">
            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.600085 6.85877C2.28343 5.93153 4.16251 5.15765 5.91823 4.37981C8.93876 3.10577 11.9713 1.85381 15.0344 0.688246C15.6304 0.489646 16.7012 0.295426 16.8062 1.17863C16.7487 2.42879 16.5122 3.67163 16.35 4.91447C15.9382 7.64759 15.4623 10.3713 14.9982 13.0955C14.8383 14.0028 13.7016 14.4726 12.9742 13.8919C11.2263 12.7112 9.46495 11.5421 7.73935 10.334C7.17409 9.75965 7.69825 8.93483 8.20309 8.52467C9.64273 7.10591 11.1695 5.90051 12.5339 4.40843C12.9019 3.51965 11.8145 4.26869 11.4558 4.49819C9.48493 5.85635 7.56229 7.29743 5.48437 8.49107C4.42297 9.07535 3.18589 8.57603 2.12497 8.24999C1.17372 7.85615 -0.220212 7.45937 0.599989 6.85883L0.600085 6.85877Z" fill="white" fill-opacity="0.8"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import SignInModal from '@/components/SignInModal.vue';

  const isSignInModalOpen = ref(false);
</script>

<style scoped>
  .header {
    padding: 24px 0;
    background: #00000080;
  }

  .header__container {
    justify-content: space-between;
  }

  .header__logo {
    display: inline-block;
    flex-shrink: 0;
  }

  .header__margin-link:not(:last-child) {
    margin-right: 40px;
  }

  .header__margin-link:first-child .header__link {
    border-bottom: 1.5px solid #DC5DFC;
  }

  .header__link {
    border: none;
    padding: 8px 0;
    font-size: 24px;
    line-height: 32px;
    color: white;
    background: none;
    cursor: pointer;
  }

  .header__label {
    position: relative;
    display: block;
    width: 480px;
  }

  .header__btn {
    position: absolute;
    top: 14px;
    left: 18px;
    border: none;
    padding: 0;
    background: none;
    cursor: pointer;
  }

  .header__input {
    border: none;
    border-radius: 8px;
    padding: 14px 16px;
    padding-left: 52px;
    width: 100%;
    color: white;
    background: #393B3C;
  }

  .header__input:focus {
    outline: none;
  }

  .header__input::placeholder {
    color: white;
    opacity: 0.5;
  }

  .header__cube {
    display: none;
  }

  @media (max-width: 576px) {
    .header {
      padding: 16px 0;
    }

    .header__logo img {
      width: 136px;
      height: 18px;
    }

    .header__menu,
    .header__link {
      display: none;
    }

    .header__cube {
      display: flex;
    }

    .header__margin-icon:not(:last-child) {
      margin-right: 20px;
    }

    .header__icon {
      border: none;
      padding: 0;
      background: none;
      cursor: pointer;
    }

    .header__icon:focus {
      outline: none;
    }
  }
  
  /* footer */

  .footer {
    padding: 40px 0;
    background: #0A0B0B;
  }

  .footer__list {
    justify-content: space-between;
  }

  .footer__copyright {
    font-weight: 700;
  }

  .footer__text {
    margin-right: 14px;
  }

  .footer__subtext {
    margin-left: 14px;
    font-weight: 400;
    opacity: 0.7;
  }

  .footer__margin-link:not(:last-child) {
    margin-right: 24px;
  }

  .footer__link {
    position: relative;
    display: inline-block;
    border: 1px solid #FFFFFFCC;
    border-radius: 8px;
    width: 34px;
    height: 34px;
  }

  .footer__link svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .footer__link:focus {
    outline: none;
  }

  @media (max-width: 576px) {
    .footer {
      padding: 24px 0;
    }

    .footer__copyright,
    .footer__list {
      flex-direction: column;
      align-items: flex-start;
    }

    .footer__copyright {
      margin-bottom: 32px;
    }

    .footer__text {
      margin: 0;
      margin-bottom: 8px;
    }

    .footer__subtext {
      margin-left: 12px;
      font-size: 14px;
      line-height: 20px;
    }

    .footer__cube {
      margin-bottom: 12px;
    }

    .footer__link {
      width: 24px;
      height: 24px;
    }
  }
</style>
