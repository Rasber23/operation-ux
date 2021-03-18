<template>
  <div>
    <select v-model="selected" @change="clicked">
      <option disabled value="">Välj ett år</option>
      <option>2020</option>
      <option>2010</option>
      <option>2000</option>
    </select><br>
    <apexchart
        :type="type"
        width="550"
        :options="chartOptions"
        :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },

  data: function () {
    return {
      listOfdata:[],
      listOfSubjects:[],
      selected: 0,
      series: [{
        data: []
      }],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
            dataLabels: {
              position: 'end'
            },
          }
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ['#333333']

          },
          offsetX: 30
        },
        xaxis: {
          categories: []
        }
      }
    };
  },
  created() {
    const ListOfSubjects=["dance","film","painting","design","music"]

    for(const subject of ListOfSubjects) {
     this.loadApi(subject)

    }
    this.series[0].data=this.listOfdata
    this.chartOptions.xaxis.categories= this.listOfSubjects
  },
  methods: {
    async loadApi(subject) {
      console.log(subject);

      const apiResp = await fetch(`https://openlibrary.org/subjects/${subject}.json?published_in=2000`);
      const apiData = await apiResp.json()
      console.log(await apiData.work_count)
      this.listOfdata.push(await apiData.work_count)
      this.listOfSubjects.push(await apiData.name)
      console.log("test"+this.series[0].data)

      }

    }

  }
</script>
<style scoped>

</style>