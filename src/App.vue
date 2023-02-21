<script>
import axios from "axios";
import {store} from "./store";
import TheHeader from "./components/TheHeader.vue";
export default{
  components: {TheHeader},
  data(){
    return{
      message:"Bentornato Vue",
      store,
      projects:[],
    };
  },
  methods: {
    fetchProjects() {
      axios.get(this.store.backendUrl + "/api/projects").then((resp) => {
        this.projects = resp.data;
        // console.log(this.projects);
      });
    },
  },
  mounted(){
    this.fetchProjects();
  },
}
</script>

<template>
  <TheHeader></TheHeader>
  <router-view></router-view>
  <h1>{{message}}</h1>
</template>

<style lang="scss">
@use "main.scss";
</style>

