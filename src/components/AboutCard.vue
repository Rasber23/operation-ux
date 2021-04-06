<template>
  <div class="col">
    <div class="card border-0 bg-color text-start text-dark" style="max-width: 540px">
      <div class="row g-0 align-items-center">
        <div class="d-flex justify-content-center image">
          <slot name="photo"></slot>
        </div>
        <div class="col">
          <div class="card-body">
            <p class="card-text">
              <strong><slot name="name"></slot></strong><br />
              <slot name="text"></slot>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCard",
}
</script>

<style scoped>
.bg-color {
  background-color: #bbb9b9;
  border-radius: 30px;
}

.image {
  margin-left: 1em;
  max-height: 80px;
  max-width: 80px;
}
</style>
