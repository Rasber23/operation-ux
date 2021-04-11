// button for the linechart diagram

<template>
  <button :value="button" class="btn btn-sm buttonColor">
    <slot></slot>
  </button>
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
</style>
