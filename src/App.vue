<template>
  <div id="greyOut" v-if="show" @click="this.show = false">
    <img id="dasHand" src="./assets/Icons/hand.svg" alt="HELVETE" />
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
        <component :is="Component" :test="transitionName" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import Header from "@/components/Header"

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
    touchGateY() {
      let touchTravelY = this.startY - this.endY

      if (Math.abs(touchTravelY) > this.touchTolerance && this.endY !== 0) {
        console.log("TRAVEL Y= " + touchTravelY)
        return true
      } else {
        console.log("klick y")
        return false
      }
    },
    touchGateX() {
      let touchTravelX = this.startX - this.endX

      if (Math.abs(touchTravelX) > this.touchTolerance && this.endX !== 0) {
        console.log("TRAVEL X= " + touchTravelX)
        return true
      } else {
        console.log("klick x")
        return false
      }
    },
    touchControl() {
      let touchTravelY = this.startY - this.endY
      let touchTravelX = this.startX - this.endX

      if (!this.touchGateX() && !this.touchGateY()) {
        console.log("ITS A KLICk")
        this.transitionName = ""
        this.show = false
      }

      if (this.touchGateY()) {
        if (this.startY > this.endY && Math.abs(touchTravelX) < this.touchTolerance) {
          console.log(this.$route.path)
          this.acceptedSwipeY("up")
        } else if (this.startY < this.endY && Math.abs(touchTravelX) < this.touchTolerance) {
          this.acceptedSwipeY("down")
        }
      }
      if (this.touchGateX()) {
        if (this.startX > this.endX && Math.abs(touchTravelY) < this.touchTolerance) {
          this.transitionName = "slide-right"
          this.acceptedSwipeX("left")
        } else if (this.startX < this.endX && Math.abs(touchTravelY) < this.touchTolerance) {
          this.transitionName = "slide-left"
          this.acceptedSwipeX("right")
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
    },
    acceptedSwipeX(swipe) {
      switch (this.$route.path) {
        case "/charts/linechart":
          if (swipe === "right") {
            this.$router.push("/")
          } else {
            this.$router.push("/about")
          }
          break
        case "/charts/barchart":
          if (swipe === "right") {
            this.$router.push("/")
          } else {
            this.$router.push("/about")
          }
          break
        case "/charts/bookofdeath":
          if (swipe === "right") {
            this.$router.push("/")
          } else {
            this.$router.push("/about")
          }
          break
        case "/":
          if (swipe === "left") {
            this.$router.push("/charts/linechart")
          }
          break
        case "/about":
          if (swipe === "right") {
            this.$router.push("/charts/linechart")
          }
          break
        default:
          console.log("Invalid SWIPE!")
      }
    },
    acceptedSwipeY(swipe) {
      switch (this.$route.path) {
        case "/charts/linechart":
          if (swipe === "up") {
            this.transitionName = "slide-down"
            console.log("thisTRANS " + this.transitionName)
            this.$router.push("/charts/barchart")
          }
          break
        case "/charts/barchart":
          if (swipe === "up") {
            this.$router.push("/charts/bookofdeath")
            this.transitionName = "slide-down"
          } else {
            this.$router.push("/charts/linechart")
            this.transitionName = "slide-up"
          }
          break
        case "/charts/bookofdeath":
          if (swipe === "down") {
            this.$router.push("/charts/barchart")
            this.transitionName = "slide-up"
          }
          break
        default:
          console.log("Invalid SWIPE!")
      }
    },
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
