<template>
  <div class="wrapper text-center">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <div class="container">
          <iframe :src="'https://'+pagename"></iframe>
        </div>
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
<style>
.container {
  position: relative;
  padding-bottom: 50%;

}
iframe {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  
  /* border: none; */
}
</style>
