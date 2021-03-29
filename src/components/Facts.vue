<template>
  <article class="box left">
    <h1><slot name="heading"></slot></h1>
    <h3><slot name="subheading"></slot></h3>
    <p><slot name="text"></slot></p>
  </article>
</template>

<script>
export default {}
</script>

<style scoped>
.box {
  margin: 5%;
}

.left {
  text-align: left;
}

.layer {
  background-color: rgba(255, 255, 255, 0.781);
  position: absolute;
  z-index: 1;
  width: 700px;
  height: 450px;
}
</style>