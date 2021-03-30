<template>
  <div id="touchSurface" v-on:touchstart='myTouchStartHandler' v-on:touchmove='myTouchEndHandler'
       v-on:touchend='touchControl'>
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header"

export default {
  name: "App",
  components: {
    Header,
  }, data() {
    return {
      start: [],
      end: [],
      ticker: 1,
      listOfCharts: ["BookOfDeath", "LineChart", "BarChart"]
    }
  }, methods: {
    myTouchStartHandler(evt) {

      this.start = evt.touches[0].screenX
      // console.log("the start",evt.touches[0].screenX)
    },
    myTouchEndHandler(evt) {
      this.end = evt.touches[0].screenX;
      //   console.log("the end",evt.touches[0].screenX)
    },
    touchControl() {
      if (this.start > this.end) {
        this.$router.push("/charts/" + this.listOfCharts[this.ticker])
        console.log("vänster")
        this.tickerfunc(1)
      } else if (this.start < this.end) {
        console.log("höger")
        this.$router.push("/charts/" + this.listOfCharts[this.ticker])
        this.tickerfunc(-1)
      }

    },
    tickerfunc(num) {
      if (this.ticker <= 2) {
        this.ticker = this.ticker + num;
      }else if(this.ticker===0){
        this.ticker=1;
      }
    }


  }
}
</script>

<style>
body {
  background-color: var(white);
}

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
  color: #333333;
}
</style>
