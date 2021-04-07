<template>
  <nav class="chartbar col-2 d-none d-lg-block">
    <ul class="chartbar-nav">
      <li class="chart-item">
        <router-link class="chart-link" to="/charts/linechart">
          <img class="paddingForSvg" src="./../assets/Icons/Graph.svg" alt="" />
          <span>Genres popularitet genom åren</span>
        </router-link>
      </li>
      <li class="chart-item">
        <router-link class="chart-link" to="/charts/barchart">
          <img class="paddingForSvg" src="./../assets/Icons/Bar_chart.svg" alt="" />
          <span>Publicerade verk inom genre per år</span>
        </router-link>
      </li>
      <li class="chart-item">
        <router-link class="chart-link" to="/charts/bookofdeath">
         <img class="paddingForSvg" src="./../assets/Icons/Falling_book.svg" alt="" />
          <span>Kan författaren överleva vikten av sina böcker</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "ChartMenu",
  methods: {
    navigate(evt) {
      this.$router.push("/charts/" + evt.target.value)
    },
  },
}
</script>


<style scoped>

.paddingForSvg {
  padding: 2em;
}

.chartbar {
  background-color: var(--secondary);
  height: 90%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem 1rem;
  overflow: hidden;
  padding: 0;
  padding-top: 1em;
  padding-right: 1em;
  min-width: 250px;
}

.chartbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85vh;
}

.chart-item {
  width: 100%;
}

.chart-link {
  display: flex;
  align-items: center;
  height: 5rem;
  color: #fffaf0;
  text-decoration: none;
}

.chart-link:hover {
  filter: grayscale(0%) opacity(1);
  background: var(--primary);
  color: #bbb9b9;
}

.link-text {
  margin-left: 1rem;
}

.chart-link svg {
  width: 2rem;
  min-width: 2rem;
  margin: 0 1.5rem;
}
</style>