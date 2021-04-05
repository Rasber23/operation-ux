<template>
  <div class="nav">
    <router-link to="/">
      <img src="http://placekitten.com/100/25" alt="" />
    </router-link>

    <div class="menuCon">
      <input class="btn btn-primary" type="button" value="charts/linechart" @click="navigate" />
      <input class="navButton" type="button" value="about" @click="navigate" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    navigate(evt) {
      this.$router.push("/" + evt.target.value)
    },
  },
}
</script>

<style scoped>
.menuCon {
  margin: 0;
  padding: 0.5em;
  display: flex;
  justify-content: center;
}
img {
  display: flex;
  align-self: center;
  margin-left: 1em;
}

.nav {
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #9f9f9f;
}

.navButton {
  background-color: #ececec;
  transition-duration: 0.4s;
  border: none;
  width: 7em;
  height: fit-content;
  margin-left: 0.5em;
  border: #2c3e50 4px;
  border-radius: 2px;
}
</style>
