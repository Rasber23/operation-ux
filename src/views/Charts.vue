<template>
  <div>
    <chart-menu></chart-menu>
    <div class="split right">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import ChartMenu from "@/components/ChartMenu";
export default {
  name: "Charts",
  components: {ChartMenu,  },
}
</script>
<style scoped>
.split {
  height: 100%;
  width: 30%;
  position: fixed;
  /* overflow-x: hidden; */
  padding-top: 20px;
}
.right {
  right: 0;
  background-color: #ffffff;
  width: 70%;
  height: 100%;
  overflow-x: hidden;
  color: #ffffff;
}

</style>
