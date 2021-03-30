<template>
  <div class="col-10">
    <div class="container">
      <div class="row">
        <div class="col">
          <Facts>
            <template v-slot:heading>Vilken genre var mest publicerad år X?</template>
            <template v-slot:text
              >BarChart ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi illo iure minus neque
              quaerat quam sapiente, tempora! A aut beatae consequatur dolor facere fuga, libero maiores nostrum optio
              quasi quod ratione repellat ut vel velit? Cum dolores ea facere facilis ipsum natus officia officiis
              possimus praesentium, quos saepe vitae.</template
            >
          </Facts>
        </div>
        <div class="col">
          <select v-model="selected" @change="clicked">
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
          <apexchart width="550" :options="chartOptions" :series="series"></apexchart>
        </div>
      </div>
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
      },
    }
  },
  async created() {
    const ListOfSubjects = ["dance", "film", "painting", "design", "music"]
    const promises = []

    for (const subject of ListOfSubjects) {
      promises.push(this.loadApi(subject))
    }

    for (const p of promises) {
      await p
    }

    this.updateChart()

    // this.series[0].data = this.listOfdata;
    //this.chartOptions.xaxis.categories = this.listOfSubjects;
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
    },
    async clicked() {
      const ListOfSubjects = ["dance", "film", "painting", "design", "music"]
      const promises = []
      this.listOfdata.length = []
      for (const subject of ListOfSubjects) {
        promises.push(this.loadApi(subject))
      }

      for (const p of promises) {
        await p
      }

      this.updateChart()
    },
  },
}
</script>
<style scoped>
p {
  color: black;
}
h1 {
  color: black;
}
.con {
  display: flex;
  flex-direction: row;
}

.bigCon {
  padding-top: 10em;
}
</style>
