<template>
  <div class="cardContainer">
    <h3 class="userName"></h3>
    <img src="http://placekitten.com/50/50" alt="">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, nostrum.</p>
  </div>
</template>

<script>
export default {
  name: "AboutCard"
}
</script>

<style scoped>
img {
  border-radius: 50%;
}


.cardContainer {
  border: #2c3e50 solid 3px;
  margin: 3em 4em;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
}

</style>