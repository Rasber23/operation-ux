<template>
  <div class="border">
    <h1>Hur har olika genres popularitet förändras genom åren?</h1>
    <select v-model="selected" @change="clicked">
      <option disabled value="">Välj ett ämne</option>
      <option>love</option>
      <option>crime</option>
      <option>dance</option>
    </select>
    <br /><br />
    <div class="chart-wrapper">
      <apexchart :type="type" width="550" :options="chartOptions" :series="series"></apexchart>
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
  //   hur hämtar jag in från flera olika?
  //   created() {
  //     this.fetch();
  //   },

  data() {
    return {
      type: "line",
      chartOptions: {
        chart: {
          id: "vuechart-example",
          toolbar: { show: false },
        },
        xaxis: {
          categories: [
            1920,
            // 1930,
            1940,
            // 1950,
            1960,
            // 1970,
            1980,
            // 1990,
            2000,
            // 2010,
            2020,
          ],
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
          //nu gör den nånting onClick - lägga till kryssruta istället?
          // hitta vilken serie den tillhör och ta bort den från listan
          //hitta något som gör att det inte laddar om alla, bara dem som du vill se.
          markers: {
            shape: "square",
            onClick: function(seriesIndex) {
              console.log(seriesIndex.data.activeSeriesIndex + "detta är series index")
              // this.series.splice(seriesIndex.data.activeSeriesIndex, 1)
            },
          },
          // onItemClick: {
          //   toggleDataSeries: true,
          // },
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
        //         width: "100%",
        //         height: 300,
        //         type: 'line'
        //       },
        //     },
        //   },
        // ],
      },
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
      //   this.arrayOfworkCount = 0;
      if (!this.arrayOfSubjects.includes(this.selected)) {
        this.workCount = await FetchService.workCountForSubject(this.selected)
        this.arrayOfSubjects.push(this.selected)
        this.arrayOfWorkCount.push(this.workCount)
        console.log(this.workCount)
        console.log(this.arrayOfWorkCount)
        console.log(this.arrayOfSubjects)
        console.log(this.arrayOfSubjects.length)
        this.updateChart()
      } else {
        console.log("nothing was done")
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
        console.log(this.series)
      }
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

.border {
  border: 3px solid black;
  margin-left: 20%;
  margin-right: 20%;
}
</style>
