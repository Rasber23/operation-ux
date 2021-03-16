<template>
  <div>
    <select v-model="selected" @change="clicked">
      <option disabled value="">Please select one</option>
      <option>love</option>
      <option>crime</option>
      <option>dance</option>
    </select>
    <br /><br />
    <span v-for="work in workCount" :key="work.id">
      {{ work + " " }}
    </span>
    <br /><br />
    <apexchart
      :type="type"
      width="550"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <button @click="updateChart">Update!</button>
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
      type: "bar",
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [30, 40, 45, 50, 49, 60, 70, 81]
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 81],
        },
      ],
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
      return this.workCount;
      // console.log(this.workCount);
    },

    // dubbelklick är ett problem här, hur prevent?
    clicked(event) {
      this.workCount.length = 0;
      this.typeOfSubject = event.target.value;
      this.workCountForSubject();
    },
  },
};
</script>
