<template>
  <div class="error">
    <div class="container">
      <h1 class="error__title">Page not found</h1>
      <router-link class="btn" to="/">Go to the main page</router-link>
    </div>
  </div>
</template>

<style lang="scss">
  .error {
    text-align: center;
    padding: 195px 0;
  
    &__title {
      margin-bottom: 80px;
      font-size: 60px;
    }
  }
</style>