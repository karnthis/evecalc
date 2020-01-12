<template>
  <div class="home">
    <v-card class="justify-center">
      <v-card-text >
        {{ query }}
      </v-card-text>
    </v-card>

    <Iframe pagename="seat.superhumans.space"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Iframe from '@/components/Iframe.vue'

export default {
  name: "home",
  props: ['query'],
  components: {
    Iframe
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>