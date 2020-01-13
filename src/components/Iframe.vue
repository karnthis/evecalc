<template>
  <div class="wrapper text-center">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <iframe :src="'https://'+pagename"></iframe>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "iframe",
  props: ["pagename"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
iframe {
  width: 96vw;
  height: 100%;
  border: none;
}
</style>
