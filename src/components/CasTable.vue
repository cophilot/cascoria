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
      bonusMatrix: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ],
      coneRow: [0, 0, 0, 0, 0, 0],
      extensionRow: [0, 0, 0, 0, 0, 0],
      names: ['', '', '', '', '', ''],
      extensionEnabled: false
    };
  },
  watch: {
    hMatrix: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handler: function (_val: any) {
        this.updateBonusMatrix();
      },
      deep: true
    }
  },

  mounted() {
    if (this.$route.path.includes('landmarks')) {
      this.extensionEnabled = true;
    }

    setTimeout(() => {
      const wMatrix = LocalStorageService.get(this.count + 'wMatrix');
      const hMatrix = LocalStorageService.get(this.count + 'hMatrix');
      const coneRow = LocalStorageService.get(this.count + 'coneRow');
      const extensionRow = LocalStorageService.get(this.count + 'extensionRow');
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
      if (extensionRow) {
        this.extensionRow = JSON.parse(extensionRow);
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
      localStorage.removeItem(this.count + 'extensionRow');
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
      this.extensionRow = [0, 0, 0, 0, 0, 0];
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
    setExtensionRow(player: number, event: Event) {
      this.extensionRow[player - 1] =
        parseInt((event.target as HTMLInputElement).value) || 0;
      LocalStorageService.set(
        this.count + 'extensionRow',
        JSON.stringify(this.extensionRow)
      );
    },
    setName(player: number, event: Event) {
      this.names[player - 1] = (event.target as HTMLInputElement).value || '';
      LocalStorageService.set(this.count + 'names', JSON.stringify(this.names));
    },

    updateBonusMatrix() {
      const result = [];

      if (this.count == 1) {
        // 1 player
        for (let e of this.hMatrix) {
          result.push(e[0] >= 7 ? [2] : [0]);
        }
        this.bonusMatrix = result;
        return;
      }
      if (this.count == 2) {
        // 2 players
        for (let e of this.hMatrix) {
          if (e[0] > e[1]) {
            result.push([2, 0]);
          } else if (e[0] < e[1]) {
            result.push([0, 2]);
          } else if (e[0] != 0 && 0 != e[1]) {
            result.push([1, 1]);
          } else {
            result.push([0, 0]);
          }
        }
        this.bonusMatrix = result;
        return;
      }
      // 3+ players
      for (let e of this.hMatrix) {
        let highest = 0;
        let secondHighest = 0;
        for (let i = 0; i < e.length; i++) {
          if (e[i] > highest) {
            secondHighest = highest;
            highest = e[i];
          } else if (e[i] > secondHighest) {
            secondHighest = e[i];
          }
        }
        if (highest == 0) {
          result.push([0, 0, 0, 0, 0]);
          continue;
        }

        let highestCount = 0;
        let secondHighestCount = 0;
        for (let i = 0; i < e.length; i++) {
          if (e[i] == highest) {
            highestCount++;
          }
          if (e[i] == secondHighest) {
            secondHighestCount++;
          }
        }
        let highestBonus = 0;
        let secondHighestBonus = 0;
        if (highestCount == 1) {
          highestBonus = 3;
          if (secondHighestCount == 1 && secondHighest != 0) {
            secondHighestBonus = 1;
          }
        } else if (highestCount == 2) {
          highestBonus = 2;
        } else if (highestCount > 2) {
          highestBonus = 1;
        }
        let row = [];
        for (let i = 0; i < e.length; i++) {
          if (e[i] == highest) {
            row.push(highestBonus);
          } else if (e[i] == secondHighest) {
            row.push(secondHighestBonus);
          } else {
            row.push(0);
          }
        }
        result.push(row);
      }
      this.bonusMatrix = result;
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
          sum += this.hMatrix[j][i] + this.bonusMatrix[j][i];
        }
        result.push(sum);
      }
      return result;
    },

    getTotalScore() {
      const result = [];
      for (let i = 0; i < this.count; i++) {
        result.push(
          this.getWScore[i] +
            this.getHScore[i] +
            this.coneRow[i] +
            this.extensionRow[i]
        );
      }
      return result;
    }
  }
};
</script>

