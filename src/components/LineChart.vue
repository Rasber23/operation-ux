<template>
  <div class="chart-wrapper">
    <div class="box left">
      <h1>Lorem ipsum.</h1>
      <h3>Fakta</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi illo iure minus neque quaerat quam
        sapiente, tempora! A aut beatae consequatur dolor facere fuga, libero maiores nostrum optio quasi quod ratione
        repellat ut vel velit? Cum dolores ea facere facilis ipsum natus officia officiis possimus praesentium, quos
        saepe vitae.
      </p>
    </div>
    <div class="box">
      <select v-model="selected" @change="clicked">
        <option disabled value="">Välj ett ämne</option>
        <option>love</option>
        <option>crime</option>
        <option>dance</option>
        <option>art</option>
        <option>fantasy</option>
        <option>poetry</option>
        <option>kittens</option>
        <option>programming</option>
      </select>
      <br /><br />
      <div v-if="!fetchReady" class="chart-wrapper layer">loading...</div>
      <div class="chart-wrapper">
        <apexchart :type="type" width="700" :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts"
import FetchService from "../services/FetchService"

export default {
  components: {
    apexchart: VueApexCharts,
  },

  data() {
    return {
      type: "line",
      chartOptions: {
        chart: {
          id: "linechart",
          toolbar: { show: false },
        },
        xaxis: {
          categories: [1920, 1940, 1960, 1980, 2000, 2020],
        },
        stroke: {
          curve: "smooth",
        },
        colors: ["#ffd384", "#ffab73", "#ffaec0"],
        legend: {
          showForNullSeries: false,
          showForZeroSeries: false,
          position: "top",
          fontSize: "25px",
          markers: {
            shape: "square",
          },
        },
        itemMargin: {
          horizontal: 10,
          vertical: 5,
        },
      },
      // responsive: [
      //   {
      //     breakpoint: 610,
      //     options: {
      //       chart: {
      //         width: "50%",
      //         height: 180,
      //         type: "line",
      //       },
      //     },
      //   },
      // ],
      // },
      series: [
        {
          name: "Crime",
          data: [1, 2, 3, 4, 5, 6],
        },
      ],

      selected: "",
      workCount: [],
      arrayOfSubjects: [],
      arrayOfWorkCount: [],
      test: {},
      fetchReady: true,
    }
  },

  methods: {
    // dubbelklick är ett problem här, hur prevent?
    clicked(event) {
      this.selected = event.target.value
      console.log(this.selected)
      this.fetch()
    },

    async fetch() {
      this.fetchReady = false
      if (!this.arrayOfSubjects.includes(this.selected)) {
        this.workCount = await FetchService.workCountForSubject(this.selected)
        this.arrayOfSubjects.push(this.selected)
        this.arrayOfWorkCount.push(this.workCount)
        console.log(this.workCount)
        console.log(this.arrayOfWorkCount)
        console.log(this.arrayOfSubjects)
        console.log(this.arrayOfSubjects.length)
        this.updateChart()
        this.fetchReady = true
      } else {
        console.log("nothing was done")
        this.fetchReady = true
      }
    },

    updateChart() {
      this.series = []
      for (let i = 0; i < this.arrayOfSubjects.length; i++) {
        this.test = {
          name: this.arrayOfSubjects[i],
          data: this.arrayOfWorkCount[i],
        }
        this.series.push(this.test)
      }
    },

    removeFromChart(index) {
      console.log(this.series[index].name + " från nya metoden")
    },
  },
}
</script>

<style scoped>
div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  margin: 5%;
}

.left {
  text-align: left;
}

.layer {
  background-color: rgba(255, 255, 255, 0.781);
  position: absolute;
  z-index: 1;
  width: 700px;
  height: 450px;
}
</style>
