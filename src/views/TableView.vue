<script lang="ts">
import CasTable from '@/components/CasTable.vue';
import MyLogo from '@/components/MyLogo.vue';

export default {
  name: 'TableView',
  components: {
    CasTable,
    MyLogo
  },
  data() {
    return {
      count: 1,
      printing: false
    };
  },
  mounted() {
    let count = this.$route.params.count;
    if (Array.isArray(count)) {
      count = count[0];
    }
    if (
      !count ||
      isNaN(parseInt(count)) ||
      parseInt(count) < 1 ||
      parseInt(count) > 6
    ) {
      this.$router.push({ name: 'home' });
    } else {
      this.count = parseInt(count);
    }
  },
  methods: {
    goToHome() {
      this.$router.push({ name: 'home' });
    },
    saveAsExcel() {
      const table = document.querySelector('table');
      if (!table) {
        return;
      }
      const tableHtml = table.outerHTML;
      const style =
        '<style>table{border-collapse: collapse;}td,th{border: 1px solid #000;padding: 5px;}</style>';
      const html = `${style}${tableHtml}`;
      const url = `data:application/vnd.ms-excel;base64,${btoa(html)}`;
      const a = document.createElement('a');
      a.href = url;
      a.download = 'table.xls';
      a.click();
    },
    saveAsPDF() {
      this.printing = true;

      const els = document.getElementsByClassName('print-off');
      const displayBefore: any[] = [];
      Array.prototype.forEach.call(els, function (el: any) {
        displayBefore.push(el.style.display);
        el.style.display = 'none';
      });

      setTimeout(() => {
        window.print();

        setTimeout(() => {
          this.printing = false;
          Array.prototype.forEach.call(els, function (el: any, i: number) {
            el.style.display = displayBefore[i];
          });
        }, 1000);
      }, 700);
    },
    getDate() {
      const date = new Date();
      const day = date.getDate();
      // get month as string
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      return `${day}. ${month} ${year}`;
    }
  }
};
</script>

<template>
  <div>
    <h1 v-if="!printing">{{ count }} Player</h1>
    <MyLogo v-if="printing" color="black" :big="true"></MyLogo>
    <h1 v-if="printing">{{ getDate() }}</h1>
    <div class="container">
      <CasTable :count="count" />
      <h2 v-if="printing">cascoria.philipp-bonin.com</h2>
      <div class="btn-container" v-if="!printing">
        <button class="btn" @click="saveAsPDF()">Save as PDF</button>
        <button class="btn" @click="saveAsExcel()">Save as Excel</button>
        <button class="btn home-btn" @click="goToHome()">Home</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/variables';

.container,
.btn-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .home-btn {
    margin-bottom: 50px;
  }
}
</style>
