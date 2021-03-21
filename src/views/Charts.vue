<template>
  <div>
    <chart-menu></chart-menu>
    <div class="split right">
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
.split {
  height: 100%;
  width: 15%;
  position: fixed;
  padding-top: 20px;
}
.right {
  right: 0;
  background-color: #ffffff;
  width: 85%;
  height: 100%;
  overflow-x: hidden;
}
</style>
