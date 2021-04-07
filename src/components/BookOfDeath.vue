<template>
  <div class="col">
    <div class="container">
      <h2>Kan en författare överleva vikten av sina böcker?</h2>
      <div class="row">
        <div class="col-md-6 col-sm-12 order-2 order-md-1">
          <Facts>
            <template v-slot:subheading>
              Välj en författare och få svar på om denna kan överleva den sammanlagda tyngden av sina samtliga publicerade böcker.
            </template>
            <template v-slot:text
              >BookOfDeath ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi illo iure minus neque
              quaerat quam sapiente, tempora! A aut beatae consequatur dolor facere fuga, libero maiores nostrum optio
              quasi quod ratione repellat ut vel velit? Cum dolores ea facere facilis ipsum natus officia officiis
              possimus praesentium, quos saepe vitae.</template
            >
          </Facts>
        </div>
        <div class="col-md-6 col-sm-12 order-1 order-md-2">
          <select class="form-select selectStyle" v-model="selected" @change="clicked">
            <option :value="selected">{{ selected }}</option>
            <option>Gustave Flaubert</option>
            <option>Leo Tolstoy</option>
            <option>William Shakespeare</option>
            <option>James Joyce</option>
            <option>Fyodor Dostoevsky</option>
            <option>William Faulkner</option>
            <option>Charles Dickens</option>
            <option>Anton Checkhov</option></select
          ><br />
          <div v-if="!fetchReady" class="d-flex align-items-center justify-content-center layer">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div v-show="first" id="result">
            <div id="surviveCon" v-if="show">
              <img src="./../assets/överlever.png" alt="" />
              <br />
              <br />
              <h4>
                <strong>{{ selected }} survived!</strong>
              </h4>
              <p v-show="showDeathTimer">
                ...but would die after {{ minToSurvive }}min and {{ secToSurvive }} sec under the weight.
              </p>
              <!-- <p>{{ selected }} has published {{ numberOfPublications }} books.</p> -->
              <br />
            </div>
            <div id="deathCon" v-else>
              <img src="./../assets/krossad.png" alt="" />
              <br />
              <br />
              <h5>
                <strong>{{ selected }} did not survive the weight of the books!</strong>
              </h5>
              <!-- <p>{{ selected }} has published {{ numberOfPublications }} books.</p> -->
            </div>
          </div>
        </div>
      </div>
      <div id="arowCon">
        <router-link to="/charts/barchart">
          <img src="../assets/Icons/arrow-up-red.svg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
        </router-link>
          <img src="../assets/Icons/arrow-down-grey.svg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
      </div>
    </div>
  </div>
</template>

<script>
import Facts from "./Facts.vue"

export default {
  components: {
    Facts: Facts,
  },

  name: "BookOfDeath",

  data() {
    return {
      showDeathTimer: false,
      minToSurvive: 0,
      secToSurvive: 0,
      numberOfPublications: 0,
      isAlive: true,
      selected: "Pick an Author",
      show: true,
      first: false,
      fetchReady: true,
    }
  },
  methods: {
    clicked() {
      this.getData()
    },

    async getData() {
      this.fetchReady = false
      const apiResp = await fetch(`https://openlibrary.org/search.json?author=${this.selected}`)
      const apiData = await apiResp.json()

      this.calculateDeath(apiData.numFound)
      this.fetchReady = true
    },
    calculateDeath(numberOfpublications) {
      console.log(numberOfpublications)
      this.numberOfPublications = numberOfpublications
      const averageWeight = 0.7
      const totalWeight = numberOfpublications * averageWeight
      console.log(totalWeight)
      if (totalWeight < 500) {
        console.log("SURVIE!")
        this.timeLeft(totalWeight)
        this.show = true
        this.first = true
      } else {
        console.log("verry Mutch dead")
        this.show = false
        this.first = true
      }
    },
    timeLeft(totalWeight) {
      this.showDeathTimer = false
      console.log(totalWeight)
      if (totalWeight > 120) {
        console.log(this.showDeathTimer)
        this.showDeathTimer = true
        const magicNumber = 180
        const relation = magicNumber / totalWeight
        const timeLeft = relation * 30
        const minLeft = timeLeft.toFixed(0)
        const secleft = Math.abs((minLeft - timeLeft) * 60).toFixed(0)
        this.minToSurvive = minLeft
        this.secToSurvive = secleft
        console.log("minLeft: ", minLeft, "SecLeft: ", Math.abs(secleft))
        console.log("Would tie after ", timeLeft, "min")
      }
    },
  },
}
</script>

<style scoped>
.selectStyle {
  background-color: #fffaf0;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  color: #333333;
}

h2 {
  margin-top: 2em;
  font-family: "Playfair Display", serif;
  font-size: 28px;
}

#arowCon{

  position: fixed;
  bottom: 0;
  margin-bottom: 3em;
}
</style>
