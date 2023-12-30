<script lang="ts">
export default {
  name: 'HomeView',
  methods: {
    goToTable(count: number) {
      this.$router.push({ name: 'table', params: { count: count } });
    }
  }
};
</script>

<template>
  <h1>Cascoria</h1>
  <p class="info">
    A score keeping app for the board game
    <a
      href="https://boardgamegeek.com/boardgame/295947/cascadia"
      target="_blank"
      >Cascadia</a
    >
    🦌🐻🦅🐟🦊
  </p>
  <button class="btn" @click="goToTable(1)">1 Player</button>
  <button class="btn" @click="goToTable(2)">2 Player</button>
  <button class="btn" @click="goToTable(3)">3 Player</button>
  <button class="btn" @click="goToTable(4)">4 Player</button>
  <!--  <button class="btn" @click="goToTable(5)">5 Player</button>
  <button class="btn" @click="goToTable(6)">6 Player</button> -->
  <p>By <a href="https://github.com/phil1436" target="_blank">Philipp B.</a></p>
</template>
<style scoped lang="scss">
h1 {
  margin-bottom: 0px;
}
.info {
  width: 90%;
}
</style>
