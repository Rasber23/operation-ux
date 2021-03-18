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
    <span v-for="work in workCount" :key="work.id">
      {{ work + " " }}
    </span>
    <br /><br />
    <div class="chart-wrapper">
      <apexchart
        :type="type"
        width="550"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts
  },

  data() {
    return {
      type: "line",
      chartOptions: {
        chart: {
          id: "vuechart-example",
          toolbar: { show: false }
        },
        xaxis: {
          categories: [
            1920,
            1930,
            1940,
            1950,
            1960,
            1970,
            1980,
            1990,
            2000,
            2010
          ]
        },
        stroke: {
          curve: "smooth"
        },
        colors: ["#ffd384", "#ffab73", "#ffaec0"],
        legend: {
          showForNullSeries: false,
          showForZeroSeries: false,
          position: "top",
          fontSize: "25px",
          onItemClick: {
            toggleDataSeries: true
          },
          // responsive fungerar ej?
          // responsive: [
          //   {
          //     breakpoint: 1000,
          //     type: "bar"
          //   },
          // ],
          itemMargin: {
            horizontal: 10,
            vertical: 5
          }
        }
      },
      series: [
        {
          name: "science fiction",
          data: [2, 4, 7, 4, 2, 778, 9, 9, 9, 90]
        }
      ],
      years: [1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010],
      workCount: [],
      selected: ""
    };
  },

  methods: {
    async workCountForSubject() {
      for (let i = 0; i < 10; i++) {
        let resp = await fetch(
          "http://openlibrary.org/subjects/" +
            this.selected +
            ".json?published_in=" +
            this.years[i]
        );
        let subject = await resp.json();
        this.workCount.push(subject.work_count);
      }
      this.updateChart();
      // return this.workCount;
      // console.log(this.workCount);
    },

    // dubbelklick är ett problem här, hur prevent?
    clicked(event) {
      this.workCount.length = 0;
      this.selected = event.target.value;
      this.workCountForSubject();
    },
    // kanske istället fylla i knappar och sen trycka uppdatera? enklare?
    updateChart() {
      this.series = [
        {
          name: this.selected,
          data: this.workCount
        },
        {
          name: "medicine",
          data: [45, 23, 53, 15, 6, 3, 5, 66, 2, 85]
        },
        {
          name: "fantasy",
          data: [55, 42, 98, 89, 12, 1, 23, 34, 200, 10]
        }
      ];
    }
  }
};
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
