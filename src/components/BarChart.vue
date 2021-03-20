<template>
  <div>
    <select v-model="selected" @change="clicked">
      <option disabled value="">Välj ett år</option>
      <option>2020</option>
      <option>2010</option>
      <option>2000</option> </select
    ><br />
    <apexchart width="550" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts"

export default {
  components: {
    apexchart: VueApexCharts,
  },

  data() {
    return {
      listOfdata: [],
      listOfSubjects: [],
      selected: 0,
      series: [
        {
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
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
      console.log(subject)

      const apiResp = await fetch(`https://openlibrary.org/subjects/${subject}.json?published_in=2000`)
      const apiData = await apiResp.json()
      console.log(await apiData.work_count)
      this.listOfdata.push(apiData.work_count)
      this.listOfSubjects.push(apiData.name)
      console.log(this.series[0].data)
    },

    updateChart() {
      console.log("subs:", this.listOfSubjects)
      console.log("list:", this.listOfdata)

      this.series = [
        {
          data: this.listOfdata,
        },
      ]
      this.chartOptions.xaxis.categories.length = 0
      this.chartOptions.xaxis.categories.push(...this.listOfSubjects)
    },
  },
}
</script>
<style scoped></style>
