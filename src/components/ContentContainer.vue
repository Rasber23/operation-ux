<template>
<bar-chart></bar-chart>
  <book-of-death></book-of-death>
</template>

<script>
import BarChart from "@/components/BarChart";
import BookOfDeath from "@/components/BookOfDeath";
export default {
  name: "ContentContainer",
  components: {BookOfDeath, BarChart}
}
</script>

<style scoped>

</style>