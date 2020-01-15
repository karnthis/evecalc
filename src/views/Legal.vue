<template>
  <div class="legal text-center">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-card class="justify-center" min-height=40vh max-width=60%>
          <v-card-title class="justify-center">
            <h1>COPYRIGHT NOTICE</h1 >
            <br />
            <br />
            <hr />
          </v-card-title>
          <v-card-text class="text-left">
            <br />
            <p>EVE Online and the EVE logo are the registered trademarks of CCP hf. All rights are reserved worldwide.</p>
            <p>All other trademarks are the property of their respective owners. EVE Online, the EVE logo, EVE and all associated logos and designs are the intellectual property of CCP hf. All artwork, screenshots, characters, vehicles storylines, world facts or other recognizable features of the intellectual property relating to these trademarks are likewise the intellectual property of CCP hf. CCP hf. has granted permission to superhumans.space to use EVE Online and all associated logos and designs for promotional and information purposes on its website but does not endorse, and is not in any way affiliated with, superhumans.space.</p> <!--WTF Parsing errror??? -->
            <p>CCP is in no way responsible for the content on or functioning of this website, nor can it be liable for any damage arising from the use of this website.</p>
            
          </v-card-text>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
// @ is an alias to /src
// import Soon from '@/components/Soon.vue'

export default {
  name: "legal",
  components: {
    // Soon
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr { width: 80%; border-top:2px solid; text-align:center; }
</style>