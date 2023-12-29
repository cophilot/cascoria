<script lang="ts">
import LocalStorageService from '@/services/LocalStorageService';

export default {
  name: 'CasTable',
  props: {
    count: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      wMatrix: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      hMatrix: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      coneRow: [0, 0, 0, 0],
      names: ['', '', '', '']
    };
  },

  mounted() {
    const wMatrix = LocalStorageService.get('wMatrix');
    const hMatrix = LocalStorageService.get('hMatrix');
    const coneRow = LocalStorageService.get('coneRow');
    const names = LocalStorageService.get('names');
    console.log(names);
    if (wMatrix) {
      this.wMatrix = JSON.parse(wMatrix);
    }
    if (hMatrix) {
      this.hMatrix = JSON.parse(hMatrix);
    }
    if (coneRow) {
      this.coneRow = JSON.parse(coneRow);
    }
    if (names) {
      this.names = JSON.parse(names);
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
    },
    setWMatrix(row: number, player: number, event: Event) {
      this.wMatrix[row - 1][player - 1] =
        parseInt((event.target as HTMLInputElement).value) || 0;
      LocalStorageService.set('wMatrix', JSON.stringify(this.wMatrix));
    },
    setHMatrix(row: number, player: number, event: Event) {
      this.hMatrix[row - 1][player - 1] =
        parseInt((event.target as HTMLInputElement).value) || 0;
      LocalStorageService.set('hMatrix', JSON.stringify(this.hMatrix));
    },
    setConeRow(player: number, event: Event) {
      this.coneRow[player - 1] =
        parseInt((event.target as HTMLInputElement).value) || 0;
      LocalStorageService.set('coneRow', JSON.stringify(this.coneRow));
    },
    setName(player: number, event: Event) {
      this.names[player - 1] = (event.target as HTMLInputElement).value || '';
      LocalStorageService.set('names', JSON.stringify(this.names));
    }
  },
  computed: {
    getWScore() {
      const result = [];
      for (let i = 0; i < this.count; i++) {
        let sum = 0;
        for (let j = 0; j < 5; j++) {
          sum += this.wMatrix[j][i];
        }
        result.push(sum);
      }
      return result;
    },
    getHScore() {
      const result = [];
      for (let i = 0; i < this.count; i++) {
        let sum = 0;
        for (let j = 0; j < 5; j++) {
          sum += this.hMatrix[j][i];
        }
        result.push(sum);
      }
      return result;
    },

    getTotalScore() {
      const result = [];
      for (let i = 0; i < this.count; i++) {
        result.push(this.getWScore[i] + this.getHScore[i] + this.coneRow[i]);
      }
      return result;
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
          <input
            type="text"
            :placeholder="'P' + n"
            class="my-input"
            @input="setName(n, $event)"
            :value="names[n - 1]"
          />
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/bear.png" alt="Bear" class="icon" />
        </td>

        <td v-for="n in getArray()" :key="n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'w1' + n"
            @input="setWMatrix(1, n, $event)"
            :value="wMatrix[0][n - 1]"
          />
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/deer.png" alt="Deer" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'w2' + n"
            @input="setWMatrix(2, n, $event)"
            :value="wMatrix[1][n - 1]"
          />
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/salmon.png" alt="Salmon" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'w3' + n"
            @input="setWMatrix(3, n, $event)"
            :value="wMatrix[2][n - 1]"
          />
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/hawk.png" alt="Hawk" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'w4' + n"
            @input="setWMatrix(4, n, $event)"
            :value="wMatrix[3][n - 1]"
          />
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/fox.png" alt="Fox" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'w5' + n"
            @input="setWMatrix(5, n, $event)"
            :value="wMatrix[4][n - 1]"
          />
        </td>
      </tr>
      <tr class="sub-divider sub-score">
        <td class="icon-td">
          <img src="@/assets/icons/wildness.png" alt="W" class="icon" />
        </td>
        <td v-for="n in getWScore" :key="n" class="num-td">
          {{ n }}
        </td>
      </tr>
      <!-- --- -->
      <tr>
        <td class="icon-td">
          <img
            src="@/assets/icons/mountains.png"
            alt="Mountains"
            class="icon"
          />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'h1' + n"
            @input="setHMatrix(1, n, $event)"
            :value="hMatrix[0][n - 1]"
          />
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/forest.png" alt="Forest" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'h2' + n"
            @input="setHMatrix(2, n, $event)"
            :value="hMatrix[1][n - 1]"
          />
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/desert.png" alt="Desert" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'h3' + n"
            @input="setHMatrix(3, n, $event)"
            :value="hMatrix[2][n - 1]"
          />
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/swamp.png" alt="Swamp" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'h4' + n"
            @input="setHMatrix(4, n, $event)"
            :value="hMatrix[3][n - 1]"
          />
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/water.png" alt="Water" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'h5' + n"
            @input="setHMatrix(5, n, $event)"
            :value="hMatrix[4][n - 1]"
          />
        </td>
      </tr>
      <tr class="sub-divider sub-score">
        <td class="icon-td">
          <img src="@/assets/icons/hectare.png" alt="H" class="icon" />
        </td>
        <td v-for="n in getHScore" :key="n" class="num-td">
          {{ n }}
        </td>
      </tr>
      <tr class="sub-divider">
        <td class="icon-td">
          <img src="@/assets/icons/cone.png" alt="Cone" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'C' + n"
            @input="setConeRow(n, $event)"
            :value="coneRow[n - 1]"
          />
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
        <td v-for="n in getTotalScore" :key="n" class="num-td">
          {{ n }}
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped lang="scss">
@import '@/variables';

.my-input {
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  text-align: center;
  // remove arrows
  -moz-appearance: textfield;

  &:focus {
    outline: none;
  }
}
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
