<template>
<div class="container-fluid">
    <div class="row">
    <chart-menu></chart-menu>
      <router-view></router-view>
    </div>
    </div>
</template>

<script>
import ChartMenu from "@/components/ChartMenu"
export default {
  name: "Charts",
  components: { ChartMenu },
}
</script>
<style scoped>

</style>
