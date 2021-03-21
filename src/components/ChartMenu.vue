<template>
  <div class="linechart">
    <div class="split left">
      <button class="big-btn" value="linechart" @click="navigate">
        linechart
      </button>
      <br/>
      <button class="big-btn" value="barchart" @click="navigate">
        barchart
      </button>
      <br/>
      <button class="big-btn" value="bookofdeath" @click="navigate">
        book of death
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChartMenu",
  methods: {
    navigate(evt) {
      this.$router.push("/charts/" + evt.target.value);
    }
  }
}
</script>


<style scoped>
.split {

  margin: 0;
  height: 100%;
  width: 15%;
  position: fixed;
  /* overflow-x: hidden; */

}

.left {
  left: 0;
  padding-right: 50px;
  background-color: #ffffff;
}

.right {
  right: 0;
  background-color: #9c9c9d;
  width: 85%;
  height: 100%;
  overflow-x: hidden;
  color: #ffffff;
}

.big-btn {
  height: 250px;
  width: 100%;
  background-color: #ffffff;
  transition-duration: 0.4s;

}

.big-btn:hover {
  background-color: #e1e1e1;
  /* color: white; */
}

button:focus {
  outline: none;
}

</style>