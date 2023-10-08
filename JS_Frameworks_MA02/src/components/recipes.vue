<template>
  <div v-if="recipes !== null" class="hello">
    <ul v-for="(recipe, index) in recipes" :key="index">
      <li>
        <img :src="recipe.thumbnail" alt="" />
      </li>
      <li>
        <a :href="recipe.href">{{ recipe.title }}</a>
      </li>
      <li>Ingredients: {{ recipe.ingredients }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Recipes",

  props: {
    recipes: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
