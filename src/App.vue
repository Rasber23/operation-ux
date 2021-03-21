<template>
  <Header></Header>
  <router-view />
</template>

<script>
import Header from "@/components/Header"

export default {
  name: "App",
  components: {
    Header,
  },
}
</script>
LineChart

<style>
html {
  padding: 0;
  margin: 0;
}

#app {
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
