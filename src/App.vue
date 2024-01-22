<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar class="navbar" />
  <router-view />
</template>

<style scoped>
.navbar {
  display: flex;
  /* justify-content: space-around; */
  gap: 6em;
  align-items: center;
  padding: 1em;
  background-color: #000000;
  color: #ffffff;
  font-size: 1.25em;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
