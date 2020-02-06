<template>
  <div class="eveseat">
    <Iframe pagename="seat.superhumans.space"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Iframe from '@/components/Iframe.vue'

export default {
  name: "eveseat",
  components: {
    Iframe
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>