<template>
  <div>
    <table>
      <tr class="sticky name-row print-off">
        <td class="num-td"></td>
        <td v-for="n in getArray()" :key="'n' + n" class="num-td">
          <input
            type="text"
            :placeholder="'P' + n"
            class="my-input name-input print-off"
            @input="setName(n, $event)"
            :value="names[n - 1]"
          />
        </td>
      </tr>
      <div class="print-only">
        <tr class="name-row">
          <td class="num-td"></td>
          <td v-for="n in getArray()" :key="'n' + n" class="num-td">
            <p class="print-only print-label" style="margin-top: 10px">
              {{ names[n - 1] == '' ? 'P' + n : names[n - 1] }}
            </p>
          </td>
        </tr>
      </div>
      <tr>
        <td class="icon-td">
          <img src="@/assets/icons/bear.png" alt="Bear" class="icon" />
        </td>
        <!-- W-START -->
        <td v-for="n in getArray()" :key="'w1' + n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input print-off"
            :id="'w1' + n"
            @input="setWMatrix(1, n, $event)"
            :value="wMatrix[0][n - 1] == 0 ? '' : wMatrix[0][n - 1]"
          />
          <p class="print-only print-label">
            {{ wMatrix[0][n - 1] }}
          </p>
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
            class="my-input print-off"
            :id="'w2' + n"
            @input="setWMatrix(2, n, $event)"
            :value="wMatrix[1][n - 1] == 0 ? '' : wMatrix[1][n - 1]"
          />
          <p class="print-only print-label">
            {{ wMatrix[1][n - 1] }}
          </p>
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
            class="my-input print-off"
            :id="'w3' + n"
            @input="setWMatrix(3, n, $event)"
            :value="wMatrix[2][n - 1] == 0 ? '' : wMatrix[2][n - 1]"
          />
          <p class="print-only print-label">
            {{ wMatrix[2][n - 1] }}
          </p>
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
            class="my-input print-off"
            :id="'w4' + n"
            @input="setWMatrix(4, n, $event)"
            :value="wMatrix[3][n - 1] == 0 ? '' : wMatrix[3][n - 1]"
          />
          <p class="print-only print-label">
            {{ wMatrix[3][n - 1] }}
          </p>
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
            class="my-input print-off"
            :id="'w5' + n"
            @input="setWMatrix(5, n, $event)"
            :value="wMatrix[4][n - 1] == 0 ? '' : wMatrix[4][n - 1]"
          />
          <p class="print-only print-label">
            {{ wMatrix[4][n - 1] }}
          </p>
        </td>
      </tr>
      <tr class="sub-divider sub-score">
        <td class="icon-td">
          <img src="@/assets/icons/wildness.png" alt="W" class="icon" />
        </td>
        <td v-for="(n, i) in getWScore" :key="'W' + i" class="num-td">
          <input type="number" class="my-input print-off" :value="n" disabled />
          <p class="print-only print-label">
            {{ n }}
          </p>
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
          <input
            type="number"
            placeholder="0"
            class="my-input print-off"
            :id="'h1' + n"
            @input="setHMatrix(1, n, $event)"
            :value="hMatrix[0][n - 1] == 0 ? '' : hMatrix[0][n - 1]"
          />
          <p
            class="print-only print-label"
            style="margin-top: 0; margin-bottom: -5px"
          >
            {{ hMatrix[0][n - 1] }}
          </p>
          <p
            class="bonus"
            :style="{
              opacity: bonusMatrix[0][n - 1] == 0 ? '0' : '0.6'
            }"
          >
            {{ '+' + bonusMatrix[0][n - 1] }}
          </p>
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
            class="my-input print-off"
            :id="'h2' + n"
            @input="setHMatrix(2, n, $event)"
            :value="hMatrix[1][n - 1] == 0 ? '' : hMatrix[1][n - 1]"
          />
          <p
            class="print-only print-label"
            style="margin-top: 0; margin-bottom: -5px"
          >
            {{ hMatrix[1][n - 1] }}
          </p>
          <p
            class="bonus"
            :style="{
              opacity: bonusMatrix[1][n - 1] == 0 ? '0' : '0.6'
            }"
          >
            {{ '+' + bonusMatrix[1][n - 1] }}
          </p>
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
            class="my-input print-off"
            :id="'h3' + n"
            @input="setHMatrix(3, n, $event)"
            :value="hMatrix[2][n - 1] == 0 ? '' : hMatrix[2][n - 1]"
          />
          <p
            class="print-only print-label"
            style="margin-top: 0; margin-bottom: -5px"
          >
            {{ hMatrix[2][n - 1] }}
          </p>
          <p
            class="bonus"
            :style="{
              opacity: bonusMatrix[2][n - 1] == 0 ? '0' : '0.6'
            }"
          >
            {{ '+' + bonusMatrix[2][n - 1] }}
          </p>
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
            class="my-input print-off"
            :id="'h4' + n"
            @input="setHMatrix(4, n, $event)"
            :value="hMatrix[3][n - 1] == 0 ? '' : hMatrix[3][n - 1]"
          />
          <p
            class="print-only print-label"
            style="margin-top: 0; margin-bottom: -5px"
          >
            {{ hMatrix[3][n - 1] }}
          </p>
          <p
            class="bonus"
            :style="{
              opacity: bonusMatrix[3][n - 1] == 0 ? '0' : '0.6'
            }"
          >
            {{ '+' + bonusMatrix[3][n - 1] }}
          </p>
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
            class="my-input print-off"
            :id="'h5' + n"
            @input="setHMatrix(5, n, $event)"
            :value="hMatrix[4][n - 1] == 0 ? '' : hMatrix[4][n - 1]"
          />
          <p
            class="print-only print-label"
            style="margin-top: 0; margin-bottom: -5px"
          >
            {{ hMatrix[4][n - 1] }}
          </p>
          <p
            class="bonus"
            :style="{
              opacity: bonusMatrix[4][n - 1] == 0 ? '0' : '0.6'
            }"
          >
            {{ '+' + bonusMatrix[4][n - 1] }}
          </p>
        </td>
      </tr>
      <tr class="sub-divider sub-score">
        <td class="icon-td">
          <img src="@/assets/icons/hectare.png" alt="H" class="icon" />
        </td>
        <td v-for="(n, i) in getHScore" :key="'H' + i" class="num-td">
          <input type="number" class="my-input print-off" :value="n" disabled />
          <p class="print-only print-label">
            {{ n }}
          </p>
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
            class="my-input print-off"
            :id="'C' + n"
            @input="setConeRow(n, $event)"
            :value="coneRow[n - 1] == 0 ? '' : coneRow[n - 1]"
          />
          <p class="print-only print-label">
            {{ coneRow[n - 1] }}
          </p>
        </td>
      </tr>
      <tr class="sub-divider" v-if="extensionEnabled">
        <td class="icon-td">
          <img
            src="@/assets/icons/extension.png"
            alt="Landmarks"
            class="icon"
          />
        </td>
        <td v-for="n in getArray()" :key="'C' + n" class="num-td">
          <input
            type="number"
            placeholder="0"
            class="my-input print-off"
            :id="'C' + n"
            @input="setExtensionRow(n, $event)"
            :value="extensionRow[n - 1] == 0 ? '' : extensionRow[n - 1]"
          />
          <p class="print-only print-label">
            {{ extensionRow[n - 1] }}
          </p>
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
        <td v-for="(n, i) in getTotalScore" :key="'F' + i" class="num-td">
          <input type="number" class="my-input print-off" :value="n" disabled />
          <p class="print-only print-label">
            {{ n }}
          </p>
        </td>
      </tr>
    </table>
  </div>
  <button class="btn reset-btn print-off" @click="reset()">Reset</button>
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
  z-index: 10;
  &:focus {
    outline: none;
  }
}
.print-label {
  width: 110%;
  height: 100%;
  border: none;
  background-color: transparent;
  text-align: center;
  z-index: 10;
  font-size: 22px;
  opacity: 1;
  color: black;
  margin-top: auto;
  min-width: 100px;
}

.icon {
  height: 75px;
  margin: -2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
table {
  border: 2px solid $prim-color;
  margin: 0 auto;
  max-width: 95%;
  border-collapse: separate; /* Don't collapse */
  border-spacing: 0;
}
.icon-td {
  border-bottom: 1px solid #ccc;
  text-align: center;
}
.num-td {
  padding: auto;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
tr:last-child td {
  border-bottom: 0;
}

tr {
  td:last-child {
    padding-right: 15px;
  }
}

.final-score {
  background-color: #bccaba;
}
.sub-score {
  background-color: #ebdecb;
}
.sub-divider {
  border-bottom: 2px solid $prim-color;
  border-collapse: separate; /* Don't collapse */
}

.bonus {
  font-size: 16px;
  padding: 0;
  margin: 0;
  line-height: 16px;
  min-height: 16px;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  text-align: center;
  padding-left: 25px;
  margin-top: -15px;
  z-index: 1;
}

.sticky {
  position: sticky;
  top: 80px;
  background-color: $bg-color;
  border-bottom: 2px solid $prim-color;
  border-top: 2px solid $prim-color;
  z-index: 100;
}
.name-row {
  height: 60px;
}
</style>
