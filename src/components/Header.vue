<template>
  <div class="nav">
    <div class="logoCon">
      <img src="http://placekitten.com/100/20" alt="">
    </div>
    <div class="menuCon">
      <input class="navButton" type="button" value="charts" @click="navigate">
      <input class="navButton" type="button">
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    navigate(evt) {
      this.$router.push("/" + evt.target.value);
    },

}}


</script>

<style scoped>

.menuCon {
  margin:0;
  pading:0;
  place-content: center;
}

.nav {
  padding:5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #9f9f9f;
}

.navButton{
  background-color: #ececec;
  transition-duration: 0.4s;
  border: none;
  width: 7em;
  height: fit-content;
  margin-left:0.5em ;
  border: #2c3e50 4px;



}

</style>
