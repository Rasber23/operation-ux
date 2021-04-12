import router from "@/router";
//Services to support the Swipe functionality

const TouchServices = {
        /*
       * Makes sure its a valid swipe on the y axes
       * touchTolerance sets the sensitivity of the swipe
       * */
    touchGateY(startY, endY, touchTolerance) {
        let touchTravelY = startY - endY
        if (Math.abs(touchTravelY) > touchTolerance && endY !== 0) {
            return true
        } else {
            return false
        }
    },
    /*
    * Makes sure its a valid swipe on the x axes
    * touchTolerance sets the sensitivity of the swipe
    * */
    touchGateX(startX, endX, touchTolerance) {
        let touchTravelX = startX - endX
        if (Math.abs(touchTravelX) > touchTolerance && endX !== 0) {
            return true
        } else {
            return false
        }
    },
    /*
   * interpret the swipe and checking the current location for correct navigation on the x axes
   *
   * */
    acceptedSwipeX(swipe, route) {
        switch (route.path) {
            case "/charts/linechart":
                if (swipe === "right") {
                    router.push("/")
                } else {
                    router.push("/about")
                }
                break
            case "/charts/barchart":
                if (swipe === "right") {
                    router.push("/")
                } else {
                    router.push("/about")
                }
                break
            case "/charts/bookofdeath":
                if (swipe === "right") {
                    router.push("/")
                } else {
                    router.push("/about")
                }
                break
            case "/":
                if (swipe === "left") {
                    router.push("/charts/linechart")
                }
                break
            case "/about":
                if (swipe === "right") {
                    router.push("/charts/linechart")
                }
                break
            default:
                console.log("Invalid SWIPE!")
        }
    },
    /*
    * interpret the swipe and checking the current location for correct navigation on the Y axes
    *
    * */
    acceptedSwipeY(swipe, route) {
        switch (route.path) {
            case "/charts/linechart":
                if (swipe === "up") {
                    router.push("/charts/barchart")
                    this.transitionName = "slide-down";
                }
                break
            case "/charts/barchart":
                if (swipe === "up") {
                    router.push("/charts/bookofdeath")
                    this.transitionName = "slide-down"
                } else {
                    router.push("/charts/linechart")
                    this.transitionName = "slide-up"
                }
                break
            case "/charts/bookofdeath":
                if (swipe === "down") {
                    router.push("/charts/barchart")
                    this.transitionName = "slide-up"
                }
                break
            default:
                console.log("Invalid SWIPE!")
        }
    },

}

export default TouchServices;