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
      <tr>
        <td></td>
        <td v-for="n in getArray()" :key="n">
          {{ 'P' + n }}
        </td>
      </tr>
      <tr>
        <td>Bear</td>
        <td v-for="n in getArray()" :key="n">
          {{ n }}
        </td>
      </tr>
      <tr>
        <td>Dear</td>
        <td v-for="n in getArray()" :key="n">
          {{ n }}
        </td>
      </tr>
      <tr>
        <td>Fox</td>
        <td v-for="n in getArray()" :key="n">
          {{ n }}
        </td>
      </tr>
      <tr>
        <td>Fish</td>
        <td v-for="n in getArray()" :key="n">
          {{ n }}
        </td>
      </tr>
      <tr>
        <td>Bird</td>
        <td v-for="n in getArray()" :key="n">
          {{ n }}
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped lang="scss">
@import '@/variables';
table {
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid $prim-color;
  margin: 0 auto;
  max-width: 95%;
}
td,
th {
  padding: 20px;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
tr:last-child td {
  border-bottom: 0;
}
</style>
