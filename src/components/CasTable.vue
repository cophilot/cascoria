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
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ],
      hMatrix: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ],
      coneRow: [0, 0, 0, 0, 0, 0],
      names: ['', '', '', '', '', '']
    };
  },

  mounted() {
    setTimeout(() => {
      const wMatrix = LocalStorageService.get(this.count + 'wMatrix');
      const hMatrix = LocalStorageService.get(this.count + 'hMatrix');
      const coneRow = LocalStorageService.get(this.count + 'coneRow');
      const names = LocalStorageService.get(this.count + 'names');
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
    }, 10);
  },

  methods: {
    reset() {
      localStorage.removeItem(this.count + 'wMatrix');
      localStorage.removeItem(this.count + 'hMatrix');
      localStorage.removeItem(this.count + 'coneRow');
      localStorage.removeItem(this.count + 'names');
      this.wMatrix = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ];
      this.hMatrix = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ];
      this.coneRow = [0, 0, 0, 0, 0, 0];
      this.names = ['', '', '', '', '', ''];
    },

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
      LocalStorageService.set(
        this.count + 'wMatrix',
        JSON.stringify(this.wMatrix)
      );
    },
    setHMatrix(row: number, player: number, event: Event) {
      this.hMatrix[row - 1][player - 1] =
        parseInt((event.target as HTMLInputElement).value) || 0;
      LocalStorageService.set(
        this.count + 'hMatrix',
        JSON.stringify(this.hMatrix)
      );
    },
    setConeRow(player: number, event: Event) {
      this.coneRow[player - 1] =
        parseInt((event.target as HTMLInputElement).value) || 0;
      LocalStorageService.set(
        this.count + 'coneRow',
        JSON.stringify(this.coneRow)
      );
    },
    setName(player: number, event: Event) {
      this.names[player - 1] = (event.target as HTMLInputElement).value || '';
      LocalStorageService.set(this.count + 'names', JSON.stringify(this.names));
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
    getBonusMatrix() {
      if (this.count == 1) {
        let result = [];
        for (let e of this.wMatrix) {
          result.push(e[0] >= 7 ? 2 : 0);
        }
        return result;
      }
      if (this.count == 2) {
        let result = [];
        for (let e of this.wMatrix) {
          if (e[0] > e[1]) {
            result.push([2, 0]);
          } else if (e[0] < e[1]) {
            result.push([0, 2]);
          } else {
            result.push([1, 1]);
          }
        }
        return result;
      }
      return [];
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
        <td v-for="n in getArray()" :key="'n' + n" class="num-td">
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
        <!-- W-START -->
        <td v-for="n in getArray()" :key="'w1' + n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'w1' + n"
            @input="setWMatrix(1, n, $event)"
            :value="wMatrix[0][n - 1] == 0 ? '' : wMatrix[0][n - 1]"
          />
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/deer.png" alt="Deer" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="'w2' + n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'w2' + n"
            @input="setWMatrix(2, n, $event)"
            :value="wMatrix[1][n - 1] == 0 ? '' : wMatrix[1][n - 1]"
          />
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/salmon.png" alt="Salmon" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="'w3' + n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'w3' + n"
            @input="setWMatrix(3, n, $event)"
            :value="wMatrix[2][n - 1] == 0 ? '' : wMatrix[2][n - 1]"
          />
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/hawk.png" alt="Hawk" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="'w4' + n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'w4' + n"
            @input="setWMatrix(4, n, $event)"
            :value="wMatrix[3][n - 1] == 0 ? '' : wMatrix[3][n - 1]"
          />
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/fox.png" alt="Fox" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="'w5' + n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'w5' + n"
            @input="setWMatrix(5, n, $event)"
            :value="wMatrix[4][n - 1] == 0 ? '' : wMatrix[4][n - 1]"
          />
        </td>
      </tr>
      <tr class="sub-divider sub-score">
        <td class="icon-td">
          <img src="@/assets/icons/wildness.png" alt="W" class="icon" />
        </td>
        <td v-for="n in getWScore" :key="'W' + n" class="num-td">
          <input type="number" class="my-input" :value="n" disabled />
        </td>
      </tr>
      <!-- W-END -->
      <!-- H-START -->
      <tr>
        <td class="icon-td">
          <img
            src="@/assets/icons/mountains.png"
            alt="Mountains"
            class="icon"
          />
        </td>
        <td v-for="n in getArray()" :key="'h1' + n" class="num-td">
          <div class="bonus-box">
            <input
              type="number"
              placeholder="0"
              class="my-input"
              :id="'h1' + n"
              @input="setHMatrix(1, n, $event)"
              :value="hMatrix[0][n - 1] == 0 ? '' : hMatrix[0][n - 1]"
            />
            <p class="bonus">+4</p>
          </div>
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/forest.png" alt="Forest" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="'h2' + n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'h2' + n"
            @input="setHMatrix(2, n, $event)"
            :value="hMatrix[1][n - 1] == 0 ? '' : hMatrix[1][n - 1]"
          />
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/desert.png" alt="Desert" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="'h3' + n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'h3' + n"
            @input="setHMatrix(3, n, $event)"
            :value="hMatrix[2][n - 1] == 0 ? '' : hMatrix[2][n - 1]"
          />
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/swamp.png" alt="Swamp" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="'h4' + n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'h4' + n"
            @input="setHMatrix(4, n, $event)"
            :value="hMatrix[3][n - 1] == 0 ? '' : hMatrix[3][n - 1]"
          />
        </td>
      </tr>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/water.png" alt="Water" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="'h5' + n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'h5' + n"
            @input="setHMatrix(5, n, $event)"
            :value="hMatrix[4][n - 1] == 0 ? '' : hMatrix[4][n - 1]"
          />
        </td>
      </tr>
      <tr class="sub-divider sub-score">
        <td class="icon-td">
          <img src="@/assets/icons/hectare.png" alt="H" class="icon" />
        </td>
        <td v-for="n in getHScore" :key="'H' + n" class="num-td">
          <input type="number" class="my-input" :value="n" disabled />
        </td>
      </tr>
      <!-- H-END -->
      <tr class="sub-divider">
        <td class="icon-td">
          <img src="@/assets/icons/cone.png" alt="Cone" class="icon" />
        </td>
        <td v-for="n in getArray()" :key="'C' + n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input"
            :id="'C' + n"
            @input="setConeRow(n, $event)"
            :value="coneRow[n - 1] == 0 ? '' : coneRow[n - 1]"
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
        <td v-for="n in getTotalScore" :key="'F' + n" class="num-td">
          <input type="number" class="my-input" :value="n" disabled />
        </td>
      </tr>
    </table>
  </div>
  <button class="btn reset-btn" @click="reset()">Reset</button>
</template>

<style scoped lang="scss">
@import '@/variables';

.reset-btn {
  margin-top: 100px;
}

.my-input {
  width: 110%;
  height: 100%;
  border: none;
  background-color: transparent;
  text-align: center;
  // remove arrows
  -moz-appearance: textfield;
  appearance: textfield;

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
  padding: 15px;
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
.bonus-box {
  /*  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
}
.bonus {
  font-size: 16px;
  padding: 0;
  margin: 0;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  text-align: center;
  padding-left: 25px;
  margin-top: -15px;
}
</style>
