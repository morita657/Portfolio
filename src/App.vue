<template>
  <div id="app">
    <about />
    <card />
  </div>
</template>

<script>
import About from "./About";
import Card from "./Card";
export default {
  name: "App",
  components: {
    about: About,
    card: Card,
  },
};
</script>

<style>
#app {
  text-align: center;
}

.character {
  margin-left: 25%;
  text-align: left;
}
</style>
