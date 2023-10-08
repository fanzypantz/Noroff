<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Recipes v-if="recipes !== null" :recipes="recipes" />
  </div>
</template>

<script>
import Recipes from "./components/recipes.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Recipes
  },

  data() {
    return {
      recipes: null
    };
  },

  beforeMount() {
    axios
      .get("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api")
      .then(response => (this.recipes = response.data.results));
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
