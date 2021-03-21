<template>
  <div>
    <bar-chart></bar-chart>
    <book-of-death></book-of-death>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart"
import BookOfDeath from "@/components/BookOfDeath"
export default {
  name: "ContentContainer",
  components: { BookOfDeath, BarChart },
}
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
