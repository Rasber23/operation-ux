import "./assets/style/custom.scss" // import css
import "bootstrap" // import js
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

createApp(App)
  .use(router)
  .mount("#app")
