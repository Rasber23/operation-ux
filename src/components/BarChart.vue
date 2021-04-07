<template>
  <div class="col">
    <div class="container">
      <h2>Vilka är det valda årets mest publicerade genrer?</h2>

      <div class="row">
        <div class="col order-2 order-md-1">
          <Facts>

            <template v-slot:subheading>
              Välj ett år och se vilka fem genrer som blev mest publicerade det året.
            </template>
            <template v-slot:text
              >Den första bok som någonsin trycktes och publicerades var The Gutenberg Bible år 1453. Idag beräknas närmare en miljon
              nya böcker publiceras varje år i världen och i mitten av år 2017 uppskattades det totala antalet unika böcker i världen vara
              hela 134,399,411 stycken.
              <br>
              <a href="https://blog.anypromo.com/36-fun-facts-books/">[AnyPromo]</a>
            </template>
          </Facts>

        </div>
        <div class="col order-1 order-md-2">
          <select class="form-select selectStyle" v-model="selected" @change="clicked">
            <option :value="selected">{{ selected }}</option>
            <option>2020</option>
            <option>2010</option>
            <option>2000</option>
            <option>1990</option>
            <option>1980</option>
            <option>1970</option>
            <option>1960</option>
            <option>1500</option></select
          ><br />
          <div v-if="!fetchReady" class="d-flex align-items-center justify-content-center layer">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <apexchart width="550" :options="chartOptions" :series="series"></apexchart>
        </div>
      </div>
    </div>
        <div id="arowCon">
          <router-link to="/charts/lineChart">
            <img src="../assets/Icons/arrow-up-red.svg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
            </router-link>
            <router-link to="/charts/BookOfDeath">
              <img src="../assets/Icons/arrow-down-red.svg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
          </router-link>
        </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts"
import Facts from "./Facts.vue"

export default {
  components: {
    apexchart: VueApexCharts,
    Facts: Facts,
  },

  data() {
    return {
      listOfdata: [],
      listOfSubjects: [],
      selected: 2000,
      series: [
        {
          data: [],
        },
      ],
      chartOptions: {
        colors: ["#CC79A7", "#0072B2", "#009E73", "#E69F00", "#D55E00"],
        chart: {
          toolbar: {
            show: false,
          },
          type: "bar",
          height: 350,
        },
        legend: {
          show: false,
        },
        plotOptions: {
          bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: true,
            dataLabels: {
              position: "end",
            },
          },
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ["#333333"],
          },
          // offsetY: 30
        },
        xaxis: {
          categories: [],
        },
        responsive: [
          {
            breakpoint: 576,
            options: {
              chart: {
                width: 300,
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                },
              },
            },
          },
        ],
      },
      fetchReady: true,
    }
  },
  async created() {
    const ListOfSubjects = ["dance", "film", "painting", "design", "music"]
    const promises = []

    for (const subject of ListOfSubjects) {
      promises.push(this.loadApi(subject))
    }

    for (const p of promises) {
      this.fetchReady = false
      await p
    }

    this.updateChart()
  },
  methods: {
    async loadApi(subject) {
      const apiResp = await fetch(`https://openlibrary.org/subjects/${subject}.json?published_in=${this.selected}`)
      const apiData = await apiResp.json()
      console.log(await apiData.work_count)
      this.listOfdata.push(apiData.work_count)
      this.listOfSubjects.push(apiData.name)
      console.log("data", this.series[0].data)
    },

    updateChart() {
      this.series = [
        {
          data: this.listOfdata,
        },
      ]

      this.chartOptions.xaxis.categories.length = 0
      this.listOfSubjects.length = 5
      console.log("kattiGORIER", this.chartOptions.xaxis.categories.length)

      this.chartOptions.xaxis.categories.push(...this.listOfSubjects)
      console.log("efter", this.chartOptions.xaxis.categories.length)
      this.fetchReady = true
    },

    async clicked() {
      const ListOfSubjects = ["dance", "film", "painting", "design", "music"]
      const promises = []
      this.listOfdata.length = []
      for (const subject of ListOfSubjects) {
        promises.push(this.loadApi(subject))
      }

      for (const p of promises) {
        this.fetchReady = false
        await p
      }

      this.updateChart()
    },
  },
}
</script>
<style scoped>

#arowCon{

  position: fixed;
  bottom: 0;
  margin-bottom: 3em;
}

.selectStyle {
  background-color: #fffaf0;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  color: #333333;
}

.layer {
  background-color: #fffaf0e5;
  position: absolute;
  z-index: 1;
  width: 550px;
  height: 340px;
}

h2 {
  margin-top: 2em;
  font-family: "Playfair Display", serif;
  font-size: 28px;
}
/*---------------------------------- för mobileview ----------------------------------*/
@media screen and (max-width: 576px) {
  .layer {
    width: 350px;
    height: 200px;
  }
  h2{
    margin-top: 2em;
    margin-bottom: 2em;
  }
}
</style>
