import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home";
import Charts from "@/views/Charts"
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
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;