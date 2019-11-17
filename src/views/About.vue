<template>
  <div class="about text-center">
    <img alt="Vue logo" src="../assets/sh-logo.png">
    <Soon pagename="About Us"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Soon from '@/components/Soon.vue'

export default {
  name: 'about',
  components: {
    Soon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>