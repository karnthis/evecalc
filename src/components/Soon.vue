<template>
  <div id="soon">
    <img alt="Vue logo" src="../assets/sh-logo.png">
    <h2> {{ pagename }} </h2>
    <h3>Coming Soon...</h3>
  </div>
</template>

<script>

export default {
  name: "soon",
  props: [
    'pagename'
  ]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
