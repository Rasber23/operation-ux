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
        <span>
          <img src="./../assets/Icons/Hamburger_meny.svg" alt="" />
        </span>
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
                <router-link class="dropdown-item" to="/charts/linechart">Genres popularitet genom åren</router-link>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link class="dropdown-item" to="/charts/barchart"
                  >Publicerade verk inom genre per år</router-link
                >
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
.img {
  display: flex;
  align-self: center;
  margin-left: 1em;
}

.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,102,203, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.custom-toggler.navbar-toggler {
  border-color: rgb(255, 102, 203);
}

.navbar-light .navbar-toggler {
  color: #fffaf0;
  border-color: #fffaf0;
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

.dropdown-item:hover {
  background-color: var(--primary);
}
</style>
