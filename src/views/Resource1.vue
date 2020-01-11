<template>
  <div class="google text-center">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
    <iframe src="http://google.com/search?igu=1" style="width: 80%; height: 1000px; border:none;"></iframe>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import Soon from '@/components/Soon.vue'

export default {
  name: "Resource1",
  components: {
    // Soon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>