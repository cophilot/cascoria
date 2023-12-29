<script lang="ts">
import CasTable from '@/components/CasTable.vue';

export default {
  name: 'TableView',
  components: {
    CasTable
  },
  data() {
    return {
      count: 1
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
      parseInt(count) > 4
    ) {
      this.$router.push({ name: 'home' });
    } else {
      this.count = parseInt(count);
    }
  }
};
</script>

<template>
  <div>
    <h1>{{ count }} Player</h1>
    <div>
      <CasTable :count="count" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/variables';
</style>
