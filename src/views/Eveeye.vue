<template>
  <div class="eveeye">
    <Iframe pagename="eveeye.com"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Iframe from '@/components/Iframe.vue'

export default {
  name: "eveeye",
  components: {
    Iframe
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>