import {createRouter, createWebHashHistory} from "vue-router"
import Home from "@/views/Home"
import Charts from "@/views/Charts"
import About from "@/views/About"
import LineChart from "@/components/LineChart";
import BarChart from "@/components/BarChart";
import BookOfDeath from "@/components/BookOfDeath";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/charts/",
        name: "charts",
        component: Charts,
        children: [
            {path: "linechart", component: LineChart },
            {path: "barchart",component: BarChart },
            {path: "bookofdeath",component: BookOfDeath}
        ]
    },
    {
        path: "/about/",
        name: "about",
        component: About,
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router
