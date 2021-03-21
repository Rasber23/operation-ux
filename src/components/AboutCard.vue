<template>
  <div class="cardContainer centered">
    <div class="image">
      <img src="http://placekitten.com/100/100" alt="" />
    </div>
    <div class="text">
      <p>
        <strong>Lorem, ipsum dolor.</strong><br>
        Morbi condimentum vestibulum condimentum. Vivamus non felis lectus. 
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
}

.cardContainer {
  background-color:#e1e1e1;
  /* border: #2c3e50 solid 3px; */
  /* margin-top: 3em; */
  /* margin-left: 1em;
  margin-right: 1em; */
  /* width: 500px; */
  border-radius: 30px;
  padding: 3%;
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

/* .box {
  background: #444;
  border: 1px solid #555;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #AAA;
} */
</style>