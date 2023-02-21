import { createRouter, createWebHistory } from "vue-router";
// và importato nel main.js e si occuperà di gestire tutte le rotte e il cretewebhistory gestirà gli URL
// qui andranno importati i componenti che poi richiameranno le loro specifiche rotte.
import Home from "./pages/Home.vue";
import ProjectIndex from "../src/pages/Index.vue";
import ProjectShow from "../src/pages/Show.vue";
import ProjectContacts from "../src/pages/Contacts.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,

        },
        {
            path:"/projects",
            name:"project.index",
            component:ProjectIndex
        },
        {
            // in questo caso passiamo il parametro dinamico come era per blade /rotta/{dinamico} lo passo con :id 
            // in questa pagina dovranno essere mostrati i dettagli di un singolo progetto
            path:"/projects/:id",
            name:"projects.show",
            component:ProjectShow
        },
        {
            path:"/projects",
            name:"projects.contacts",
            component:ProjectContacts
        }
    ]
});

export {router};
