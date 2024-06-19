<template>
  <ul class="list">
    <li class="account__item item" to="/film">
      <button class="account__exit">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.9997 5.5865L11.9495 0.636719L13.3637 2.05093L8.4139 7.0007L13.3637 11.9504L11.9495 13.3646L6.9997 8.4149L2.04996 13.3646L0.635742 11.9504L5.5855 7.0007L0.635742 2.05093L2.04996 0.636719L6.9997 5.5865Z" fill="black" />
        </svg>
      </button>
      <img src="" alt="Films image" width="224" height="336">
    </li>
  </ul>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .account__exit {
    display: none;
    border: none;
    line-height: 1px;
    cursor: pointer;
  }

  .account__item:hover {
    border-color: white;
  }

  .account__item:hover .account__exit {
    display: block;
    position: absolute;
    top: -20px;
    right: -20px;
    border-radius: 50%;
    padding: 13.64px;
    background: white;
  }
</style>