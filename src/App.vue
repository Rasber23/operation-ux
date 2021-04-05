<template>
  <div id="touchSurface" v-on:touchstart='myTouchStartHandler' v-on:touchmove='myTouchEndHandler'
       v-on:touchend='touchControl' >
    <Header ></Header>
    <router-view v-slot="{ Component }">
      <transition :name="transitionName">
        <component :is="Component" :test='transitionName' />
      </transition>
    </router-view>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  name: "App",
  components: {
    Header,
  },
  beforeRouteUpdate: {
    beforeRouteUpdate() {
      this.transitionName = this.transHolder;
    }
  },
  methods: {
    touchGateY() {
      let touchTravelY = this.startY - this.endY;

      if (Math.abs(touchTravelY) > this.touchTolerance && this.endY !== 0) {
        console.log("TRAVEL Y= " + touchTravelY)
        return true;
      } else {
        console.log("klick")
        return false;
      }
    },
    touchGateX() {
      let touchTravelX = this.startX - this.endX;

      if (Math.abs(touchTravelX) > this.touchTolerance && this.endX !== 0) {
        console.log("TRAVEL X= " + touchTravelX)
        return true;
      } else {
        console.log("klick")
        return false;
      }

    },
    touchControl() {
      let touchTravelY = this.startY - this.endY;
      let touchTravelX = this.startX - this.endX;


      if (this.touchGateY()) {
        if (this.startY > this.endY && Math.abs(touchTravelX) < this.touchTolerance) {
          //console.log("SWIPE UPP")
          console.log(this.$route.path)
          this.acceptedSwipeY("up")
        } else if (this.startY < this.endY && Math.abs(touchTravelX) < this.touchTolerance) {
          this.acceptedSwipeY("down")
        }
      }
      if (this.touchGateX()) {
        if (this.startX > this.endX && Math.abs(touchTravelY) < this.touchTolerance) {
          //console.log("SWIPE left")
          this.transitionName = "slide-left"
          this.acceptedSwipeX("left")
        } else if (this.startX < this.endX && Math.abs(touchTravelY) < this.touchTolerance) {
         // console.log("Swipe Right")
          this.transitionName = "slide-right"
          this.acceptedSwipeX("right")
        }
      }
      this.startY = 0;
      this.endY = 0;
      this.startX = 0;
      this.endX = 0;
    },

    myTouchStartHandler(evt) {

      this.startX = evt.touches[0].screenX;
      this.startY = evt.touches[0].screenY;
    },
    myTouchEndHandler(evt) {
      this.endX = evt.touches[0].screenX;
      this.endY = evt.touches[0].screenY;
    },
    acceptedSwipeX(swipe) {

      switch (this.$route.path) {
        case "/charts/linechart":
          if (swipe === "left") {
            this.$router.push("/");
          } else {
            this.$router.push("/about");
          }
          break;
        case "/charts/barchart":
          if (swipe === "left") {
            this.$router.push("/");
          } else {
            this.$router.push("/about");
          }
          break;
        case "/charts/bookofdeath":
          if (swipe === "left") {
            this.$router.push("/");
          } else {
            this.$router.push("/about");
          }
          break;
        case "/":
          if (swipe === "right") {
            this.$router.push("/charts/linechart");
          }
          break;
        case "/about":
          if (swipe === "left") {
            this.$router.push("/charts/linechart");
          }
          break;
        default:
          console.log("wtf!?")
      }
    },
    acceptedSwipeY(swipe) {
      switch (this.$route.path) {
        case "/charts/linechart":
          if (swipe === "down") {
            this.transitionName="slide-up"
            console.log("thisTRANS " + this.transitionName )
            this.$router.push("/charts/barchart");
          }
          break;
        case "/charts/barchart":
          if (swipe === "down") {
            this.$router.push("/charts/bookofdeath");
            this.transitionName="slide-down"
          } else {
            this.$router.push("/charts/linechart");
            this.transitionName="slide-up"
          }
          break;
        case "/charts/bookofdeath":
          if (swipe === "up") {
            this.$router.push("/charts/barchart");
            this.transitionName="slide-up"
          }
          break;
        default:
          console.log("wtf!?")
      }

    }
  }
}

</script>

<style>
body {
  background-color: #fffaf0;
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
  left: -100%;
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
  right: -100%;
}


.slide-right-leave-from {
  position: absolute;
  right: 0;
}
</style>
