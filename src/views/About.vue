<template>
  <div class="container">
    <div class="row">
      <div class="col col-lg-10">
        <div class="aboutText">
          <h1>Om oss</h1>
          <p>
            Denna hemsida är skapad i ett sju veckors långt projekt av studerande på yrkeshögskolan Yrgo i Göteborg och
            använder sig av data hämtad från Open Librarys API. Om du vill lära känna medlemmarna i teamet närmare kan
            du ta en titt nedan.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="row g-3 row-cols-lg-3 row-cols-1">
          <!-- about card -->
          <about-card v-for="person in people" :key="person.name">
            <template v-slot:photo>
              <img class="rounded-circle justify-content-center image" :src="person.image" />
            </template>
            <template v-slot:name>
              {{ person.name + ", " + person.role }}
            </template>
            <template v-slot:text>
              {{ person.text }}
            </template>
          </about-card>
          <!-- about card -->
        </div>
      </div>
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
  color: #333333;
}

/* just for clarity that the image is round - will be removed */
.image {
  background-color: #333333;
  height: 5rem;
  width: 5rem;
}

h1 {
  font-family: "Playfair Display", serif;
  font-size: 28px;
}

.aboutText {
  margin-top: 7%;
  margin-bottom: 5%;
  width: 60%;
}

/*---------------------------------- för mobileview ----------------------------------*/
@media screen and (max-width: 576px) {
  .container {
    font-size: 18px;
  }

  .aboutText {
    margin-top: 7%;
    margin-bottom: 5%;
    margin-left: 3%;
    width: 85%;
  }

  .footer {
    height: 100px;
  }
}
</style>
