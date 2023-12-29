<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import CookieMessage from './components/CookieMessage.vue';
</script>

<template>
  <NavBar></NavBar>
  <div class="content">
    <RouterView />
  </div>
  <CookieMessage></CookieMessage>
</template>

<style>
.content {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
