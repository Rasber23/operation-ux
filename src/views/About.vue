<template>
  <div class="container">
    <div class="aboutText">
      <h1>Om oss</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime maiores error, quibusdam harum ad
        nostrum dolor sint tenetur atque nobis ipsa excepturi praesentium, reprehenderit explicabo dignissimos
        recusandae.
      </p>
    </div>
    <div class="grid">
      <about-card v-for="person in people" :key="person.name">
        <template v-slot:photo>
          <img :src="person.image" />
        </template>
        <template v-slot:name>
          {{ person.name + ", " + person.role }}
        </template>
        <template v-slot:text>
          {{ person.text }}
        </template>
      </about-card>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import AboutCard from "@/components/AboutCard"
import UserService from "@/services/UserService.js"

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
/* ---------------------------------- för desktopview ----------------------------------*/
.container {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  height: 1000px;
}

h1 {
  font-family: "Playfair Display", serif;
  font-size: 28px;
}

.aboutText {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 7%;
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

/*---------------------------------- för mobileview ----------------------------------*/
@media screen and (max-width: 576px) {
  .container {
    font-size: 18px;
  }

  .aboutText {
    margin-left: 8%;
    margin-right: 8%;
    margin-top: 5%;
    width: 84%;
  }

  .grid {
    row-gap: 1.5%;
    grid-template-columns: 1fr;
    /* top | right | bottom | left */
    margin: 4% 4% 0 4%;
  }

  .footer {
    height: 100px;
  }
}
</style>
