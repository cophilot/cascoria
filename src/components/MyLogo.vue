<script lang="ts">
export default {
  name: 'MyLogo',
  props: {
    big: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#fff'
    }
  }
};
</script>

<template>
  <div :class="big ? 'logo-container-big' : 'logo-container'">
    <img src="@/assets/logo.png" alt="Cascoria" class="logo" />
    <p class="logo-name" :style="{ color: color }">Cascoria</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/variables';

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
    transition: 0.3s;
    font-weight: bold;
    font-size: 26px;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.795);
    rotate: -8deg;
    margin-top: 0px;
  }
}
.logo-container-big {
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
    width: 150px;
    margin-top: 10px;
    transition: 0.3s;
    margin-bottom: -70px;
  }
  .logo-name {
    transition: 0.3s;
    font-weight: bold;
    font-size: 45px;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.795);
    rotate: -8deg;
    margin-top: 0px;
  }
}

@media screen and (max-width: 800px) {
  /* .logo-container {
    &:hover {
      .logo-name {
        opacity: 0.9;
        rotate: -8deg;
      }
      .logo {
        scale: 1;
      }
    }
  } */
}
</style>
