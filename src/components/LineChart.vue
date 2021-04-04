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
              possimus praesentium, quos saepe vitae.
            </template>
          </Facts>
        </div>
        <div class="col">
          <div class="row d-flex justify-content-center">
            <div class="col-4">
              <select class="form-select selectStyle" v-model="selected" @change="clicked" :disabled="inputDisabled">
                <option disabled value="">Välj ett ämne</option>
                <option v-for="option in options" :value="option.value" :key="option.index">
                  {{ option.text }}
                </option>
              </select>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-center">
            <div v-if="!fetchReady" class="d-flex align-items-center justify-content-center layer">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <div>
              <apexchart :type="type" width="550" :options="chartOptions" :series="series"></apexchart>
            </div>
          </div>
          <div class="d-flex justify-content-center gap-3 text-align-center">
            <component
              @click="removeButton"
              v-for="component in components"
              :key="component.index"
              :is="component.component"
              :style="component.border">
              {{ component.name }}
            </component>
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
          name: "",
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
      fetchedWorks: [],
      // refactor: en array med object i; subjects: och workcounts: ?
      arrayOfSubjects: [],
      arrayOfWorkCount: [],
      test: {},
      fetchReady: true,
      component: {
        name: "",
        component: null,
        border: {
          backgroundColor: "",
          borderWidth: "0.5em",
        },
      },
      components: [],
      indexOfList: null,
      inputDisabled: false,
      colorList: ["#CC79A7", "#0072B2", "#009E73", "#E69F00", "#D55E00"],
    }
  },

  methods: {
    // onödig att ha kanske? direkt till fetch?
    clicked(event) {
      this.selected = event.target.value
      this.fetch()
    },

    addButton() {
      // if (this.components.length < 5) {
      // this.component = {
      //   name: this.selected,
      //   component: ButtonComponent,
      //   border: { backgroundColor: this.colorList[this.components.length] },
      // }
      // this.components.push(this.component)
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
          break
        }
      }
      this.arrayOfSubjects.splice(this.indexOfList, 1)
      this.arrayOfWorkCount.splice(this.indexOfList, 1)
      this.components.splice(this.indexOfList, 1)
      this.updateChart()
    },

    async fetch() {
      if (!this.arrayOfSubjects.includes(this.selected) && this.components.length < 5) {
        this.fetchReady = false
        this.inputDisabled = true
        this.fetchedWorks = await FetchService.workCountForSubject(this.selected)
        this.arrayOfSubjects.push(this.selected)
        this.arrayOfWorkCount.push(this.fetchedWorks)
        this.updateChart()
        this.addButton()
        this.inputDisable()
        this.fetchReady = true
      }
    },

    inputDisable() {
      if (this.components.length == 5) {
        this.inputDisabled = true
      } else {
        this.inputDisabled = false
      }
    },

    updateChart() {
      this.series = []
      this.components = []
      for (let i = 0; i < this.arrayOfSubjects.length; i++) {
        this.test = {
          name: this.arrayOfSubjects[i],
          data: this.arrayOfWorkCount[i],
        }

        this.component = {
          name: this.arrayOfSubjects[i],
          component: ButtonComponent,
          border: { backgroundColor: this.colorList[i] },
        }

        this.series.push(this.test)
        this.components.push(this.component)
      }
    },
  },
}
</script>

<style scoped>

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
</style>
