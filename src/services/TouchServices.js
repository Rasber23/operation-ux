import router from "@/router";


const TouchServices = {
    touchGateY(startY, endY, touchTolerance) {
        let touchTravelY = startY - endY

        if (Math.abs(touchTravelY) > touchTolerance && endY !== 0) {
            console.log("TRAVEL Y= " + touchTravelY)
            return true
        } else {
            console.log("klick y")
            return false
        }
    },
    touchGateX(startX, endX, touchTolerance) {
        let touchTravelX = startX - endX

        if (Math.abs(touchTravelX) > touchTolerance && endX !== 0) {
            console.log("TRAVEL X= " + touchTravelX)
            return true
        } else {
            console.log("klick x")
            return false
        }
    },
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
    acceptedSwipeY(swipe, route) {
        switch (route.path) {
            case "/charts/linechart":
                if (swipe === "up") {
                    console.log("thisTRANS " + this.transitionName)
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