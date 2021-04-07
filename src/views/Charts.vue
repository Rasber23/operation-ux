<template>
<div class="container-fluid">
    <div class="row">
    <chart-menu></chart-menu>

    <div class="col" @click="checkName">
      <router-view v-slot="{ Component }">
        <transition :name="test" >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    </div>
    </div>
</template>

<script>
import ChartMenu from "@/components/ChartMenu"

export default {
  name: "Charts",
  components: {ChartMenu},
  props:['transitionName','test'],
  data() {
    return {

    }
  },
methods:{
  checkName(){
    console.log("TRANS NAME;"+ this.test)
  }
},

}
</script>
<style scoped>

h2 {
  font-family: "Playfair Display", serif;
  font-size: 28px;
} 

/*
Route transitions ____up___
 */

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease-out;
}


.slide-up-enter-to {
  position: absolute;
  top: 0;
}


.slide-up-enter-from {
  position: absolute;
  top: -100%;
}


.slide-up-leave-to {
  position: absolute;
  top: -100%;
}


.slide-up-leave-from {
  position: absolute;
  top: 0;
}

/*
   ::::: ___down___ :::::
 */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.5s ease-out;
}


.slide-down-enter-to {
  position: absolute;
  bottom: 0;
}


.slide-down-enter-from {
  position: absolute;
  bottom: -100%;
}


.slide-down-leave-to {
  position: absolute;
  bottom: -100%;
}


.slide-down-leave-from {
  position: absolute;
  bottom: 0;
}

</style>
