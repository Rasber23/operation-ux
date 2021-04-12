<template>
  <div id="greyOut" v-if="show" @click="this.show = false">
    <img id="dasHand" src="./assets/Icons/hand.svg" alt="HELVETE"/>
  </div>
  <div
      id="touchSurface"
      v-on:touchstart="myTouchStartHandler"
      v-on:touchmove="myTouchEndHandler"
      v-on:touchend="touchControl"
  >
    <Header></Header>
    <router-view v-slot="{ Component }">
      <transition :name="transitionName">
        <component :is="Component" :transition="transitionName"/>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Header from "@/components/Header"
import TouchServices from "@/services/TouchServices";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      startX: 0,
      endX: 0,
      startY: 0,
      endY: 0,
      ticker: 1,
      touchTolerance: 90,
      transitionName: "",
      show: true,
    }
  },
  created() {
    setTimeout(this.showExit, 3000)
  },
  methods: {
    showExit() {
      this.show = false
    },
    touchControl() {
      let touchTravelY = this.startY - this.endY
      let touchTravelX = this.startX - this.endX

      if (!TouchServices.touchGateX(this.startX, this.endX, this.touchTolerance) && !TouchServices.touchGateY(this.startY, this.endY, this.touchTolerance)) {
        this.transitionName = ""
        this.show = false
      }

      if (TouchServices.touchGateY(this.startY, this.endY, this.touchTolerance)) {
        if (this.startY > this.endY && Math.abs(touchTravelX) < this.touchTolerance) {

          this.transitionName = "slide-up"
          TouchServices.acceptedSwipeY("up",this.$route)
        } else if (this.startY < this.endY && Math.abs(touchTravelX) < this.touchTolerance) {
          this.transitionName = "slide-down"
          TouchServices.acceptedSwipeY("down",this.$route)
        }
      }
      if (TouchServices.touchGateX(this.startX, this.endX, this.touchTolerance)) {
        if (this.startX > this.endX && Math.abs(touchTravelY) < this.touchTolerance) {
          this.transitionName = "slide-right"
          TouchServices.acceptedSwipeX("left",this.$route)
        } else if (this.startX < this.endX && Math.abs(touchTravelY) < this.touchTolerance) {
          this.transitionName = "slide-left"
          TouchServices.acceptedSwipeX("right",this.$route)
        }
      }
      this.startY = 0
      this.endY = 0
      this.startX = 0
      this.endX = 0
    },

    myTouchStartHandler(evt) {
      this.startX = evt.touches[0].screenX
      this.startY = evt.touches[0].screenY
    },
    myTouchEndHandler(evt) {
      this.endX = evt.touches[0].screenX
      this.endY = evt.touches[0].screenY
    }
  },
}
</script>

<style>
/* .container {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  color: #333333;
} */

h1 {
  font-family: "Playfair Display", serif;
  font-size: 28px;
}

body {
  background-color: #fffaf0;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  color: #333333;
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

/*
Route transitions ____LEFT___
 */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease-out;
}

.slide-left-enter-to {
  position: absolute;
  left: 0;
}

.slide-left-enter-from {
  position: absolute;
  left: -100%;
}

.slide-left-leave-to {
  position: absolute;
  right: -100%;
}

.slide-left-leave-from {
  position: absolute;
  left: 0;
}

/*
   ::::: ___Right___ :::::
 */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease-out;
}

.slide-right-enter-to {
  position: absolute;
  right: 0;
}

.slide-right-enter-from {
  position: absolute;
  right: -100%;
}

.slide-right-leave-to {
  position: absolute;
  left: -100%;
}

.slide-right-leave-from {
  position: absolute;
  right: 0;
}

#greyOut {
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  display: flex;

  justify-content: center;
}

#dasHand {
  display: inline-block;

  width: 100px;
  height: 100px;
  margin: 10em;
}
</style>
