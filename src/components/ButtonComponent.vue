<template>
  <button :value="button" class="btn btn-sm btn-outline-success">
    <slot></slot>
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.buttonColor {
    background-color: #BBB9B9;
    color: #FFFAF0;
}
</style>