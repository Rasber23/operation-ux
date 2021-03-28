<template>
  <div class="cardContainer centered">
    <div class="image">
      <slot name="photo"></slot>
    </div>
    <div class="text">
      <p>
        <strong><slot name="name"></slot></strong><br />
        <slot name="text"></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCard",
}
</script>

<style scoped>
img {
  border-radius: 50%;
}

.image {
  display: flex;
  align-self: center;
  margin-left: 1em;
  height: 100px;
  width: 100px;
}

.cardContainer {
  background-color: #bbb9b9;
  border-radius: 30px;
  padding: 1%;
}

.text {
  margin-left: 7%;
  text-align: left;
}

.centered {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
