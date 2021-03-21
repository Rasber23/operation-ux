<template>
  <div class="bigCon">
    <div class="con">
      <div>
        <h1>Lorem ipsum.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi illo iure minus neque quaerat quam sapiente, tempora! A aut beatae consequatur dolor facere fuga, libero maiores nostrum optio quasi quod ratione repellat ut vel velit? Cum dolores ea facere facilis ipsum natus officia officiis possimus praesentium, quos saepe vitae.</p>
      </div>
      <div>
        <select v-model="selected" @change="clicked">
          <option  :value="selected">{{selected}}</option>
          <option>Gustave Flaubert</option>
          <option>Leo Tolstoy</option>
          <option>William Shakespeare</option>
          <option>James Joyce</option>
          <option>Fyodor Dostoevsky</option>
          <option>William Faulkner</option>
          <option>Charles Dickens</option>
          <option>Anton Checkhov</option>
        </select><br>
      </div>
      <div v-show="first" id="result">
      <img v-if="show" src="http://placekitten.com/400/400" alt="">
      <img v-else src="http://placekitten.com/300/300" alt="">
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "BookOfDeath",

  data(){
    return{

      numberOfPublications:0,
      isAlive: true,
      selected:"Pick a Athour",
      show: true,
      first: false
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
      const averageWeight = 0.7;
      const totalWeight = numberOfpublications * averageWeight
      console.log(totalWeight)
      if (totalWeight < 500) {
        this.timeLeft(totalWeight)
        console.log("SURVIE!")
        this.show=true
        this.first=true
      } else {
        console.log("verry Mutch dead")
        this.show=false
        this.first=true
      }
    },
    timeLeft(totalWeight) {
      const magicNumber= 180;

      const relation= magicNumber/totalWeight;

      const timeLeft= relation*30
      const minLeft= timeLeft.toFixed(0)
      const secleft= ((minLeft-timeLeft)*60).toFixed(0)
      console.log("minLeft: ",minLeft ,"SecLeft: ",secleft)

      console.log("Would tie after ",timeLeft,"min")





    //  });

      //700 pounds 320 150

    }
  }
}
</script>

<style scoped>
h1{
  color:black;
}
p{
  color:black;
}
</style>
