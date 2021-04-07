<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="./../assets/logos/Logo_white.svg" alt="" width="85" class="d-inline-block align-text-top" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-2 mb-2 mb-lg-0">
          <li class="nav-item dropdown d-md-block d-lg-none">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Visualiseringar
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item" to="/charts/linechart"
                  >Genres popularitet genom åren</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link class="dropdown-item" to="/charts/barchart">Publicerade verk inom genre per år</router-link>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link class="dropdown-item" to="/charts/bookofdeath"
                  >Kan författaren överleva vikten av sina böcker</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item d-none d-md-none d-lg-block">
            <router-link class="nav-link" to="/charts/linechart"> Visualiseringar </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about"> Om Oss </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  methods: {},
}
</script>

<style scoped lang="scss">
img {
  display: flex;
  align-self: center;
  margin-left: 1em;
}

.navbar .navbar-nav > li .navbar-item,
.navbar .navbar-brand {
  color: var(--white) !important;
}

.nav-link {
  color: var(--white) !important;
}

.dropdown-menu {
  background-color: var(--secondary) !important;
}

.dropdown-item {
  color: var(--white) !important;
}
</style>
