<script lang="ts">
import LocalStorageService from '@/services/LocalStorageService';

export default {
  name: 'HomeView',
  data() {
    return {
      extensionEnabled: false
    };
  },
  mounted() {
    const extensionEnabled = LocalStorageService.get('extensionEnabled');
    if (extensionEnabled) {
      this.extensionEnabled = extensionEnabled === 'true';
    }
    console.log('extensionEnabled', this.extensionEnabled);
  },
  methods: {
    goToTable(count: number) {
      this.$router.push({
        name: this.extensionEnabled ? 'tableExtension' : 'table',
        params: { count: count }
      });
    },
    onExtensionChange() {
      LocalStorageService.set(
        'extensionEnabled',
        this.extensionEnabled.toString()
      );
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
  <p>Landmarks extension</p>
  <!-- Rounded switch -->
  <label class="switch">
    <input
      type="checkbox"
      v-model="extensionEnabled"
      @change="onExtensionChange()"
    />
    <span class="slider round"></span>
  </label>
  <button class="btn" @click="goToTable(1)">1 Player</button>
  <button class="btn" @click="goToTable(2)">2 Player</button>
  <button class="btn" @click="goToTable(3)">3 Player</button>
  <button class="btn" @click="goToTable(4)">4 Player</button>
  <button class="btn" @click="goToTable(5)">5 Player</button>
  <button class="btn" @click="goToTable(6)">6 Player</button>
  <p>By <a href="https://github.com/cophilot" target="_blank">Philipp B.</a></p>
</template>
<style scoped lang="scss">
@import '@/variables';

h1 {
  margin-bottom: 0px;
}
.info {
  width: 90%;
}
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-bottom: 20px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: $prim-color;
}

input:focus + .slider {
  box-shadow: 0 0 1px $prim-color;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
