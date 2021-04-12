<template>
  <div class="col">
    <div class="container">
      <div class="row my-5">
        <h2>Vilka är det valda årets mest publicerade genrer?</h2>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12 order-2 order-md-1">
          <Facts>
            <template v-slot:subheading>
              Välj ett år och se vilka fem genrer som blev mest publicerade det året.
            </template>
            <template v-slot:text>
              <strong>Visste du att?</strong><br />
              Den första bok som någonsin trycktes och publicerades var The Gutenberg Bible år 1453. Idag beräknas
              närmare en miljon nya böcker publiceras varje år i världen och i mitten av år 2017 uppskattades det totala
              antalet unika böcker i världen vara hela 134,399,411 stycken.
              <br />
              <a href="https://blog.anypromo.com/36-fun-facts-books/">[AnyPromo]</a>
            </template>
          </Facts>
        </div>
        <div class="col-lg-6 col-sm-12 order-1 order-md-2">
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
        <img
          src="../assets/Icons/arrow-up-red.svg"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
      </router-link>
      <router-link to="/charts/BookOfDeath">
        <img
          src="../assets/Icons/arrow-down-red.svg"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
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
    console.log("test")
    const ListOfSubjects = ["dance", "film", "painting", "design", "music"]
    const promises = []
    this.listOfSubjects.length = 0
    for (const subject of ListOfSubjects) {
      promises.push(this.loadApi(subject))
      console.log("detta är subjectet" + subject)
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
      console.log("data :  " + apiData.work_count + " " + apiData.name)
      this.listOfdata.push(apiData.work_count)
      this.listOfSubjects.push(apiData.name)
    },

    updateChart() {
      this.chartOptions.xaxis.categories.length = 0

      this.chartOptions.xaxis.categories.push(...this.listOfSubjects)
      console.log(this.listOfSubjects)

      console.log("efter", this.chartOptions.xaxis.categories.length)
      this.fetchReady = true

      this.series = [
        {
          data: this.listOfdata,
        },
      ]
    },

    async clicked() {
      console.log("DETTA ÄR KLICKED LISTAN BLIR UPPDATERAD")
      this.listOfdata.length = []
      const promises = []
      const ListOfSubjects = ["dance", "film", "painting", "design", "music"]
      this.listOfSubjects.length = 0
      for (const subject of ListOfSubjects) {
        promises.push(this.loadApi(subject))
        console.log(subject)
      }

      for (const p of promises) {
        this.fetchReady = false
        await p
        this.updateChart()
      }
    },
  },
}
</script>
<style scoped></style>
