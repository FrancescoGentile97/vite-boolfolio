<script>
import TheHeader from "./components/TheHeader.vue";
export default{
  components: {TheHeader},
  data(){
    return{
      message:"Bentornato Vue"
    };
  },
};
</script>

<template>
  <TheHeader></TheHeader>
  <h1>{{message}}</h1>
</template>

<style lang="scss">
@use "main.scss";
</style>

