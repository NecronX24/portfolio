import Home from "@/pages/Home.vue";
import Session from "@/pages/Session.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: "/",
        name: "home",
        component: Home
        },
        {
            path: "/session",
            name: "session",
            component: Session
        }
]
})

export default router;