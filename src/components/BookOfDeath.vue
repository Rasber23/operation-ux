<template>
  <div class="col-10">
    <div class="container">
      <div class="row">
        <div class="col">
          <Facts>
            <template v-slot:heading>Kan en författare överleva vikten av sina böcker?</template>
            <template v-slot:text
              >BookOfDeath ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi illo iure minus neque
              quaerat quam sapiente, tempora! A aut beatae consequatur dolor facere fuga, libero maiores nostrum optio
              quasi quod ratione repellat ut vel velit? Cum dolores ea facere facilis ipsum natus officia officiis
              possimus praesentium, quos saepe vitae.</template
            >
          </Facts>
        </div>
        <div class="col">
          <select v-model="selected" @change="clicked">
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
          <div v-show="first" id="result">
            <div id="surviveCon" v-if="show">
              <img src="http://placekitten.com/400/400" alt="" />
              <p>Survive!</p>
              <br />
              <br />
              <p v-show="showDeathTimer">...But would die after {{ minToSurvive }}min and {{ secToSurvive }}sec</p>
            </div>
            <div id="deathCon" v-else>
              <img src="http://placekitten.com/300/300" alt="" />
              <p>He Dead</p>
            </div>
          </div>
        </div>
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
      selected: "Pick a Athour",
      show: true,
      first: false,
    }
  },
  methods: {
    clicked() {
      this.getData()
    },

    async getData() {
      const apiResp = await fetch(`http://openlibrary.org/search.json?author=${this.selected}`)
      const apiData = await apiResp.json()

      this.calculateDeath(apiData.numFound)
    },
    calculateDeath(numberOfpublications) {
      console.log(numberOfpublications)
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
</style>
