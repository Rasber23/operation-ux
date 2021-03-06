<template>
  <div class="col">
    <div class="container">
      <div class="row my-5">
        <h2>Hur har olika genrers populäritet förändrats genom åren?</h2>
      </div>
      <div class="row">
        <div class="col-lg-6 col-sm-12 order-2 order-md-1">
          <Facts>
            <template v-slot:subheading>
              Välj genrer och jämför hur deras popularitet har förändrats de senaste hundra åren. Du kan välja högst fem
              genrer åt gången.</template
            >
            <template v-slot:text>
              <strong>Visste du att?</strong><br />

              Baserat på en studie publicerad 2012 som tagit fram antalet sålda kopior av böcker de senaste 50 åren så
              är Bibeln (3,9 miljarder kopior), Quotations from Chairman Mao Tse-Tung (820 miljoner kopior) och Harry
              Potter (400 miljoner kopior) de tre mest lästa böckerna i världen.
              <a
                href="https://www.businessinsider.com/the-top-10-most-read-books-in-the-world-infographic-2012-12?r=US&IR=T"
                ><br />[BusinessInsider]</a
              >
            </template>
          </Facts>
        </div>
        <div class="col-lg-6 col-sm-12 order-1 order-md-2">
          <div class="row d-flex justify-content-center">
            <div class="col-md-4 col-6">
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
              :style="component.border"
            >
              {{ component.name }}
            </component>
          </div>
        </div>
      </div>
    </div>
    <div id="arowCon">
      <img
        src="../assets/Icons/arrow-up-grey.svg"
        alt=""
        width="30"
        height="24"
        class="d-inline-block align-text-top"
      />
      <router-link to="/charts/barchart">
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
        responsive: [
          {
            breakpoint: 576,
            options: {
              chart: {
                width: 350,
              },
            },
          },
        ],
      },
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
      fetchedData: [],
      fetchedObject: {
        name: "",
        data: [],
      },
      arrayOfFetchedObjects: [],
      arrayOfSubjects: [],
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
    clicked(event) {
      this.selected = event.target.value
      this.fetch()
    },

    async fetch() {
      if (!this.arrayOfSubjects.includes(this.selected) && this.components.length < 5) {
        this.fetchReady = false
        this.inputDisabled = true

        this.fetchedData = await FetchService.workCountForSubject(this.selected)
        this.fetchedObject = { name: this.selected, data: this.fetchedData }
        this.arrayOfSubjects.push(this.selected)
        this.arrayOfFetchedObjects.push(this.fetchedObject)

        this.updateChart()
        this.inputDisable()
        this.fetchReady = true
      }
    },

    updateChart() {
      this.series = []
      this.components = []
      for (let i = 0; i < this.arrayOfFetchedObjects.length; i++) {
        this.fetchedObject = {
          name: this.arrayOfFetchedObjects[i].name,
          data: this.arrayOfFetchedObjects[i].data,
        }

        this.component = {
          name: this.arrayOfFetchedObjects[i].name,
          component: ButtonComponent,
          border: { backgroundColor: this.colorList[i] },
        }

        this.components.push(this.component)
        this.series.push(this.fetchedObject)
      }
    },

    removeButton(event) {
      for (const component of this.components) {
        if (component.name == event.target.innerText) {
          this.inputDisabled = false
          this.indexOfList = this.components.indexOf(component)
          break
        }
      }
      this.arrayOfFetchedObjects.splice(this.indexOfList, 1)
      this.components.splice(this.indexOfList, 1)
      this.arrayOfSubjects.splice(this.indexOfList, 1)
      this.updateChart()
    },

    // disables select when there are 5 subjects chosen at a time
    inputDisable() {
      if (this.components.length == 5) {
        this.inputDisabled = true
      } else {
        this.inputDisabled = false
      }
    },
  },
}
</script>

<style scoped></style>
