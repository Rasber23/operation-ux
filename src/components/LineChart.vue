<template>
  <div class="col-10">
    <div class="container">
      <div class="row">
        <div class="col">
          <Facts>
            <template v-slot:heading>Hur har olika genrers populäritet förändrats genom åren?</template>
            <template v-slot:text
              >LineChart ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi illo iure minus neque
              quaerat quam sapiente, tempora! A aut beatae consequatur dolor facere fuga, libero maiores nostrum optio
              quasi quod ratione repellat ut vel velit? Cum dolores ea facere facilis ipsum natus officia officiis
              possimus praesentium, quos saepe vitae.</template
            >
          </Facts>
        </div>
        <div class="col">
          <select v-model="selected" @change="clicked" :disabled="inputDisabled">
            <option disabled value="">Välj ett ämne</option>
            <option v-for="option in options" :value="option.value" :key="option.index">
              {{ option.text }}
            </option>
          </select>
          <br /><br />
          <div class="btn-group gap-3" role="group">
            <component
              @click="removeButton"
              v-for="component in components"
              :key="component.index"
              :is="component.component"
            >
              {{ component.name }}
            </component>
          </div>
          <div v-if="!fetchReady" class="d-flex align-items-center justify-content-center layer">loading...</div>
          <div class="chart-wrapper">
            <apexchart :type="type" width="550" :options="chartOptions" :series="series"></apexchart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts"
import FetchService from "../services/FetchService"
import Facts from "./Facts.vue"
import ButtonComponent from "./ButtonComponent.vue"

export default {
  components: {
    apexchart: VueApexCharts,
    Facts: Facts,
    ButtonComponent: ButtonComponent,
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
        colors: ["#CC79A7", "#0072B2", "#009E73", "#E69F00", "#D55E00"],
        legend: {
          show: false,
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
      options: [
        { text: "Love", value: "love" },
        { text: "Crime", value: "crime" },
        { text: "Dance", value: "dance" },
        { text: "Art", value: "art" },
        { text: "Fantasy", value: "fantasy" },
        { text: "Poetry", value: "poetry" },
        { text: "Kittens", value: "kittens" },
        { text: "Programming", value: "programming" },
      ],
      selected: "",
      workCount: [],
      arrayOfSubjects: [],
      arrayOfWorkCount: [],
      test: {},
      fetchReady: true,
      compo: {
        name: "",
        component: null,
        index: 0,
      },
      components: [],
      count: 0,
      indexOfList: null,
      inputDisabled: false,
    }
  },

  methods: {
    // dubbelklick är ett problem här, hur prevent?
    clicked(event) {
      this.selected = event.target.value
      this.fetch()
    },

    addButton() {
      // if (this.components.length < 5) {
      this.compo = {
        name: this.selected,
        component: ButtonComponent,
        index: this.count,
      }
      this.components.push(this.compo)
      this.count++
      if (this.components.length == 5) {
        this.inputDisabled = true
      }
      // }
    },

    removeButton(event) {
      for (const component of this.components) {
        if (component.name == event.target.innerText) {
          this.inputDisabled = false
          console.log(component.name)
          this.indexOfList = this.components.indexOf(component)
          this.count--
          break
        }
      }

      this.components.splice(this.indexOfList, 1)
    },

    async fetch() {
      if (!this.arrayOfSubjects.includes(this.selected) && this.components.length < 5) {
        this.fetchReady = false
        this.inputDisabled = true
        this.workCount = await FetchService.workCountForSubject(this.selected)
        this.arrayOfSubjects.push(this.selected)
        this.arrayOfWorkCount.push(this.workCount)
        this.updateChart()
        this.fetchReady = true
        this.inputDisabled = false
      }
      // } else {
      //   console.log("nothing was done")
      //   this.fetchReady = true
      //   this.inputDisabled = false
      // }
    },

    updateChart() {
      this.addButton()
      this.series = []
      for (let i = 0; i < this.arrayOfSubjects.length; i++) {
        this.test = {
          name: this.arrayOfSubjects[i],
          data: this.arrayOfWorkCount[i],
        }
        this.series.push(this.test)
      }
    },

    // removeFromChart() {
    //   for (const iterator of object) {

    //   }
    // },
  },
}
</script>

<style scoped>
/* div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
} */

.box {
  margin: 5%;
}

.left {
  text-align: left;
}

.layer {
  background-color: #fffaf0e3;
  position: absolute;
  z-index: 1;
  width: 550px;
  height: 340px;
}
</style>
