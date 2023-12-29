<script setup lang="ts"></script>

<template>
  <h1>Home</h1>
  <p>This is a home page. You can find the source code at</p>
  <table>
    <tr>
      <td>Bear</td>
      <td>9</td>
    </tr>
    <tr>
      <td>Dear</td>
      <td>18</td>
    </tr>
    <tr>
      <td>Fox</td>
      <td>23</td>
    </tr>
    <tr>
      <td>Fish</td>
      <td>7</td>
    </tr>
    <tr>
      <td>Bird</td>
      <td>12</td>
    </tr>
  </table>
</template>
<style scoped lang="scss">
table {
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #ccc;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
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
