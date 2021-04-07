<template>
  <div class="container mt-4" >
    <div class="row align-items-center">
      <div class="col-12 col-lg-6">
        <h1>Välkommen till BookLab</h1>
        <h5>
          Hos oss kan du utforska allt från hur olika genrers popularitet har förändrats genom åren till om en författare kan överleva
          den sammanlagda tyngden av sina samtliga publicerade böcker.
        </h5>
        <br>
        <h5>Låt oss hjälpa dig upptäcka böckernas värld!</h5>

      </div>
      <div class="col-12 col-lg-6">
        <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2053&q=80" class="img-fluid rounded" alt="...">
      </div>
      <div id="navCON">
        <router-link to="/charts/linechart">
          <img class="homeNav" src="../assets/Icons/Graph.svg" alt=""/>
        </router-link>
        <router-link to="/charts/barchart">
          <img class="homeNav" src="../assets/Icons/Bar_chart.svg" alt=""/>
        </router-link>
        <router-link to="/charts/bookOfDeath">
          <img class="homeNav" src="../assets/Icons/Falling_book.svg" alt=""/>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      show: true,
    }
  },
  created() {
    setTimeout(this.showExit, 3000);
    },
  methods:{

    showExit(){
      this.show=false;
    }
  }
}
</script>

<style scoped>

#navCON{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 1em;
  margin-bot: 2em;

}
.homeNav{
  height: 5em;
  width: 5em;
  background: #6F1D1B;
  border-radius: 3px;
}
p{
  color:#fffaf0 ;
}
</style>
