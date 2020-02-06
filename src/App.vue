<template>
  <v-app style="background: rgba(20,20,25,100);">
    <Topbar />
    <v-content class= "pa-10">
      <div class= "bg">
      <router-view />
      </div>
     
    </v-content>
    <v-footer padless absolute class="#9494b8"> All Eve Related Materials are property of CCP Games. <router-link to="/legal"> See Legal Notice</router-link>.</v-footer>
  </v-app>
</template>

<script>
import Topbar from "@/components/Topbar.vue";

export default {
  name: "App",
  components: {
    Topbar
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
  body, html {
    height: 100%;
  }
  .bg {
    /* The image used */
    background-image: url('~@/assets/Eve-online-wallpaper.jpg');

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fcba03;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fcba03;
}

#nav a.router-link-exact-active {
  color: #fcba03;
} */
</style>
