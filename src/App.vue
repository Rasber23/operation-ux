<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <ContentContainer></ContentContainer>
  <line-chart></line-chart>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ContentContainer from "@/components/ContentContainer";
import LineChart from './components/LineChart.vue';

export default {
  name: "App",
  components: {
    ContentContainer,
    HelloWorld,
    LineChart
  }
};
</script>
LineChart

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
