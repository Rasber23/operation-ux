<template>
  <div>
    <div class="text">
      <h1>Om oss</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime maiores error, quibusdam harum ad
        nostrum dolor sint tenetur atque nobis ipsa excepturi praesentium, reprehenderit explicabo dignissimos
        recusandae. Ratione praesentium reiciendis labore eaque eveniet officiis hic laudantium sit ipsam quod provident
        aliquid ad, quam incidunt quaerat id? Sint, numquam accusamus.
      </p>
    </div>
    <div class="grid">
      <about-card></about-card>
      <about-card></about-card>
      <about-card></about-card>
      <about-card></about-card>
      <about-card></about-card>
      <about-card></about-card>
      <about-card></about-card>
    </div>
  </div>
</template>

<script>
import AboutCard from "@/components/AboutCard"
export default {
  name: "About",
  components: { AboutCard },
}
</script>

<style scoped>
body {
  display: flex;
  justify-content: center;
}

.text {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  width: 45%;
}

.flexbox {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  /* margin-left: 10%;
  margin-right: 10%; */
  margin-top: 5%;
}

.grid {
  display: grid;
  gap: 2%;
  row-gap: 7%;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
}
</style>
