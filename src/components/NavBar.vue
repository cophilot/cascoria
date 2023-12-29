<script lang="ts">
export default {
  name: 'NavBar',
  methods: {
    goToHome() {
      this.$router.push({ name: 'home' });
    }
  }
};
</script>

<template>
  <nav class="navbar">
    <div class="logo-container" @click="goToHome()">
      <img src="@/assets/logo.png" alt="Cascoria" class="logo" />
      <p class="logo-name">Cascoria</p>
    </div>
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
  .logo-container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    margin-left: -23px;
    cursor: pointer;
    .logo {
      width: 80px;
      margin-top: 10px;
      transition: 0.3s;
      margin-bottom: -38px;
    }
    .logo-name {
      color: white;
      transition: 0.3s;
      font-weight: bold;
      font-size: 26px;
      text-shadow: 0 2px 5px rgba(0, 0, 0, 0.795);
      opacity: 0.9;
      rotate: -8deg;
      margin-top: 0px;
    }
    &:hover {
      .logo-name {
        opacity: 1;
        rotate: 0deg;
      }
      .logo {
        scale: 1.3;
      }
    }
  }
}
</style>
