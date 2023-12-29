<script lang="ts">
import LocalStorageService from '@/services/LocalStorageService';
import '@/main.scss';
export default {
  name: 'CookieMessage',
  data() {
    return {
      display: true
    };
  },
  created() {
    if (LocalStorageService.cookiesAreAllowed()) {
      this.display = false;
    }
  },
  methods: {
    reject() {
      LocalStorageService.rejectCookies();
      this.display = false;
    },
    accept() {
      LocalStorageService.allowCookies();
      this.display = false;
    }
  }
};
</script>
<template>
  <div class="message" v-if="display">
    <p>
      This website uses cookies to ensure you get the best experience on our
      website.
    </p>
    <div class="hor btnBox">
      <button class="btn" @click="reject()">Reject</button>
      <button class="btn" @click="accept()">Accept</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/variables';

.message {
  position: fixed;
  width: 100%;
  height: 300px;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $bg-color;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
  p {
    font-size: 25px;
    width: 90%;
    text-align: center;
  }
  .btnBox {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 90%;
  }
}
</style>
