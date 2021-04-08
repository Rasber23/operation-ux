<template>
  <!-- <button class="btn buttonColor"> -->
  <!-- <button class="btn btn-close btn-close-white btn-sm"></button> -->
  <button :value="button" class="btn btn-sm buttonColor">
    <slot></slot>
  </button>
  <!-- </button> -->
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
.buttonColor {
  color: #fffaf0;
  border-radius: 10%;
}

/* .buttonColor:hover {
  background-color: #fffaf0;
} */
</style>
