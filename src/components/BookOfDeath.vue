<template>
  <div class="col">
    <div class="container">
      <div class="row my-5">
        <h2>Kan en författare överleva vikten av sina böcker?</h2>
      </div>
      <div class="row">
        <div class="col-lg-6 col-sm-12 order-2 order-md-1">
          <Facts>
            <template v-slot:subheading>
              Välj en författare och få svar på om denna kan överleva den sammanlagda tyngden av sina samtliga
              publicerade böcker.
            </template>
            <template v-slot:text
              ><strong>Visste du att?</strong><br />
              År 2009 publicerades den (i alla fall då) tjockaste boken någonsin med en bredd på över 32 cm, bestående
              av 4032 sidor och en vikt på 8,04 kg. Boken är en samling av Agatha Christies samtliga berättelser om Miss
              Marple, alltså hela 12 romaner och 20 kortare noveller, och gavs ut av HarperCollins i Storbritannien .
              <a href="https://www.quora.com/What-is-the-thickest-book"><br />[Quora] </a>
            </template>
          </Facts>
        </div>
        <div class="col-lg-6 col-sm-12 order-1 order-md-2">
          <select class="form-select selectStyle" v-model="selected" @change="clicked">
            <option :value="selected">{{ selected }}</option>
            <option>Gustave Flaubert</option>
            <option>Leo Tolstoy</option>
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
              <img class="size" src="./../assets/överlever.png" alt="" />
              <br />
              <br />
              <h4>
                <strong>{{ selected }} överlevde!</strong>
              </h4>
              <p v-show="showDeathTimer">
                ...men skulle dö efter {{ minToSurvive }} minuter och {{ secToSurvive }} sekunder under vikten av
                böckerna.
              </p>
              <br />
            </div>
            <div id="deathCon" v-else>
              <img class="size" src="./../assets/krossad.png" alt="" />
              <br />
              <br />
              <h5>
                <strong>{{ selected }} överlevde icke vikten av sina böcker!</strong>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div id="arowCon">
        <router-link to="/charts/barchart">
          <img
            src="../assets/Icons/arrow-up-red.svg"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
        </router-link>
        <img
          src="../assets/Icons/arrow-down-grey.svg"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
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
      selected: "Välj en författare",
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
    /*
     * Check takes num of works and checks weight against deathTolerance to display correct content.
     *
     */
    calculateDeath(numberOfpublications) {
      this.numberOfPublications = numberOfpublications
      const averageWeight = 0.7
      const totalWeight = numberOfpublications * averageWeight
      const deathTolerance = 500
      if (totalWeight < deathTolerance) {
        this.timeLeft(totalWeight)
        this.show = true
        this.first = true
      } else {
        this.show = false
        this.first = true
      }
    },
    /*
       * Dump method thats cumputes the time you have left to live if the weight is with the tolerances
       * Link to the "scientific study" the method is based on
       *https://www.quora.com/How-much-weight-does-it-take-to-crush-a-human-body
       */
    timeLeft(totalWeight) {
      this.showDeathTimer = false
      const surviveTolerance=120
      console.log(totalWeight)
      if (totalWeight > surviveTolerance) {
        console.log(this.showDeathTimer)
        this.showDeathTimer = true
        const magicNumber = 180
        const relation = magicNumber / totalWeight
        const timeLeft = relation * 30
        const minLeft = timeLeft.toFixed(0)
        const secLeft = Math.abs((minLeft - timeLeft) * 60).toFixed(0)
        this.minToSurvive = minLeft
        this.secToSurvive = secLeft
        console.log("minLeft: ", minLeft, "SecLeft: ", Math.abs(secLeft))
        console.log("Would tie after ", timeLeft, "min")
      }
    },
  },
}
</script>

<style scoped>
.size {
  width: 350px;
  height: 400px;
}

.layer {
  height: 500px;
  background-color: #fffaf0;
}

/*---------------------------------- för mobileview ----------------------------------*/
@media screen and (max-width: 576px) {
  .layer {
    height: 500px;
  }
}
</style>
