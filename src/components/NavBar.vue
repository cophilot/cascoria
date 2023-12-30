<script lang="ts">
import MyLogo from '@/components/MyLogo.vue';
export default {
  name: 'NavBar',
  components: {
    MyLogo
  },
  methods: {
    goToHome() {
      this.$router.push({ name: 'home' });
    }
  }
};
</script>

<template>
  <nav class="navbar print-off">
    <MyLogo @click="goToHome"></MyLogo>
  </nav>
</template>

<style scoped lang="scss">
@import '@/variables';

.navbar {
  width: 100%;
  height: 80px;
  background-color: $prim-color;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.795);
  margin: 0;
  position: fixed;
  left: 0;
  top: 0;
}
</style>
