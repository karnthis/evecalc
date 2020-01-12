<template>
  <div class="dotlan">
    <Iframe pagename="evemaps.dotlan.net"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Iframe from '@/components/Iframe.vue'

export default {
  name: "dotlan",
  components: {
    Iframe
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>