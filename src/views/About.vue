<template>
  <div class="container">
    <div class="aboutText">
      <h1>Om oss</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime maiores error, quibusdam harum ad
        nostrum dolor sint tenetur atque nobis ipsa excepturi praesentium, reprehenderit explicabo dignissimos
        recusandae. Ratione praesentium reiciendis labore eaque eveniet officiis hic laudantium sit ipsam quod provident
        aliquid ad, quam incidunt quaerat id? Sint, numquam accusamus.
      </p>
    </div>
    <div class="grid">
      <about-card v-for="person in people" :key="person.name">
        <template v-slot:name>
          {{ person.name }}
        </template>
        <template v-slot:text>
          {{ person.text }}
        </template>
      </about-card>
    </div>
  </div>
</template>

<script>
import AboutCard from "@/components/AboutCard"
import UserService from "../services/UserService.js"

export default {
  name: "About",
  components: { AboutCard },

  created() {
    this.people = UserService.getUsers()
  },

  data() {
    return {
      people: [],
    }
  },
}
</script>

<style scoped>
.container {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
}

.aboutText {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  width: 45%;
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
