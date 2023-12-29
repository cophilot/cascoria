<script lang="ts">
export default {
  name: 'CasTable',
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  methods: {
    goToHome() {
      this.$router.push({ name: 'home' });
    },
    getArray() {
      const arr = [];
      for (let i = 0; i < this.count; i++) {
        arr.push(i + 1);
      }
      return arr;
    }
  }
};
</script>

<template>
  <div>
    <table>
      <tr class="sub-divider">
        <td class="num-td"></td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          {{ 'P' + n }}
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/bear.png" alt="Bear" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          {{ n }}
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/deer.png" alt="Deer" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          {{ n }}
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/salmon.png" alt="Salmon" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          {{ n }}
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/hawk.png" alt="Hawk" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          {{ n }}
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/fox.png" alt="Fox" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          {{ n }}
        </td>
      </tr>
      <tr class="sub-divider sub-score">
        <td class="icon-td">
          <img src="@/assets/icons/wildness.png" alt="W" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          {{ n }}
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img
            src="@/assets/icons/mountains.png"
            alt="Mountains"
            class="icon"
          />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          {{ n }}
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/forest.png" alt="Forest" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          {{ n }}
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/desert.png" alt="Desert" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          {{ n }}
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/swamp.png" alt="Swamp" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          {{ n }}
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/water.png" alt="Water" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          {{ n }}
        </td>
      </tr>
      <tr class="sub-divider sub-score">
        <td class="icon-td">
          <img src="@/assets/icons/hectare.png" alt="H" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          {{ n }}
        </td>
      </tr>
      <tr class="sub-divider">
        <td class="icon-td">
          <img src="@/assets/icons/cone.png" alt="Cone" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          {{ n }}
        </td>
      </tr>
      <tr class="final-score">
        <td class="icon-td">
          <img
            src="@/assets/icons/final_score.png"
            alt="Final Score"
            class="icon"
          />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          {{ n }}
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped lang="scss">
@import '@/variables';
.icon {
  height: 75px;
  margin: -2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  border: 2px solid $prim-color;
  margin: 0 auto;
  max-width: 95%;
}
.icon-td {
  border-bottom: 1px solid #ccc;
  text-align: center;
}
.num-td {
  padding: 20px;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
tr:last-child td {
  border-bottom: 0;
}

.final-score {
  background-color: #bccaba;
}
.sub-score {
  background-color: #ebdecb;
}
.sub-divider {
  border-bottom: 2px solid $prim-color;
}
</style>
